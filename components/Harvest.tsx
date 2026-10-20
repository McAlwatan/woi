import Reveal from "./Reveal";
import { harvest } from "@/lib/data";

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const on = (h: { from: number; to: number }, m: number) => (h.from <= h.to ? m >= h.from && m <= h.to : m >= h.from || m <= h.to);

export default function Harvest() {
  return (
    <Reveal>
      <div className="overflow-x-auto"><div className="min-w-[640px]">
        <div className="grid grid-cols-[140px_repeat(12,1fr)] gap-1 text-xs text-paper/60"><span />{months.map((m, i) => <span key={i} className="text-center">{m}</span>)}</div>
        {harvest.map((h) => (
          <div key={h.name} className="mt-1 grid grid-cols-[140px_repeat(12,1fr)] items-center gap-1">
            <span className="text-sm">{h.name}</span>
            {months.map((_, i) => on(h, i + 1)
              ? <span key={i} className="bar h-7 bg-ochre" style={{ "--d": `${i * 70}ms` } as React.CSSProperties} />
              : <span key={i} className="h-7 bg-paper/10" />)}
          </div>
        ))}
      </div></div>
    </Reveal>
  );
}
