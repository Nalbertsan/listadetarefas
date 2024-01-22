import {
  InputHTMLAttributes,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'select' | 'date'
}

const InputDefault = ({ name = '', type = 'text', ...props }: InputProps) => (
  <>
    <div className='w-full'>
      <label htmlFor={name} className="block mb-2 text-md font-semibold text-gray-900">{`${name}`}</label>
      <input type={type} id={name} {...props} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5" />
    </div>
  </>
);

const InputDate = ({ name = '', ...props }: InputProps) => (
  <>
    <div className='w-full'>
      <label htmlFor={name} className="block mb-2 text-md font-semibold text-gray-900">{`${name}`}</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input {...props} type="date" id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 outline-none " />
      </div>
    </div>
  </>
);

export const Input = (props: InputProps) => {
  const { variant } = props;

  switch (variant) {
    case 'date':
      return <InputDate {...props} />;
    default:
      return <InputDefault {...props} />;
  }
};
