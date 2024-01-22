import {
  ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement,
} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  icon?: ReactElement;
  variant?: 'default' | 'cancel' | 'confirm';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'block';
  className?: string;
}

const sizeFunction = (props:ButtonProps) => {
  const { size } = props;
  switch (size) {
    case 'sm':
      return 'px-2 py-1 text-sm';
    case 'lg':
      return 'px-8 py-4 text-lg';
    case 'xl':
      return 'px-16 py-8 text-xl';
    case 'block':
      return 'w-full py-4 text-md';
    case 'md':
      return 'px-4 py-2 text-md';
    default:
      return 'px-4 py-2 text-md';
  }
};

export const ButtonDefault = (props:ButtonProps) => {
  const {
    children, icon, size, className,
  } = props;
  const sizeTailwind = sizeFunction(props);
  return (
    <button
    {...props}
    className={`flex justify-center border-2 border-transparent gap-3 items-center bg-blue-500 hover:bg-blue-600 hover:shadow-blue-400 text-white font-bold rounded-lg shadow-md shadow-gray-600 ${size ? sizeTailwind : ''} ${className || ''}`}
    >
      {icon && cloneElement(icon)}
      <span>
        {children}
      </span>
    </button>
  );
};

export const ButtonCancel = (props:ButtonProps) => {
  const {
    children, icon, size, className,
  } = props;
  const sizeTailwind = sizeFunction(props);
  return (
    <button
    {...props}
    className={`flex justify-center border-2 border-transparent gap-3 items-center bg-transparent hover:bg-white hover:border-red-800 hover:shadow-red-800 text-red-800 font-bold rounded-lg shadow-md shadow-gray-600 ${size ? sizeTailwind : ''} ${className || ''}`}
    >
      {icon && cloneElement(icon)}
      <span>
        {children}
      </span>
    </button>
  );
};

export const ButtonConfirm = (props:ButtonProps) => {
  const {
    children, icon, size, className,
  } = props;
  const sizeTailwind = sizeFunction(props);
  return (
    <button
    {...props}
    className={`flex justify-center border-2 border-transparent gap-3 items-center hover:border-white hover:shadow-green-600 text-white bg-green-600 hover:bg-green-700 font-bold rounded-lg shadow-md shadow-gray-600 ${size ? sizeTailwind : ''} ${className || ''}`}
    >
      {icon && cloneElement(icon)}
      <span>
        {children}
      </span>
    </button>
  );
};

export const Button = (props:ButtonProps) => {
  const { variant } = props;

  switch (variant) {
    case 'confirm':
      return <ButtonConfirm {...props}/>;
    case 'cancel':
      return <ButtonCancel {...props}/>;
    default:
      return <ButtonDefault {...props}/>;
  }
};
