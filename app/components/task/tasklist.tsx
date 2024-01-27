import { taskType } from '@/app/types/types';
import { Task } from './task';

interface propsList {
  handleUpdateData: () => void,
  data?: taskType[],
}

export default function TaskList(props:propsList) {
  const { data, handleUpdateData } = props;

  return (
    <>
      <ul className="flex flex-col min-h-96 text-black w-full gap-4 p-4 rounded-lg bg-white">
        {data?.map((task) => <Task key={task.id}
         data={task} handleUpdateData={handleUpdateData} />)}
      </ul>
    </>
  );
}
