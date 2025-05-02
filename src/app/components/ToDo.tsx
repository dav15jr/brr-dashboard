import React, { useState } from 'react';
import { useStore } from '../Store/store';

type Task = {
  id: number;
  text: string;
  isComplete: boolean;
};

export default function ToDo() {
  const { tasks, addTask, deleteTask, toggleTask, updateTask } = useStore() as {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: number) => void;
    toggleTask: (id: number) => void;
    updateTask: (id: number, text: string) => void;
  };
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    addTask({ 
      id: Date.now(), 
      text: newTask, 
      isComplete: false 
    });
    setNewTask('');
  };

  const handleSaveEdit = (id: number) => {
    updateTask(id, editText);
    setEditingId(null);
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-200 dark:bg-gray-800 rounded shadow-md text-black dark:text-white">
      <form onSubmit={handleAddTask} className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center gap-2 p-2 bg-gray-300 dark:bg-gray-900 rounded">
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => toggleTask(task.id)}
              className="h-5 w-5"
            />
            
            {editingId === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 p-1 rounded border bg-gray-700"
              />
            ) : (
              <span className={`flex-1 ${task.isComplete ? 'line-through text-gray-500' : ''}`}>
                {task.text}
              </span>
            )}

            {editingId === task.id ? (
              <button
                onClick={() => handleSaveEdit(task.id)}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => startEdit(task)}
                className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
            )}
            
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}