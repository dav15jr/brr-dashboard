import { create } from 'zustand';

export const useStore = create((set) => ({
  user: null,
  tasks: [],
  setUser: (user) => set({ user }),
  addTask: (task) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),
  deleteTask: (id) => set((state) => ({ 
    tasks: state.tasks.filter(task => task.id !== id) 
  })),
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    )
  })),
  updateTask: (id, newText) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    )
  })),
}));