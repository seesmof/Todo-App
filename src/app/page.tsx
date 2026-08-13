"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo, todoStore } from "@/store/todoStore";
import React, { useState } from "react";

export default function Page() {
  const { todos, add, remove } = todoStore();
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (input === "") return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      content: input,
    };
    add(newTodo);

    setInput("");
  };

  return (
    <>
      <form className="flex flex-row gap-3 p-3" onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
          type="text"
          placeholder="Your task here..."
        />
        <Button type="submit">Add</Button>
      </form>
      <div className="flex flex-col gap-3 p-3">
        {todos && todos.length > 0 ? (
          todos.map((todo, index) => (
            <div
              key={index}
              className="flex flex-row outline rounded outline-gray-300 p-3 justify-between items-center"
            >
              <p>{todo.content}</p>
              <Button variant={"destructive"} onClick={() => remove(todo.id)}>
                Delete
              </Button>
            </div>
          ))
        ) : (
          <p>No todos items yet...</p>
        )}
      </div>
    </>
  );
}
