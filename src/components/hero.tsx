import Link from "next/link";
import Image from "next/image";
import Badge from "./ui/badge";
import { languages } from "@/data/Data";
import { socials } from "@/data/socials";
import TypeScript from "./ui/technologies/typescript";
import ReactIcon from "./ui/technologies/reacticon";
import Nextjs from "./ui/technologies/nextjs";
import { Cpp } from "./ui/technologies/cpp";
import { Docker } from "./ui/technologies/docker";

export default function Hero() {
  return (
    <section className="border-b border-(--border) box-border">
      <div className="flex flex-col justify-center items-start space-y-4 py-8 px-5 xl:p-40">
        <div
          id="photo"
          className="border rounded-full w-32 h-32 md:w-48 md:h-48 relative"
        >
          <Image
            className=""
            src=""
            alt="photo"
            fill
            sizes="(max-width: 768px) 128px, 192px"
          ></Image>
        </div>
        <div id="text">
          <h1 className="inline-block text-3xl md:text-5xl font-plex text-[#f2eded]">
            Hi, I'm Rajesh -{" "}
          </h1>
          <h1 className="inline-block text-3xl md:text-5xl font-plex font-bold pl-2">
            A Full Stack Developer
          </h1>
        </div>
        <div id="description" className="font-semibold">
          <p className="inline-flex text-xl items-center flex-wrap leading-10">
            Full-stack Engineer specializing in building scalable products with
            <Badge>
              {/* NOTE: add this div to every badge*/}
              <div className="h-6 w-6">
                <TypeScript height="25" width="25" />
              </div>
              <p className="text-white font-semibold">{"Typescript"}</p>
            </Badge>
            ,
            <Badge>
              <div className="h-6 w-6">
                <ReactIcon />
              </div>
              <p className="text-white font-semibold">{"Reactjs"}</p>
            </Badge>
            and
            <Badge>
              <div className="h-6 w-6">
                <Nextjs />
              </div>
              <p className="text-white font-semibold">{"Nextjs"}</p>
            </Badge>
            Leveraging a deep foundation in
            <Badge>
              <div className="h-6 w-6">
                <Cpp />
              </div>
              <p className="text-white font-semibold">{"C++"}</p>
            </Badge>
            and
            <Badge>
              <div className="h-6 w-6">
                <Docker />
              </div>
              <p className="text-white font-semibold">{"Docker"}</p>
            </Badge>
            to deliver high-performance solutions from backend to deployment.
          </p>
        </div>
        <div id="resume" className="py-5">
          <Link
            href={"#"}
            className="font-bold font-plex text-2xl text-white border border-(--border) rounded-md py-2 px-4 hover:bg-gray-800"
          >
            Resume
          </Link>
        </div>
        <nav id="socials" className="flex items-center gap-3">
          <ul className="flex items-center gap-3">
            {socials.map((item) => (
              <li key={item.name}>
                <Link href={item.url}>
                  <item.logo height="30" width="30" className="text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
