'use client';

import useSWR from 'swr';
import { taskType } from '@/app/types/types';
import { Task } from './task';

export default function TaskList() {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR<taskType[]>('api/tarefas', fetcher);

  const handleUpdateData = async () => {
    mutate();
  };

  return (
    <>
      <ul className="flex flex-col min-h-96 text-black w-full gap-4 p-4 rounded-lg bg-white">
        {data?.map((task) => <Task key={task.id}
         data={task} handleUpdateData={handleUpdateData} />)}
      </ul>
    </>
  );
}
