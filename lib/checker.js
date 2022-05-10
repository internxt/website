const crypto = require('crypto');

// Number of characters from the hash that API expects
const PREFIX_LENGTH = 5;
const API_URL = 'https://api.pwnedpasswords.com/range/';
const API_TIMEOUT = 5000;
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_FOUND = 404;

function hash(password) {
  const shasum = crypto.createHash('sha1');
  shasum.update(password);
  return shasum.digest('hex');
}

function get(hashedPasswordPrefix) {
  const opts = {
    timeout: API_TIMEOUT,
  };

  return fetch(API_URL + hashedPasswordPrefix, opts)
    .then((res) => res.text())
    .then((res) => {
      console.log(API_URL + hashedPasswordPrefix);
      console.log(res)
      // const data = await res.json();
      console.log('Return res ' + res);
      return res;
    })
    .catch((err) => console.error(err));
  // return new Promise((resolve, reject) => {
  // const req = https.get(API_URL + hashedPasswordPrefix, opts, (res) => {
  //   let data = '';

  //   // According to API spec, 404 is returned when no hash found, so it is a valid response.
  //   if (res.statusCode !== HTTP_STATUS_OK && res.statusCode !== HTTP_STATUS_NOT_FOUND) {
  //     return reject(new Error(`Failed to load pwnedpasswords API: ${res.statusCode}`));
  //   }

  //   res.on('data', (chunk) => {
  //     data += chunk;
  //   });

  //   res.on('end', () => {
  //     resolve(data);
  //   });

  //   return true;
  // }).on('error', (err) => {
  //   reject(err);
  // }).on('timeout', () => {
  //   req.destroy();
  //   // eslint-disable-next-line prefer-promise-reject-errors
  //   reject('pwnedpassword API timeout');
  // });
  // });
}

export default function pwnedpasswords(password, cb) {
  const hasCallback = typeof cb === 'function';

  if (typeof password !== 'string') {
    const err = new Error('Input password must be a string.');
    return hasCallback ? cb(err) : Promise.reject(err);
  }

  const hashedPassword = hash(password);
  const hashedPasswordPrefix = hashedPassword.substr(0, PREFIX_LENGTH);
  const hashedPasswordSuffix = hashedPassword.substr(PREFIX_LENGTH);

  return get(hashedPasswordPrefix)
    .then((res) => {
      console.log('GET: ' + res);
      const found = res
        .split('\n')
        .map((line) => line.split(':'))
        .filter((filtered) => filtered[0].toLowerCase() === hashedPasswordSuffix)
        .map((mapped) => Number(mapped[1]))
        .shift() || 0;

      return hasCallback ? cb(null, found) : found;
    })
    .catch((err) => {
      if (hasCallback) {
        return cb(err);
      }

      throw err;
    });
}

if (require.main === module) {
  pwnedpasswords(process.argv[2], (err, res) => {
    /* eslint no-console: [ "error", { allow: ["log", "error"] } ] */

    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(res);
  });
}

module.exports = pwnedpasswords;
