import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../basics/buttons';
import Modal from './modal';

interface propsMenu {
  handleUpdateData: () => void;
}

export default function Add(props: propsMenu) {
  const [open, setOpen] = useState(false);
  const { handleUpdateData } = props;

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToClose = () => {
    setOpen(false);
  };

  return (
    <section className="flex flex-col items-center justify-between p-4 my-4 bg-white rounded-lg">
      <Button onClick={() => { handleClickToOpen(); }} size='block' icon={<FaPlus />}>Adicionar nova Tarefa</Button>
      <Modal edition={false} isOpen={open} handleClickToClose={handleClickToClose} title='a'
        handleUpdateData={handleUpdateData} />
    </section>
  );
}
