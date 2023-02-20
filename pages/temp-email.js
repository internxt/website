import React, { useEffect, useState } from 'react';
import { ArrowsClockwise, X, CaretRight, CopySimple } from 'phosphor-react';
import axios from 'axios';

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

  //get random email

  return email;
};

//Delete mailbox
// action=deleteMailbox&login=${this.username}&domain=${this.domain}

const TempEmail = () => {
  const [email, setEmail] = useState('');
  const [inbox, setInbox] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  useEffect(() => {
    if (localStorage.getItem('email')) {
      setEmail(localStorage.getItem('email'));
    } else {
      createEmail().then((email) => {
        localStorage.setItem('email', email);
        setEmail(email);
      });
    }
  }, []);

  const showAllEmailData = async ({ email, itemId }) => {
    const getDomains = await axios(`${API_ENDPOINT}?action=getDomainList`).then((res) => {
      return res;
    });
    const allData = await axios(
      `${API_ENDPOINT}?action=readMessage&login=${email.split('@')[0]}&domain=${email.split('@')[1]}&id=${itemId}`,
    ).then((res) => {
      return res.data;
    });
    console.log(getDomains);
    return allData;
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const OpenInboxDialog = ({ isOpen, item, onClose }) => {
    return (
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
      >
        <div
          className={`${isOpen ? 'flex' : 'hidden'} absolute top-1/2 left-1/2 flex
        w-auto max-w-[800px] -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-lg border-2 border-primary border-opacity-80 bg-white text-neutral-900`}
        >
          <button className="absolute right-0 m-3 flex w-auto text-primary" onClick={onClose}>
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-2 rounded-lg p-5">
            <p>From: {item.from}</p>
            <div className="flex border border-primary border-opacity-60" />
            <p>Subject: {item.subject}</p>
            <div className="flex border border-primary border-opacity-60" />
            <p>Body: {item.textBody}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-5 p-20">
        <h1 className="text-xl font-bold text-black">Internxt Temp Email</h1>
        <div className="flex flex-col items-center space-y-5 rounded-lg border-2 border-primary border-opacity-30 p-5">
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
          <ArrowsClockwise
            size={24}
            className="cursor-pointer text-primary"
            onClick={() => {
              getInbox(email).then((inbox) => {
                console.log(inbox);
                setInbox(inbox);
              });
            }}
          />
          {inbox.length > 0
            ? inbox.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-auto flex-col items-center justify-center space-y-5 rounded-lg border border-primary border-opacity-30 p-5"
                  >
                    <div>
                      <div
                        className="flex cursor-pointer flex-row items-center justify-center"
                        onClick={() => {
                          showAllEmailData({ email: email, itemId: item.id }).then((data) => {
                            console.log(data);
                            setItemSelected(data);
                            setIsOpen(!isOpen);
                          });
                        }}
                      >
                        <div className="flex w-full flex-col items-center space-y-3 border-t border-b border-primary border-opacity-60 p-2">
                          <div className="flex flex-row space-x-5">
                            <p>From: {item.from}</p>
                            <p>Date: {item.date}</p>
                          </div>
                          <p>Subject: {item.subject}</p>
                        </div>
                        <div>
                          <CaretRight size={24} className="text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <OpenInboxDialog isOpen={isOpen} item={itemSelected} onClose={onClose} />
    </section>
  );
};

export default TempEmail;
