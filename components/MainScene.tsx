"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  month: number;
}

export default function MainScene({ month }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-pink-100">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300" />

      {/* Month Counter */}
      <div className="absolute top-20 w-full flex justify-center">

        <div className="overflow-hidden h-44">

          <motion.div
            animate={{
              y: month === 4 ? 0 : -176,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >

            {/* 4 Months */}
            <div className="h-44 flex flex-col items-center justify-center">
              <h1 className="text-8xl font-extrabold text-pink-600">
                4
              </h1>

              <p className="text-5xl font-bold text-pink-500">
                MONTHS
              </p>
            </div>

            {/* 5 Months */}
            <div className="h-44 flex flex-col items-center justify-center">
              <h1 className="text-8xl font-extrabold text-pink-600">
                5
              </h1>

              <p className="text-5xl font-bold text-pink-500">
                MONTHS
              </p>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Boy */}
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-20"
      >
        <Image
          src="/chibi-boy.png"
          width={550}
          height={550}
          alt="Boy"
        />
      </motion.div>

      {/* Girl */}
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 right-20"
      >
        <Image
          src="/chibi-girl.png"
          width={550}
          height={550}
          alt="Girl"
        />
      </motion.div>

    </div>
  );
}