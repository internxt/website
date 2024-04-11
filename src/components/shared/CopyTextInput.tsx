import { Copy } from '@phosphor-icons/react';
import copyToClipboard from '../utils/copy-to-clipboard';

export const CopyTextInput = ({ text }) => {
  const onCopy = () => {
    copyToClipboard(text);
  };

  return (
    <button
      className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl border border-gray-10 bg-white px-4 py-3 text-gray-80 shadow-sm`}
      onClick={onCopy}
    >
      <p
        className={`text-base font-medium`}
        style={{
          fontFamily: 'Fira Code VF',
        }}
      >
        {text}
      </p>

      <Copy data-tooltip-id="copy-to-clipboard" size={24} />
    </button>
  );
};
