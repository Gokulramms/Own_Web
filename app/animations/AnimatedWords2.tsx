import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedWords2Props = {
  title: string;
  style?: string;
};

const AnimatedWords2: React.FC<AnimatedWords2Props> = ({ title, style = "" }) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) ctrls.start("animate");
  }, [ctrls, inView]);

  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    initial: { opacity: 0, y: 150 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.2, 0.65, 0.3, 0.9], duration: 0.8 },
    },
  };

  return (
    <h1 aria-label={title} role="heading">
      <motion.span ref={ref} className={style} initial="initial" animate={ctrls} variants={containerVariants}>
        {title.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className={`inline-block overflow-hidden ${index === title.split(" ").length - 1 ? "last:-mr-10" : ""}`}
            variants={wordVariants}
          >
            {word + "\u00A0"}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedWords2;
