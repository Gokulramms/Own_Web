import { reviewProps } from "./reviewDetails";
import { motion } from "framer-motion";
import Image from "next/image";
import slash from "../../public/review-slash.svg";

const BlogCard = ({ name, role, company, profileImg, testimonial, index }: reviewProps) => {
  const abbreviateName = (name: string): string => {
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0]} ${nameParts[1][0]}.`;
    }
    return name; // If there's only a single name, return it as is
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[473px] w-full flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:h-[450px] sm:items-center sm:justify-start lg:h-[393px] lg:max-w-[438px]"
    >
      {/* Decorative Slash */}
      <Image src={slash} alt="Decorative Slash" className="absolute top-[34px] left-[28px] w-[51px]" />

      {/* Testimonial */}
      <p className="mt-10 text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]">
        {testimonial}
      </p>

      {/* Profile Section */}
      <div className="flex gap-3 sm:absolute sm:bottom-[28px] sm:left-[28px]">
        <Image
          src={profileImg}
          alt={`${name}'s profile picture`}
          width={41}
          height={41}
          className="h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover grayscale"
          loading="lazy"
        />
        <div className="flex flex-col gap-1 pr-7">
          <h3 className="w-[176px] text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]">
            {abbreviateName(name)}
          </h3>
          <p className="text-sm font-[500] leading-[16px] text-[#95979D]">
            {role} @ {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
