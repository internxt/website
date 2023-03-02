import React from 'react';
import FaqAccordion from '../password-checker/FaqAccordion';

const QASection = () => {
  const questions = [
    {
      question: 'How long are emails kept?',
      answer: [
        'Emails are kept as long as you continue to use your temporary email address. As soon as you close your temporary address, your emails will be deleted along with your temporary account.',
      ],
    },
    {
      question: 'Do emails stay private?',
      answer: [
        'Internxt does not have any access to your temporary email. We don’t store any of your personal information or any of the emails you send or receive.',
      ],
    },
    {
      question: "Where do I see if I've received an email?",
      answer: [
        'Emails you receive to your temporary mailbox will be displayed in the inbox located at the top of this page.',
      ],
    },
    {
      question: 'How do I change the email address?',
      answer: ['Change your temp mail by generating a new email address in the toolbar at the top of the page.'],
    },
    {
      question: 'Can you recover deleted emails?',
      answer: [
        'No. Unfortunately when you delete the emails you sent or received with the used domain, they are gone for good. We do this so your privacy is protected and your deleted emails aren’t left exposed.',
      ],
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-10 px-10 py-[60px]">
        <p className="text-center text-4xl font-semibold">Questions? We have answers</p>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {questions.map((item, index) => (
            <div className="rounded-lg border border-gray-20 px-5" key={item.question}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QASection;
