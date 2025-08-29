import { PlayIcon } from '@heroicons/react/16/solid';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HandThumbUpIcon,
  PlusIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { CarouselGenre } from '@/components/Carousel/CarouselGenre';
import { CarouselMustWatchMovies } from '@/components/Carousel/CarouselMustWatchMovies';
import { CarouselMustWatchShows } from '@/components/Carousel/CarouselMustWatchShows';
import { CarouselNewReleasesShows } from '@/components/Carousel/CarouselNewReleasedShows';
import { CarouselNewReleases } from '@/components/Carousel/CarouselNewReleases';
import { CarouselPopularGenres } from '@/components/Carousel/CarouselPopularGenres';
import { CarouselTrendingNow } from '@/components/Carousel/CarouselTrendingNow';
import { CarouselTrendingShowsNow } from '@/components/Carousel/CarouselTrendingShowsNow';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Header';
import { PromoBanner } from '@/components/PromoBanner';

export default function MoviesAndShows() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="w-full">
        <Header />

        <section className="mb-75 px-10 lg:px-40">
          <div className="relative h-[500px] overflow-hidden rounded-t-xl border-Custom-Black-15 border-t lg:h-[800px]">
            <div className='mask-b-from-10% -z-10 absolute inset-0 bg-[url("/src/assets/photo/PhotoMovieAvengers.png")] bg-center bg-no-repeat' />

            <div className="flex h-full flex-col justify-end">
              <div className="flex flex-col items-center gap-1 px-52 text-center">
                <h1 className="font-Manrope font-bold text-4xl text-white">
                  Avengers : Endgame
                </h1>

                <span className="hidden font-Manrope text-Custom-Gray-60 text-lg xl:block">
                  With the help of remaining allies, the Avengers must assemble
                  once more in order to undo Thanos's actions and undo the chaos
                  to the universe, no matter what consequences may be in store,
                  and no matter who they face... Avenge the fallen.
                </span>

                <div className="flex flex-row items-center gap-5 pt-7.5">
                  <button
                    className="hidden flex-row items-center gap-2 rounded-lg bg-Custom-Red-45 px-6 py-3.5 text-white xl:flex"
                    type="button"
                  >
                    <PlayIcon className="h-6 w-6 text-white" />
                    Play Now
                  </button>

                  <PlusIcon className="h-14 w-14 rounded-lg border border-Custom-Black-15 bg-Custom-Black-06 p-3.5 text-white" />
                  <HandThumbUpIcon className="h-14 w-14 rounded-lg border border-Custom-Black-15 bg-Custom-Black-06 p-3.5 text-white" />
                  <SpeakerWaveIcon className="h-14 w-14 rounded-lg border border-Custom-Black-15 bg-Custom-Black-06 p-3.5 text-white" />
                </div>
              </div>

              <div className="hidden flex-row items-center justify-between px-12.5 pt-10 xl:flex">
                <ArrowLeftIcon className="h-14 w-14 rounded-lg border border-Custom-Black-15 bg-Custom-Black-06 p-3.5 text-white" />

                <div className="flex gap-1 px-3">
                  <div className="h-1 w-5 rounded-lg bg-Custom-Red-45 text-5xl" />
                  <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
                  <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
                  <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
                </div>

                <ArrowRightIcon className="h-14 w-14 rounded-lg border border-Custom-Black-15 bg-Custom-Black-06 p-3.5 text-white" />
              </div>
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <section className="mb-45 px-10 lg:px-40">
            <div className="rounded-2xl border border-Custom-Black-15 px-12.5 pt-15">
              <span className="-top-17 relative rounded-lg bg-Custom-Red-45 px-6 py-2.5 font-Manrope font-semibold text-white text-xl">
                Movies
              </span>

              <div className="grid grid-cols-1 gap-25 overflow-hidden pb-12.5">
                <CarouselGenre />
                <CarouselPopularGenres />
                <CarouselTrendingNow />
                <CarouselNewReleases />
                <CarouselMustWatchMovies />
              </div>
            </div>
          </section>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <section className="mb-45 px-10 lg:px-40">
            <div className="rounded-2xl border border-Custom-Black-15 px-12.5 pt-15">
              <span className="-top-17 relative rounded-lg bg-Custom-Red-45 px-6 py-2.5 font-Manrope font-semibold text-white text-xl">
                Shows
              </span>

              <div className="grid grid-cols-1 gap-25 overflow-hidden pb-12.5">
                <CarouselGenre />
                <CarouselPopularGenres />
                <CarouselTrendingShowsNow />
                <CarouselNewReleasesShows />
                <CarouselMustWatchShows />
              </div>
            </div>
          </section>
        </motion.section>

        <PromoBanner />
      </div>

      <Footer />
    </motion.div>
  );
}
