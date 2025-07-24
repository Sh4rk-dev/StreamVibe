import { Header } from "@/components/Header/Header";
import { ReviewCard } from "@/components/ReviewCard";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  HandThumbUpIcon,
  PlayIcon,
  PlusIcon,
  SpeakerWaveIcon
} from "@heroicons/react/16/solid";

export default function MoviesInfo() {
  return (
    <>
      <div className="px-40">
        <Header />

        <section className="mb-24.5">
          <div className="flex-1 w-full h-[800px] rounded-t-xl border-t border-Custom-Black-15 ">
            <picture className="inset-0 -z-10 mask-b-from-10%">
              <img
                src="/src/assets/photo/KantaraMovie.png"
                alt="image"
                className="rounded-t-xl"
              />
            </picture>

            <div className="flex flex-col z-10 relative -top-50">
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="font-Manrope font-bold text-white text-4xl">
                  Kantara
                </h1>

                <span className="font-Manrope text-Custom-Gray-60 text-lg">
                  A fiery young man clashes with an unflinching forest officer
                  in a south Indian village where spirituality, fate and
                  folklore rule the lands.
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
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <div className="col-span-2 flex flex-col gap-7.5 ">
              <div className="flex flex-col p-12.5 rounded-xl border gap-3.5 border-Custom-Black-15 bg-Custom-Black-10">
                <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                  Description
                </h1>
                <span className="font-Manrope font-medium text-white">
                  Kantara is a 2022 Indian Kannada-language action thriller film
                  written and directed by Rishab Shetty, who also stars in the
                  lead role. The film is set in a rural village in Karnataka and
                  revolves around the conflict between
                </span>
              </div>

              <div className=" col-start-1 row-start-2 flex flex-col p-12.5 rounded-xl border gap-3.5 border-Custom-Black-15 bg-Custom-Black-10">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="mt-3 font-Manrope font-medium text-Custom-Gray-60">
                    Cast
                  </h1>
                  <div className="flex flex-row items-center gap-3.5 mt-3">
                    <ArrowLeftIcon className="w-13 h-13 text-Custom-Gray-60 bg-Custom-Black-08 border border-Custom-Black-15 rounded-full p-3.5" />
                    <ArrowRightIcon className="w-13 h-13 text-Custom-Gray-60 bg-Custom-Black-08 border border-Custom-Black-15 rounded-full p-3.5" />
                  </div>
                </div>

                <div className="flex flex-row items-centers justify-between mt-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <picture
                      key={i}
                      className="w-25 h-25 rounded-xl justify-between border border-Custom-Black-15"
                    >
                      <img
                        src={`/src/assets/photo/Actor1.png`}
                        alt={`Actor1`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </picture>
                  ))}
                </div>
              </div>

              <div className="col-span-2 col-start-1 row-start-3 flex flex-col p-12.5 bg-Custom-Black-10 rounded-lg border border-Custom-Black-15">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                    Reviews
                  </h1>

                  <button className="flex flex-row items-center gap-2 px-6 py-3.5 bg-Custom-Red-45 text-white rounded-lg mt-4">
                    <PlusIcon className="w-6 h-6 text-white" />
                    <span>Add Your Review</span>
                  </button>
                </div>

                <div className="flex flex-col gap-4 py-10">
                  <ReviewCard
                    name="John Doe"
                    location="New York"
                    rating={4.5}
                    reviewText="This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it."
                  />
                </div>
              </div>
            </div>

            <div className="row-span-1 col-start-3 row-start-1 flex flex-1 flex-col p-12.5 rounded-xl border border-Custom-Black-15 bg-Custom-Black-10">
              <div className="flex flex-1 flex-col gap-3.5">
                <div className="flex flex-row items-center gap-1 mb-3.5">
                  <CalendarIcon className="w-6 h-6 text-Custom-Gray-60" />
                  <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                    Released Year
                  </h1>
                </div>
                <span className="font-Manrope font-medium text-white">
                  2022
                </span>
              </div>

              <div className="">
                <div className=" ">
                  <h1>Available Languages</h1>
                </div>
                <span className="font-Manrope font-medium text-white">
                  English, Spanish, French
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="my-37.5">
          <div className="flex flex-row rounded-lg bg-[url('./assets/photo/Banner-StreamVibe.png')] bg-cover bg-center bg-no-repeat h-[400px] border border-Custom-Black-15">
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
              <h1 className="font-Manrope text-Custom-Gray-60">New Release</h1>
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
              <h1 className="font-Manrope text-Custom-Gray-60">New Release</h1>
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
              <h1 className="font-Manrope text-Custom-Gray-60">Terms of Use</h1>

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
    </>
  );
}
