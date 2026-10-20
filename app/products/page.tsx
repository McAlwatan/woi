import type { Metadata } from "next";
import ProductTile from "@/components/ProductTile";
import { products } from "@/lib/data";
export const metadata: Metadata = { title: "Products" };

export default function Products() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <p className="eyebrow">Product catalog</p>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">Products</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{products.map((p, i) => <ProductTile key={p.slug} p={p} i={i} />)}</div>
    </main>
  );
}
