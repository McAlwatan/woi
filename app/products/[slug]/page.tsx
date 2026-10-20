import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/data";
import ProductTile from "@/components/ProductTile";
import Reveal from "@/components/Reveal";

export const dynamicParams = false;
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return { title: p?.name, description: p?.short };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const imgs = [{ img: p.img, label: p.name }, ...(p.gallery ?? [])].filter((g, i, a) => a.findIndex((x) => x.img === g.img) === i);
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 md:px-8">
      <Link href="/products/" className="text-sm font-semibold hover:text-leaf">← All products</Link>
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="space-y-3">
          <div className={`relative aspect-[4/3] ${p.cutout ? "bg-cream" : "bg-line"}`}>
            <Image src={`/images/${imgs[0].img}.webp`} alt={p.name} fill priority sizes="50vw" className={p.cutout ? "object-contain p-8" : "object-cover"} />
          </div>
          {imgs.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {imgs.slice(1).map((g) => (
                <figure key={g.img}>
                  <div className="relative aspect-square bg-cream"><Image src={`/images/${g.img}.webp`} alt={g.label} fill sizes="12vw" className="object-contain p-2" /></div>
                  <figcaption className="mt-1 text-xs text-soil/60">{g.label}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="eyebrow">Origin: Tanzania</p>
          <h1 className="mt-3 font-display text-5xl">{p.name}</h1>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {p.facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 py-3 text-sm"><dt className="font-semibold text-soil/60">{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          <Link href={`/contact/?product=${encodeURIComponent(p.name)}`} className="btn btn-solid mt-8">Request a quote for {p.name}</Link>
        </div>
      </div>
      {p.specs && (
        <section className="mt-16">
          <h2 className="font-display text-3xl">Specification</h2>
          <table className="mt-5 w-full max-w-3xl border-collapse text-sm">
            <tbody>{p.specs.map(([k, v]) => <tr key={k} className="border-b border-line"><th className="w-1/3 py-3 pr-4 text-left font-semibold text-soil/60">{k}</th><td>{v}</td></tr>)}</tbody>
          </table>
        </section>
      )}
      <section className="mt-20">
        <Reveal><h2 className="font-display text-3xl">More from WOI</h2></Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {products.filter((x) => x.slug !== p.slug).slice(0, 3).map((x) => <ProductTile key={x.slug} p={x} i={products.indexOf(x)} />)}
        </div>
      </section>
    </main>
  );
}
