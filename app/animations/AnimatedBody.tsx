import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedBodyProps = {
  text: string;
  className?: string;
};

export default function AnimatedBody({ text, className = "" }: AnimatedBodyProps) {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) ctrls.start("visible");
  }, [ctrls, inView]);

  return (
    <motion.p
      ref={ref}
      aria-label={text}
      role="heading"
      className={className}
      initial="hidden"
      animate={ctrls}
      variants={{
        hidden: { opacity: 0, y: "1em" },
        visible: {
          opacity: 1,
          y: "0em",
          transition: { delay: 0.1, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
        },
      }}
    >
      {text}
    </motion.p>
  );
}
