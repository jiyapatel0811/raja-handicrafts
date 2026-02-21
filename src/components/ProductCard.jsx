export default function ProductCard({ product, addToCart, setViewProduct }) {
  // Use images array if it exists, otherwise fallback to single image
  const displayImage = product.images ? product.images[0] : product.image;

  return (
    <div 
      tabIndex="0" // Keyboard accessibility
      role="button"
      aria-label={`View details for ${product.name}`}
      onClick={() => setViewProduct(product)}
      className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col relative h-full cursor-pointer focus:ring-2 focus:ring-amber-800 outline-none"
    >
      
      {/* Image Container with Zoom & Hover Action */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
        <img 
          src={displayImage} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Badges System */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badges?.map((badge, idx) => (
            <span key={idx} className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-stone-900 shadow-sm uppercase tracking-wider">
              {badge}
            </span>
          ))}
        </div>

        {/* Hover "View Details" Overlay */}
        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
           <span className="bg-white text-stone-900 font-bold px-6 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             View Details
           </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-amber-800 text-xs tracking-widest uppercase font-black mb-2 block">
          {product.category}
        </span>
        <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight mb-2">
          {product.name}
        </h3>
        
        {/* Pricing Hierarchy Fix */}
        <div className="flex items-end justify-between mt-auto pt-6 border-t border-stone-100">
          <div className="flex flex-col">
            <span className="font-black text-stone-900 text-3xl font-serif leading-none">
              {product.retailPrice}
            </span>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mt-1">
              Wholesale: {product.bulkPrice}
            </span>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            aria-label={`Add ${product.name} to inquiry`}
            className="bg-stone-100 hover:bg-amber-900 hover:text-white text-stone-900 p-3.5 rounded-xl transition-all shadow-sm active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}