import { ArrowRightIcon } from "@heroicons/react/16/solid";

export function CardCategory() {
  return (
    <div className="rounded-lg bg-Custom-Black-10 border border-Custom-Black-15">
      <div className="p-7">
        <picture className="mx-auto">
          <img src="./src/assets/Category.png" alt="image" />
        </picture>

        <div className="flex flex-row justify-between">
          <h2 className="text-Custom-Gray-75 font-bold font-Manrope">Action</h2>
          <ArrowRightIcon className="w-6 h-6 text-Custom-Gray-75 " />
        </div>
      </div>
    </div>
  );
}
