import Link from "next/link";
import Image from "next/image";
import ProductTile from "@/components/ProductTile";
import Reveal from "@/components/Reveal";
import Harvest from "@/components/Harvest";
import { company, products, whyWoi, faqs, qaPillars, orderSteps, marqueeItems } from "@/lib/data";

const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.1fr_1fr] md:px-8 md:py-24">
        <div>
          <p className="eyebrow rise">Exporters of Tanzanian agricultural products</p>
          <h1 className="rise mt-5 font-display text-5xl leading-[1.02] md:text-7xl" style={d(120)}>From Tanzanian soil to your warehouse.</h1>
          <p className="rise mt-6 max-w-lg text-lg text-soil/75" style={d(260)}>Green coffee, cashew, sesame, ginger, avocados and spices. Inspected, traceable and packed for export.</p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={d(400)}>
            <Link href="/contact/" className="btn btn-solid">Request a quote</Link>
            <Link href="/products/" className="btn btn-line">Browse products</Link>
          </div>
        </div>
        <div className="relative">
          <div className="clip-in relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <Image src="/images/coffee-hands.webp" alt="Hands holding green coffee beans" fill priority sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="rise absolute -bottom-5 left-5 bg-forest px-5 py-4 text-paper md:-left-8" style={d(900)}>
            <p className="font-display text-3xl leading-none">7 product lines</p>
            <p className="mt-1 text-xs tracking-widest text-paper/70 uppercase">Origin: Tanzania</p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee overflow-hidden border-y border-line bg-cream py-4" aria-hidden>
        <div className="marquee-track font-display text-2xl">
          {[...marqueeItems, ...marqueeItems].map((m, i) => <span key={i} className="mx-6 whitespace-nowrap">{m}<span className="ml-12 text-ochre">✦</span></span>)}
        </div>
      </div>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <Reveal dir="left"><p className="eyebrow">Who we are</p><h2 className="mt-4 font-display text-4xl md:text-5xl">{company.tagline}.</h2></Reveal>
        <Reveal dir="right" className="space-y-5 text-lg text-soil/80">
          <p>WOI Agro Industrial Co. Limited supplies premium agricultural products from Tanzania to buyers who care about consistency: grades that match the sample, moisture that stays in range, and paperwork that is ready when the container is.</p>
          <Link href="/about/" className="link-u inline-block font-semibold">Read our story →</Link>
        </Reveal>
      </section>

      {/* Products */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="eyebrow">Product catalog</p><h2 className="mt-4 font-display text-4xl md:text-5xl">What we export</h2></div>
            <Link href="/products/" className="link-u text-sm font-semibold">All products →</Link>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {products.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 100}><ProductTile p={p} i={i} className="h-full" /></Reveal>)}
          </div>
        </div>
      </section>

      {/* Harvest */}
      <section className="bg-forest text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal><p className="eyebrow !text-ochre">Harvest calendar</p><h2 className="mt-4 max-w-xl font-display text-4xl md:text-5xl">Plan your orders around the seasons.</h2></Reveal>
          <div className="mt-10"><Harvest /></div>
          <Link href="/seasons/" className="link-u mt-6 inline-block text-sm font-semibold">Season details →</Link>
        </div>
      </section>

      {/* Quality */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">Quality assurance</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Checked before it ships</h2></div>
          <Link href="/quality/" className="link-u text-sm font-semibold">Our quality process →</Link>
        </Reveal>
        <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {qaPillars.map(([t, x], i) => <Reveal key={t} delay={i * 90} className="bg-paper p-6"><span className="font-display text-2xl text-leaf">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-2 font-display text-xl">{t}</h3><p className="mt-2 text-sm text-soil/70">{x}</p></Reveal>)}
        </div>
      </section>

      {/* Order steps */}
      <section className="bg-soil text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <Reveal><p className="eyebrow !text-ochre">Logistics</p><h2 className="mt-4 font-display text-4xl md:text-5xl">How an order works</h2></Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {orderSteps.map(([t, x], i) => <Reveal key={t} delay={i * 80}><li className="border-t border-ochre pt-4"><span className="font-display text-3xl text-ochre">{i + 1}</span><h3 className="mt-2 font-medium">{t}</h3><p className="mt-1 text-sm text-paper/65">{x}</p></li></Reveal>)}
          </ol>
          <Link href="/logistics/" className="link-u mt-8 inline-block text-sm font-semibold">Packaging & logistics →</Link>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:px-8">
        <Reveal dir="left"><p className="eyebrow">Why WOI</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Why buyers choose us</h2></Reveal>
        <ol className="divide-y divide-line border-y border-line">
          {whyWoi.map(([t, x], i) => <Reveal key={t} delay={i * 70}><li className="grid grid-cols-[3rem_1fr] gap-2 py-5"><span className="font-display text-2xl text-leaf">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-display text-2xl">{t}</h3><p className="mt-1 text-soil/70">{x}</p></div></li></Reveal>)}
        </ol>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
          <Reveal><p className="eyebrow">FAQ</p><h2 className="mt-4 font-display text-4xl">Buyer questions</h2></Reveal>
          <Reveal className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none justify-between font-medium">{q}<span className="text-leaf transition group-open:rotate-45">+</span></summary><p className="mt-3 text-soil/75">{a}</p></details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 text-center md:px-8">
        <Reveal><h2 className="mx-auto max-w-2xl font-display text-4xl md:text-6xl">Tell us what you need and how much.</h2><Link href="/contact/" className="btn btn-solid mt-8">Request a quote</Link></Reveal>
      </section>
    </main>
  );
}
