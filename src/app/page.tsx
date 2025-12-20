import Aboutme from "@/components/aboutme";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className=" border  border-(--border)  md:mx-10 lg:mx-20 xl:mx-30 2xl:mx-80  box-border ">
      <Header />
      <Hero />
      <Experience />
      <Aboutme />
    </div>
  );
}
