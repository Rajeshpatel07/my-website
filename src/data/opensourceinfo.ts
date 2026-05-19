import TypeScript from "@/components/ui/technologies/typescript";
import ReactIcon from "@/components/ui/technologies/reacticon";
import Bun from "@/components/ui/technologies/bun";
import NodeJs from "@/components/ui/technologies/nodejs";

export const fossProjectsInfo = [
  {
    name: "Gemini-cli",
    link: "https://geminicli.com/",
    image: "/gemini-cli.svg",
    tools: [
      {
        name: "Typescript",
        logo: TypeScript,
      },
      {
        name: "Nodejs",
        logo: NodeJs,
      },
      {
        name: "Reactjs",
        logo: ReactIcon,
      },
    ],
    contributions: [
      {
        id: 25139,
        title:
          "fix(cli): Prevent unmapped keys in Vim Normal mode from inserting text into prompt Input.",
        link: "https://github.com/google-gemini/gemini-cli/pull/25139",
      },
    ],
  },
  {
    name: "Ripple-ts",
    link: "https://ripple-ts.com",
    image: "/ripple.svg",
    tools: [
      {
        name: "Typescript",
        logo: TypeScript,
      },
      {
        name: "Nodejs",
        logo: NodeJs,
      },
      {
        name: "Bun",
        logo: Bun,
      },
    ],
    contributions: [
      {
        id: 586,
        title: "Added bun package manager option to create-ripple.",
        link: "https://github.com/Ripple-TS/ripple/pull/586",
      },
    ],
  },
];
