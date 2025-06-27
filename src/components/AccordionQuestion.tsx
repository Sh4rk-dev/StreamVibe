import { PlusIcon } from "@heroicons/react/24/outline";

export function AccordionQuestion() {
  return (
    <div className="flex gap-5 items-center justify-between pb-7 px-5">
      <div className="flex flex-row w-[58px] h-[58px] items-center justify-center border border-Custom-Black-15 rounded-xl bg-Custom-Black-12">
        <h1 className="font-Manrope text-xl text-white">01</h1>
      </div>

      <div className="flex flex-1">
        <h1 className="font-Manrope text-white">What is StreamVibe?</h1>
      </div>

      <PlusIcon className="w-6 h-6 text-white" />
    </div>
  );
}
