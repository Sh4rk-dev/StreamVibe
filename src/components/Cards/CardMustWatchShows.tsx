import { StarIcon } from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/16/solid";

export function CardMustWatchShows() {
  {
    return (
      <div className="rounded-xl bg-Custom-Black-10 border border-Custom-Black-15">
        <div className="p-5">
          <picture className="mx-auto">
            <img src="./src/assets/photo/MustWatchShows.png" alt="image" />
          </picture>

          <div className="flex flex-row justify-between items-center pt-5">
            <div className="flex flex-row items-center px-2.5 py-1.5 gap-1 rounded-full bg-Custom-Black-08 border border-Custom-Black-15">
              <ClockIcon className="w-4 h-4 text-Custom-Gray-60" />
              <span className="font-Manrope text-Custom-Gray-60">
                12h 23min
              </span>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center px-2.5 py-1.5 gap-0.5 rounded-full bg-Custom-Black-08 border border-Custom-Black-15">
                <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                <StarIcon className="w-4 h-4 text-Custom-Gray-60" />

                <span className="font-Manrope text-Custom-Gray-60">28k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
