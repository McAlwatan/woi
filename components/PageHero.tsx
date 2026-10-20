import Image from "next/image";

export default function PageHero({ eyebrow, title, lead, img }: { eyebrow: string; title: string; lead: string; img: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-soil text-paper">
      <Image src={`/images/${img}.webp`} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <p className="eyebrow rise !text-ochre">{eyebrow}</p>
        <h1 className="rise mt-4 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl" style={{ "--d": "100ms" } as React.CSSProperties}>{title}</h1>
        <p className="rise mt-6 max-w-xl text-lg text-paper/80" style={{ "--d": "220ms" } as React.CSSProperties}>{lead}</p>
      </div>
    </section>
  );
}
