import { useState, useEffect } from 'react';
import { products } from '../data/inventory';

// Update props to accept goBack and navigateToProduct
export default function ProductDetails({ product, goBack, addToCart, navigateToProduct }) {
  
  // SCROLL FIX: Force scroll to top whenever the product changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [product.id]); // Dependency on product.id ensures it runs on every navigation

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = product.images || [product.image];

  const [reviews, setReviews] = useState([
    { id: 1, user: "Verified Buyer", rating: 5, comment: "Exceptional heritage quality.", date: "1 week ago" }
  ]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });

  const postReview = (e) => {
    e.preventDefault();
    if (newReview.comment.trim() === "") return;
    setReviews([{ ...newReview, id: Date.now(), user: "Valued Client", date: "Just now" }, ...reviews]);
    setNewReview({ rating: 5, comment: "" });
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const handleRelatedClick = (rel) => {
    // Use the new navigation function
    navigateToProduct(rel);
    setActiveImageIndex(0);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 animate-in fade-in zoom-in-95 duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button calls the new goBack function */}
        <button onClick={goBack} className="flex items-center gap-3 bg-stone-100 hover:bg-stone-200 px-5 py-2 rounded-full font-bold text-sm mb-8 transition-colors group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back
        </button>

        {/* PINTEREST LAYOUT (Same as before) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Sticky Image */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
            <div className="rounded-[2.5rem] overflow-hidden bg-stone-50 shadow-2xl border border-stone-100 aspect-[4/5] relative">
              <img src={images[activeImageIndex]} className="w-full h-full object-cover transition-opacity duration-300" alt={product.name} />
            </div>
            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto hide-scrollbar mt-6">
                {images.map((img, idx) => (
                  <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`w-24 h-24 rounded-2xl overflow-hidden transition-all ${activeImageIndex === idx ? 'ring-4 ring-amber-800' : 'opacity-60'}`}>
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Details */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
             {/* ... (Details content same as previous code) ... */}
             <div className="flex gap-2 mb-6">
               {product.badges?.map((badge, i) => (
                  <span key={i} className="bg-stone-100 text-stone-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{badge}</span>
               ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-stone-900 mb-6">{product.name}</h1>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed italic">"{product.description}"</p>
            <div className="grid grid-cols-2 gap-8 mb-12 p-8 bg-stone-50 rounded-3xl border border-stone-100">
              <div><span className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Material</span><span className="font-bold text-stone-900 text-sm">{product.material}</span></div>
              <div><span className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Dimensions</span><span className="font-bold text-stone-900 text-sm">{product.dimensions}</span></div>
            </div>
            <div className="bg-white border-y border-stone-200 py-8 mb-12 flex justify-between items-center">
              <div><span className="text-4xl font-serif font-black text-stone-900">{product.retailPrice}</span><span className="block text-xs font-bold text-amber-700 uppercase tracking-widest mt-2">Wholesale: {product.bulkPrice}</span></div>
              <button onClick={() => addToCart(product)} className="bg-amber-800 hover:bg-stone-900 text-white px-10 py-4 rounded-full font-black shadow-xl transition-all active:scale-95">Add to Inquiry</button>
            </div>

            {/* Reviews (Same as previous code) */}
            <div className="pt-12 border-t border-stone-200">
              <h3 className="text-2xl font-serif font-bold mb-8">Client Experiences</h3>
              <form onSubmit={postReview} className="bg-stone-50 p-6 rounded-2xl mb-10">
                <div className="flex gap-2 mb-4">
                  {[1,2,3,4,5].map(s => (<button key={s} type="button" onClick={() => setNewReview({...newReview, rating: s})} className={`text-2xl ${newReview.rating >= s ? 'text-amber-500' : 'text-stone-300'}`}>★</button>))}
                </div>
                <textarea required value={newReview.comment} onChange={e => setNewReview({...newReview, comment: e.target.value})} className="w-full p-4 rounded-xl border border-stone-200 mb-4 h-24" placeholder="Share your feedback..." />
                <button type="submit" className="bg-stone-900 text-white px-8 py-2 rounded-xl font-bold">Post Review</button>
              </form>
              <div className="space-y-4">
                {reviews.map(r => (
                  <div key={r.id} className="p-6 bg-white border border-stone-100 rounded-2xl shadow-sm group flex justify-between">
                    <div><div className="flex gap-2 mb-2"><span className="font-bold">{r.user}</span><span className="text-amber-500">{"★".repeat(r.rating)}</span></div><p className="text-stone-600 text-sm">{r.comment}</p></div>
                    <button onClick={() => deleteReview(r.id)} className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase hover:text-red-600 h-fit">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More to explore using new navigation */}
        <div className="mt-24 pt-16 border-t border-stone-200">
           <h2 className="text-2xl font-serif font-black text-center mb-10">More to explore</h2>
           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
             {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5).map(rel => (
               <div key={rel.id} onClick={() => handleRelatedClick(rel)} className="group cursor-pointer">
                 <div className="rounded-2xl overflow-hidden bg-stone-100 mb-3 relative">
                   <img src={rel.images ? rel.images[0] : rel.image} className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                   <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="bg-white text-stone-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg">View Details</span>
                   </div>
                 </div>
                 <h4 className="font-bold text-sm text-stone-900 truncate">{rel.name}</h4>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}