import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

interface AccordionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

interface AccordionContentRootProps {
  children: React.ReactNode;
}

type AccordionContentProps = {
  title: string;
  description: string;
  duration: string;
  position: string;
};

export function Accordion({ children, subtitle, title }: AccordionProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <button
      className="w-full cursor-pointer "
      onClick={() => setIsOpen(!isOpen)}
      type="button"
    >
      <div className="flex flex-1 flex-col items-center justify-between rounded-xl border border-Custom-Black-15 bg-Custom-Black-06 p-8">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between gap-2.5">
            <h1 className="font-Manrope font-medium text-2xl text-white">
              {title}
            </h1>
            <span className="font-Manrope font-medium text-Custom-Gray-60">
              {subtitle}
            </span>
          </div>
          <div>
            {isOpen ? (
              <ArrowDownIcon className="h-10 w-10 rotate-180 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-2.5 text-Custom-Gray-60 transition-transform duration-300" />
            ) : (
              <ArrowDownIcon className="h-10 w-10 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-2.5 text-Custom-Gray-60 transition-transform duration-300" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 w-full transition-all duration-300">
            <AccordionContentRoot>{children}</AccordionContentRoot>
          </div>
        )}
      </div>
    </button>
  );
}

export function AccordionContentRoot({ children }: AccordionContentRootProps) {
  return <div>{children}</div>;
}

export function AccordionContent({
  title,
  description,
  duration,
  position
}: AccordionContentProps) {
  return (
    <div className="mt-10 flex w-full flex-row items-center gap-5 rounded-b-xl border-Custom-Black-15 border-t bg-Custom-Black-06 p-6 py-10">
      <div className="flex-1 pr-5">
        <span className="font-Manrope font-semibold text-3xl text-Custom-Gray-60">
          {position}
        </span>
      </div>

      <picture className="flex h-[178px] w-[422px] items-center justify-center rounded-lg bg-Custom-Black-08">
        <img
          alt="Stranger Things"
          className="h-full w-full rounded-lg object-cover"
          src="/src/assets/photo/ChapterOne_shows.png"
        />
      </picture>

      <div className="flex flex-col">
        <div className=" mb-4 flex flex-row items-center justify-between gap-1">
          <h2 className="font-Manrope font-medium text-white text-xl">
            {title}
          </h2>
          <div className="flex flex-row items-center gap-2 rounded-lg border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1">
            <ClockIcon className="h-5 w-5 text-Custom-Gray-60" />
            <span className="font-Manrope text-Custom-Gray-60">{duration}</span>
          </div>
        </div>

        <p className="font-Manrope text-Custom-Gray-60">{description}</p>
      </div>
    </div>
  );
}
