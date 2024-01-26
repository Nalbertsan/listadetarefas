'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from './buttons';
import Modal from './modal';

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToClose = () => {
    setOpen(false);
  };

  return (
		<section className="flex flex-col items-center justify-between p-4 mb-4">
      <Button onClick={ () => { handleClickToOpen(); } } size='md' icon={<FaPlus/>}>Adicionar Tarefa</Button>
      <Modal edition={false} isOpen={open} handleClickToClose={handleClickToClose} handleUpdateData={() => console.log('nada')}/>
		</section>
  );
}
