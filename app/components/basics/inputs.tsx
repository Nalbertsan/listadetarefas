import React from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

interface InputProps {
  label: string;
  placeholder?: string;
  id: string;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  required?: boolean;
  defaultValue?: string;
}

export const InputDefault: React.FC<InputProps> = ({
  id, register, errors, required, label, placeholder, defaultValue,
}) => (
  <div className='w-full'>
    <label htmlFor={id} className="block mb-2 text-md font-semibold text-gray-900">{`${label}`}</label>
    <input defaultValue={defaultValue} id={id}
      {...register(id, { required })} placeholder={placeholder}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5" />
    {errors[id] && <p className='text-sm text-red-600 font-medium'>{`${errors[id]?.message}`}</p>}
  </div>
);

export const InputDate: React.FC<InputProps> = ({
  id, register, errors, required, label, defaultValue,
}) => (
  <div className='w-full'>
    <label htmlFor={id} className="block mb-2 text-md font-semibold text-gray-900">{`${label}`}</label>
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0
          18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <input defaultValue={defaultValue} type="date" id={id} {...register(id, { required })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 outline-none " />
    </div>
    {errors[id] && <p className='text-sm text-red-600 font-medium'>Erro! Selecione uma data válida</p>}
  </div>

);
