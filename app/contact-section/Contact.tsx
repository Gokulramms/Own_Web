import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";

const socialLinks = [
  { name: "GITHUB", url: "https://github.com/Gokulramms", aria: "View GitHub Profile" },
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/gokulramm-s-984a69257", aria: "View LinkedIn Profile" },
  { name: "X", url: "https://x.com/its__sgr?t=pF_N0UGOUki3kNevCu60uw&s=09", aria: "View Twitter Profile" },
  { name: "INSTAGRAM", url: "https://www.instagram.com/im_sgr_?igsh=MWRoaWc5OGdqeTY5bA==", aria: "View Instagram Profile" },
];

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        {/* Title Section */}
        <div className={`relative w-full flex flex-col items-start ${monaSans.className} sm:items-center lg:max-w-[1440px]`}>
          <AnimatedWords2
            title="Let's Talk"
            style="flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
          />
          <Image
            src={heartIcon}
            alt=""
            aria-hidden="true"
            priority
            className="heartbeat absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          />
        </div>

        {/* Contact Section */}
        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          {/* Contact Description */}
          <div className="w-[350px] max-w-[90%] text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody text="Got a question, proposal, project, or want to work together on something?" className="-mb-1 pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4" />
          </div>

          {/* Social Links */}
          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            {socialLinks.map(({ name, url, aria }) => (
              <Link key={name} href={url} target="_blank" aria-label={aria}>
                <AnimatedTitle text={name} className="text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
