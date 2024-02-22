export interface PrimaryButtonProps {
  type?: 'button' | 'submit';
  label?: string | JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  id?: string;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      id={props.id}
      type={props.type ?? 'button'}
      disabled={props.disabled}
      className={`${
        props.className ?? ''
      } relative flex h-11 flex-row items-center justify-center space-x-4 whitespace-nowrap rounded-lg bg-primary px-5 text-white shadow-sm transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark disabled:cursor-not-allowed disabled:text-white/75`}
    >
      {typeof props.label === 'string' ? <span>{props.label}</span> : props.label}
      {props.loading && (
        <svg
          className="absolute right-4 animate-spin"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6.10352e-05C9.3688 6.10515e-05 10.7147 0.35127 11.909 1.02009C13.1032 1.68892 14.1059 2.65298 14.8211 3.82007C15.5363 4.98716 15.9401 6.31824 15.9938 7.68598C16.0476 9.05372 15.7495 10.4124 15.1281 11.632C14.5066 12.8516 13.5827 13.8914 12.4446 14.6518C11.3064 15.4123 9.99225 15.868 8.62767 15.9754C7.2631 16.0828 5.89379 15.8383 4.65072 15.2652C3.40766 14.6921 2.33242 13.8097 1.52787 12.7023L3.1459 11.5268C3.74932 12.3573 4.55575 13.0191 5.48804 13.4489C6.42034 13.8787 7.44732 14.0621 8.47076 13.9816C9.49419 13.901 10.4798 13.5592 11.3334 12.9889C12.187 12.4185 12.88 11.6387 13.346 10.724C13.8121 9.8093 14.0357 8.79031 13.9954 7.7645C13.9551 6.7387 13.6522 5.74039 13.1158 4.86507C12.5794 3.98975 11.8274 3.2667 10.9317 2.76508C10.036 2.26347 9.0266 2.00006 8 2.00006V6.10352e-05Z"
            fill="#FFFFFF"
          />
        </svg>
      )}
    </button>
  );
}
