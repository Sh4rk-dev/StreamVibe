import { PlayIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

import {
  PlusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SpeakerWaveIcon,
  HandThumbUpIcon
} from "@heroicons/react/24/outline";

import { Header } from "@/components/Header/Header";
import { CarouselGenre } from "@/components/Carousel/CarouselGenre";
import { CarouselPopularGenres } from "@/components/Carousel/CarouselPopularGenres";
import { CarouselTrendingNow } from "@/components/Carousel/CarouselTrendingNow";
import { CarouselNewReleases } from "@/components/Carousel/CarouselNewReleases";
import { CarouselMustWatchMovies } from "@/components/Carousel/CarouselMustWatchMovies";
import { CarouselTrendingShowsNow } from "@/components/Carousel/CarouselTrendingShowsNow";
import { CarouselNewReleasesShows } from "@/components/Carousel/CarouselNewReleasedShows";
import { CarouselMustWatchShows } from "@/components/Carousel/CarouselMustWatchShows";

export default function MoviesAndShows() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="px-40">
          <Header />

          <section className="mb-75">
            <div className="flex-1 w-full h-[800px] rounded-t-xl border-t border-Custom-Black-15 ">
              <picture className="inset-0 -z-10 mask-b-from-10%">
                <img
                  src="/src/assets/photo/PhotoMovieAvengers.png"
                  alt="image"
                  className="rounded-t-xl"
                />
              </picture>

              <div className="flex flex-col z-10 relative -top-80">
                <div className="flex flex-col items-center gap-1 text-center px-52">
                  <h1 className="font-Manrope font-bold text-white text-4xl">
                    Avengers : Endgame
                  </h1>

                  <span className="font-Manrope text-Custom-Gray-60 text-lg">
                    With the help of remaining allies, the Avengers must
                    assemble once more in order to undo Thanos's actions and
                    undo the chaos to the universe, no matter what consequences
                    may be in store, and no matter who they face... Avenge the
                    fallen.
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

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
          >
            <section className="mb-45">
              <div className="px-12.5 pt-15 border border-Custom-Black-15 rounded-2xl">
                <span className="relative -top-17 py-2.5 px-6 bg-Custom-Red-45 rounded-lg font-Manrope font-semibold text-white text-xl">
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
          >
            <section className="mb-45">
              <div className="px-12.5 pt-15 border border-Custom-Black-15 rounded-2xl">
                <span className="relative -top-17 py-2.5 px-6 bg-Custom-Red-45 rounded-lg font-Manrope font-semibold text-white text-xl">
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
          >
            <section className="mb-37.5">
              <div className="flex flex-row rounded-lg bg-[url('./src/assets/photo/Banner-StreamVibe.png')] bg-cover bg-center bg-no-repeat h-[400px] border border-Custom-Black-15">
                <div className="flex items-center justify-between gap-20 px-20">
                  <div className="flex flex-col gap-3.5 ">
                    <h1 className="text-5xl font-Manrope font-bold text-white">
                      Start your free trial today!
                    </h1>

                    <span className="font-Manrope text-Custom-Gray-60">
                      This is a clear and concise call to action that encourages
                      users to sign up for a free trial of StreamVibe.
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex justify-around items-center">
                  <button className="px-6 py-4 rounded-lg bg-Custom-Red-45 text-white">
                    Start a Free Trail
                  </button>
                </div>
              </div>
            </section>
          </motion.section>
        </div>

        <footer className="pt-25 bg-Custom-Black-06 px-40">
          <div className="grid grid-cols-6 grid-rows-1 gap-7.5 pb-25">
            <div>
              <h1 className="font-bold font-Manrope text- text-white mb-3">
                Home
              </h1>
              <div className="flex flex-col gap-3.5">
                <h1 className="font-Manrope text-Custom-Gray-60">Categories</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">Devices</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">Pricing</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">FAQ</h1>
              </div>
            </div>

            <div>
              <h1 className="font-bold font-Manrope text- text-white mb-3">
                Movies
              </h1>
              <div className="flex flex-col gap-3.5">
                <h1 className="font-Manrope text-Custom-Gray-60">Gernes</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">Trending</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">
                  New Release
                </h1>
                <h1 className="font-Manrope text-Custom-Gray-60">Popular</h1>
              </div>
            </div>

            <div>
              <h1 className="font-bold font-Manrope text- text-white mb-3">
                Shows
              </h1>
              <div className="flex flex-col gap-3.5">
                <h1 className="font-Manrope text-Custom-Gray-60">Gernes</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">Trending</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">
                  New Release
                </h1>
                <h1 className="font-Manrope text-Custom-Gray-60">Popular</h1>
              </div>
            </div>

            <div>
              <h1 className="font-bold font-Manrope text- text-white mb-3">
                Support
              </h1>
              <div>
                <h1 className="font-Manrope text-Custom-Gray-60">Contact Us</h1>
              </div>
            </div>

            <div>
              <h1 className="font-bold font-Manrope text- text-white mb-3">
                Subscription
              </h1>
              <div className="flex flex-col gap-3.5">
                <h1 className="font-Manrope text-Custom-Gray-60">Plans</h1>
                <h1 className="font-Manrope text-Custom-Gray-60">Features</h1>
              </div>
            </div>

            <div>
              <div className="gap-3.5">
                <h1 className="font-bold font-Manrope text- text-white mb-3">
                  Connect With Us
                </h1>
              </div>
              <div className="flex flex-row gap-3.5">
                <picture className=" p-4 rounded-lg border border-Custom-Black-15 bg-Custom-Black-10">
                  <img src="./src/assets/icons/FacebookIcon.svg" />
                </picture>
                <picture className=" p-4 rounded-lg border border-Custom-Black-15 bg-Custom-Black-10">
                  <img src="./src/assets/icons/TwitterIcon.svg" />
                </picture>
                <picture className=" p-4 rounded-lg border border-Custom-Black-15 bg-Custom-Black-10">
                  <img src="./src/assets/icons/LinkedInIcon.svg" />
                </picture>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between pt-4 pb-12.5 border-t border-Custom-Black-15 ">
            <div className="">
              <h1 className="font-Manrope text-Custom-Gray-60">
                @2023 streamvib, All Rights Reserved
              </h1>
            </div>

            <div className="">
              <div className="flex flex-row gap-3.5 items-center">
                <h1 className="font-Manrope text-Custom-Gray-60">
                  Terms of Use
                </h1>

                <div className="h-4 w-px bg-Custom-Gray-60/50" />

                <h1 className="font-Manrope text-Custom-Gray-60">
                  Privacy Policy
                </h1>

                <div className="h-4 w-px bg-Custom-Gray-60/50" />

                <h1 className="font-Manrope text-Custom-Gray-60">
                  Cookie Policy
                </h1>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
