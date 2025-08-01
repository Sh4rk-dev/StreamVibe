import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  HandThumbUpIcon,
  LanguageIcon,
  PlayIcon,
  PlusIcon,
  SpeakerWaveIcon,
  StarIcon
} from "@heroicons/react/16/solid";
import {
  Squares2X2Icon,
  StarIcon as StarIconSolid
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionContent,
  AccordionContentRoot
} from "@/components/Accordion";
import { Header } from "@/components/Header/Header";
import { ReviewCard } from "@/components/ReviewCard";

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
                <div className="mt-6 flex flex-col gap-3.5">
                  <Accordion subtitle="8 Episodes" title="Season 1">
                    <AccordionContentRoot>
                      <AccordionContent
                        description="A young boy vanishes, and a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
                        duration="47 min"
                        position="01"
                        title="Chapter One: The Vanishing of Will Byers"
                      />
                    </AccordionContentRoot>
                  </Accordion>
                  <Accordion subtitle="8 Episodes" title="Season 1">
                    <AccordionContentRoot>
                      <AccordionContent
                        description="A young boy vanishes, and a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
                        duration="47 min"
                        position="01"
                        title="Chapter One: The Vanishing of Will Byers"
                      />
                    </AccordionContentRoot>
                  </Accordion>
                  <Accordion subtitle="8 Episodes" title="Season 1">
                    <AccordionContentRoot>
                      <AccordionContent
                        description="A young boy vanishes, and a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl."
                        duration="47 min"
                        position="01"
                        title="Chapter One: The Vanishing of Will Byers"
                      />
                    </AccordionContentRoot>
                  </Accordion>
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
                        alt={"Actor2"}
                        className="h-full w-full rounded-xl object-cover"
                        src={"/src/assets/photo/Actor2.png"}
                      />
                    </picture>
                  ))}
                </div>
              </div>

              <div className="col-span-2 col-start-1 row-start-3 flex flex-col rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-Manrope font-medium text-Custom-Gray-60">
                    Reviews
                  </h1>

                  <button
                    className="mt-4 flex flex-row items-center gap-2 rounded-lg bg-Custom-Red-45 px-6 py-3.5 text-white"
                    type="button"
                  >
                    <PlusIcon className="h-6 w-6 text-white" />
                    <span>Add Your Review</span>
                  </button>
                </div>

                <div className="flex flex-col gap-4 py-10">
                  <ReviewCard
                    location="New York"
                    name="John Doe"
                    rating={4.5}
                    reviewText="This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it."
                  />
                </div>
              </div>
            </div>

            <div className="col-start-3 row-span-1 row-start-1 flex h-fit flex-1 flex-col rounded-xl border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
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
                    Sci-Fi TV
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    Teen TV Shows
                  </span>
                  <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
                    US TV Shows
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
                        alt={"Actor1"}
                        className="h-full w-full rounded-xl object-cover"
                        src={"/src/assets/photo/TheDufferBrothers.png"}
                      />
                    </picture>
                    <div className="flex flex-col items-start">
                      <span className="font-Manrope font-medium text-white">
                        The Duffer Brothers
                      </span>
                      <span className="font-Manrope font-medium text-Custom-Gray-60">
                        From USA
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
                        alt={"KyleDixon"}
                        className="h-full w-full rounded-xl object-cover"
                        src={"/src/assets/photo/KyleDixon.png"}
                      />
                    </picture>
                    <div className="flex flex-col items-start">
                      <span className="font-Manrope font-medium text-white">
                        Kyle Dixon
                      </span>
                      <span className="font-Manrope font-medium text-Custom-Gray-60">
                        From USA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      <footer className="bg-Custom-Black-06 px-40 pt-25">
        <div className="grid grid-cols-6 grid-rows-1 gap-7.5 pb-25">
          <div>
            <h1 className="text- mb-3 font-Manrope font-bold text-white">
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
            <h1 className="text- mb-3 font-Manrope font-bold text-white">
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
            <h1 className="text- mb-3 font-Manrope font-bold text-white">
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
            <h1 className="text- mb-3 font-Manrope font-bold text-white">
              Support
            </h1>
            <div>
              <h1 className="font-Manrope text-Custom-Gray-60">Contact Us</h1>
            </div>
          </div>

          <div>
            <h1 className="text- mb-3 font-Manrope font-bold text-white">
              Subscription
            </h1>
            <div className="flex flex-col gap-3.5">
              <h1 className="font-Manrope text-Custom-Gray-60">Plans</h1>
              <h1 className="font-Manrope text-Custom-Gray-60">Features</h1>
            </div>
          </div>

          <div>
            <div className="gap-3.5">
              <h1 className="text- mb-3 font-Manrope font-bold text-white">
                Connect With Us
              </h1>
            </div>
            <div className="flex flex-row gap-3.5">
              <picture className=" rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-4">
                <img
                  alt="Facebook Icon"
                  src="./src/assets/icons/FacebookIcon.svg"
                />
              </picture>
              <picture className=" rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-4">
                <img
                  alt="Twitter Icon"
                  src="./src/assets/icons/TwitterIcon.svg"
                />
              </picture>
              <picture className=" rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-4">
                <img
                  alt="LinkedIn Icon"
                  src="./src/assets/icons/LinkedInIcon.svg"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between border-Custom-Black-15 border-t pt-4 pb-12.5 ">
          <div className="">
            <h1 className="font-Manrope text-Custom-Gray-60">
              @2023 streamvib, All Rights Reserved
            </h1>
          </div>

          <div className="">
            <div className="flex flex-row items-center gap-3.5">
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
