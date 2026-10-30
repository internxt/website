import { Copy } from '@phosphor-icons/react';
import copyToClipboard from '../utils/copy-to-clipboard';

interface CopyTextInputProps {
  text: string;
  isCommandCard?: boolean;
}

export const CommandTextInputCopy = ({ text, isCommandCard }: CopyTextInputProps) => {
  const onCopy = () => {
    copyToClipboard(text);
  };

  return (
    <button
      className="flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl border border-gray-10 bg-white dark:border-gray-71 dark:bg-gray-95 px-4 py-3 text-gray-80 dark:text-cool-gray-30 shadow-sm"
      onClick={onCopy}
    >
      <p
        className={`${isCommandCard ? 'text-sm' : 'text-base'} font-medium`}
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
