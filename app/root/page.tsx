'use client';

import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../components/buttons';

export default function Home() {
  return (
		<>
			<div className='w-screen h-screen flex items-center justify-center flex-col gap-5'>
				<Button onClick={ () => { console.log('cliquei'); } } size='md' icon={<FaPlus/>}>Adicionar Tarefa</Button>
				<Button variant='cancel' size='md' >Cancelar</Button>
				<Button variant='confirm' size='md' >Confirmar</Button>

			</div>
		</>
  );
}
