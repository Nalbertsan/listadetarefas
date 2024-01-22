/* eslint-disable import/extensions */

'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../components/buttons';
import Modal from '../components/modal';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [edi, setEdi] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToClose = () => {
    setOpen(false);
  };
  return (
		<>
			<div className='w-screen h-screen flex items-center justify-center flex-col gap-5'>
				<Button variant='confirm' onClick={ () => { setEdi(!edi); } } size='md' icon={<FaPlus/>}>Adicionar Tarefa</Button>
				<Button size='md' onClick={() => { handleClickToOpen(); }} >Joias</Button>
				<Modal title='Teste' edition={edi} isOpen={open} handleClickToClose={handleClickToClose}/>
			</div>
		</>
  );
}
