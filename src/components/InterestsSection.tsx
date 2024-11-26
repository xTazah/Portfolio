import { motion } from "framer-motion";
import { Canvas3D } from "./Canvas3D";
import CanvasTextSection from "./CanvasTextSection";
import { textEntry } from "../utils/animations";

export const InterestsSection = () => {
  return (
    <div className="mt-20">
      <section className="relative w-full backdrop-blur-sm px-8 mx-auto flex flex-col items-center space-y-12">
        <motion.div variants={textEntry(0)}>
          <p
            className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
          >
            A Peek into My World
          </p>
          <h2
            className={`text-gray-900 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
          >
            Interests.
          </h2>
        </motion.div>

        {/* PC Model with floaitng icons like BennyProduction Intro */}
        <CanvasTextSection
          text="Technologies Placeholder. Placeholde Model too"
          CanvasComponent={Canvas3D}
          canvasProps={{
            modelPath: "/3d_models/monitor.glb",
            cameraPosition: [-40, 0, 0],
            enableZoom: false,
            scale: 0.005,
            position: [1, 0, 0],
            rotation: [0, -0.75, 0],
          }}
          order="right"
        />

        <CanvasTextSection
          text="I love playing piano. It's a wonderful way to express creativity and relax after a long day."
          CanvasComponent={Canvas3D}
          canvasProps={{
            modelPath: "/3d_models/Piano.glb",
            cameraPosition: [-40, 0, 0],
            enableZoom: false,
            scale: 0.11,
            position: [0, 0, 0],
            rotation: [0, -1.5, 0],
          }}
          order="left"
        />

        <CanvasTextSection
          text="Fitness is essential for me to stay balanced and energized."
          CanvasComponent={Canvas3D}
          canvasProps={{
            modelPath: "/3d_models/dumbbells.glb",
            cameraPosition: [-40, 0, 0],
            enableZoom: false,
            scale: 0.01,
            position: [0, 0, 0],
            rotation: [0.1, 0.1, 0],
          }}
          order="right"
        />
      </section>
    </div>
  );
};
