export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand & Logo (LOGO ADDED HERE) */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            {/* We use brightness-200 to make the logo look light against the dark background */}
            <img src="/products/logo.png" alt="Raja Handicrafts Logo" className="h-14 w-auto grayscale brightness-200" />
            <div className="flex flex-col">
              <span className="font-serif font-black text-xl text-white leading-none tracking-wide">RAJA CRAFTS</span>
              <span className="text-[10px] tracking-[0.2em] text-amber-600 font-bold uppercase mt-1">Est. 1978 • Mahuva</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-stone-500 font-medium max-w-xs">
            Preserving the legacy of artisan Indian woodcraft. Handcrafted heirlooms crafted for the modern connoisseur.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">Collections</h4>
          <ul className="space-y-3 text-sm font-bold text-stone-500">
            <li><a href="#products" className="hover:text-amber-500 transition-colors">Bajot Stools</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">Home Decor</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">Kitchenware</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors text-amber-700">Wholesale Inquiry</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">Contact Us</h4>
          <ul className="space-y-4 text-sm font-medium text-stone-400">
            <li className="flex items-center gap-3">
              <div className="bg-stone-900 p-2 rounded-full">
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-3">
               <div className="bg-stone-900 p-2 rounded-full mt-[-4px]">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
              <span>Mahuva, Gujarat, India<br/><span className="text-xs text-stone-600">Artisan Colony, Sector 4</span></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-stone-900/50 text-center text-xs text-stone-600 font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} Raja Handicrafts. Heritage preserved.
      </div>
    </footer>
  );
}