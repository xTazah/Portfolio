import { AspectRatio } from "./AspectRatio";
import PianoCanvas from "./PianoCanvas";

export const InterestsSection = () => {
  return (
    <section className="relative w-full mt-8 px-8 mx-auto flex flex-col items-center space-y-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        A Peek into My World 🌍
      </h2>

      <div className="flex flex-col items-center">
        <div className="text-center max-w-md">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Technologies
          </p>
        </div>
        {/* PC Model with floaitng icons like BennyProduction Intro */}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center space-x-6">
        <div className="w-3/5 
        // sm:w-3/5"
        >
          <AspectRatio ratio={1/1}>
            <PianoCanvas />
          </AspectRatio>
        </div>
        <div className="flex flex-col justify-center mt-4 sm:mt-4 w-4/5 sm:w-2/5">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center sm:text-left">
            I love playing piano. It's a wonderful way to express creativity and relax after a long day. 
          </p>
        </div>
      </div>



      <div className="flex flex-col items-center">
        <div className="text-center max-w-md">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Fitness is essential for me to stay balanced and energized.
          </p>
        </div>
        {/* Dumbbell Canvas */}
      </div>

    </section>
  );
};
