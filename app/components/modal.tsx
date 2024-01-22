/* eslint-disable import/extensions */

import { useState, MouseEvent, ChangeEvent } from 'react';
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

export default function Modal({
  isOpen, edition = false, title = '', description = '', date = '', status = '', handleClickToClose,
}:modalProps) {
  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [dateState, setDateState] = useState(date);
  const [statusState, setStatusState] = useState(status);

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
    concluída: 'Concluída',
  };
  return (
    <>
      {isOpen && (<div onClick={() => { handleClickToClose(); }} className='text-black flex items-center justify-center fixed w-full h-full bg-black bg-opacity-60'>
        <form onClick={(e) => handleModalClick(e)} className='w-11/12 h-9/12 bg-white rounded-lg max-w-md p-8 shadow-lg shadow-gray-800'>
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
            <Button variant='confirm' size='block' onClick={() => { handleClearForm(); handleClickToClose(); }}>Confirmar</Button>
          </div>
        </form>
      </div>)
      }
    </>
  );
}
