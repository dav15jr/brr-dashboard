'use client';
import React from 'react';
import { useStore } from './Store/store';


type Task = {
  id: number;
  text: string;
  isComplete: boolean;
};

export default function Page() {
  const { tasks, tickets} = useStore();
  const pendingTasks = tasks.filter((task: Task) => !task.isComplete);
  const unresolvedTickets = tickets.filter(
    (ticket) => ticket.status === 'Open'
  );



  return (
    <section className="container mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to your Dashboard</h1>
        <p>Here you can find a summary of your activities and tasks.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-gray-200 dark:bg-gray-800  rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            Open Tickets ({unresolvedTickets.length})
          </h3>
          <ul className="space-y-2">
            {unresolvedTickets.map((ticket) => (
              <li key={ticket.id} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {ticket.issue}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4  bg-gray-200 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            Tasks Pending ({pendingTasks.length + 2})
          </h3>
          <ul className="space-y-2">
          <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Book a meeting with the team.
              </li>
          <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Update Chrome browser.
              </li>
            {pendingTasks.map((task: Task) => (
              <li key={task.id} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                {task.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Latest Updates</h3>
          <ul>
            <li>Holiday approval accepted</li>
            <li>New Staff meeting time.</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
