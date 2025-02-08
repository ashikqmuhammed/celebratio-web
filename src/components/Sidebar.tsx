import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-full p-4 border-r text-text">
      <Link href="/" className=" text-[var(--primary-color)]">🏠 Home</Link>
      <Link href="/services">🛠️ Services</Link>
      <Link href="/explore" >🌍 Explore</Link>
      <Link href="/profile">👤 Profile</Link>
    </aside>
  );
}
