import React from "react";
import { Button } from "@nextui-org/react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { workExperience } from "../constants/constants";
import { textEntry } from "../utils/animations";

const WorkCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
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
          className="text-secondary text-[16px] font-semibold"
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
    <>
      <span className="hash-span" id="Work">
        &nbsp;
      </span>
      <motion.div variants={textEntry(0)}>
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
        >
          What I have done so far
        </p>
        <h2
          className={`text-gray-900 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-10 sm:mt-20 flex flex-col items-center">
        <VerticalTimeline>
          {workExperience.map((experience, index) => (
            <WorkCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
        <Button
          radius="full"
          className="bg-gradient-to-tr w-fit mt-10 from-pink-500 to-purple-500 text-white drop-shadow-lg"
          startContent={<ArrowDownTrayIcon className="w-5 h-6" />}
        >
          Download CV
        </Button>
      </div>
    </>
  );
};
