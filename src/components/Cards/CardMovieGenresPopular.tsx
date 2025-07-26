import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function CardMovieGenresPopular() {
  return (
    <div className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-10">
      <div className="p-5">
        <picture className="mx-auto">
          <img
            alt="Image: Movie Popular"
            src="./src/assets/photo/MoviePopular.png"
          />
        </picture>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="rounded-sm bg-Custom-Red-45 px-3 py-1 font-Manrope font-semibold text-white">
              Top 10 In
            </span>
            <h2 className="font-Manrope font-semibold text-white text-xl">
              Action
            </h2>
          </div>
          <ArrowRightIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}
