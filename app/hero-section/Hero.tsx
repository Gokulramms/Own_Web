import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/profil.jpg";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
  

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/Gokulramms"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              GITHUB
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gokulramm-s-984a69257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              LINKEDIN
            </motion.p>
          </Link>
          <Link
            href="https://x.com/its__sgr?t=pF_N0UGOUki3kNevCu60uw&s=09"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              X
            </motion.p>
          </Link>
          <Link
            href="https://www.instagram.com/im_sgr_?igsh=MWRoaWc5OGdqeTY5bA=="
            target="_blank"
            aria-label="View Contra Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              INSTAGRAM
            </motion.p>
          </Link>
          <Link
            href="https://discord.gg/ujr9bWQt"
            target="_blank"
            aria-label="View Contra Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              DISCORD
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="GOKUL RAMM"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Victor's headshot"
              data-blobity-tooltip="SGR"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          {/* <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
          Hello! I'm Gokulramm S, and I'm based in-
          <Link
              href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/@11.0139244,76.8024223,11z/data=!3m1!4b1!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="Kora Website"
            >
                Coimbatore, India.
            </Link>{" "}
    <br />
    I am an aspiring Software Engineer currently pursuing a degree in Artificial Intelligence & Data Science at KGISL Institute of Technology. Passionate about creating high-performance applications with sleek, professional UI, I continuously push my boundaries to deliver impactful solutions.
              </p> */}
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          {/* <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
               With a strong foundation in full-stack development, I specialize in designing scalable applications and integrating AI-driven functionalities. My goal is to innovate, collaborate, and evolve as a technology enthusiast, contributing to the industry with cutting-edge solutions.

          </p> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
