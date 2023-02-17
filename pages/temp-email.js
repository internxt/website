import React from 'react';

const TempEmail = ({ email }) => {
  console.log(email);

  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-5 p-20">
        <h1 className="text-xl font-bold text-black">Internxt Temp Email</h1>
        <div className="flex flex-col items-center rounded-lg border-2 border-primary border-opacity-30 p-5"></div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const axios = require('axios');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const options = {
    method: 'GET',
    url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/domains/',
    headers: {
      'X-RapidAPI-Key': 'fa412fdc21mshf29036fd1a47accp134251jsn61840135c872',
      'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com',
    },
  };

  const randomId = generateString(10);

  const domains = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  const domain = domains[Math.floor(Math.random() * domains.length)];

  const email = `${randomId}${domain}`;

  return {
    props: {
      email,
    },
  };
}

export default TempEmail;
