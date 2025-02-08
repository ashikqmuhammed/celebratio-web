import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-10  shadow-md p-4 flex  items-center justify-between">
      <Link href="/" className="text-xl font-bold ">
        Celebratio
      </Link>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Link href="/search" className="text-lg">
          🔍
        </Link>
        <Link href="/notifications" className="text-lg ">
          🔔
        </Link>
        <Link href="/profile" className="text-lg ">
          👤
        </Link>
      </div>
    </header>
  );
}
