import React, { useEffect } from 'react';
import { ArrowsClockwise, CopySimple } from 'phosphor-react';

const TempEmail = ({ email, emailHashed }) => {
  console.log(emailHashed);

  //Function to get the emails received in the INBOX mailbox using TEMP MAIL API
  const getInbox = async () => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/${emailHashed}`,
      headers: {
        'X-RapidAPI-Key': 'fa412fdc21mshf29036fd1a47accp134251jsn61840135c872',
        'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com',
      },
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-5 p-20">
        <h1 className="text-xl font-bold text-black">Internxt Temp Email</h1>
        <div className="flex flex-col items-center rounded-lg border-2 border-primary border-opacity-30 p-5">
          <div className="flex flex-row space-x-5 rounded-lg border border-primary border-opacity-30 p-3">
            <p>{email}</p>
            <CopySimple
              size={24}
              className="cursor-pointer"
              onClick={() => {
                window.navigator.clipboard.writeText(email);
              }}
            />
          </div>
          <div className="flex flex-col">
            <ArrowsClockwise
              size={24}
              className="cursor-pointer"
              onClick={() => {
                getInbox();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const axios = require('axios');
  const crypto = require('crypto');

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function hash(mailAddress) {
    const shasum = crypto.createHash('md5');
    shasum.update(mailAddress);
    return shasum.digest('hex');
  }

  const options = {
    method: 'GET',
    url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/domains/',
    headers: {
      'X-RapidAPI-Key': 'fa412fdc21mshf29036fd1a47accp134251jsn61840135c872',
      'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com',
    },
  };

  function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const randomMailId = generateString(10);

  const domains = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  const domain = domains[Math.floor(Math.random() * domains.length)];

  const email = `${randomMailId}${domain}`;

  const emailHashed = hash(email.split('.')[0]);

  return {
    props: {
      email,
      emailHashed,
    },
  };
}

export default TempEmail;
