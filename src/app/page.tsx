"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Todo, todoStore } from "@/store/todoStore";
import React, { useState } from "react";

export default function Page() {
  const { todos, add, remove, update } = todoStore();
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
              <div className="flex gap-3 items-center">
                <Dialog>
                  <DialogTrigger
                    render={<Button variant={"outline"}>Edit</Button>}
                  />
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit your todo here.</DialogTitle>
                    </DialogHeader>
                    <Field>
                      <FieldLabel htmlFor="content">Todo content</FieldLabel>
                      <Input id="content" placeholder="Todo content here..." />
                    </Field>
                    <DialogFooter>
                      <Button type="submit">Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
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
