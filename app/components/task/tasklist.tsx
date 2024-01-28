import React, { useState } from 'react';
import { taskType } from '@/app/types/types';
import { Task } from './task';
import { Menu } from './menu';

interface propsList {
  handleUpdateData: () => void,
  data?: taskType[],
}

export default function TaskList(props: propsList) {
  const { data, handleUpdateData } = props;
  const [filter, setFilter] = useState('todos');

  return (
    <div className="flex flex-col min-h-96 text-black w-full gap-4 p-4 rounded-lg bg-white">
      <Menu filter={filter} setFilter={setFilter} />
      <ul>
        {filter === 'todos' && data?.map((task) => <Task key={task.id}
          data={task} handleUpdateData={handleUpdateData} />)}
        {filter === 'pendente' && data?.filter((task) => task.status === 'pendente').map((task) => (
          <Task key={task.id} data={task} handleUpdateData={handleUpdateData} />
        ))}
        {filter === 'executando' && data?.filter((task) => task.status === 'executando').map((task) => (
          <Task key={task.id} data={task} handleUpdateData={handleUpdateData} />
        ))}
        {filter === 'concluida' && data?.filter((task) => task.status === 'concluida').map((task) => (
          <Task key={task.id} data={task} handleUpdateData={handleUpdateData} />
        ))}

      </ul>
    </div>
  );
}
