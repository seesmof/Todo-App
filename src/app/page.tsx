"use client";

import { useState } from "react";

export interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

export default function Page() {
  const [items, setItems] = useState<Todo[]>([
    { id: 0, name: "Finish this app", isDone: false },
    { id: 1, name: "Learn React", isDone: true },
    { id: 2, name: "Learn Next.js", isDone: false },
  ]);

  return (
    <>
      <form className="flex flex-row gap-3 p-3">
        <input className="outline flex-1 px-1" type="text" />
        <button className="outline px-3">Add</button>
      </form>
      <hr />
      <div className="flex flex-col gap-3 p-3">
        {items.map((todo) => (
          <div key={todo.id} className="flex flex-row outline p-3 gap-3">
            <button
              className={`outline px-3 ${todo.isDone ? "bg-green-200" : "bg-sky-200"}`}
            >
              {todo.isDone ? "Done" : "To Do"}
            </button>
            <p>{todo.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
