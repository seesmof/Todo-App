import { create } from "zustand";

export type Todo = {
  id: string;
  content: string;
};

type TodoStoreProps = {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: string) => void;
  update: (todo: Partial<Todo>) => void;
};

export const todoStore = create<TodoStoreProps>((set) => ({
  todos: [{ id: "1", content: "Finish this app." }],
  add: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  remove: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  update: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)),
    })),
}));
