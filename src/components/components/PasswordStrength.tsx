export interface PasswordStrengthProps {
  label?: string;
  strength: 'error' | 'warning' | 'success';
}

export default function PasswordStrength(props: PasswordStrengthProps): JSX.Element {
  let activeBackground: string;
  let labelColor: string;

  switch (props.strength) {
    case 'error':
      activeBackground = 'bg-red';
      labelColor = 'text-red';
      break;
    case 'warning':
      activeBackground = 'bg-orange';
      labelColor = 'text-orange';
      break;
    case 'success':
      activeBackground = 'bg-green';
      labelColor = 'text-green';
      break;
  }

  return (
    <div className="flex flex-col space-y-1 pt-1">
      <div className="flex space-x-1.5">
        <div className={`h-1 w-12 rounded-full ${activeBackground}`} />
        <div className={`h-1 w-12 rounded-full ${props.strength !== 'error' ? activeBackground : 'bg-gray-10'}`} />
        <div className={`h-1 w-12 rounded-full ${props.strength === 'success' ? activeBackground : 'bg-gray-10'}`} />
      </div>

      <p className={`text-sm ${labelColor}`}>{props.label}</p>
    </div>
  );
}
