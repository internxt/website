const axios = require('axios');

const clamavScan = async (form) => (
  axios.post('https://clamav.internxt.com/filescan', form, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
    },
    body: form,
  })
    // .then((response) => console.log(response))
    .then((response) => response)
    .catch((err) => console.error(err))
);

export default clamavScan;
