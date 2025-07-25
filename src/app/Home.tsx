import { PlayIcon } from "@heroicons/react/16/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useScroll, useSpring } from "motion/react";
import { AccordionQuestion } from "@/components/AccordionQuestion";
import { CardCategory } from "@/components/Cards/CardCategory";
import { CardPlan } from "@/components/Cards/CardPlan";
import { DeviceSupportGrid } from "@/components/DeviceSupportGrid";
import { Header } from "@/components/Header/Header";

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
        transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        <div className="px-40">
          <section className="mb-37.5 flex h-screen flex-col justify-between">
            <Header />
            <picture className="-z-10 absolute inset-0 flex w-full">
              <img
                alt="Background"
                className="object-cover"
                src="/src/assets/photo/background.png"
              />
            </picture>

            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="font-Manrope font-bold text-5xl text-white">
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

              <button
                className="mt-7 mb-10 flex flex-row items-center rounded-lg bg-Custom-Red-45 px-6 py-4 text-lg text-white"
                type="button"
              >
                <PlayIcon className="h-7 w-7" /> Start Watching Now
              </button>
            </div>
          </section>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <section className="mb-37.5">
              <div>
                <div className="mb-20 flex flex-row items-center justify-between">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-Manrope font-bold text-4xl text-white">
                      Explore our wide variety of categories
                    </h1>
                    <p className="font-Manrope text-Custom-Gray-60">
                      Whether you're looking for a comedy to make you laugh, a
                      drama to make you think, or a documentary to learn
                      something new
                    </p>
                  </div>

                  <div className="flex flex-row items-center rounded-xl bg-Custom-Black-06 p-4">
                    <button
                      className="rounded-lg bg-Custom-Black-10 p-3"
                      type="button"
                    >
                      <ArrowLeftIcon className="h-6 w-6 text-white" />
                    </button>

                    <div className="flex gap-1 px-3">
                      <div className="h-1 w-5 rounded-lg bg-Custom-Red-45 text-5xl" />
                      <div className="h-1 w-3 rounded-lg bg-Custom-Gray-60 text-5xl" />
                      <div className="h-1 w-3 rounded-lg bg-Custom-Gray-60 text-5xl" />
                      <div className="h-1 w-3 rounded-lg bg-Custom-Gray-60 text-5xl" />
                    </div>

                    <button
                      className="rounded-lg bg-Custom-Black-10 p-3"
                      type="button"
                    >
                      <ArrowRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-36 flex flex-row justify-between gap-7">
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
              </div>

              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                  <h1 className="font-Manrope font-bold text-4xl text-white">
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
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <section className="mb-37.5">
              <div className="mb-20 flex flex-row items-center justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="font-Manrope font-bold text-4xl text-white">
                    Frequently Asked Questions
                  </h1>
                  <p className="font-Manrope text-Custom-Gray-60">
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
                  </p>
                </div>
                <button
                  className="rounded-lg bg-Custom-Red-45 px-6 py-4 text-white"
                  type="button"
                >
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
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <section className="mb-37.5">
              <div className="flex flex-row justify-between gap-6">
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

                <div className="mt-6 mb-20 flex flex-row rounded-xl border border-Custom-Black-15 bg-Custom-Black-06 p-2.5">
                  <span className="rounded-xl bg-Custom-Black-12 px-6 py-3.5 font-Manrope text-white">
                    Monthly
                  </span>
                  <span className="px-6 py-3.5 font-Manrope text-Custom-Gray-60">
                    Yearly
                  </span>
                </div>
              </div>

              <div className="mb-37.5 grid grid-cols-3 grid-rows-1 gap-7.5">
                <CardPlan />
                <CardPlan />
                <CardPlan />
              </div>

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
          </motion.div>
        </div>
      </motion.div>

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
