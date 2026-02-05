import Aboutme from "@/components/aboutme";
import Contact from "@/components/contact";
// import Experience from "@/components/experience";
import GitHubGraph from "@/components/githubgraph";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className=" border  border-(--border) mb-10  md:mx-10 md:mb-10 lg:mx-20 xl:mx-30 3xl:mx-50 4xl:mx-80 lg:mb-20 xl:mb-30 2xl:mb-80  box-border ">
      <Header />
      <Hero />
      {/* <Experience /> */}
      <GitHubGraph />
      <Projects />
      <Aboutme />
      <Contact />
    </div>
  );
}
