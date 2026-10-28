import { DotsThree } from '@phosphor-icons/react';
import moment from 'moment';
import React from 'react';
import { DARK_MODE_ENABLED } from '@/theme.config';

const FileItem = ({
  darkMode = DARK_MODE_ENABLED,
  encrypted,
  className = '',
  title,
  ItemImg,
}: {
  darkMode?: boolean;
  title: string;
  className: string;
  ItemImg: any;
  encrypted?: boolean;
}) => {
  const fileYear = moment().year();

  return (
    <div className={`${className} flex w-[375px] flex-row ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} px-4 py-3`}>
      <div className={`flex w-full flex-row items-center justify-between space-x-2`}>
        <div className="flex flex-row space-x-2">
          <ItemImg className={`h-10 w-10 ${encrypted && 'opacity-40'}`} />
          <div className="flex flex-col">
            <p className={`text-base ${encrypted ? 'opacity-40' : ''}`}>{title}</p>
            {encrypted ? (
              <p className="text-xs text-primary">Encrypting...</p>
            ) : (
              <div className="flex flex-row space-x-1 text-xs text-gray-50">
                <p>1.2MB</p>
                <p>·</p>
                <p>1 March {fileYear} at 08:05</p>
              </div>
            )}
          </div>
        </div>
        <div className={`flex items-center justify-center text-gray-50 ${encrypted && 'opacity-40'}`}>
          <DotsThree size={24} weight="bold" />
        </div>
      </div>
    </div>
  );
};

export default FileItem;
