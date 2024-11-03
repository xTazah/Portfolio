import PianoCanvas from "./PianoCanvas";
import { Canvas3D } from "./Canvas3D";
import CanvasTextSection from "./CanvasTextSection";

export const InterestsSection = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover w-full h-full opacity-20 hidden dark:block"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <section className="relative w-full backdrop-blur-sm mt-8 px-8 mx-auto flex flex-col items-center space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          A Peek into My World 🌍
        </h2>

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
