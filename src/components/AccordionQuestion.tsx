import { PlusIcon } from "@heroicons/react/24/outline";

export function AccordionQuestion() {
  return (
    <div className="flex items-center justify-between gap-5 px-5 pb-7">
      <div className="flex h-[58px] w-[58px] flex-row items-center justify-center rounded-xl border border-Custom-Black-15 bg-Custom-Black-12">
        <h1 className="font-Manrope text-white text-xl">01</h1>
      </div>

      <div className="flex flex-1">
        <h1 className="font-Manrope text-white">What is StreamVibe?</h1>
      </div>

      <PlusIcon className="h-6 w-6 text-white" />
    </div>
  );
}
