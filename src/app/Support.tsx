import { motion } from 'framer-motion';
import { AccordionInfo } from '@/components/AccordionInfo';
import { Footer } from '@/components/Footer';
import { Form } from '@/components/Form';
import { Header } from '@/components/Header/Header';

export default function Support() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="px-40">
        <Header />

        <div className="mt-15 mb-37.5 flex flex-1 flex-row gap-20">
          <div className="flex flex-[0.5] flex-col justify-between">
            <div className="mt-5">
              <h1 className="font-Manrope font-bold text-5xl text-white">
                Welcome to our support page!
              </h1>
              <p className="mt-4 font-Manrope font-normal text-Custom-Gray-60 text-lg">
                We're here to help you with any problems you may be having with
                our product.
              </p>
            </div>

            <picture className="mt-4 flex rounded-lg border-2 border-Custom-Black-15 bg-Custom-Black-06">
              <img
                alt="Support"
                className="h-full w-full rounded-lg object-cover"
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

          <div className="grid grid-cols-2 grid-rows-1 gap-10 divide-y divide-Custom-Red-45/40">
            <div className=" divide-y divide-Custom-Red-45/40">
              <AccordionInfo indexNumber={1} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
              </AccordionInfo>

              <AccordionInfo indexNumber={2} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
              </AccordionInfo>

              <AccordionInfo indexNumber={3} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
              </AccordionInfo>

              <AccordionInfo indexNumber={4} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
              </AccordionInfo>
            </div>

            <div className=" divide-y divide-Custom-Red-45/40">
              <AccordionInfo indexNumber={5} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
              </AccordionInfo>

              <AccordionInfo indexNumber={6} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
              </AccordionInfo>

              <AccordionInfo indexNumber={7} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
              </AccordionInfo>

              <AccordionInfo indexNumber={8} title="What is StreamVibe?">
                <AccordionInfo.ContentRoot>
                  <AccordionInfo.Content />
                </AccordionInfo.ContentRoot>
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

      <Footer />
    </motion.div>
  );
}
