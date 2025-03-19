import { blogProps } from "./blogDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../globals.css";

const BlogCard = ({ title, image, url, date, available, index }: blogProps) => {
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
      viewport={{ amount: "some", once: true }}
      className="relative flex h-[430px] w-full max-w-[400px] flex-col items-center rounded-2xl bg-[#212531]"
    >
      <div className="mt-4 h-full w-[90%] lg:mt-5 lg:w-[92%]">
        <div className="h-[60%] w-full md:h-[56%]">
          <Image
            src={image}
            alt={`Blog cover image for ${title}`}
            width={1600}
            height={840}
            priority
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <h3 className="mt-3 break-words uppercase tracking-tight line-clamp-2">
          {title}
        </h3>
      </div>

      <div className="absolute bottom-0 mb-5 flex w-[90%] items-center justify-between text-[14px] font-bold text-[#95979D]">
        {available ? (
          <>
            <p>{date}</p>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
              aria-label={`Read more about ${title}`}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-[16px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#fff] md:w-[20px] md:text-[20px] lg:w-[18px] lg:p-4 lg:text-[18px]"
                data-blobity
                data-blobity-radius="30"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false"
              />
            </Link>
          </>
        ) : (
          <p className="text-center w-full">Coming soon</p>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
