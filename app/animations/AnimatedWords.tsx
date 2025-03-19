import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedWordsProps = {
  title: string;
  style?: string;
  delay?: number;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  title,
  style = "",
  delay = 0.4,
}) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) ctrls.start("animate");
  }, [ctrls, inView]);

  const wordAnimation = {
    initial: { opacity: 0, y: 150 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <h1 aria-label={title} role="heading" className="text-center">
      <motion.div
        ref={ref}
        initial="initial"
        animate={ctrls}
        variants={staggerContainer}
        className="flex max-w-[500px] flex-col overflow-hidden text-[96px] font-extrabold leading-[0.8em] text-[#e4ded7] sm:text-[120px] sm:leading-[0.85em] md:max-w-[900px] md:text-[155.5px] lg:text-[215px]"
      >
        {title.split(" ").map((word, index) => (
          <motion.div key={index} className="flex justify-center">
            <motion.span className={style} variants={wordAnimation}>
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </h1>
  );
};

export default AnimatedWords;
