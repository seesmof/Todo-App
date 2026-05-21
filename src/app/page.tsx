"use client";

import React, { useState } from "react";

export interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

let lastId = 3;

export default function Page() {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<Todo[]>([
    { id: 0, name: "Finish this app", isDone: false },
    { id: 1, name: "Learn React", isDone: true },
    { id: 2, name: "Learn Next.js", isDone: false },
  ]);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (input === "") return;
    setItems([...items, { id: lastId++, name: input, isDone: false }]);
    setInput("");
  };

  // Code taken from: https://dev.to/joelynn/how-to-build-a-react-crud-todo-app-delete-todo-3jl1
  const handleDelete = (id: number) => {
    const removedItem = items.filter((todo) => {
      return todo.id !== id;
    });
    setItems(removedItem);
  };

  return (
    <>
      <form className="flex flex-row gap-3 p-3" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline flex-1 px-1"
          type="text"
        />
        <button className="outline cursor-pointer px-3">Add</button>
      </form>
      <hr />
      <div className="flex flex-col gap-3 p-3">
        {items && items.length > 0 ? (
          items.map((todo, index) => (
            <div
              key={index}
              className="flex flex-row outline p-3 justify-between"
            >
              <p>{todo.name}</p>
              <button
                className="outline px-3 cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No todos items yet...</p>
        )}
      </div>
    </>
  );
}
