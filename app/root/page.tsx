/* eslint-disable import/extensions */

'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../components/buttons';
import Modal from '../components/modal';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [edi, setEdi] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToOpen1 = () => {
    setOpen1(true);
  };
  const handleClickToClose = () => {
    setOpen(false);
  };
  const handleClickToClose1 = () => {
    setOpen1(false);
  };
  return (
		<>
			<div className='w-full h-screen flex items-center justify-center flex-col gap-5'>
				<Button variant='confirm' onClick={ () => { setEdi(!edi); } } size='md' icon={<FaPlus/>}>Adicionar Tarefa</Button>
				<Button size='md' onClick={() => { handleClickToOpen(); }} >Joias</Button>
        <Button size='md' onClick={() => { handleClickToClose(); }} >Joias</Button>
        <Modal edition={true} isOpen={open1} idTask={4} title='Roda Roda' date='2024-11-30' description='Edição foda' status='pendente' handleClickToClose={handleClickToClose1}/>
        <dialog className='w-full h-90' open={open}>
          <div className='w-full h-screen'>
            gogogogogogo
          </div>
          </dialog>
			</div>
		</>
  );
}
