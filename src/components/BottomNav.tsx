import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="md:hidden bg-primary fixed bottom-0 left-0 w-full border-t flex justify-around p-3 bg-background">
      <Link href="/">🏠</Link>
      <Link href="/services">🛠️</Link>
      <Link href="/explore">🌍</Link>
      <Link href="/profile">👤</Link>
    </nav>
  );
}
