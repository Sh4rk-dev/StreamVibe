import { motion } from "framer-motion";
import { useScroll, useSpring } from "motion/react";

import { PlayIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { Header } from "@/components/Header/Header";
import { CardPlan } from "@/components/Cards/CardPlan";
import { CardCategory } from "@/components/Cards/CardCategory";
import { AccordionQuestion } from "@/components/AccordionQuestion";
import { DeviceSupportGrid } from "@/components/DeviceSupportGrid";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          backgroundColor: "#FF0000"
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="px-40">
          <section className="flex h-screen flex-col justify-between mb-37.5">
            <Header />
            <picture className="flex w-full inset-0 absolute -z-10">
              <img
                className="object-cover"
                src="/src/assets/photo/background.png"
              />
            </picture>

            <div className="flex flex-col gap-4 justify-center items-center">
              <h1 className="font-Manrope text-5xl font-bold text-white">
                The Best Streaming Experience
              </h1>
              <p className="items-center text-center text-Custom-Gray-60">
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                StreamVibe, you can enjoy a wide variety of content, including
                the latest blockbusters, classic movies, popular TV shows, and
                more. You can also create your own watchlists, so you can easily
                find the content you want to watch.
              </p>

              <button className="flex flex-row mt-7 items-center px-6 py-4 bg-Custom-Red-45 rounded-lg text-white text-lg mb-10">
                <PlayIcon className="w-7 h-7" /> Start Watching Now
              </button>
            </div>
          </section>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
          >
            <section className="mb-37.5">
              <div>
                <div className="flex flex-row items-center justify-between mb-20">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-Manrope text-4xl font-bold text-white">
                      Explore our wide variety of categories
                    </h1>
                    <p className="font-Manrope text-Custom-Gray-60">
                      Whether you're looking for a comedy to make you laugh, a
                      drama to make you think, or a documentary to learn
                      something new
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

              <div className="flex justify-between flex-row gap-7 mb-36">
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
                    With StreamVibe, you can enjoy your favorite movies and TV
                    shows anytime, anywhere. Our platform is designed to be
                    compatible with a wide range of devices, ensuring that you
                    never miss a moment of entertainment.
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
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
          >
            <section className="mb-37.5">
              <div className="flex flex-row items-center justify-between mb-20">
                <div className="flex flex-col gap-4">
                  <h1 className="font-Manrope text-4xl font-bold text-white">
                    Frequently Asked Questions
                  </h1>
                  <p className="font-Manrope text-Custom-Gray-60">
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
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
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
          >
            <section className="mb-37.5">
              <div className="flex flex-row gap-6 justify-between">
                <div className="flex flex-col gap-3.5">
                  <h1 className="font-Manrope font-bold text-4xl text-white">
                    Choose the plan that's right for you
                  </h1>
                  <p className="font-Manrope text-Custom-Gray-60">
                    Join StreamVibe and select from our flexible subscription
                    options tailored to suit your viewing preferences. Get ready
                    for non-stop entertainment!
                  </p>
                </div>

                <div className="flex flex-row p-2.5  mt-6 rounded-xl bg-Custom-Black-06 border border-Custom-Black-15 mb-20">
                  <span className="px-6 py-3.5 font-Manrope text-white bg-Custom-Black-12 rounded-xl">
                    Monthly
                  </span>
                  <span className="px-6 py-3.5 font-Manrope text-Custom-Gray-60">
                    Yearly
                  </span>
                </div>
              </div>

              <div className="grid grid-rows-1 grid-cols-3 gap-7.5 mb-37.5">
                <CardPlan />
                <CardPlan />
                <CardPlan />
              </div>

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
          </motion.div>
        </div>
      </motion.div>

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
