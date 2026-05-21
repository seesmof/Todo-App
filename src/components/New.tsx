import React from "react";

export interface NewProps {
  handleSubmit: React.SubmitEventHandler<HTMLFormElement>;
}

export default function New({ handleSubmit }: NewProps) {
  return (
    <form className="flex flex-row gap-3 p-3" onSubmit={handleSubmit}>
      <input className="outline flex-1 px-1" type="text" />
      <button className="outline px-3">Add</button>
    </form>
  );
}
