import { ClockIcon, FilmIcon } from "@heroicons/react/16/solid";

export function CardTrendingShowsNow() {
  {
    return (
      <div className="rounded-xl bg-Custom-Black-10 border border-Custom-Black-15">
        <div className="p-5">
          <picture className="mx-auto">
            <img src="./src/assets/photo/TrendingShowsNow.png" alt="image" />
          </picture>

          <div className="flex flex-row justify-between items-center pt-5">
            <div className="flex flex-row items-center px-2.5 py-1.5 gap-1 rounded-full bg-Custom-Black-08 border border-Custom-Black-15">
              <ClockIcon className="w-3 h-3 text-Custom-Gray-60" />
              <span className="font-Manrope text-sm text-Custom-Gray-60">
                8h 20min
              </span>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center px-2.5 py-1.5 gap-1 rounded-full bg-Custom-Black-08 border border-Custom-Black-15">
                <FilmIcon className="w-3 h-3 text-Custom-Gray-60" />
                <span className="font-Manrope text-sm text-Custom-Gray-60">
                  4 Season
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
