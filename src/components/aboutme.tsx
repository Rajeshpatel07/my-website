import Image from "next/image";
import { skills } from "@/data/skills";

export default function Aboutme() {
  return (
    <section className="border-b border-(--border) box-border">
      <div className="flex flex-col justify-center items-start space-y-4 py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-20 lg:px-20 xl:py-40 xl:px-40">
        <h1 className="font-bold font-plex text-4xl md:text-5xl text-white">
          About me
        </h1>
        <div className="flex flex-col  md:flex-row gap-8 py-4  w-full">
          <div id="image" className="w-full border relative aspect-square">
            <Image
              src="/profile.png"
              alt="Rajesh Potharam"
              fill
              className="object-cover object-top rounded-lg"
            />
          </div>
          <div
            id="details"
            className="w-full md:w-3/5 flex flex-col justify-center space-y-4"
          >
            <h1 className="font-bold font-plex text-3xl md:text-4xl text-white">
              Rajesh Potharam
            </h1>
            <p className="font-plex text-gray-300 leading-relaxed">
              I'm a software engineer with a lot of skill issues. Trying to get
              out of my imposter syndrome. If you are anything like me let
              connect.
            </p>
            <div>
              <h2 className="font-bold font-plex text-xl md:text-2xl text-white mb-2">
                Skills
              </h2>
              <div id="logos" className="flex flex-wrap gap-3">
                {skills.map((item) => (
                  <div className="w-8 h-8" key={item.name}>
                    <item.logo />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
