import Aboutme from "@/components/aboutme";
import Contact from "@/components/contact";
import GitHubGraph from "@/components/githubgraph";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export const metadata = {
  title: "Rajesh - Full Stack Developer",
  description:
    "Portfolio of Rajesh, a Full Stack Developer specializing in TypeScript, React, and Next.js",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-(--background) selection:bg-white/10 selection:text-white">
      <div className="max-w-[1440px] mx-auto border-x border-border/50 min-h-screen box-border shadow-2xl relative">
        <Header />
        <main>
          <Hero />
          <GitHubGraph />
          <Projects />
          <Aboutme />
          <Contact />
        </main>

        {/* Subtle background glow effects */}
        <div className="fixed top-0 left-1/4 -z-10 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 -z-10 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      </div>
    </div>
  );
}
