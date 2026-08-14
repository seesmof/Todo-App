"use client";

import { EditTodoDialog } from "@/components/EditTodoDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo, todoStore } from "@/store/todoStore";
import React, { useState } from "react";

export default function Page() {
  const { todos, add, remove, update } = todoStore();
  const [input, setInput] = useState<string>("");

  const handleNewTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      content: input.trim(),
    };
    add(newTodo);
    setInput("");
  };

  return (
    <>
      <form className="flex flex-row gap-3 p-3" onSubmit={handleNewTodo}>
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
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-row outline rounded outline-gray-300 p-3 justify-between items-center"
            >
              <div className="flex gap-3 items-center">
                <EditTodoDialog todo={todo} update={update} />
                <p>{todo.content}</p>
              </div>
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
