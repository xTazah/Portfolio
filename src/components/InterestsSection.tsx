import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas3D } from "./Canvas3D";
import { ComputerCanvas } from "./ComputerCanvas";
import { textEntry } from "../utils/animations";

export const InterestsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div className="mt-20">
      <section className="relative w-full backdrop-blur-sm px-8 mx-auto flex flex-col items-center space-y-12">
        <span className="hash-span" id="Interests">
          &nbsp;
        </span>
        <motion.div variants={textEntry(0)}>
          <p
            className={`sm:text-[18px] text-[14px] text-purple-400 uppercase tracking-wider text-center font-semibold`}
          >
            A Peek into My World
          </p>
          <h2
            className={`text-gray-900 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
          >
            Interests.
          </h2>
        </motion.div>

        <div className="relative w-full md:h-[500px] flex flex-col md:block items-center">
            <div className={`relative w-full h-[300px] md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full`}>
                <ComputerCanvas />
            </div>
            <div className={`relative z-10 w-full max-w-7xl mx-auto px-8 pointer-events-none md:h-full md:flex md:items-center`}>
                <div className="w-full md:w-1/2 pointer-events-auto mt-4 md:mt-0">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center sm:text-left bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    I constantly explore new tools and technologies to enhance my development workflow.
                    </p>
                </div>
            </div>
        </div>

        {/* Piano Section */}
        <div className="relative w-full md:h-[500px] flex flex-col md:block items-center">
            <div className="relative w-full h-[300px] md:absolute md:inset-0 md:w-full md:h-full">
                <Canvas3D
                  modelPath="/3d_models/Piano.glb"
                  cameraPosition={isMobile ? [-60, 0, 0] : [-40, 0, 0]}
                  scale={isMobile ? 0.1 : 0.11}
                  position={isMobile ? [0, 0, 0] : [0, 0, -12]}
                  rotation={[0, -1.2, 0]}
                />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pointer-events-none md:h-full md:flex md:items-center">
                <div className="w-full md:w-1/2 pointer-events-auto md:ml-auto mt-4 md:mt-0">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center sm:text-left bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    I love playing piano. It's a wonderful way to express creativity and relax after a long day.
                    </p>
                </div>
            </div>
        </div>

        {/* Fitness Section */}
        <div className="relative w-full md:h-[500px] flex flex-col md:block items-center pb-16 md:pb-0">
            <div className="relative w-full h-[300px] md:absolute md:inset-0 md:w-full md:h-full">
                <Canvas3D
                  modelPath="/3d_models/dumbbells.glb"
                  cameraPosition={isMobile ? [-60, 0, 0] : [-40, 0, 0]}
                  scale={isMobile ? 0.009 : 0.01}
                  position={isMobile ? [0, 0, 0] : [0, 0, 12]}
                  rotation={[0.1, 0.1, 0]}
                />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pointer-events-none md:h-full md:flex md:items-center">
                <div className="w-full md:w-1/2 pointer-events-auto mt-4 md:mt-0">
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center sm:text-left bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    Fitness is essential for me to stay balanced and energized.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
