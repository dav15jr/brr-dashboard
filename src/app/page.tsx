'use client';
import React from 'react';
import { useStore } from './Store/store';

type Task = {
  id: number;
  text: string;
  isComplete: boolean;
};

export default function Page() {
  const { tasks, tickets } = useStore();
  const pendingTasks = tasks.filter((task: Task) => !task.isComplete);
  const unresolvedTickets = tickets.filter(
    (ticket) => ticket.status.toLowerCase() === 'open'
  );

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold mb-8">Welcome to your Dashboard</h1>
        <p>Here you can find a summary of your activities and tasks.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-gray-800 rounded-lg">
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

        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            Tasks Pending ({pendingTasks.length})
          </h3>
          <ul className="space-y-2">
            {pendingTasks.map((task: Task) => (
              <li key={task.id} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                {task.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Latest Updates</h3>
          <ul>
            <li>Up 1</li>
            <li>Up 2</li>
          </ul>
        </div>
      </section>
    </>
  );
}
