import { create } from "zustand";

export type Todo = {
  id: string;
  content: string;
};

type TodoStoreProps = {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: string) => void;
};

export const todoStore = create<TodoStoreProps>((set) => ({
  todos: [],
  add: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  remove: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
