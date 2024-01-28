'use client';

import useSWR from 'swr';
import { taskType } from '@/app/types/types';
import TaskList from './components/task/tasklist';
import Menu from './components/task/add';
import { Title } from './components/task/titlepage';

export default function Home() {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR<taskType[]>('api/tarefas', fetcher);

  const handleUpdateData = async () => {
    mutate();
  };
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24 background-animate bg-gradient-to-r from-cyan-500 to-blue-500">
			<section className="lg:max-w-5xl w-full">
				<Title/>
				<div>
					<Menu handleUpdateData={handleUpdateData}/>
				</div>
				<div className="w-full">
					<TaskList data={data} handleUpdateData={handleUpdateData}/>
				</div>
			</section>
		</main>
  );
}
