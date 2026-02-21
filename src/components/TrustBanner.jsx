export default function TrustBanner() {
  return (
    <section className="py-16 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around gap-8 text-center">
        <div>
          <h4 className="text-amber-800 font-bold text-xl">Est. 1978</h4>
          <p className="text-stone-500 text-sm">Decades of Craftsmanship</p>
        </div>
        <div>
          <h4 className="text-amber-800 font-bold text-xl">100% Organic</h4>
          <p className="text-stone-500 text-sm">Natural Wood & Lacquer</p>
        </div>
        <div>
          <h4 className="text-amber-800 font-bold text-xl">Direct Factory</h4>
          <p className="text-stone-500 text-sm">Mahuva's Finest Export</p>
        </div>
      </div>
    </section>
  );
}