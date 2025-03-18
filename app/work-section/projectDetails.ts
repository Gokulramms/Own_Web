export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "E-PassSystem",
    description:
      "Effective Person Handing Using QR-Code",
    technologies: ["Frontend", "Backend","Full Stack"],
    github: "https://github.com/Jaisrinivasan23/E-Pass-System",
    demo: "https://github.com/Jaisrinivasan23/E-Pass-System",
    image: require(".//../../public/projects/Web-Application.webp"),
    available: true,
  },
  {
    id: 1,
    name: "FaceTrack",
    description:
      "Effective Face Recognition For Attendance Tracking",
    technologies: ["Full Stack", "Embedded System"],
    github: "https://github.com/Gokulramms/face_attendance_system",
    demo: "https://github.com/Gokulramms/face_attendance_system",
    image: require(".//../../public/projects/face.webp"),
    available: true,
  },
  {
    id: 2,
    name: "TrainGuard",
    description:
      "TrainGuard is an advanced AI-powered system designed to prevent train collisions by detecting obstacles, monitoring track conditions, and providing real-time alerts. It enhances railway safety through automation, ensuring swift preventive actions to avoid accidents.",
    technologies: ["Embedded System"],
    github: "https://github.com/Gokulramms",
    demo: "https://github.com/Gokulramms",
    image: require(".//../../public/projects/train.jpg"),
    available: true,
  },
  {
    id: 3,
    name: "GovBot",
    description:
      "GovBot – A decision tree-based chatbot for government agencies, ensuring fast and accurate responses to public inquiries.",
    technologies: ["Backend"],
    github: "https://github.com/yuvan-s-96/SIH",
    demo: "https://github.com/yuvan-s-96/SIH",
    image: require(".//../../public/projects/sx.jpg"),
    available: true,
  },

];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
