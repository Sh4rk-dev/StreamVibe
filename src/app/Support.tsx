import { AccordionContentRoot } from "@/components/Accordion";
import {
  AccordionInfo,
  AccordionInfoContent,
  AccordionInfoContentRoot,
} from "@/components/AccordionInfo";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header/Header";
import { motion } from "framer-motion";

export default function Support() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="px-40">
        <Header />

        <div className="mt-15 flex-1 flex flex-row gap-20 mb-37.5">
          <div className="flex-[0.5] flex justify-between flex-col">
            <div className="mt-5">
              <h1 className="font-Manrope font-bold text-5xl text-white">
                Welcome to our support page!
              </h1>
              <p className="mt-4 font-Manrope font-normal text-Custom-Gray-60 text-lg">
                We're here to help you with any problems you may be having with
                our product.
              </p>
            </div>

            <picture className="flex mt-4 rounded-lg bg-Custom-Black-06 border-2 border-Custom-Black-15">
              <img
                alt="Support"
                className="object-cover rounded-lg w-full h-full"
                src="/src/assets/photo/SubContainerSupport.png"
              />
            </picture>
          </div>

          <div className="flex-1">
            <Form />
          </div>
        </div>

        <section className="mb-37.5">
          <div className="mb-20 flex flex-row items-center justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="font-Manrope font-bold text-4xl text-white">
                Frequently Asked Questions
              </h1>
              <p className="font-Manrope text-Custom-Gray-60">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>
            <button
              className="rounded-lg bg-Custom-Red-45 px-6 py-4 text-white"
              type="button"
            >
              Ask a Question
            </button>
          </div>

          <div className="grid grid-cols-2 grid-rows-1 gap-10  divide-y divide-Custom-Red-45/40">
            <div className=" divide-y divide-Custom-Red-45/40">
              <AccordionInfo id="1" title="What is StreamVibe?" indexNumber={1}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>

              <AccordionInfo id="2" title="What is StreamVibe?" indexNumber={2}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>

              <AccordionInfo id="3" title="What is StreamVibe?" indexNumber={3}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>

              <AccordionInfo id="4" title="What is StreamVibe?" indexNumber={4}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>
            </div>

            <div className=" divide-y divide-Custom-Red-45/40">
              <AccordionInfo id="5" title="What is StreamVibe?" indexNumber={5}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>

              <AccordionInfo id="6" title="What is StreamVibe?" indexNumber={6}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>

              <AccordionInfo id="7" title="What is StreamVibe?" indexNumber={7}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>

              <AccordionInfo id="8" title="What is StreamVibe?" indexNumber={8}>
                <AccordionInfoContentRoot>
                  <AccordionInfoContent />
                </AccordionInfoContentRoot>
              </AccordionInfo>
            </div>
          </div>
        </section>

        <div className="mb-37.5 flex h-[400px] flex-row rounded-lg border border-Custom-Black-15 bg-[url('./assets/photo/Banner-StreamVibe.png')] bg-center bg-cover bg-no-repeat">
          <div className="flex items-center justify-between gap-20 px-20">
            <div className="flex flex-col gap-3.5 ">
              <h1 className="font-Manrope font-bold text-5xl text-white">
                Start your free trial today!
              </h1>

              <span className="font-Manrope text-Custom-Gray-60">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
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
    </motion.div>
  );
}
