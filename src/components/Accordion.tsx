import { ArrowDownIcon } from "@heroicons/react/16/solid";
import React from "react";

export function Accordion() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <button className="w-full" onClick={() => setIsOpen(!isOpen)} type="button">
      <div className="mt-10 flex flex-1 flex-row items-center justify-between rounded-xl border border-Custom-Black-15 bg-Custom-Black-06 p-6">
        <div className="flex flex-row items-center gap-2.5">
          <h1 className="font-Manrope font-medium text-2xl text-white">
            Season 01
          </h1>
          <span className="font-Manrope font-medium text-Custom-Gray-60">
            9 Episodes
          </span>
        </div>

        <div>
          <ArrowDownIcon className="h-10 w-10 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-2.5 text-Custom-Gray-60" />
        </div>
      </div>
    </button>
  );
}
78;
