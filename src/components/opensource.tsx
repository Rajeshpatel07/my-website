import Image from "next/image";
import Link from "next/link";
import Badge from "./ui/badge";
import Bun from "./ui/technologies/bun";
import Nodejs from "./ui/technologies/nodejs";
import Typescript from "./ui/technologies/typescript";

export default function OpenSource() {
  return (
    <article>
      <h2 className="font-bold font-plex text-4xl md:text-5xl text-white mb-8">
        Open Source Contributions
      </h2>
      <div className="space-y-8">
        <figure className="inline-block">
          <Link
            href={"https://ripplejs.com"}
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={"/ripple.svg"}
              alt="Ripple.js logo"
              width={300}
              height={50}
              className="rounded-lg"
            />
          </Link>
        </figure>
        <div className="space-y-6">
          <h3 className="font-plex text-xl md:text-2xl text-white font-semibold">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            <Badge>
              <div className="w-6 h-6">
                <Typescript />
              </div>
              <p className="text-white font-semibold">Typescript</p>
            </Badge>
            <Badge>
              <div className="w-6 h-6">
                <Nodejs />
              </div>
              <p className="text-white font-semibold">Nodejs</p>
            </Badge>
            <Badge>
              <div className="w-6 h-6">
                <Bun />
              </div>
              <p className="text-white font-semibold">Bun</p>
            </Badge>
          </div>
          <div>
            <h3 className="font-plex text-xl md:text-2xl text-white font-semibold mb-4">
              Contributions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 font-plex">
              <li className="leading-relaxed">
                <Link
                  href={"https://github.com/Ripple-TS/ripple/pull/586"}
                  target="_blank"
                  className="hover:text-blue-400 transition-colors"
                >
                  Added Bun package manager option to create-ripple.{" "}
                  <span className="text-blue-400">#586</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
