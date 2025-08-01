import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { CardCategory } from "@/components/Cards/CardCategory";

export function CarouselGenre() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <div className="flex flex-row items-center justify-between pb-12.5">
        <div className="">
          <h1 className="font-Manrope font-bold text-4xl text-white">
            Our Genres
          </h1>
        </div>

        <div className="flex flex-row items-center rounded-xl bg-Custom-Black-06 p-4">
          <button className="rounded-lg bg-Custom-Black-10 p-3" type="button">
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </button>

          <div className="flex gap-1 px-3">
            <div className="h-1 w-5 rounded-lg bg-Custom-Red-45 text-5xl" />
            <div className="h-1 w-3 rounded-lg bg-Custom-Gray-60 text-5xl" />
            <div className="h-1 w-3 rounded-lg bg-Custom-Gray-60 text-5xl" />
            <div className="h-1 w-3 rounded-lg bg-Custom-Gray-60 text-5xl" />
          </div>

          <button className="rounded-lg bg-Custom-Black-10 p-3" type="button">
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
    </motion.div>
  );
}
