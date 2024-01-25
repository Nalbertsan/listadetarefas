/* eslint-disable import/extensions */

'use client';

import List from '../components/tasklist';

export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24">
			<div className="lg:max-w-5xl w-full lg:mb-0">
        <List/>
			</div>
		</main>
  );
}
