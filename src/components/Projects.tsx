import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { ExternalLink } from "lucide-react";
import { projects } from "../constants/constants";
import { github } from "../assets/assets";
import { textEntry } from "../utils/animations";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={textEntry(index * 0.5)} className="w-full sm:w-[380px]">
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 450,
        }}
        className="h-full"
      >
        <Card className="h-full flex flex-col bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-purple-500/20 backdrop-blur-sm overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
          <CardHeader className="p-0 relative">
            <div className="relative w-full h-[200px] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-slate-900 flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-muted-foreground/50 text-sm">Project Preview</div>
                )}
              </div>
              
              {/* Action buttons overlay */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                  title="View Source Code"
                >
                  <img src={github} alt="github" className="w-5 h-5 invert" />
                </button>
                {live_link && live_link !== "#" && (
                  <button
                    onClick={() => window.open(live_link, "_blank")}
                    className="w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-600 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 pt-6">
            <CardTitle className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {name}
            </CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </CardContent>

          <CardFooter className="pt-0 pb-6 flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge 
                key={tag.name} 
                variant="secondary" 
                className="bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20"
              >
                #{tag.name}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </Tilt>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <span className="hash-span" id="Projects">
        &nbsp;
      </span>
      
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textEntry(0)}>
          <p className="sm:text-lg text-sm text-purple-400 uppercase tracking-wider text-center font-semibold">
            My work
          </p>
          <h2 className="text-gray-900 dark:text-white font-black md:text-6xl sm:text-5xl text-4xl text-center mt-2">
            Projects.
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={textEntry(0.1)}
            className="mt-6 text-muted-foreground text-base sm:text-lg max-w-3xl leading-relaxed text-center mx-auto"
          >
            The following selected projects showcase my skills and experience through
            real-world examples of my private work. Each project is briefly described with
            links to code repositories and live demos.
          </motion.p>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
