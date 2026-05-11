"use client";

import { useState } from "react";

export interface Todo {
  name: string;
  isDone: boolean;
}

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([
    { name: "Finish this app.", isDone: false },
    { name: "Do something else.", isDone: true },
  ]);

  return (
    <div className="min-h-screen bg-sky-50 p-3 flex gap-3 flex-col">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow p-3 flex flex-col gap-2"
        >
          <h2 className="font-bold">{todo.name}</h2>
          <button
            className={`${todo.isDone ? "bg-green-500/30" : "bg-blue-500/30"} w-min px-2 rounded-md `}
          >
            {todo.isDone ? "Done" : "Pending"}
          </button>
        </div>
      ))}
    </div>
  );
}
