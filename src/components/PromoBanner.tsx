import { motion } from 'framer-motion';

export function PromoBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <section className="mb-37.5 px-10 lg:px-40">
        <div className="relative h-[400px] rounded-lg border border-Custom-Black-15 xl:flex-row ">
          <picture className="-z-10 absolute h-[400px] w-full overflow-hidden">
            <img
              alt="Image: StreamVibe"
              className="absolute h-full w-full object-cover"
              src="./src/assets/photo/Banner-StreamVibe.png"
            />
          </picture>

          <div className="flex h-full flex-1 flex-col items-center justify-center gap-12 lg:flex-row">
            <div className="flex items-center justify-between gap-20 px-20">
              <div className="flex flex-col gap-3.5 ">
                <h1 className="text-center font-Manrope font-bold text-2xl text-white lg:text-start lg:text-5xl">
                  Start your free trial today!
                </h1>

                <span className="text-center font-Manrope text-Custom-Gray-60 lg:text-start">
                  This is a clear and concise call to action that encourages
                  users to sign up for a free trial of StreamVibe.
                </span>
              </div>
            </div>

            <div className="">
              <button
                className="rounded-lg bg-Custom-Red-45 px-6 py-4 text-white"
                type="button"
              >
                Start a Free Trail
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
