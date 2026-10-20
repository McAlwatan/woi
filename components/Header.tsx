import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/data";

const links = [["Products", "/products/"], ["About", "/about/"], ["Quality", "/quality/"], ["Seasons", "/seasons/"], ["Logistics", "/logistics/"], ["Contact", "/contact/"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" aria-label={company.name} className="flex items-center gap-3">
          <Image src="/logo.svg" alt="" width={56} height={56} className="h-14 w-14 object-contain" priority />
          <span className="hidden font-display text-lg leading-tight sm:block">WOI Agro<br /><span className="text-sm text-soil/60">Industrial Co. Limited</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map(([l, h]) => <Link key={l} href={h} className="link-u hover:text-leaf">{l}</Link>)}
          <Link href="/contact/" className="btn btn-solid">Request a quote</Link>
        </nav>
        <details className="relative md:hidden">
          <summary className="btn btn-line cursor-pointer list-none">Menu</summary>
          <div className="absolute right-0 mt-2 w-56 border border-line bg-paper p-4 shadow-sm">
            {links.map(([l, h]) => <Link key={l} href={h} className="block py-2">{l}</Link>)}
          </div>
        </details>
      </div>
    </header>
  );
}
