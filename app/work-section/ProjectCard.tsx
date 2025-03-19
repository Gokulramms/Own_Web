import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: `url(${image}) center/cover no-repeat, #212531`,
        position: "relative",
      }}
      className="relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl py-0 sm:h-[700px] md:h-[650px] lg:h-[500px]"
    >
      <Image
        src={image}
        alt={name}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
        layout="intrinsic"
        priority={id === 0} // Prioritize first project for faster LCP
      />

      {/* Project Links (GitHub & Demo) */}
      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
        } mt-6 flex items-center gap-4 lg:mt-10`}
      >
        {available ? (
          <>
            <Link href={github} target="_blank" className="rounded-full" aria-label="Open GitHub Repository">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Link href={github} target="_blank" className="mt-1 rounded-full" aria-label="Open GitHub Repository">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className="rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px]">Coming soon</h3>
            </div>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div
        className={`absolute text-white ${
          id % 2 === 0
            ? "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
            : "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60 lg:mr-4"
        } mb-10 md:mb-16 lg:mb-14`}
      >
        {/* Project Name */}
        <AnimatedTitle
          text={name}
          className="max-w-[90%] text-[40px] leading-none text-white md:text-[44px] lg:max-w-[450px] lg:text-[48px]"
          wordSpace="mr-[0.25em]"
          charSpace="-mr-[0.01em]"
        />

        {/* Project Description */}
        <AnimatedBody
          text={description}
          className="mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D]"
        />

        {/* Technologies Used */}
        <div className="mt-9 flex gap-4">
          {technologies.map((tech) => (
            <AnimatedTitle
              key={tech}
              text={tech}
              wordSpace="mr-[0.25em]"
              charSpace="mr-[0.01em]"
              className="text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
