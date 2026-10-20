import Link from "next/link";
import { company, products } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-soil text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-3xl">{company.name}</p>
          <p className="mt-3 max-w-sm text-paper/70">Premium agricultural products from Tanzania, exported to buyers worldwide.</p>
        </div>
        <div>
          <p className="eyebrow !text-ochre">Products</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}/`} className="hover:text-paper">{p.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-ochre">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={`tel:${company.phoneHref}`}>{company.phone}</a></li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15 py-5 text-center text-xs text-paper/50">© {new Date().getFullYear()} {company.name}</div>
    </footer>
  );
}
