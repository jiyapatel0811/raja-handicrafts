import { products } from '../data/inventory';

export default function Hero() {
  const scrollToProducts = () => {
    const productSection = document.getElementById('products');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Use first 20 images for the background collage so it's not too heavy
  const collageImages = products.slice(0, 20);

  return (
    // Increased height to min-h-screen for breathing room
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 font-sans py-32">
      
      {/* --- BACKGROUND COLLAGE --- */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale mix-blend-luminosity pointer-events-none">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 h-full w-full animate-slow-pan">
          {collageImages.map((p) => (
            <div key={p.id} className="aspect-square overflow-hidden">
              <img src={p.images ? p.images[0] : p.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
           {/* Repeat patterns to fill space if needed */}
           {collageImages.map((p) => (
            <div key={p.id + '_rep'} className="aspect-square overflow-hidden hidden md:block">
              <img src={p.images ? p.images[0] : p.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Heavy Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/70 to-stone-950/90 z-1"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-20 text-center px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 max-w-5xl mx-auto">
        <span className="inline-block text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-8 border-b border-amber-500/50 pb-3">
          Est. 1978 • Mahuva
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-black text-stone-100 leading-tight mb-10 drop-shadow-2xl">
          The Art of <br/><span className="text-amber-600">Indian Woodcraft</span>
        </h1>
        <p className="text-2xl text-stone-300 mb-16 leading-relaxed max-w-3xl mx-auto font-medium italic">
          Curated heritage Bajots, decor, and artisan kitchenware. Handcrafted for the modern connoisseur.
        </p>
        
        {/* Working Scroll Button */}
        <button 
          onClick={scrollToProducts}
          className="group bg-amber-800 hover:bg-amber-700 text-white px-14 py-6 rounded-full font-bold text-xl shadow-2xl transition-all active:scale-95 flex items-center gap-3 mx-auto"
        >
          Explore the Collection
          <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </button>
      </div>
    </div>
  );
}