import React from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

interface TextAreaProps {
  label: string;
  placeholder?: string;
  id: string;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  required?: boolean;
  defaultValue?: string;
}

export const Textarea: React.FC<TextAreaProps> = ({
  id, register, errors, required, label, placeholder, defaultValue,
}) => (
  <div className='w-full'>
    <label htmlFor={id} className="block mb-2 text-md font-semibold text-gray-900">{`${label}`}</label>
    <textarea defaultValue={defaultValue} id={id}
     {...register(id, { required })} placeholder={placeholder}
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5 h-40 resize-none" />
    {errors[id] && <p className='text-sm text-red-600 font-medium'>{`${errors[id]?.message}`}</p>}
  </div>
);
