import Link from "next/link";
import { contactinfo } from "@/data/contactinfo";

export default function Contact() {
  return (
    <section className="border-b border-(--border) box-border">
      <div className="flex flex-col justify-center items-start space-y-4 h-full ">
        <div id="details" className="flex flex-col md:flex-row w-full h-full">
          {contactinfo.map((info) => (
            <div
              key={info.info}
              className="border-y border-y-(--border) md:border-x md:border-(--border) h-20 md:h-32 w-full  md:w-1/3 flex items-center justify-center"
            >
              {info.name === "mail" ? (
                <Link href={`mailto:${info.info}`}>
                  <div className="flex gap-2 items-center font-semibold hover:text-white">
                    <info.icon className="h-6 w-6" />
                    <h1 className="md:text-xl font-plex">{info.info}</h1>
                  </div>
                </Link>
              ) : (
                <div className="flex gap-2 items-center font-semibold hover:text-white">
                  <info.icon className="h-6 w-6" />
                  <h1 className="md:text-xl font-plex">{info.info}</h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
