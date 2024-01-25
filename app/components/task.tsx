/* eslint-disable default-case */
import {
  LiHTMLAttributes, useState,
} from 'react';

import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import Modal from './modal';

interface LiProps extends LiHTMLAttributes<HTMLLIElement> {
  id: number,
  title?: string,
  description?: string,
  status: 'pendente' | 'executando' | 'concluida',
  date: string,
}

export const Task = (props: LiProps) => {
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToClose = () => {
    setOpen(false);
  };
  const {
    id, title, description, status, date,
  } = props;
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
      <li className={`w-full h-80 rounded-xl p-4 grid grid-cols-3 grid-rows-6  md:gap-3 ${containerColor}`}>
        { }
        <div className='col-span-2 row-span-2 '>
          <h2 className='w-full h-full text-base md:text-lg md:text-justify font-bold text-wrap capitalize'>
            {title}
          </h2>
        </div>
        <div className='row-span-2'>
          <p className={`w-full h-8 rounded-t-lg text-white flex items-center justify-center text-sm capitalize ${statusColor}`}>
            &#x2022;{status}
          </p>
          <p className={`w-full h-8 rounded-b-lg text-white flex items-center justify-center text-sm ${statusColor}`} >
            {`${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`}
          </p>
        </div>
        <div className='col-span-2 row-span-4 '>
          <p className='text-gray-700 text-xs leading-6 text-justify'>
            {description}
          </p>
        </div>
        <div className='flex flex-col gap-4 row-span-4'>
          <button className='flex items-center justify-center p-4 rounded-lg bg-white'>
            <FaRegTrashAlt className='w-7 h-7' />
          </button>
          <button onClick={() => { handleClickToOpen(); }} className='flex items-center justify-center p-4 rounded-lg bg-white'>
            <FaRegEdit className='w-7 h-7' />
          </button>
        </div>
        <Modal
          edition={true}
          isOpen={open}
          idTask={id}
          title={title}
          date={date}
          description={description}
          status={status}
          handleClickToClose={handleClickToClose} />

      </li>
    </>
  );
};
