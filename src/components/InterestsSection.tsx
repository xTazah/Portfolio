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

      <div className="flex flex-row">
        <PianoCanvas/>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            I love playing piano
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
