"use client";

import New from "@/components/New";
import { SubmitEventHandler } from "react";

const handleSubmit = (e: SubmitEventHandler<HTMLFormElement>) => {
  e.preventDefault();
};

export default function Page() {
  return <New handleSubmit={handleSubmit} />;
}
