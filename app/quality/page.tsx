import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { qaPillars, products } from "@/lib/data";
export const metadata: Metadata = { title: "Quality assurance" };

const get = (k: string, key: string) => products.find((p) => p.slug === k)?.facts.find((f) => f[0] === key)?.[1] ?? "-";
const rows = products.map((p) => [p.name, get(p.slug, "Moisture"), get(p.slug, "Packaging")]);

export default function Quality() {
  return (
    <main>
      <PageHero eyebrow="Quality assurance" title="Quality you can verify." lead="Inspection, traceability, food safety and documentation on every lot we ship." img="sesame" />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {qaPillars.map(([t, d], i) => (
            <Reveal key={t} delay={i * 90} className="bg-paper p-8"><span className="font-display text-3xl text-leaf">{String(i + 1).padStart(2, "0")}</span><h2 className="mt-3 font-display text-3xl">{t}</h2><p className="mt-3 text-soil/75">{d}</p></Reveal>
          ))}
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal><p className="eyebrow">Specifications at a glance</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Moisture and packing by product</h2></Reveal>
          <Reveal className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead><tr className="border-b-2 border-soil text-xs tracking-widest uppercase"><th className="py-3">Product</th><th>Moisture</th><th>Packaging</th></tr></thead>
              <tbody>{rows.map(([n, m, k]) => <tr key={n} className="border-b border-line"><td className="py-3 font-display text-lg">{n}</td><td>{m}</td><td>{k}</td></tr>)}</tbody>
            </table>
          </Reveal>
          <p className="mt-4 text-sm text-soil/60">Full ginger specification is on the <Link href="/products/dried-ginger/" className="link-u font-medium">dried ginger page</Link>.</p>
        </div>
      </section>
    </main>
  );
}
