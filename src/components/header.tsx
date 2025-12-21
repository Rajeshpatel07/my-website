import Image from "next/image";
import Link from "next/link";
import { Github } from "./ui/svgs/github";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-(--border) py-1 px-6 md:py-4 md:px-15 bg-(--background)">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </div>
        <div>
          <Link
            href="https://github.com/Rajeshpatel07"
            target="_blank"
            className="hover:border-b-white hover:border-b flex gap-1 items-center"
          >
            <Github height="30" width="30" />
            <p className="hidden md:block">Github</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
