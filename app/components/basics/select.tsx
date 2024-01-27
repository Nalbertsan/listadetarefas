import React from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { selectOptions } from '@/app/types/types';

interface selectProps {
  label:string;
  id: string;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  required?: boolean;
  options: selectOptions;
  defaultValue?: string;
}

export const InputSelect: React.FC<selectProps> = ({
  id, register, errors, required, options, label, defaultValue,
}) => (
  <div className='w-full'>
      <label htmlFor={id} className="block mb-2 text-md font-semibold text-gray-900">{`${label}`}</label>
      <select defaultValue={defaultValue} id={id} {...register(id, { required })}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">
        <option value="" disabled>-- Selecione --</option>
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={key}> {`${value}`} </option>
        ))}
      </select>
      {errors[id] && <p className='text-sm text-red-600 font-medium'>{`${errors[id]?.message}`}</p>}
    </div>
);
