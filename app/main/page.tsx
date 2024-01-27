import TaskList from '../components/task/tasklist';
import Menu from '../components/task/menu';

export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24">
			<div className="lg:max-w-5xl w-full">
				<div>
					<Menu/>
				</div>
				<div className="w-full">
					<TaskList/>
				</div>
			</div>
		</main>
  );
}
