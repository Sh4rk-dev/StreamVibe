import { ClockIcon, FilmIcon } from "@heroicons/react/16/solid";

export function CardNewReleasedShows() {
  return (
    <div className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-10">
      <div className="p-5">
        <picture className="mx-auto">
          <img
            alt="Image: New Released Shows"
            src="./src/assets/photo/NewReleasedShows.png"
          />
        </picture>

        <div className="flex flex-row items-center justify-between pt-5">
          <div className="flex flex-row items-center gap-1 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1.5">
            <ClockIcon className="h-3 w-3 text-Custom-Gray-60" />
            <span className="font-Manrope text-Custom-Gray-60 text-sm">
              12h 23min
            </span>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1.5">
              <FilmIcon className="h-3 w-3 text-Custom-Gray-60" />
              <span className="font-Manrope text-Custom-Gray-60 text-sm">
                5 Season
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
