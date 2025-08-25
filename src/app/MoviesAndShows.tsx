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

export default function MoviesAndShows() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="px-40">
        <Header />
        <section className="mb-75">
          <div className="h-[800px] w-full flex-1 rounded-t-xl border-Custom-Black-15 border-t ">
            <picture className="-z-10 mask-b-from-10% inset-0">
              <img
                alt="Avengers: Endgame"
                className="rounded-t-xl object-cover"
                src="/src/assets/photo/PhotoMovieAvengers.png"
              />
            </picture>

            <div className="-top-80 relative flex flex-col">
              <div className="flex flex-col items-center gap-1 px-52 text-center">
                <h1 className="font-Manrope font-bold text-4xl text-white">
                  Avengers : Endgame
                </h1>

                <span className="font-Manrope text-Custom-Gray-60 text-lg">
                  With the help of remaining allies, the Avengers must assemble
                  once more in order to undo Thanos's actions and undo the chaos
                  to the universe, no matter what consequences may be in store,
                  and no matter who they face... Avenge the fallen.
                </span>

                <div className="flex flex-row items-center gap-5 pt-7.5">
                  <button
                    className="flex flex-row items-center gap-2 rounded-lg bg-Custom-Red-45 px-6 py-3.5 text-white"
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

              <div className="flex flex-row items-center justify-between px-12.5 pt-10">
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
          <section className="mb-45">
            <div className="rounded-2xl border border-Custom-Black-15 px-12.5 pt-15">
              <span className="-top-17 relative rounded-lg bg-Custom-Red-45 px-6 py-2.5 font-Manrope font-semibold text-white text-xl">
                Movies
              </span>

              <div className="grid grid-cols-1 gap-25 pb-12.5">
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
          <section className="mb-45">
            <div className="rounded-2xl border border-Custom-Black-15 px-12.5 pt-15">
              <span className="-top-17 relative rounded-lg bg-Custom-Red-45 px-6 py-2.5 font-Manrope font-semibold text-white text-xl">
                Shows
              </span>

              <div className="grid grid-cols-1 gap-25 pb-12.5">
                <CarouselGenre />
                <CarouselPopularGenres />
                <CarouselTrendingShowsNow />
                <CarouselNewReleasesShows />
                <CarouselMustWatchShows />
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
          <section className="mb-37.5">
            <div className="flex h-[400px] flex-row rounded-lg border border-Custom-Black-15 bg-[url('./src/assets/photo/Banner-StreamVibe.png')] bg-center bg-cover bg-no-repeat">
              <div className="flex items-center justify-between gap-20 px-20">
                <div className="flex flex-col gap-3.5 ">
                  <h1 className="font-Manrope font-bold text-5xl text-white">
                    Start your free trial today!
                  </h1>

                  <span className="font-Manrope text-Custom-Gray-60">
                    This is a clear and concise call to action that encourages
                    users to sign up for a free trial of StreamVibe.
                  </span>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-around">
                <button
                  className="rounded-lg bg-Custom-Red-45 px-6 py-4 text-white"
                  type="button"
                >
                  Start a Free Trail
                </button>
              </div>
            </div>
          </section>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}
