import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../constants/constants";
import { github } from "../assets/assets";
import { textEntry } from "../utils/animations";

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
    <motion.div variants={textEntry(index * 0.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#1d1836] p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full object-cover rounded-2xl bg-gray-800 flex items-center justify-center text-gray-500">
             {image ? (
                <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
                />
             ) : (
                <span>No Image</span>
             )}
          </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 hover:bg-black/80 transition-colors"
              title="View Source Code"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain invert"
              />
            </div>
            {live_link && live_link !== "#" && (
                <div
                onClick={() => window.open(live_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 hover:bg-black/80 transition-colors"
                title="View Live Site"
                >
                <span className="text-white text-xs font-bold">LIVE</span>
                </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <>
      <span className="hash-span" id="Projects">
        &nbsp;
      </span>
      <motion.div variants={textEntry(0)}>
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}>
          My work
        </p>
        <h2 className={`text-gray-900 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={textEntry(0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};
