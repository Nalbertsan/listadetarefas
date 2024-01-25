/* eslint-disable import/extensions */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Task } from './task';

type typeTask = {
  id: number,
  title: string,
  description: string,
  status: 'pendente' | 'executando' | 'concluida',
  date: string,
}

export default function List() {
  const [tasks, setTasks] = useState<typeTask[]>([]);

  const listTask = async () => {
    const response = await axios.get('api/tarefas');
    const { data } = response;
    setTasks(data);
  };

  useEffect(() => {
    listTask();
  }, []);

  return (
    <>
      <ul className="flex flex-col text-black w-full gap-4 p-4 rounded-lg bg-white">
        {tasks?.map((task) => <Task title={task.title} key={task.id} id={task.id}
         date={task.date} description={task.description} status={task.status} />)}
      </ul>
    </>
  );
}
