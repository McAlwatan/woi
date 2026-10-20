import type { Metadata } from "next";
import { company } from "@/lib/data";
export const metadata: Metadata = { title: "Contact" };

// Point this at Formspree / your FastAPI endpoint. Until then the form falls back to email.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || `mailto:${company.email}`;
const field = "w-full border border-line bg-paper px-4 py-3 outline-none focus:border-forest";

export default function Contact() {
  return (
    <main className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:px-8">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">Request a quote</h1>
        <address className="mt-8 space-y-3 not-italic text-soil/80">
          <p className="font-semibold">{company.name}</p>
          <p>{company.address}</p>
          <p><a href={`tel:${company.phoneHref}`} className="hover:text-leaf">{company.phone}</a></p>
          <p><a href={`mailto:${company.email}`} className="hover:text-leaf">{company.email}</a></p>
        </address>
      </div>
      <form action={endpoint} method="post" encType={endpoint.startsWith("mailto") ? "text/plain" : undefined} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="Your name" className={field} />
          <input name="company" placeholder="Company" className={field} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="email" type="email" required placeholder="Email" className={field} />
          <input name="country" placeholder="Destination country" className={field} />
        </div>
        <input name="product" placeholder="Product (e.g. Green Coffee Beans)" className={field} />
        <textarea name="message" rows={5} required placeholder="Quantity, grade, packaging, delivery port..." className={field} />
        <button className="btn btn-solid">Send inquiry</button>
      </form>
    </main>
  );
}
