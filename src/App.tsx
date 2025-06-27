import { PlayIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { Header } from "./components/Header/Header";
import { CardCategory } from "./components/CardCategory";
import { DeviceSupportGrid } from "./components/DeviceSupportGrid";
import { AccordionQuestion } from "./components/AccordionQuestion";

export function App() {
  return (
    <div className="px-80">
      <section className="flex h-screen flex-col justify-between mb-52">
        <Header />
        <img
          src="/src/assets/background.png"
          className="inset-0 absolute -z-10"
        />

        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-Manrope text-5xl font-bold text-white">
            The Best Streaming Experience
          </h1>
          <p className="items-center text-center text-Custom-Gray-60">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>

          <button className="flex flex-row mt-7 items-center px-6 py-4 bg-Custom-Red-45 rounded-lg text-white text-lg mb-10">
            <PlayIcon className="w-7 h-7" /> Start Watching Now
          </button>
        </div>
      </section>

      <section className="mb-52">
        <div>
          <div className="flex flex-row items-center justify-between mb-20">
            <div className="flex flex-col gap-4">
              <h1 className="font-Manrope text-4xl font-bold text-white">
                Explore our wide variety of categories
              </h1>
              <p className="font-Manrope text-Custom-Gray-60">
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new
              </p>
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
        </div>

        <div className="flex flex-row gap-7 mb-36">
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-Manrope text-4xl font-bold text-white">
              We Provide you streaming experience across various devices.
            </h1>
            <p className="font-Manrope text-Custom-Gray-60 text-lg">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <DeviceSupportGrid />
            <DeviceSupportGrid />
            <DeviceSupportGrid />
            <DeviceSupportGrid />
            <DeviceSupportGrid />
            <DeviceSupportGrid />
          </div>
        </div>
      </section>

      <section className="gap-20">
        <div className="flex flex-row items-center justify-between mb-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-Manrope text-4xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="font-Manrope text-Custom-Gray-60">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className="px-6 py-4 bg-Custom-Red-45 rounded-lg text-white">
            Ask a Question
          </button>
        </div>

        <div className="grid grid-cols-2 grid-rows-4 gap-10 divide-y divide-Custom-Red-45/40">
          <AccordionQuestion />
          <AccordionQuestion />
          <AccordionQuestion />
          <AccordionQuestion />
          <AccordionQuestion />
          <AccordionQuestion />
          <AccordionQuestion />
          <AccordionQuestion />
        </div>
      </section>
    </div>
  );
}
