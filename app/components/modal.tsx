/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import { useState, MouseEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { Button } from './buttons';
import { Input } from './inputs';
import { Textarea } from './textarea';
import { selectOptions, InputSelect } from './select';

interface modalProps{
  isOpen: boolean,
  edition: boolean,
  title?: string,
  description?: string,
  date?: string,
  status?: string,
  handleClickToClose: () => void;
}

type typeTarefa = {
  title: string,
  description: string,
  status: string,
  date?: string,
}

export default function Modal({
  isOpen, edition = false, title = '', description = '', date = '', status = '', handleClickToClose,
}:modalProps) {
  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [dateState, setDateState] = useState(date);
  const [statusState, setStatusState] = useState(status);

  const handleSubmit = async () => {
    const submitData = { title: 'globo' };

    try {
      const res = await fetch('api/tarefas', {
        method: 'POST',
        body: JSON.stringify(submitData),
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
  };

  const handleModalClick = (event:MouseEvent<HTMLFormElement>) => {
    event.stopPropagation();
  };

  const handleChangeTitle = (event:ChangeEvent<HTMLInputElement>) => {
    setTitleState(event.target.value);
  };

  const handleChangeDescription = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionState(event.target.value);
  };

  const handleChangeDate = (event:ChangeEvent<HTMLInputElement>) => {
    setDateState(event.target.value);
  };

  const handleChangeStatus = (event:ChangeEvent<HTMLSelectElement>) => {
    setStatusState(event.target.value);
  };

  const handleClearForm = () => {
    setTitleState('');
    setDescriptionState('');
    setDateState('');
    setStatusState('');
  };

  const options:selectOptions = {
    pendente: 'Pendente',
    executando: 'Executando',
    concluida: 'Concluída',
  };

  return (
    <>
      {isOpen && (<div onClick={() => { handleClickToClose(); }} className='text-black flex items-center justify-center fixed w-full h-full bg-black bg-opacity-60'>
        <form onClick={(e) => handleModalClick(e)} onSubmit={() => handleSubmit() }
                className='w-11/12 h-9/12 bg-white rounded-lg max-w-md p-8 shadow-lg shadow-gray-800'>
          <section className='w-full flex items-center justify-center bg-blue-700 rounded-3xl'>
            <h1 className='text-3xl text-white'>{`${edition ? 'Edição de' : 'Adicionar'} Tarefa`}</h1>
          </section>
          <div className='w-full py-8 flex flex-col items-center justify-center'>
            <Input defaultValue={title} value={titleState} onChange={(e) => handleChangeTitle(e)} name='Título:' placeholder='Digite o título'/>
            <Textarea value={descriptionState} onChange={(e) => handleChangeDescription(e)} name='Descrição:' placeholder='Digite a descrição'/>
            <Input value={dateState} onChange={(e) => handleChangeDate(e)} variant='date' name='Data:'/>
            <InputSelect defaultValue={statusState} onChange={(e) => handleChangeStatus(e)} options={options} name='Status:'/>
          </div>
          <div className='flex flex-col py-4 gap-y-3'>
            <Button variant='cancel' size='block' onClick={() => { handleClearForm(); handleClickToClose(); }}>Cancelar</Button>
            <Button type='submit' variant='confirm' size='block' onClick={() => {}}>Confirmar</Button>
          </div>
        </form>
      </div>)
      }
    </>
  );
}
