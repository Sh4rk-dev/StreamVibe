import { ArrowRightIcon } from '@heroicons/react/16/solid';

export function CardCategory() {
  return (
    <div className="rounded-lg border border-Custom-Black-15 bg-Custom-Black-10">
      <div className="p-5">
        <picture>
          <img alt="Image: Category" src="./src/assets/photo/Category.png" />
        </picture>

        <div className="flex flex-row justify-between">
          <h2 className="font-Manrope font-bold text-Custom-Gray-75">Action</h2>
          <ArrowRightIcon className="h-6 w-6 text-Custom-Gray-75 " />
        </div>
      </div>
    </div>
  );
}
