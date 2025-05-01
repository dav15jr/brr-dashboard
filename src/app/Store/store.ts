import { create } from 'zustand';

type Task = {
  id: number,
  text: string,
  isComplete: boolean,
};

type Ticket = {
  id: number,
  user: string,
  issue: string,
  description: string,
  status: string,
  created: string,
};

type Store = {
  user: string,
  tasks: Task[],
  tickets: Ticket[],
  setUser: (user: string) => void,
  addTask: (task: Task) => void,
  deleteTask: (id: number) => void,
  toggleTask: (id: number) => void,
  updateTask: (id: number, newText: string) => void,
  setTickets: (tickets: Ticket[]) => void,
  updateTicketStatus: (id: number, newStatus: string) => void,
};

export const useStore =
  create <
  Store >
  ((set) => ({
    user: '',
    tasks: [],
    tickets: [],
    setUser: (user) => set({ user }),
    addTask: (task) =>
      set((state) => ({
        tasks: [...state.tasks, task],
      })),
    deleteTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      })),
    toggleTask: (id) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, isComplete: !task.isComplete } : task
        ),
      })),
    updateTask: (id, newText) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        ),
      })),
    setTickets: (tickets) => set({ tickets }),
    updateTicketStatus: (id, newStatus) =>
      set((state) => ({
        tickets: state.tickets.map((ticket) =>
          ticket.id === id ? { ...ticket, status: newStatus } : ticket
        ),
      })),
  }));
