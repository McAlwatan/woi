import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { orderSteps, products, company } from "@/lib/data";
import Link from "next/link";
export const metadata: Metadata = { title: "Packaging & logistics" };

const pack = products.map((p) => [p.name, p.facts.find((f) => f[0] === "Packaging")?.[1] ?? "On request"]);

export default function Logistics() {
  return (
    <main>
      <PageHero eyebrow="Packaging & logistics" title="From our door to your port." lead="Export-grade packaging, container loading and full documentation, handled by one team." img="coffee-hands" />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal><p className="eyebrow">How an order works</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Six steps, one point of contact</h2></Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {orderSteps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}><li className="h-full border border-line p-6"><span className="font-display text-4xl text-leaf">{i + 1}</span><h3 className="mt-3 font-display text-2xl">{t}</h3><p className="mt-2 text-soil/75">{d}</p></li></Reveal>
          ))}
        </ol>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal><h2 className="font-display text-4xl md:text-5xl">Packaging options</h2></Reveal>
          <Reveal className="mt-8 divide-y divide-line border-y border-line">
            {pack.map(([n, k]) => <div key={n} className="grid gap-1 py-4 md:grid-cols-[1fr_2fr]"><span className="font-display text-xl">{n}</span><span className="text-soil/75">{k}</span></div>)}
          </Reveal>
          <p className="mt-6 text-soil/75">Container loading capacity, shipping ports and documentation for your destination: <a href={`mailto:${company.email}`} className="link-u font-medium">ask our export team</a> or <Link href="/contact/" className="link-u font-medium">send an inquiry</Link>.</p>
        </div>
      </section>
    </main>
  );
}
