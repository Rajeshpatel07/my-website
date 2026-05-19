import Image from "next/image";
import Link from "next/link";
import Badge from "./ui/badge";
import { skills } from "@/data/skills";
import { fossProjectsInfo } from "@/data/opensourceinfo";

export default function OpenSource() {
  return (
    <article>
      <h2 className="font-bold font-plex text-4xl md:text-5xl text-white mb-8">
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
              {project.tools.map((tool) => (
                <Badge key={tool.name}>
                  <div className="w-6 h-6">
                    <tool.logo />
                  </div>
                  <p className="text-white font-semibold">{tool.name}</p>
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
