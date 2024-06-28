import { useEffect, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { ArrowClockwise } from '@phosphor-icons/react';

interface NoMessageSelectedProps {
  messagesLength: number;
  textContent: any;
  onRefreshButtonClicked: () => void;
}

interface MessageSelectedProps {
  item: Record<string, any>;
  textContent: any;
}

export const NoMessageSelected = ({
  messagesLength,
  textContent,
  onRefreshButtonClicked,
}: NoMessageSelectedProps): JSX.Element => {
  const [isRefreshIconAnimated, setIsRefreshIconAnimated] = useState<boolean>(false);
  const withoutMessagesSentence = `${textContent.withoutMessages.youHave} ${messagesLength} ${textContent.withoutMessages.newMessages}`;
  const withMessagesSentence = `${textContent.withMessages}`;
  const messages = messagesLength === 0;

  useEffect(() => {
    if (isRefreshIconAnimated) {
      setTimeout(() => {
        setIsRefreshIconAnimated(false);
      }, 2000);
    }
  }, [isRefreshIconAnimated]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <div className="relative flex flex-col">
        <Image src="/images/temp-email/empty-inbox.svg" alt="Empty inbox" width={172} height={135} />
      </div>
      <div className="flex flex-col items-center space-y-8 px-5">
        <div className="flex flex-col items-center text-center">
          <p className="text-base font-medium text-gray-100">
            {messages ? withoutMessagesSentence : withMessagesSentence}
          </p>

          <p className="text-sm text-gray-50">{messages ? textContent.waitingEmail : textContent.selectMessage}</p>
        </div>
        <button
          className="flex w-max flex-row space-x-2 rounded-lg border border-gray-10 px-5 py-2.5 shadow-sm"
          onClick={() => {
            onRefreshButtonClicked();
            setIsRefreshIconAnimated(true);
          }}
        >
          <ArrowClockwise size={24} className={`${isRefreshIconAnimated ? 'animate-spin-refresh' : ''}`} />
          <p>{textContent.refresh}</p>
        </button>
      </div>
    </div>
  );
};

export const MessageSelected = ({ item, textContent }: MessageSelectedProps): JSX.Element => {
  const date = moment(item.date).format('dddd DD, MMMM YYYY [at] HH:mm');
  const name = item.from?.charAt().toUpperCase();

  return (
    <div className="flex w-full flex-col space-y-5 overflow-y-scroll p-10">
      <div className="flex w-full flex-col space-y-2">
        <p title={item.subject} className="text-xl font-medium text-gray-100 line-clamp-3">
          {item.subject ? item.subject : textContent.noSubject}
        </p>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col items-center justify-center rounded-full bg-primary bg-opacity-10 py-2 px-4">
            <p className="truncate text-lg text-primary">{name}</p>
          </div>
          <div className="flex w-full flex-col pr-10">
            <p title={item.from} className="truncate text-sm font-medium text-gray-80">
              {item.from}
            </p>
            <p title={date} className="text-xs">
              {date}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full border border-gray-5" />
      <div dangerouslySetInnerHTML={{ __html: item.html }} className="flex w-full flex-col" />
      <div className="flex w-full border border-gray-5" />
    </div>
  );
};
