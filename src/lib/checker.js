const crypto = require('crypto');

// Number of characters from the hash that API expects
const PREFIX_LENGTH = 5;
const API_URL = 'https://api.pwnedpasswords.com/range/';
const API_TIMEOUT = 5000;

function hash(password) {
  const shasum = crypto.createHash('sha1');
  shasum.update(password);
  return shasum.digest('hex');
}

function get(hashedPasswordPrefix) {
  const opts = {
    timeout: API_TIMEOUT,
  };

  return fetch(API_URL + hashedPasswordPrefix, opts).then((res) => res.text());
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
      const found =
        res
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
      process.exit(1);
    }
  });
}

module.exports = pwnedpasswords;
