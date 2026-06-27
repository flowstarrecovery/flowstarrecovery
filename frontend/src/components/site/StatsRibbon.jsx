const ITEMS = [
  "Contingency-Only · No Upfront Cost",
  "Foreclosure Surplus",
  "Tax Sale Overages",
  "Estate & Heir Claims",
  "All 50 States",
  "Confidential & Secure",
  "Senior Associate Review",
  "Response Within One Business Day",
];

export default function StatsRibbon() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <section data-testid="stats-ribbon" className="bg-[#0C2340] py-6 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-6 px-10 whitespace-nowrap">
            <span className="font-serif text-2xl text-[#D4AF37] italic">{s}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
