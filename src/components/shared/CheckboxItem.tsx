import ReactMarkdown from 'react-markdown';
import CheckboxSettings from '@/components/password-generator/components/CheckboxSettings';

const CheckboxItem = ({
  checked,
  setCheckbox,
  label,
  textColor,
}: {
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
      />
      <ReactMarkdown className={`markdown text-sm font-medium ${textColor || 'text-gray-60'}`}>{label}</ReactMarkdown>
    </div>
  );
};

export default CheckboxItem;
