import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function CardMovieGenresPopular() {
  {
    return (
      <div className="rounded-xl bg-Custom-Black-10 border border-Custom-Black-15">
        <div className="p-5">
          <picture className="mx-auto">
            <img src="./src/assets/photo/MoviePopular.png" alt="image" />
          </picture>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="font-Manrope text-white rounded-sm bg-Custom-Red-45 px-3 py-1 font-semibold">
                Top 10 In
              </span>
              <h2 className="text-xl text-white font-Manrope font-semibold">
                Action
              </h2>
            </div>
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    );
  }
}
