import axios from 'axios';
import { Copy, Trash, Tray } from 'phosphor-react';
import React, { useState } from 'react';

const API_ENDPOINT = 'https://www.1secmail.com/api/v1/';

const getInbox = async (email) => {
  const userEmail = email.split('@')[0];
  const domain = email.split('@')[1];
  const inbox = await axios(`${API_ENDPOINT}?action=getMessages&login=${userEmail}&domain=${domain}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return inbox;
};

const createEmail = async () => {
  const email = await axios(`${API_ENDPOINT}?action=genRandomMailbox&count=1`).then((res) => {
    console.log(res.data);
    return res.data;
  });

  return email;
};

const showAllEmailData = async ({ email, itemId }) => {
  const allData = await axios(
    `${API_ENDPOINT}?action=readMessage&login=${email.split('@')[0]}&domain=${email.split('@')[1]}&id=${itemId}`,
  ).then((res) => {
    return res.data;
  });

  return allData;
};

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [inbox, setInbox] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-5xl font-semibold">Free Temporary Email</h1>
          <p className="text-xl text-gray-80">
            Email anonymously with our free, private, and secure temporary email address generator.
          </p>
        </div>
        <div className="flex w-full max-w-[325px] flex-col items-center space-y-3">
          <div className="flex w-full flex-row items-center justify-between rounded-xl border border-gray-20 px-4 py-3">
            <p>email</p>
            <Copy size={24} className="text-gray-50" />
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <button className="flex flex-row items-center justify-center space-x-2 rounded-lg bg-primary px-5 py-2 text-white shadow-sm">
              <Copy />
              <p>Copy email</p>
            </button>
            <button className="flex flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 bg-transparent px-5 py-2 shadow-sm">
              <Trash size={24} />
              <p>Delete email</p>
            </button>
          </div>
          <p className="text-xs text-gray-60">Email and inbox will expire after 3 hours of inactivity</p>
        </div>
        <div className="flex h-max w-max flex-col items-center justify-center space-y-2 rounded-xl border border-gray-10 py-56 px-80 text-center shadow-subtle-hard">
          <Tray size={48} className="text-gray-50" weight="light" />
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">Your inbox is empty</p>
            <p className="text-xs text-gray-50">Waiting for incoming messages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
