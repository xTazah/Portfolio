import { MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { wavingAnimation } from "../utils/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const AboutMe = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <span className="hash-span" id="AboutMe">
        &nbsp;
      </span>
      
      <div className="max-w-7xl mx-auto">
        <Card className="bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-12">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Finn{" "}
                  </span>
                  <motion.span
                      variants={wavingAnimation()}
                      initial="hidden"
                      animate="show"
                      whileHover="hover"
                      className="inline-block origin-bottom-right">
                      👋
                  </motion.span>
                </h1>
              </div>

              <Separator className="bg-purple-500/20" />

              {/* Location */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPinIcon className="h-6 w-6 text-purple-400" />
                <span className="text-lg">Münster, Germany</span>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl font-medium text-muted-foreground leading-relaxed max-w-3xl">
                I'm a 22-year-old computer science bachelor's graduate with a
                foundation in data science, machine learning, and AI. Currently pursuing a master's degree at the University of Münster.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
