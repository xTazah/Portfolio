import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas3D } from "./Canvas3D";
import { ComputerCanvas } from "./ComputerCanvas";
import { textEntry } from "../utils/animations";
import { Card, CardContent } from "@/components/ui/card";

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
      <section className="relative w-full px-8 mx-auto flex flex-col items-center space-y-12">
        <span className="hash-span" id="Interests">
          &nbsp;
        </span>
        <motion.div variants={textEntry(0)}>
          <p
            className={`sm:text-[18px] text-[14px] text-primary uppercase tracking-wider text-center font-semibold`}
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
                    <Card className="bg-card border-border backdrop-blur-sm shadow-lg">
                      <CardContent className="p-6">
                        <p className="text-lg font-medium text-muted-foreground leading-relaxed text-center sm:text-left">
                        I'm always chasing the next tool that makes me build faster and better — from AI copilots to whatever framework dropped last week. If it sharpens my workflow, I'll dive in.
                        </p>
                      </CardContent>
                    </Card>
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
                    <Card className="bg-card border-border backdrop-blur-sm shadow-lg">
                      <CardContent className="p-6">
                        <p className="text-lg font-medium text-muted-foreground leading-relaxed text-center sm:text-left">
                        When the code stops, the piano starts. It's where I switch off the analytical side of my brain and just play what I feel like.
                        </p>
                      </CardContent>
                    </Card>
                </div>
            </div>
        </div>

        {/* Sports Section */}
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
                    <Card className="bg-card border-border backdrop-blur-sm shadow-lg">
                      <CardContent className="p-6">
                        <p className="text-lg font-medium text-muted-foreground leading-relaxed text-center sm:text-left">
                        I like playing handball, volleyball, and hitting the gym to get my mind free after a long day.
                        </p>
                      </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
