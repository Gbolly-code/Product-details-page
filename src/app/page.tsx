import Image from "next/image";
import Link from "next/link";
import { api } from "@/lib/api-client";
import { ProductGrid } from "@/components/ui";

export default async function Home() {
  const [{ items: heroItems }, { items: newArrivals }] = await Promise.all([
    api.fetchProducts({ page: 1, pageSize: 1 }),
    api.fetchProducts({ page: 1, pageSize: 8 }),
  ]);
  const featured = heroItems[0];
  const heroImg = featured?.images?.[0] || featured?.thumbnail;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/" className="text-zinc-500 hover:underline">Homepage</Link>
          <span className="text-zinc-400">&gt;</span>
          <Link href="/products" className="text-zinc-500 hover:underline">Women</Link>
          <span className="text-zinc-400">&gt;</span>
          <Link href="/products" className="text-zinc-500 hover:underline">Women’s Shirts & Tops</Link>
        </div>
        {featured?.title && (
          <div className="mt-1 flex items-center gap-2">
            <span className="text-zinc-400">&gt;</span>
            <span className="text-zinc-900">{featured.title}</span>
          </div>
        )}
      </nav>

      {/* Hero image block */
      }
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-50">
            {heroImg ? (
              <Image src={heroImg} alt={featured?.title || "Featured"} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-zinc-400">No Image</div>
            )}
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-2xl font-semibold">{featured?.title || "Product"}</h1>
          {typeof featured?.price === "number" && (
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-zinc-400 line-through">£45.00</span>
                <span className="tabular-nums font-semibold">£{featured.price}</span>
              </div>
              <span className="text-sm">4.5</span>
            </div>
          )}
          <p className="text-zinc-600">{featured?.description || ""}</p>
          <div className="flex gap-3">
            <Link href={featured ? `/products/${featured.id}` : "/products"} className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white">View Product</Link>
            <Link href="/products" className="inline-flex items-center justify-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium">Shop All</Link>
          </div>
        </div>
      </div>

      {/* New arrivals */}
      <section className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">New arrivals</h2>
          <Link href="/products" className="text-sm underline">View all</Link>
        </div>
        <ProductGrid products={newArrivals} />
      </section>
    </div>
  );
}
