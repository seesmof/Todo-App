"use client";

import { Todo } from "@/store/todoStore";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

export function EditTodoDialog({
  todo,
  update,
}: {
  todo: Todo;
  update: (todo: Partial<Todo>) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>(todo.content);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setContent(todo.content);
      }}
    >
      <DialogTrigger render={<Button variant={"outline"}>Edit</Button>} />
      <DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const next = content.trim();
            if (!next) return;
            update({ id: todo.content, content: next });
            setOpen(false);
          }}
        >
          <Field>
            <FieldLabel htmlFor={`content-${todo.id}`}>Todo content</FieldLabel>
            <Input
              id={`content-${todo.id}`}
              value={content}
              onChange={(e) => {
                const next = e.target.value;
                setContent(next);
                update({ id: todo.id, content: next });
              }}
            />
          </Field>

          <DialogFooter>
            <Button
              type="button"
              variant={"outline"}
              onCanPlay={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
