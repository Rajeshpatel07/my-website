import type { JSX, SVGProps } from "react";
import AWS from "./svgs/technologies/aws";
import Bun from "./svgs/technologies/bun";
import Cmake from "./svgs/technologies/cmake";
import { Cpp } from "./svgs/technologies/cpp";
import { Docker } from "./svgs/technologies/docker";
import ExpressJs from "./svgs/technologies/expressjs";
import JavaScript from "./svgs/technologies/javascript";
import { Linux } from "./svgs/technologies/linux";
import MongoDB from "./svgs/technologies/mongodb";
import { Neovim } from "./svgs/technologies/neovim";
import Nextjs from "./svgs/technologies/nextjs";
import NodeJs from "./svgs/technologies/nodejs";
import PostgreSQL from "./svgs/technologies/postgresql";
import { Python } from "./svgs/technologies/python";
import ReactIcon from "./svgs/technologies/reacticon";
import TailwindCss from "./svgs/technologies/tailwindcss";
import TypeScript from "./svgs/technologies/typescript";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const techIcons: Record<string, IconComponent> = {
  AWS,
  Bun,
  CMake: Cmake,
  Cpp,
  Docker,
  Expressjs: ExpressJs,
  Javascript: JavaScript,
  Linux,
  Mongodb: MongoDB,
  Neovim,
  Nextjs,
  Nodejs: NodeJs,
  Postgresql: PostgreSQL,
  Python,
  React: ReactIcon,
  TailwindCss,
  Typescript: TypeScript,
};

export default function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon =
    techIcons[name] ||
    techIcons[name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()] ||
    techIcons[
      Object.keys(techIcons).find(
        (k) => k.toLowerCase() === name.toLowerCase(),
      ) || ""
    ];

  if (!Icon) return null;

  return (
    <span className={className}>
      <Icon />
    </span>
  );
}
