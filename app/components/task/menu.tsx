'use client';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../basics/buttons';
import Modal from './modal';

interface propsMenu {
  handleUpdateData: () => void;
}

export default function Menu(props:propsMenu) {
  const [open, setOpen] = useState(false);
  const { handleUpdateData } = props;

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToClose = () => {
    setOpen(false);
  };

  return (
		<section className="flex flex-col items-center justify-between p-4 mb-4">
      <Button onClick={ () => { handleClickToOpen(); } } size='md' icon={<FaPlus/>}>Adicionar Tarefa</Button>
      <Modal edition={false} isOpen={open} handleClickToClose={handleClickToClose}
       handleUpdateData={handleUpdateData}/>
		</section>
  );
}
