'use client';

import useSWR from 'swr';
import { taskType } from '@/app/types/types';
import TaskList from '../components/task/tasklist';
import Menu from '../components/task/menu';

export default function Home() {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR<taskType[]>('api/tarefas', fetcher);

  const handleUpdateData = async () => {
    mutate();
  };
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24">
			<div className="lg:max-w-5xl w-full">
				<div>
					<Menu handleUpdateData={handleUpdateData}/>
				</div>
				<div className="w-full">
					<TaskList data={data} handleUpdateData={handleUpdateData}/>
				</div>
			</div>
		</main>
  );
}
