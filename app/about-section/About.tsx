import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I BUILD SMART SOLUTIONS, DESIGN INTELLIGENT SYSTEMS, AND CRAFT SEAMLESS DIGITAL EXPERIENCES."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            <AnimatedBody
              text={
                "As a full-stack developer, AI enthusiast, and embedded systems engineer, I specialize in building intelligent applications that merge performance with innovation. From scalable web platforms to IoT-driven automation, I bring ideas to life with clean code and cutting-edge technology."
              }
            />
            <AnimatedBody
              text={
                "My work extends across AI-powered data analytics, cloud computing, and real-time embedded solutions. Whether I'm designing an intuitive user interface, training an AI model, or optimizing embedded firmware, I strive to create impact-driven solutions that redefine user experiences."
              }
            />
            <AnimatedBody
              text={
                "Beyond development, I'm an active contributor to tech communities. From mentoring students in AI & IoT workshops to collaborating on open-source projects, I believe in the power of knowledge-sharing and continuous learning."
              }
            />
            <AnimatedBody
              text={
                "When I'm not coding, you’ll find me exploring new AI trends, capturing moments through my camera lens, or brainstorming innovative tech solutions that push the boundaries of what's possible."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Tech Stack"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"JavaScript, TypeScript, Python, Node.js, Express.js, React, Next.js, Redux, Tailwind CSS, MongoDB, PostgreSQL, Firebase, Docker, AWS, GraphQL."}
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"AI & Data Science"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"TensorFlow, OpenCV, Scikit-learn, Pandas, NumPy, Data Visualization, Deep Learning, NLP, Computer Vision."}
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Embedded & IoT"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"ESP32, ESP8266, Arduino, Raspberry Pi, Microcontrollers, Sensor Integration, IoT Protocols, Embedded C/C++, MQTT, GSM Modules."}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
