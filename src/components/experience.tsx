import { experience } from "@/data/experience";
import Badge from "./ui/badge";

export default function Experience() {
  return (
    <section className="border-b border-(--border) box-border ">
      <div className="flex flex-col justify-center items-start space-y-6 py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-20 lg:px-20 xl:py-30 xl:px-40">
        <h1 className="font-bold font-plex text-4xl md:text-5xl text-white">
          Experience
        </h1>
        <article className="w-full">
          <div className="border rounded-lg p-6 bg-gray-900/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="">
                <h2 className="text-white font-plex text-2xl md:text-3xl font-semibold">
                  Associate Software Engineer
                </h2>
                <h3 className="font-plex text-lg md:text-xl text-gray-300">
                  Peram Software Solutions
                </h3>
              </div>
            </div>

            <div className="text-left">
              <p className="font-plex text-gray-400">Apr 2025 - Jun 2025</p>
              <p className="font-plex text-gray-400">Hyderabad, India</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-plex text-xl md:text-2xl text-white font-semibold mb-4">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap space-x-1 space-y-2">
              {experience.tools.map((item) => (
                <Badge key={item.name}>
                  <div className="w-6 h-6">
                    <item.logo />
                  </div>
                  <p className="text-white font-semibold">{item.name}</p>
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <ul className="list-disc list-inside space-y-2 text-gray-300 font-plex">
              {experience.work.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
