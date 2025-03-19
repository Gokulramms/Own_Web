import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  text: string;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
};

export default function AnimatedTitle({
  text,
  className = "",
  wordSpace = "mr-2",
  charSpace = "mx-[1px]",
}: AnimatedTitleProps) {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) ctrls.start("visible");
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const characterAnimation = {
    hidden: { opacity: 0, y: "0.25em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <h2 aria-label={text} role="heading" className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <motion.span
          ref={ref}
          key={wordIndex}
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          className={`inline-block whitespace-nowrap ${wordSpace}`}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={characterAnimation}
              className={`inline-block ${charSpace}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h2>
  );
}
