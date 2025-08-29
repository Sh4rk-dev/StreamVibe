import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  HandThumbUpIcon,
  LanguageIcon,
  PlayIcon,
  PlusIcon,
  SpeakerWaveIcon,
  StarIcon,
} from '@heroicons/react/16/solid';
import {
  Squares2X2Icon,
  StarIcon as StarIconSolid,
} from '@heroicons/react/24/outline';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Header';
import { PromoBanner } from '@/components/PromoBanner';
import { Review } from '@/components/ReviewCard';

export default function MoviesInfo() {
  return (
    <>
      <div className="px-40">
        <Header />

        <section className="mb-24.5">
          <div className="h-[800px] flex-1 rounded-t-xl border-Custom-Black-15 border-t ">
            <picture className="-z-10 mask-b-from-10% inset-0">
              <img
                alt="Kantara Movie Background"
                className="h-full w-full rounded-t-xl object-cover"
                src="/src/assets/photo/KantaraMovie.png"
              />
            </picture>

            <div className="-top-50 relative z-10 flex flex-col">
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="font-Manrope font-bold text-4xl text-white">
                  Kantara
                </h1>

                <span className="font-Manrope text-Custom-Gray-60 text-lg">
                  A fiery young man clashes with an unflinching forest officer
                  in a south Indian village where spirituality, fate and
                  folklore rule the lands.
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
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <div className="col-span-2 flex flex-col gap-7.5 ">
              <div className="flex flex-col gap-3.5 rounded-xl border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
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

              <div className=" col-start-1 row-start-2 flex flex-col gap-3.5 rounded-xl border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="mt-3 font-Manrope font-medium text-Custom-Gray-60">
                    Cast
                  </h1>
                  <div className="mt-3 flex flex-row items-center gap-3.5">
                    <ArrowLeftIcon className="h-13 w-13 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-3.5 text-Custom-Gray-60" />
                    <ArrowRightIcon className="h-13 w-13 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-3.5 text-Custom-Gray-60" />
                  </div>
                </div>

                <div className="items-centers mt-3 flex flex-row justify-between">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <picture
                      className="h-25 w-25 justify-between rounded-xl border border-Custom-Black-15"
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={i}
                    >
                      <img
                        alt={'Actor1'}
                        className="h-full w-full rounded-xl object-cover"
                        src={'/src/assets/photo/Actor1.png'}
                      />
                    </picture>
                  ))}
                </div>
              </div>

              <Review>
                <Review.Header nameButton="Add Your Review" title="Reviews" />
                <Review.Card
                  location="India"
                  name="Aniket Roy"
                  rating={4.5}
                  reviewText="This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.m"
                />
                <Review.Arrow />
              </Review>
            </div>

            <div className="col-start-3 row-span-1 row-start-1 flex flex-1 flex-col rounded-xl border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
              <div className="mb-7.5">
                <div className="flex flex-1 flex-col gap-3.5">
                  <div className="flex flex-row items-center gap-1 ">
                    <CalendarIcon className="h-6 w-6 text-Custom-Gray-60" />
                    <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                      Released Year
                    </h1>
                  </div>
                  <span className="font-Manrope font-medium text-white">
                    2022
                  </span>
                </div>
              </div>

              <div className="mb-7.5 flex flex-col gap-3.5">
                <div className="flex flex-row gap-1">
                  <LanguageIcon className="h-6 w-6 text-Custom-Gray-60" />
                  <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                    Available Languages
                  </h1>
                </div>

                <div className="flex flex-row flex-wrap gap-2.5">
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    English
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Hindi
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Tamil
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Telegu
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Kannada
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Espanhol
                  </span>
                </div>
              </div>

              <div className="mb-7.5 flex flex-col gap-3.5">
                <div className="mt-6 flex flex-row items-center gap-1">
                  <StarIconSolid className="h-6 w-6 text-Custom-Gray-60" />
                  <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                    Ratings
                  </h1>
                </div>

                <div className="mt-3 flex flex-1 flex-row items-center gap-3">
                  <div className="flex-1 rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 p-4">
                    <span className="pl-2.5 font-Manrope font-bold text-white">
                      IMDb
                    </span>
                    <div className="flex flex-row items-center gap-0.5 px-2.5 py-1.5">
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Gray-60" />
                      <span className="font-Manrope text-Custom-Gray-60 text-xl">
                        4.5
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 p-4">
                    <span className="pl-2.5 font-Manrope font-bold text-white">
                      Streamvibe
                    </span>
                    <div className="flex flex-row items-center gap-0.5 px-2.5 py-1.5">
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <StarIcon className="h-6 w-6 text-Custom-Red-45" />
                      <span className="font-Manrope text-Custom-Gray-60 text-xl">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-7.5 flex flex-col gap-3.5">
                <div className="mt-6 flex flex-row items-center gap-1">
                  <Squares2X2Icon className="h-6 w-6 text-Custom-Gray-60" />
                  <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                    Genres
                  </h1>
                </div>

                <div className="mt-2 flex flex-row items-center gap-2">
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Action
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Adventure
                  </span>
                </div>
              </div>

              <div className="mb-7.5 flex flex-col gap-3.5">
                <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                  Director
                </h1>

                <div className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 p-3.5">
                  <div className="flex flex-row items-center gap-2">
                    <picture className="h-15 w-15 justify-between rounded-xl border border-Custom-Black-15">
                      <img
                        alt={'Actor1'}
                        className="h-full w-full rounded-xl object-cover"
                        src={'/src/assets/photo/Actor1.png'}
                      />
                    </picture>
                    <div className="flex flex-col items-start">
                      <span className="font-Manrope font-medium text-white">
                        Rishab Shetty
                      </span>
                      <span className="font-Manrope font-medium text-Custom-Gray-60">
                        From India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-7.5 flex flex-col gap-3.5">
                <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                  Music
                </h1>

                <div className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 p-3.5">
                  <div className="flex flex-row items-center gap-2">
                    <picture className="h-15 w-15 justify-between rounded-xl border border-Custom-Black-15">
                      <img
                        alt={'Actor1'}
                        className="h-full w-full rounded-xl object-cover"
                        src={'/src/assets/photo/ProductMusic.png'}
                      />
                    </picture>
                    <div className="flex flex-col items-start">
                      <span className="font-Manrope font-medium text-white">
                        B. Ajaneesh Loknath
                      </span>
                      <span className="font-Manrope font-medium text-Custom-Gray-60">
                        From India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PromoBanner />
      </div>

      <Footer />
    </>
  );
}
