import {
  TextareaHTMLAttributes,
} from 'react';

type TextProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ name = '', ...props }:TextProps) => (
  <>
    <div className='w-full'>
          <label htmlFor={name} className="block mb-2 text-md font-semibold text-gray-900">{`${name}`}</label>
          <textarea id={name} {...props} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5 h-40 resize-none" />
      </div>
  </>
);
