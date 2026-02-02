import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { workExperience } from "../constants/constants";
import { textEntry } from "../utils/animations";
import { Button } from "@/components/ui/button";

const WorkCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 10px 30px -15px rgba(147, 51, 234, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-purple-300 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const Work = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <span className="hash-span" id="Work">
        &nbsp;
      </span>
      
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textEntry(0)}>
          <p className="sm:text-lg text-sm text-purple-400 uppercase tracking-wider text-center font-semibold">
            What I have done so far
          </p>
          <h2 className="text-gray-900 dark:text-white font-black md:text-6xl sm:text-5xl text-4xl text-center mt-2">
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-10 sm:mt-20 flex flex-col items-center">
          <VerticalTimeline>
            {workExperience.map((experience, index) => (
              <WorkCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
          <a href="/CV_Koehler_Finn.pdf" download="CV_Koehler_Finn.pdf">
            <Button
              size="lg"
              className="mt-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
