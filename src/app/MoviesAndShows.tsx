import { PlayIcon } from "@heroicons/react/16/solid";
import {
  PlusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SpeakerWaveIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

import { Header } from "@/components/Header/Header";
import { CarouselGenre } from "@/components/Carousel/CarouselGenre";
import { CarouselPopularGenres } from "@/components/Carousel/CarouselPopularGenres";
import { CarouselTrendingNow } from "@/components/Carousel/CarouselTrendingNow";
import { CarouselNewReleases } from "@/components/Carousel/CarouselNewReleases";
import { CarouselMustWatchMovies } from "@/components/Carousel/CarouselMustWatchMovies";

export default function MoviesAndShows() {
  return (
    <div className="px-40">
      <Header />

      <section className="mb-45">
        <div className="flex-1 w-full h-[800px] rounded-t-xl border-t border-Custom-Black-15 ">
          <picture className="inset-0 -z-10 mask-b-from-10%">
            <img
              src="/src/assets/photo/PhotoMovieAvengers.png"
              alt="image"
              className="rounded-t-xl"
            />
          </picture>

          <div className="flex flex-col z-10 relative -top-70">
            <div className="flex flex-col items-center gap-1 text-center px-52">
              <h1 className="font-Manrope font-bold text-white text-4xl">
                Avengers : Endgame
              </h1>

              <span className="font-Manrope text-Custom-Gray-60 text-lg">
                With the help of remaining allies, the Avengers must assemble
                once more in order to undo Thanos's actions and undo the chaos
                to the universe, no matter what consequences may be in store,
                and no matter who they face... Avenge the fallen.
              </span>

              <div className="flex flex-row items-center gap-5 pt-7.5">
                <button className="flex flex-row items-center gap-2 px-6 py-3.5 bg-Custom-Red-45 text-white rounded-lg">
                  <PlayIcon className="w-6 h-6 text-white" />
                  Play Now
                </button>

                <PlusIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />
                <HandThumbUpIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />
                <SpeakerWaveIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />
              </div>
            </div>

            <div className="flex flex-row justify-between items-center px-12.5 pt-10">
              <ArrowLeftIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />

              <div className="flex gap-1 px-3">
                <div className="w-5 h-1 text-5xl rounded-lg bg-Custom-Red-45" />
                <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Black-20" />
                <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Black-20" />
                <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Black-20" />
              </div>

              <ArrowRightIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-45">
        <div className="px-12.5 pt-15 border border-Custom-Black-15 rounded-2xl">
          <span className="font-Manrope font-bold text-white text-1xl">
            Movies
          </span>

          <div className="grid grid-cols-1 gap-25">
            <CarouselGenre />
            <CarouselPopularGenres />
            <CarouselTrendingNow />
            <CarouselNewReleases />
            <CarouselMustWatchMovies />
          </div>
        </div>
      </section>
    </div>
  );
}
