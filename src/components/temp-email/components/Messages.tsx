import { ArrowClockwise } from '@phosphor-icons/react';
import moment from 'moment';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Loader = (): JSX.Element => {
  return (
    <svg
      width="96"
      height="86"
      className="animate-spin-slow"
      viewBox="0 0 96 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.121 73.1269C10.4218 65.3992 5.99857 55.166 5.6659 44.3107L5.63002 43.1355L1.65554 46.7803L0 44.9615L7.68021 37.9148L14.7003 45.6241L12.8875 47.2864L9.26009 43.3025L9.32858 44.7933C9.77475 54.4955 13.8105 63.6426 20.6917 70.5492C24.8586 74.7309 30.0027 77.9456 35.5688 79.8462C52.0427 85.4716 70.3658 79.3146 80.1275 64.8735L81.1477 63.3643L84.1548 65.4117L83.1353 66.9201C72.4584 82.7159 52.4177 89.4503 34.3998 83.2979C28.3099 81.2185 22.6819 77.7007 18.1236 73.1255L18.121 73.1269ZM12.9678 19.0766C23.644 3.28149 43.6899 -3.45164 61.7143 2.70272C67.801 4.78079 73.4264 8.29663 77.9828 12.8698C85.8058 20.7219 90.2323 31.1221 90.4483 42.1554L90.4717 43.3489L94.3438 39.7978L96.0007 41.6166L88.3204 48.6626L81.301 40.9533L83.1138 39.291L86.828 43.3699L86.7882 41.9204C86.5142 31.9385 82.4706 22.5341 75.4016 15.439C71.2412 11.2632 66.1043 8.05307 60.5454 6.15505C44.0637 0.527741 25.7359 6.68275 15.9742 21.1232L14.954 22.6323L11.9476 20.585L12.9678 19.0766Z"
        fill="#0066FF"
        fillOpacity="0.15"
      />
    </svg>
  );
};

export const NoMessageSelected = ({
  messagesLength,
  textContent,
  onRefreshButtonClicked,
}: {
  messagesLength: number;
  textContent: any;
  onRefreshButtonClicked: () => void;
}): JSX.Element => {
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

export const MessageSelected = ({
  item,
  textContent,
}: {
  item: Record<string, any>;
  textContent: any;
}): JSX.Element => {
  const date = moment(item.date).format('dddd DD, MMMM YYYY [at] HH:mm');
  const name = item.from?.split('')[1].charAt().toUpperCase();

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
