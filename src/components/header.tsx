import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b border-(--border) py-4 px-15">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </div>
        <div>
          <Link
            href="https://github.com/Rajeshpatel07"
            target="_blank"
            className="hover:border-b-white hover:border-b"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
