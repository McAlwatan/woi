import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductTile({ p, i, className = "" }: { p: Product; i: number; className?: string }) {
  return (
    <Link href={`/products/${p.slug}/`} className={`group flex flex-col border border-line bg-paper ${className}`}>
      <div className={`relative aspect-[4/3] overflow-hidden ${p.cutout ? "bg-cream" : "bg-line"}`}>
        <Image src={`/images/${p.img}.webp`} alt={p.name} fill sizes="(min-width:768px) 33vw, 100vw"
          className={`transition-transform duration-500 group-hover:scale-105 ${p.cutout ? "object-contain p-6" : "object-cover"}`} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold tracking-widest text-leaf">{String(i + 1).padStart(2, "0")}</span>
        <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
        <p className="mt-2 text-sm text-soil/70">{p.short}</p>
        <span className="mt-auto pt-4 text-sm font-semibold group-hover:text-leaf">View details →</span>
      </div>
    </Link>
  );
}
