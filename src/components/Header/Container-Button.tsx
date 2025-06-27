import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/24/outline";

export function ContainerButton() {
  return (
    <>
      <div className="flex p-1.5 bg-Custom-Black-06 rounded-xl border-2 border-Custom-Black-20 ">
        <div className="flex gap-5 text-Custom-Gray-75 items-center">
          <p className="px-5 py-3 bg-Custom-Black-10 rounded-lg">Home</p>
          <p>Movies & Shows</p>
          <p>Support</p>
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <MagnifyingGlassIcon className="w-6 h-6 text-Custom-Gray-75" />
        <BellIcon className="w-6 h-6 text-Custom-Gray-75" />
      </div>
    </>
  );
}
