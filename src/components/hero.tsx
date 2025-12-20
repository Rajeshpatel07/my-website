import Link from "next/link";
import Image from "next/image";
import Badge from "./ui/badge";
import { languages } from "@/data/Data";
import { socials } from "@/data/socials";

export default function Hero() {
  return (
    <div className="border-b border-(--border) box-border">
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
          <span className="inline-flex text-xl items-center flex-wrap leading-10">
            Full-stack Engineer specializing in building scalable products with
            <Badge name="Typescript" imageUrl={languages.typescript} />,
            <Badge name="Reactjs" imageUrl={languages.reactjs} /> and
            <Badge name="Nextjs" imageUrl={languages.nextjs} />. Leveraging a
            deep foundation in
            <Badge name="C++" imageUrl={languages.cpp} />
            and
            <Badge name="Docker" imageUrl={languages.docker} />
            to deliver high-performance solutions from backend to deployment.
          </span>
        </div>
        <div id="resume" className="py-5">
          <Link
            href={"#"}
            className="font-bold font-plex text-2xl text-white border border-(--border) rounded-md py-2 px-4 hover:bg-gray-800"
          >
            Resume
          </Link>
        </div>
        <div id="socials" className="flex items-center gap-3">
          {socials.map((item) => (
            <Link href={item.url} key={item.name}>
              <item.logo height="30" width="30" className="text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
