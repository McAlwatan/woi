import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import Harvest from "@/components/Harvest";
import { products } from "@/lib/data";
export const metadata: Metadata = { title: "Harvest seasons" };

const h = (slug: string) => products.find((p) => p.slug === slug)?.facts.find((f) => f[0] === "Harvest")?.[1];
const list = [["Green coffee", "green-coffee"], ["Sesame seeds", "sesame-seeds"], ["Hass avocados", "avocados"], ["Raw cashew nuts", "raw-cashew"]] as const;

export default function Seasons() {
  return (
    <main>
      <PageHero eyebrow="Harvest seasons" title="Know when each crop is ready." lead="Tanzania's harvests run most of the year. Plan your orders around the windows below." img="avocado" />
      <section className="bg-forest text-paper"><div className="mx-auto max-w-7xl px-5 py-20 md:px-8"><Harvest /><p className="mt-5 text-sm text-paper/60">Dried ginger and spices are available on request.</p></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {list.map(([n, s], i) => (
            <Reveal key={s} delay={i * 80} className="bg-paper p-8">
              <h2 className="font-display text-3xl">{n}</h2><p className="mt-2 text-soil/75">{h(s)}</p>
              <Link href={`/products/${s}/`} className="link-u mt-4 inline-block text-sm font-semibold">View product →</Link>
            </Reveal>
          ))}
        </div>
        <Link href="/contact/" className="btn btn-solid mt-10">Reserve volume for the season</Link>
      </section>
    </main>
  );
}
