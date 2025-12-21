import ExpressJs from "@/components/ui/technologies/expressjs";
import { MediasoupIcon } from "@/components/ui/technologies/mediasoup";
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
      logo: MediasoupIcon,
    },
  ],
  work: [
    "Worked on a group video calling app that supports 50+ active users using Node.js and Mediasoup.",
    "Developed the frontend for a PaaS platform using React, TypeScript, and Tailwind CSS.",
    "Worked with the mobile team to add video calling features to a Flutter application.",
  ],
};
