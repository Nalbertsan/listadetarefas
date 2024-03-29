import React from 'react';

type propsMenu = {
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const Menu = (props: propsMenu) => {
  const { filter, setFilter } = props;
  return (
    <>
      <div className="sm:hidden">
        <label className='font-bold' htmlFor='filter'>Filtro:</label>
        <select value={filter} id='filter' onChange={(e) => setFilter(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value={'todos'} >Todos</option>
          <option value={'pendente'}>Pendente</option>
          <option value={'executando'}>Executando</option>
          <option value={'concluida'}>Concluída</option>
        </select>
      </div>
      <ul className="cursor-pointer hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li onClick={() => setFilter('todos')} className="w-full">
          <div className={`inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 rounded-s-lg
             hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 ${filter === 'todos' ? ' text-cyan-300' : ''}`} >
            Todos
          </div>
        </li>
        <li onClick={() => setFilter('pendente')} className="w-full">
          <div className={`inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700
             hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 ${filter === 'pendente' ? ' text-cyan-300' : ''}`}>
            Pendente
          </div>
        </li>
        <li onClick={() => setFilter('executando')} className="w-full">
          <div className={`${filter === 'executando' ? ' text-cyan-300' : ''} inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700
             hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 `}>
            Executando
          </div>
        </li>
        <li onClick={() => setFilter('concluida')} className="w-full">
          <div className={`inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg
             hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 ${filter === 'concluida' ? ' text-cyan-300' : ''}`}>
            Concluída
          </div>
        </li>
      </ul>
    </>
  );
};
