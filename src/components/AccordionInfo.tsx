import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface AccordionInfoProps {
  id: string;
  title: string;
  indexNumber: number;
  children: React.ReactNode;
}

interface AccordionInfoContentRootProps {
  children: React.ReactNode;
}

export function AccordionInfo({
  title,
  indexNumber,
  children,
}: AccordionInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex-col flex items-center gap-5 p-5">
        <button
          className="w-full"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <div className="w-full flex flex-row items-center justify-between">
            <div className=" flex flex-row items-center gap-5">
              <div className=" flex h-[58px] w-[58px] flex-row items-center justify-center rounded-xl border border-Custom-Black-15 bg-Custom-Black-12">
                <h1 className="font-Manrope text-white text-xl">
                  0{indexNumber}
                </h1>
              </div>

              <h1 className="font-Manrope text-white">{title}</h1>
            </div>

            <div>
              {isOpen ? (
                <MinusIcon className="h-6 w-6 text-white transition-transform duration-300" />
              ) : (
                <PlusIcon className="h-6 w-6 text-white transition-transform duration-300" />
              )}
            </div>
          </div>
        </button>
      </div>
      {isOpen && (
        <div className=" pl-20 transition-all duration-300">
          <AccordionInfoContentRoot>{children}</AccordionInfoContentRoot>
        </div>
      )}
    </div>
  );
}

export function AccordionInfoContentRoot({
  children,
}: AccordionInfoContentRootProps) {
  return <div>{children}</div>;
}

export function AccordionInfoContent() {
  return (
    <div className="flex flex-row items-center gap-5 px-5 transition-discrete">
      <span className="flex text-start mb-7.5 font-Manrope text-Custom-Gray-60">
        StreamVibe is a streaming service that allows you to watch movies and
        shows on demand.
      </span>
    </div>
  );
}
