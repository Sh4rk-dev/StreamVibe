import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HandThumbUpIcon,
  PlayIcon,
  PlusIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/16/solid';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Header';
import { Review } from '@/components/ReviewCard';
import { SeasonEpisodes } from '@/components/SeasonEpisodes';
import { ShowDetails } from '@/components/ShowDetails';

export default function ShowInfo() {
  return (
    <>
      <div className="px-40">
        <Header />

        <section className="mb-24.5">
          <div className="h-[800px] flex-1 rounded-t-xl border-Custom-Black-15 border-t ">
            <picture className="-z-10 mask-b-from-10% inset-0">
              <img
                alt="Stranger Things Background"
                className="h-full w-full rounded-t-xl object-cover"
                src="/src/assets/photo/ShowStrangerThings.png"
              />
            </picture>

            <div className="-top-50 relative z-10 flex flex-col">
              <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="font-Manrope font-bold text-4xl text-white">
                  Stranger Things
                </h1>

                <span className="font-Manrope text-Custom-Gray-60 text-lg">
                  When a young boy vanishes, a small town uncovers a mystery
                  involving secret experiments, terrifying supernatural forces
                  and one strange little girl.
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
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 flex flex-col gap-7.5 ">
              <div className="col-span-2 row-span-1 row-start-1 rounded-xl border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
                <h1 className="font-Manrope font-bold text-4xl text-white">
                  Seasons and Episodes
                </h1>
                <div className="mt-6 flex flex-col">
                  <SeasonEpisodes>
                    <SeasonEpisodes.Root season="Season 01" totalEpisodes={8} />
                    <SeasonEpisodes.Content
                      description="A young boy vanishes, and a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
                      duration="47 min"
                      position="01"
                      title="Chapter One: The Vanishing of Will Byers"
                      url="/src/assets/photo/ChapterOne_shows.png"
                    />
                    <SeasonEpisodes.Content
                      description="A young boy vanishes, and a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
                      duration="47 min"
                      position="01"
                      title="Chapter One: The Vanishing of Will Byers"
                      url="/src/assets/photo/ChapterOne_shows.png"
                    />
                  </SeasonEpisodes>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 rounded-xl border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
                <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                  Description
                </h1>
                <span className="font-Manrope font-medium text-white">
                  When a young boy vanishes, a small town uncovers a mystery
                  involving secret experiments, terrifying supernatural forces
                  and one strange little girl.
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
                        alt={'Actor2'}
                        className="h-full w-full rounded-xl object-cover"
                        src={'/src/assets/photo/Actor2.png'}
                      />
                    </picture>
                  ))}
                </div>
              </div>

              <Review>
                <Review.Header nameButton="Add Your Review" title="Reviews" />
                <Review.Card
                  location="Kantara"
                  name="Kantara"
                  rating={4.5}
                  reviewText="Kantara is a 2022 Indian Kannada-language action thriller film"
                />
                <Review.Arrow />
              </Review>
            </div>

            <ShowDetails>
              <ShowDetails.Released title="Released Year" year="2022" />

              <ShowDetails.AvailableRoot title="Available Languages">
                <ShowDetails.AvailableLanguage textLanguage="English" />
                <ShowDetails.AvailableLanguage textLanguage="Hindi" />
                <ShowDetails.AvailableLanguage textLanguage="Tamil" />
                <ShowDetails.AvailableLanguage textLanguage="Telegu" />
                <ShowDetails.AvailableLanguage textLanguage="Kannada" />
              </ShowDetails.AvailableRoot>

              <ShowDetails.RatingsRoot title="Ratings">
                <ShowDetails.Ratings rating={4.5} textRatings="IMDb" />
                <ShowDetails.Ratings rating={4} textRatings="StreamVibe" />
              </ShowDetails.RatingsRoot>

              <ShowDetails.GenderRoot title="Genres">
                <ShowDetails.Gender gender="Sci-Fi TV" />
                <ShowDetails.Gender gender="Teen TV Shows" />
                <ShowDetails.Gender gender="US TV Shows" />
              </ShowDetails.GenderRoot>

              <ShowDetails.Director title="Director">
                <ShowDetails.DirectorItem
                  alt="Director"
                  city="USA"
                  name="The Duffer Brothers"
                  url="/src/assets/photo/TheDufferBrothers.png"
                />
              </ShowDetails.Director>

              <ShowDetails.Music title="Music">
                <ShowDetails.MusicItem
                  alt="KyleDixon"
                  city="USA"
                  name="Kyle Dixon"
                  url="/src/assets/photo/KyleDixon.png"
                />
              </ShowDetails.Music>
            </ShowDetails>
          </div>
        </section>

        <section className="my-37.5">
          <div className="flex h-[400px] flex-row rounded-lg border border-Custom-Black-15 bg-[url('./assets/photo/Banner-StreamVibe.png')] bg-center bg-cover bg-no-repeat">
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
      </div>

      <Footer />
    </>
  );
}
