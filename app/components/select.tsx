import {
  SelectHTMLAttributes,
} from 'react';

export interface selectOptions {
  [key: string]: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: selectOptions;
}

export const InputSelect = ({ name = '', options, ...props }: SelectProps) => (
  <>
    <div className='w-full'>

      <label htmlFor={name} className="block mb-2 text-md font-semibold text-gray-900">{`${name}`}</label>
      <select id={name} {...props} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">
        <option value="" disabled selected>-- Selecione --</option>
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={key}> {`${value}`} </option>
        ))}
      </select>
    </div>
  </>
);
