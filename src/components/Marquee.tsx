const marques = [
  "Ferrari",
  "Lamborghini",
  "Rolls-Royce",
  "Maybach",
  "Mercedes-AMG",
  "Aston Martin",
  "Porsche",
  "Bentley",
  "Audi",
  "BMW M",
  "Lexus",
  "Cadillac",
  "Genesis",
];

export default function Marquee() {
  const track = [...marques, ...marques];
  return (
    <div className="relative border-y border-white/5 bg-coal py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-coal to-transparent" />
      <div className="flex w-max animate-marquee items-center">
        {track.map((m, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-serif text-2xl italic text-bone/40">
              {m}
            </span>
            <span className="h-1 w-1 rotate-45 bg-gold/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
