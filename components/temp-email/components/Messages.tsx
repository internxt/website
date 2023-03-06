import { DownloadSimple, Envelope } from 'phosphor-react';
import { downloadFile } from '../services/api/temp-api';
import fileDownload from 'js-file-download';
import iconService from '../services/icon-service';
import moment from 'moment';
import PrettySize from 'prettysize';

const NoMessageSelected = ({ messagesLength }: { messagesLength: number }): JSX.Element => {
  console.log(messagesLength);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <Envelope size={48} className="text-gray-50" weight="thin" />
      <div className="flex flex-col">
        <p className="text-sm font-medium">You have {messagesLength} new messages</p>
        <p className="text-sm text-gray-50">Select a message to open</p>
      </div>
    </div>
  );
};

const MessageSelected = ({ email, item }): JSX.Element => {
  //Format date as Wednesday 22, February 2023 at 13:03 with moment.js
  const date = moment(item.date).format('dddd DD, MMMM YYYY [at] HH:mm');

  return (
    <div className="flex flex-col space-y-5 overflow-y-scroll p-10">
      <div className="flex flex-col space-y-2">
        <p title={item.subject} className="text-xl font-medium text-gray-100 line-clamp-3">
          {item.subject ? item.subject : '(no subject)'}
        </p>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col items-center justify-center rounded-full bg-primary bg-opacity-10 py-2 px-4">
            <p className="text-lg text-primary">{item.from.charAt().toUpperCase()}</p>
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

      <div dangerouslySetInnerHTML={{ __html: item.body }} className="flex flex-col space-x-2" />

      <div className="flex w-full border border-gray-5" />

      {item.attachments.length > 0 && (
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm font-medium">{item.attachments.length} Attachments</p>
            <p
              className="cursor-pointer text-sm text-primary"
              onClick={() => {
                item.attachments.forEach(async (file) => {
                  await downloadFile(email, item.id, file.filename).then((download) => {
                    const blob = new Blob([download.data], { type: file.contentType });
                    fileDownload(blob, file.filename);
                  });
                });
              }}
            >
              Download All
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
      )}
    </div>
  );
};

export default { MessageSelected, NoMessageSelected };
