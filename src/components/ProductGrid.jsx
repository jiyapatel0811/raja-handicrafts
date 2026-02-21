import { useState } from 'react';
import { products } from '../data/inventory';
import ProductCard from './ProductCard';

const categories = ["All", "Bajot", "Home Decor", "Kitchenware", "Khatli"];

// Receive new prop name: navigateToProduct
export default function ProductGrid({ addToCart, navigateToProduct }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Filter Bar */}
        <div className="flex overflow-x-auto pb-8 mb-12 gap-4 justify-start md:justify-center hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-500 shadow-sm ${
                activeCategory === cat 
                  ? "bg-stone-900 text-white shadow-xl scale-105" 
                  : "bg-white text-stone-400 border border-stone-100 hover:border-stone-900 hover:text-stone-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              // Pass the new function to the card
              setViewProduct={navigateToProduct} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}