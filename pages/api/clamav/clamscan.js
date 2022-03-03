const FormData = require('form-data');
const axios = require('axios');

const clamavScan = async (file) => {
  // console.log(typeof file);
  // console.log(file);
  const form = new FormData();
  // const readable = new ReadableStream(file);
  // console.log(readable);
  // form.append('file', readable);
  const b = Buffer.from();
  console.log('Mmmmmm Picante');
  console.log(b.size);
  form.append('file', b);

  // const headers = form.getHeaders;
  const requestConfig = {
    headers: {
      'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
    }
  };
  axios.post('https://clamav.internxt.com/filescan', form, requestConfig)
    // .then((response) => console.log(response))
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

export default clamavScan;
