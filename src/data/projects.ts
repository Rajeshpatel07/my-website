import AWS from "@/components/ui/technologies/aws";
import Bun from "@/components/ui/technologies/bun";
import Cmake from "@/components/ui/technologies/cmake";
import { Cpp } from "@/components/ui/technologies/cpp";
import { Docker } from "@/components/ui/technologies/docker";
import ExpressJs from "@/components/ui/technologies/expressjs";
import { Linux } from "@/components/ui/technologies/linux";
import NodeJs from "@/components/ui/technologies/nodejs";
import PostgreSQL from "@/components/ui/technologies/postgresql";
import ReactIcon from "@/components/ui/technologies/reacticon";
import TailwindCss from "@/components/ui/technologies/tailwindcss";
import TypeScript from "@/components/ui/technologies/typescript";

export const projects = [
  {
    name: "CoreKV",
    description:
      "A high-performance, zero-dependency key-value store and cache for low-latency and minimal overhead.",
    image: "/coreKV.png",
    link: "https://github.com/Rajeshpatel07/corekv",
    inPorcess: false,
    technologies: [
      {
        name: "C++",
        logo: Cpp,
      },
      {
        name: "Linux",
        logo: Linux,
      },
      {
        name: "CMake",
        logo: Cmake,
      },
    ],
  },
  {
    name: "Cloudshell",
    description:
      "An interactive platform that allows users to instantly spin up and use various Linux distributions",
    image: "/cloudshell.png",
    link: "http://github.com/Rajeshpatel07/cloudshell",

    inPorcess: false,
    technologies: [
      {
        name: "Typescript",
        logo: TypeScript,
      },
      {
        name: "React",
        logo: ReactIcon,
      },
      {
        name: "TailwindCss",
        logo: TailwindCss,
      },
      {
        name: "Nodejs",
        logo: NodeJs,
      },
      {
        name: "Expressjs",
        logo: ExpressJs,
      },
      {
        name: "Postgresql",
        logo: PostgreSQL,
      },
      {
        name: "Docker",
        logo: Docker,
      },
      {
        name: "AWS",
        logo: AWS,
      },
      {
        name: "Linux",
        logo: Linux,
      },
    ],
  },
  {
    name: "Scythe",
    description:
      "A keyboard-centric command palette for the browser that unifies history search and navigation into a fast, elegant interface.",
    image: "/scythe.png",
    link: "https://github.com/Rajeshpatel07/scythe",
    inPorcess: false,
    technologies: [
      {
        name: "Typescript",
        logo: TypeScript,
      },
      {
        name: "Bun",
        logo: Bun,
      },
    ],
  },
];
