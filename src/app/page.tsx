import { Metadata } from "next";
import { getServiceCategories } from "@/services/api/servicesApi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Celebratio - Best Event Service Providers",
  description:
    "Discover top-notch event services like Mehndi artists, hair stylists, singers, and more at Celebratio. Book now for an unforgettable event experience!",
  keywords: ["event services", "mehndi artists", "hair stylists", "singers", "Celebratio"],
};

export default async function Home() {
  const catRes = await getServiceCategories();

  return (
    <main className="p-4">
      {/* Second Section: Categories with Horizontal Scroll */}
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>

      <div className="w-full relative">

        <div
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          role="list"
        >
          {catRes.data.map((category) => (
              <Link
              key={category._id}
              href={`/services/${category._id}`} // Dynamic route for each service
              passHref
            >
            <article
              key={category._id}
              className="w-64 h-48 p-4 rounded-2xl shadow-md border hover:shadow-lg cursor-pointer"
              role="listitem"
            >
              <h2 className="text-lg font-semibold">{category.name}</h2>
              <p className="text-sm text-gray-600">{category.description}</p>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
