import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";
import Badge from "./ui/badge";
import { Cpp } from "./ui/technologies/cpp";
import Nextjs from "./ui/technologies/nextjs";
import ReactIcon from "./ui/technologies/reacticon";
import TypeScript from "./ui/technologies/typescript";

export default function Hero() {
  return (
    <section className="border-b border-(--border) box-border">
      <div className="flex flex-col justify-center items-start space-y-4 py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-20 lg:px-20 xl:py-40 xl:px-40">
        <div
          id="photo"
          className="border overflow-hidden rounded-full w-32 h-32 md:w-60 md:h-60 relative "
        >
          <Image
            className="object-cover object-top"
            src="/profile.png"
            alt="photo"
            fill
            sizes="(max-width: 768px) 128px, 240px"
          ></Image>
        </div>
        <div id="text">
          <h1 className="inline-block text-3xl md:text-5xl font-plex font-bold text-[#f2eded]">
            Hi, I'm Rajesh -{" "}
          </h1>
          <h1 className="inline-block text-3xl md:text-5xl font-plex font-semibold pl-2">
            A Full Stack Developer
          </h1>
        </div>
        <div id="description" className="font-medium font-plex">
          {/* Changed from <span> to <p> and removed 'flex' classes */}
          <span className="text-lg leading-[2]">
            I specialize in building scalable applications with
            {/* BADGE 1: Typescript */}
            <span className="inline-flex items-baseline align-middle">
              <Badge>
                <span className="h-5 w-5 mr-1">
                  {" "}
                  {/* Added mr-1 for spacing between icon/text */}
                  <TypeScript height="25" width="25" />
                </span>
                <span className="text-white font-medium text-sm">
                  TypeScript
                </span>
              </Badge>
            </span>
            ,{/* BADGE 2: React */}
            <span className="inline-flex items-baseline align-middle">
              <Badge>
                <span className="h-5 w-6 mr-1">
                  <ReactIcon />
                </span>
                <span className="text-white font-medium text-sm">React.js</span>
              </Badge>
            </span>
            and{/* BADGE 3: Next.js */}
            <span className="inline-flex items-baseline align-middle">
              <Badge>
                <span className="h-5 w-5 mr-1">
                  <Nextjs />
                </span>
                <span className="text-white font-medium text-sm">Next.js</span>
              </Badge>
            </span>
          </span>
          . Currently working on low level systems in
          {/* BADGE 4: C++ */}
          <span className="inline-flex items-baseline align-middle">
            <Badge>
              <span className="h-5 w-5 mr-1">
                <Cpp />
              </span>
              <span className="text-white font-medium text-sm">C++</span>
            </Badge>
          </span>
          .{/* BADGE 5: Docker */}
          {/* <span className="inline-flex items-baseline align-middle"> */}
          {/*   <Badge> */}
          {/*     <span className="h-5 w-5 mr-1"> */}
          {/*       <Docker /> */}
          {/*     </span> */}
          {/*     <span className="text-white font-medium text-sm">Docker</span> */}
          {/*   </Badge> */}
          {/* </span>{" "} */}
        </div>
        <div id="resume" className="py-5">
          <Link
            href="https://drive.google.com/file/d/1ZGRLI3l3KvhszWKbXr2GFUUoMfUjRl14/view?usp=sharing"
            target="_blank"
            className="font-bold font-plex text-2xl text-white border border-(--border) rounded-md py-2 px-4 hover:bg-gray-800"
          >
            Resume
          </Link>
        </div>
        <nav id="socials" className="flex items-center gap-3">
          <ul className="flex items-center gap-3">
            {socials.map((item) => (
              <li key={item.name}>
                <Link href={item.url} target="_blank">
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
