import { useState, useEffect } from 'react';
import { products } from '../data/inventory';

export default function Navbar({ cartCount, openCart }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // The Cart Bounce Animation Trigger
  useEffect(() => {
    if (cartCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  // Debounced Search Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim().length > 0) {
        const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        setResults(filtered.slice(0, 4)); // Show top 4 results
      } else {
        setResults([]);
      }
    }, 200); // 200ms debounce
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 gap-4">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
          <img src="/products/logo.png" alt="Raja Crafts Logo" className="h-10 w-auto" />
          <div className="hidden sm:flex flex-col">
            <span className="font-serif font-black text-xl text-stone-900 leading-none">RAJA CRAFTS</span>
            <span className="text-[10px] tracking-widest text-stone-400 font-bold">EST. 1978</span>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="flex-grow max-w-md relative">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search heritage crafts..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
              className="w-full bg-stone-100 border-none text-sm font-medium rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-amber-800 outline-none transition-all"
            />
            <svg className="w-4 h-4 text-stone-400 absolute left-4 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          
          {/* Search Dropdown */}
          {results.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white border border-stone-200 rounded-xl shadow-2xl overflow-hidden flex flex-col z-50">
              {results.map(res => (
                <button key={res.id} className="flex items-center gap-3 p-3 hover:bg-stone-50 transition-colors text-left border-b border-stone-100 last:border-0">
                  <img src={res.image || res.images[0]} className="w-10 h-10 rounded object-cover" alt="" />
                  <span className="text-sm font-bold text-stone-900">{res.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Animated Cart Trigger */}
        <button 
          onClick={openCart} 
          aria-label={`Open Cart. ${cartCount} items.`}
          className={`relative p-3 bg-stone-100 hover:bg-stone-200 rounded-full transition-all ${isAnimating ? 'scale-110 shadow-lg' : 'scale-100'}`}
        >
          <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </nav>
  );
}