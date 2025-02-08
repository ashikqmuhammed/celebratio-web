import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-40 lg:w-64 p-4 fixed h-full shadow-xl">
      <nav className="flex flex-col gap-4">
        <Link href="/">🏠 Home</Link>
        <Link href="/services">🛠️ Services</Link>
        <Link href="/explore">🌍 Explore</Link>
        <Link href="/profile">👤 Profile</Link>
      </nav>
    </aside>
  );
}
