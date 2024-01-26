/* eslint-disable import/extensions */

'use client';

import useSWR from 'swr';
import { Task } from './task';

type typeTask = {
  id: number,
  title: string,
  description: string,
  status: 'pendente' | 'executando' | 'concluida',
  date: string,
}

export default function List() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR<typeTask[]>('api/tarefas', fetcher);

  const handleUpdateData = async () => {
    mutate();
  };

  return (
    <>
      <ul className="flex flex-col min-h-96 text-black w-full gap-4 p-4 rounded-lg bg-white">
        {data?.map((task) => <Task title={task.title} key={task.id} id={task.id}
         date={task.date} description={task.description}
         status={task.status} handleUpdateData={handleUpdateData} />)
         }
      </ul>
    </>
  );
}
