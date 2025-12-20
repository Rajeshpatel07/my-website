import ExpressJs from "@/components/ui/technologies/expressjs";
import NodeJs from "@/components/ui/technologies/nodejs";
import ReactIcon from "@/components/ui/technologies/reacticon";
import SocketIo from "@/components/ui/technologies/socketio";
import TypeScript from "@/components/ui/technologies/typescript";
import { Webrtc } from "@/components/ui/technologies/webrtc";

export const experience = {
  tools: [
    {
      name: "Typescript",
      logo: TypeScript,
    },
    {
      name: "Reactjs",
      logo: ReactIcon,
    },
    {
      name: "Nodejs",
      logo: NodeJs,
    },
    {
      name: "Express",
      logo: ExpressJs,
    },
    {
      name: "SocketIo",
      logo: SocketIo,
    },
    {
      name: "WebRtc",
      logo: Webrtc,
    },
    {
      name: "Mediasoup",
      logo: Webrtc,
    },
  ],
  work: [
    "Developed a robust and efficient group video conferencing solution leveraging TypeScript, Node.js, Mediasoup and WebSockets capable of accommodating 50+ concurrent users per session.",
    "Architected and implemented the frontend for a Platform as a Service (PaaS) application using React,TypeScript, TanStack and Tailwind CSS enhancing user experience.",
    "Collaborated with the Flutter team to seamlessly integrate video calling functionalities into the mobile application, ensuring cross-platform consistency.",
  ],
};
