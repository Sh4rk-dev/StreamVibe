import { motion } from "motion/react";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header/Header";

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

        <div className="mt-15 flex flex-1 flex-row items-center gap-20">
          <div className="flex-1 flex-col">
            <div className="flex-1">
              <h1 className="font-Manrope font-bold text-5xl text-white">
                Welcome to our support page!
              </h1>
              <p className="mt-4 font-Manrope font-normal text-Custom-Gray-60 text-lg">
                We're here to help you with any problems you may be having with
                our product.
              </p>
            </div>

            <picture className="mt-12.5 rounded-lg border-2 border-Custom-Gray-60">
              <img
                alt="Support"
                className="object-cover"
                src="/src/assets/photo/SubContainerSupport.png"
              />
            </picture>
          </div>

          <div className="flex-1">
            <Form />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
