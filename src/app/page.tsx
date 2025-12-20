import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className=" border  border-(--border) h-screen md:mx-15 lg:mx-30 xl:mx-50 2xl:mx-70 3xl:mx-150 box-border ">
      <Header />
      <Hero />
    </div>
  );
}
