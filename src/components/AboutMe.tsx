import { MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { wavingAnimation } from "../utils/animations";

export const AboutMe = () => {
  return (
    <>
      <span className="hash-span" id="AboutMe">
        &nbsp;
      </span>
      <section className="relative w-full mx-auto">
        <div className="inset-0 mt-12 max-w-7xl mx-auto px-8 flex flex-row items-start gap-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-secondary">
                Finn{" "}
                <motion.span
                  variants={wavingAnimation()} //todo: fix this --> why tf is not working???
                  initial="hidden"
                  animate="show"
                  whileHover="hover"
                  className="inline-block origin-bottom-right"
                >
                  👋
                </motion.span>
              </span>
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2 text-gray-700 dark:text-gray-300 text-lg">
              <MapPinIcon className="h-6 w-6" />
              <span>Münster, Germany</span>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl font-medium mt-4 text-gray-600 dark:text-gray-400">
              I'm a 22-year-old computer science bachelor's graduate with a
              foundation in data science, machine learning, and AI. Currently pursuing a master's degree at the University of Münster.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
