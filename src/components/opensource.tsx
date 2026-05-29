import Image from "next/image";
import Link from "next/link";
import { fossProjectsInfo } from "@/data/opensourceinfo";
import Badge from "./ui/badge";
import TechIcon from "./ui/tech-icon";

export default function OpenSource() {
  return (
    <article>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-12">
        Open Source Contributions
      </h2>

      {fossProjectsInfo.map((project) => (
        <div className="space-y-6 py-6" key={project.name}>
          <figure className="inline-block">
            <Link
              href={project.link}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={project.image}
                alt={project.name}
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
              {project.tools.map((toolName) => (
                <Badge key={toolName}>
                  <TechIcon name={toolName} className="w-6 h-6" />
                  <p className="text-white font-semibold">{toolName}</p>
                </Badge>
              ))}
            </div>
            <div>
              <h3 className="font-plex text-xl md:text-2xl text-white font-semibold mb-4">
                Contributions
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 font-plex">
                {project.contributions.map((item) => (
                  <li className="leading-relaxed" key={item.id}>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.title}{" "}
                      <span className="text-blue-400">#{item.id}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}
