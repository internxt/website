import { DownloadSimple, Envelope } from '@phosphor-icons/react';
import fileDownload from 'js-file-download';
import iconService from '../services/icon-service';
import moment from 'moment';
import PrettySize from 'prettysize';

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

const EnvelopeWithColor = (): JSX.Element => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M47.5443 2.50673V33.4874C47.5443 34.1008 47.2762 34.6508 46.8457 35.0246C46.4902 35.3402 46.0185 35.5275 45.5117 35.5275H2.58824C2.07553 35.5275 1.60978 35.3402 1.25428 35.0246C0.82376 34.6508 0.555664 34.1008 0.555664 33.4874V2.50739C0.555664 1.38062 1.46563 0.467285 2.58824 0.467285H45.5124C46.6343 0.467285 47.5443 1.38062 47.5443 2.50673Z"
        fill="#97BFFE"
      />
      <path
        d="M46.8458 35.0253C46.4903 35.3408 46.0186 35.5281 45.5118 35.5281H2.58835C2.07564 35.5281 1.6099 35.3408 1.25439 35.0253L22.1776 19.3395L24.0471 17.9947L25.9225 19.3395L46.8458 35.0253Z"
        fill="#80B0FC"
      />
      <path
        opacity="0.15"
        d="M47.5451 2.50673V4.62409L27.8808 20.7426L27.4209 20.4152L25.2866 22.02C24.556 22.5693 23.5514 22.5706 22.8196 22.0226L20.6872 20.427L20.2156 20.7485L0.557129 4.62409V2.50739C0.557129 1.38062 1.46709 0.467285 2.5897 0.467285H45.5138C46.6358 0.467285 47.5457 1.38062 47.5457 2.50673H47.5451Z"
        fill="#80B0FC"
      />
      <path
        d="M47.5443 2.50673V3.15687L25.9224 19.3395L25.2512 19.8221C24.5343 20.3373 23.5702 20.338 22.8533 19.824L22.1775 19.3395L0.555664 3.15687V2.50739C0.555664 1.38062 1.46563 0.467285 2.58824 0.467285H45.5124C46.6343 0.467285 47.5443 1.38062 47.5443 2.50673Z"
        fill="#C0D8FF"
      />
    </svg>
  );
};

const NoMessageSelected = ({
  messagesLength,
  textContent,
}: {
  messagesLength: number;
  textContent: any;
}): JSX.Element => {
  const messages = messagesLength === 0 && ' 0 ';
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <div className="relative flex flex-col">
        <Loader />
        <div className="absolute  translate-y-5 translate-x-6">
          <EnvelopeWithColor />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-base font-medium text-gray-100">
          {textContent.youHave} {messages} {textContent.newMessages}
        </p>

        <p className="text-sm text-gray-50">{messages ? textContent.waitingEmail : textContent.selectMessage}</p>
      </div>
    </div>
  );
};

const MessageSelected = ({
  email,
  item,
  textContent,
}: {
  email: string;
  item: Record<string, any>;
  textContent: any;
}): JSX.Element => {
  const date = moment(item.date).format('dddd DD, MMMM YYYY [at] HH:mm');

  return (
    <div className="flex w-full flex-col space-y-5 overflow-y-scroll p-10">
      <div className="flex w-full flex-col space-y-2">
        <p title={item.subject} className="text-xl font-medium text-gray-100 line-clamp-3">
          {item.subject ? item.subject : textContent.noSubject}
        </p>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col items-center justify-center rounded-full bg-primary bg-opacity-10 py-2 px-4">
            <p className="text-lg text-primary">{item.from?.charAt().toUpperCase()}</p>
          </div>
          <div className="flex flex-col">
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
      <div dangerouslySetInnerHTML={{ __html: item.body }} className="flex w-full flex-col space-x-2" />
      <div className="flex w-full border border-gray-5" />
      {/* {item.attachments?.length > 0 && (
        <div className="flex w-full flex-col space-y-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm font-medium">
              {item.attachments.length} {textContent.attachment}
            </p>
            <p
              className="cursor-pointer text-sm text-primary"
              
            >
              {textContent.downloadAll}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2">
            {item.attachments.map((file) => {
              const ItemIconComponent = iconService.getItemIcon(false, file.contentType.split('/')[1]);

              return (
                <div
                  key={file.filename}
                  className="flex cursor-pointer flex-row items-center justify-between space-x-2 rounded-lg border border-gray-10 p-2 md:justify-center"
                  onClick={async () => {
                    await downloadFile(email, item.id, file.filename).then((download) => {
                      const blob = new Blob([download.data], { type: file.contentType });
                      fileDownload(blob, file.filename);
                    });
                  }}
                >
                  <div className="flex flex-row space-x-2">
                    <ItemIconComponent className="h-8 w-8" />
                    <div className="flex max-w-[160px] flex-col md:max-w-[120px]">
                      <p className=" truncate text-xs font-medium">{file.filename}</p>
                      <p className="text-xs text-gray-60">{PrettySize(file.size)}</p>
                    </div>
                  </div>
                  <div>
                    <DownloadSimple size={20} className="mr-2 text-gray-50" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default { MessageSelected, NoMessageSelected };
