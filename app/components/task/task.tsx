'use client';

import {
  LiHTMLAttributes, useState,
} from 'react';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { taskType } from '@/app/types/types';
import Modal from './modal';

interface LiProps extends LiHTMLAttributes<HTMLLIElement> {
  data:taskType,
  handleUpdateData: () => void,
}

export const Task = (props: LiProps) => {
  const { data, handleUpdateData } = props;
  const {
    date = '', status, description, title, id,
  } = data;

  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleClickToClose = () => {
    setOpen(false);
  };

  const handlerDelete = async () => {
    try {
      const res = await fetch(`api/tarefas/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      });
      console.log(res);
      if (res.ok) {
        console.log('Yeai!');
      } else {
        console.log('Oops! Something is wrong.');
      }
    } catch (error) {
      console.log(error);
    }
    handleUpdateData();
  };

  let containerColor;
  let statusColor;
  switch (status) {
    case 'pendente':
      containerColor = 'bg-gray-one';
      statusColor = 'bg-gray-600';
      break;
    case 'executando':
      containerColor = 'bg-orange-one';
      statusColor = 'bg-orange-two';
      break;
    case 'concluida':
      containerColor = 'bg-green-one';
      statusColor = 'bg-green-two';
      break;
  }

  return (
    <>
      <li className={`w-full h-80 sm:h-56 rounded-xl p-4 grid grid-cols-3 grid-rows-6 gap-x-1 md:gap-3 border border-transparent
       transition-colors hover:border-gray-300 hover:dark:border-neutral-700  ${containerColor}`}>
        <div className='col-span-2 row-span-2'>
          <h2 className='text-center w-full h-full text-base md:text-lg font-bold text-wrap capitalize'>
            {title}
          </h2>
        </div>
        <div className='row-span-2 text-sm md:text-base '>
          <p className={`w-full h-8 rounded-t-lg text-white flex items-center justify-center capitalize ${statusColor}`}>
            &#x2022;{status}
          </p>
          <p className={`w-full h-8 rounded-b-lg text-white flex items-center justify-center ${statusColor}`} >
            {`${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`}
          </p>
        </div>
        <div className='col-span-2 row-span-4 md:text-base text-xs'>
          <p className='text-gray-700  leading-6 text-justify'>
            {description}
          </p>
        </div>
        <div className='flex flex-col gap-4 md:gap-2 pt-2 row-span-4'>
          <button onClick={() => { handlerDelete(); }} className='flex items-center justify-center p-4 rounded-lg bg-white' >
            <FaRegTrashAlt className='w-7 h-7 text-red-500' />
          </button>
          <button onClick={() => { handleClickToOpen(); }} className='flex items-center justify-center p-4 rounded-lg bg-white'>
            <FaRegEdit className='w-7 h-7' />
          </button>
        </div>
        <Modal
          edition={true}
          isOpen={open}
          id={id}
          title={title}
          date={date}
          description={description}
          status={status}
          handleClickToClose={handleClickToClose}
          handleUpdateData={handleUpdateData}
        />
      </li>
    </>
  );
};
