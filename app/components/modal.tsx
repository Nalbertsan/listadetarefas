/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import { useState, MouseEvent, ChangeEvent } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './buttons';
import { InputDate, InputDefault } from './inputs';
import { Textarea } from './textarea';
import { selectOptions, InputSelect } from './select';

interface modalProps {
  isOpen: boolean,
  edition: boolean,
  idTask?: number
  title?: string,
  description?: string,
  date?: string,
  status?: string,
  handleClickToClose: () => void;
}

const schemaForm = z.object({
  title: z.string().min(1, { message: 'Erro! Digite um título válido' }),
  description: z.string().min(1, { message: 'Erro! Digite uma descrição válida' }).max(500, { message: 'Erro! Digite uma descrição válida' }),
  status: z.string().min(1, { message: 'Erro! Selecione um status válido' }),
  date: z.coerce.date({ required_error: 'Erro! Selecione uma data válida' }),
});

type formData = z.infer<typeof schemaForm>

export default function Modal({
  isOpen, edition = false, idTask, title = '', description = '', date = '', status = '', handleClickToClose,
}: modalProps) {
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<FieldValues>({
    criteriaMode: 'all',
    mode: 'onBlur',
    resolver: zodResolver(schemaForm),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (task) => {
    const dateInitial = new Date(task.date);
    const dateFormatted = dateInitial.toISOString();
    const submitData = {
      date: dateFormatted,
      title: task.title,
      description: task.description,
      status: task.status,
      idTask,
    };

    if (!edition) {
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
    } else {
      try {
        const res = await fetch('api/tarefas', {
          method: 'PUT',
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
    }
    handleClickToClose();
  };

  const handleModalClick = (event: MouseEvent<HTMLFormElement>) => {
    event.stopPropagation();
  };

  const options: selectOptions = {
    pendente: 'Pendente',
    executando: 'Executando',
    concluida: 'Concluída',
  };

  return (
    <>
      {isOpen && (<div onClick={() => { reset(); handleClickToClose(); }} onSubmit={handleSubmit(onSubmit)} className='text-black flex items-center justify-center fixed w-full md:h-full bg-black bg-opacity-60 overflow-y-scroll'>
        <form onClick={(e) => handleModalClick(e)}
          className='w-11/12 bg-white rounded-lg max-w-lg p-8 md:p-12 shadow-lg shadow-gray-800  md:mx-auto'>
          <section className='w-full flex items-center justify-center bg-blue-700 rounded-3xl'>
            <h1 className='text-3xl text-white'>{`${edition ? 'Edição de' : 'Adicionar'} Tarefa`}</h1>
          </section>
          <div className='w-full py-8 flex flex-col items-center justify-center'>
            <InputDefault defaultValue={edition ? title : ''} label='Título' id="title" register={register} errors={errors} />
            <Textarea defaultValue={edition ? description : ''} id='description' label='Descrição' register={register} errors={errors} placeholder='Digite a descrição' />
            <InputDate defaultValue={edition ? date : ''} label='Data' id="date" register={register} errors={errors} />
            <InputSelect defaultValue={edition ? status : ''} options={options} label='Status:' id='status' register={register} errors={errors} />
          </div>
          <div className='flex flex-col py-4 gap-y-3'>
            <Button variant='cancel' size='block' onClick={() => { reset(); handleClickToClose(); }}>Cancelar</Button>
            <Button type='submit' variant='confirm' size='block' onClick={() => { }}>Confirmar</Button>
          </div>
        </form>
      </div>)
      }
    </>
  );
}
