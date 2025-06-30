import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { CardNewReleasedShows } from "@/components/Cards/CardNewReleasedShows";

export function CarouselNewReleasesShows() {
  {
    return (
      <div>
        <div className="flex flex-row justify-between items-center pb-12.5">
          <div>
            <h1 className="font-Manrope text-white text-4xl font-bold">
              New Released Shows
            </h1>
          </div>

          <div className="flex flex-row items-center p-4 bg-Custom-Black-06 rounded-xl">
            <button className="bg-Custom-Black-10 rounded-lg p-3">
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </button>

            <div className="flex gap-1 px-3">
              <div className="w-5 h-1 text-5xl rounded-lg bg-Custom-Red-45" />
              <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Gray-60" />
              <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Gray-60" />
              <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Gray-60" />
            </div>

            <button className="bg-Custom-Black-10 rounded-lg p-3">
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="flex-row grid grid-cols-5 grid-rows-1 gap-7.5">
          <CardNewReleasedShows />
          <CardNewReleasedShows />
          <CardNewReleasedShows />
          <CardNewReleasedShows />
          <CardNewReleasedShows />
        </div>
      </div>
    );
  }
}
