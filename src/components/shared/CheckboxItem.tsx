import ReactMarkdown from 'react-markdown';
import CheckboxSettings from '@/components/password-generator/components/CheckboxSettings';

const CheckboxItem = ({
  darkMode = false,
  checked,
  setCheckbox,
  label,
  textColor,
}: {
  darkMode?: boolean;
  checked: boolean;
  setCheckbox: (checked: boolean) => void;
  label: string;
  textColor?: string;
}) => {
  return (
    <div className="flex flex-row space-x-3 lg:items-center">
      <CheckboxSettings
        id={label}
        checked={checked}
        onClick={() => {
          setCheckbox(!checked);
        }}
        darkMode={darkMode}
      />
      <ReactMarkdown
        className={`markdown text-sm font-medium ${textColor || (darkMode ? 'text-green-120' : 'text-gray-60')}`}
      >
        {label}
      </ReactMarkdown>
    </div>
  );
};

export default CheckboxItem;
