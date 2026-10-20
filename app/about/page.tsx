import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { company, values, products } from "@/lib/data";
export const metadata: Metadata = { title: "About us" };

export default function About() {
  return (
    <main>
      <PageHero eyebrow="About us" title="Premium produce, Tanzanian roots." lead={`${company.name} is a Dar es Salaam based exporter of agricultural products. ${company.tagline}.`} img="coffee-sack" />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <Reveal dir="left"><div className="relative aspect-[4/5]"><Image src="/images/cashew-raw.webp" alt="Raw cashew nuts in a sisal bag" fill sizes="50vw" className="object-cover" /></div></Reveal>
        <Reveal dir="right">
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Connecting Tanzanian farms to world buyers.</h2>
          <div className="mt-6 space-y-4 text-lg text-soil/80">
            <p>Tanzania grows some of East Africa's most sought-after crops: Arabica and Robusta coffee, cashew, sesame, ginger, avocados and a full range of spices.</p>
            <p>WOI Agro Industrial Co. Limited brings those crops to export markets with consistent grading, clear specifications and professional documentation, so buyers can order with confidence.</p>
            <p>Our logo carries the idea: a gear for industry, a tractor for the farm, rolling fields for the land they come from.</p>
          </div>
        </Reveal>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal><p className="eyebrow">What we stand for</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Our values</h2></Reveal>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className="bg-cream p-8"><span className="font-display text-3xl text-leaf">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-3 font-display text-2xl">{t}</h3><p className="mt-2 text-soil/75">{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal><h2 className="font-display text-4xl md:text-5xl">Seven product lines, one supplier.</h2></Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}/`} className="link-u font-medium">{p.name} →</Link></li>)}
        </ul>
        <Link href="/contact/" className="btn btn-solid mt-10">Start an inquiry</Link>
      </section>
    </main>
  );
}
