export default function CartModal({ isOpen, closeCart, cart, setCart }) {
  if (!isOpen) return null;

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- THE WHATSAPP BUSINESS LOGIC ---
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    // 1. Format the greeting
    let message = "Hello Raja Crafts! 🌟\nI am interested in a wholesale inquiry for the following items:\n\n";

    // 2. Loop through the cart and list every item
    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Wholesale Price: ${item.bulkPrice}\n`;
      message += `   Link: https://rajahandicrafts.netlify.app\n\n`;
    });

    message += "Please let me know the next steps for availability and shipping. Thank you!";

    // 3. Encode the message so it works in a URL
    const encodedMessage = encodeURIComponent(message);

    // 4. Set the Business WhatsApp Number (IMPORTANT: Change this to the vendor's actual number!)
    // Format: Country code (91 for India) + 10 digit number. No + or spaces.
    const phoneNumber = "919876543210"; 

    // 5. Open the WhatsApp link
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // --- CART MANAGEMENT LOGIC ---
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Overlay (Click to close) */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity" 
        onClick={closeCart}
      ></div>

      {/* Side Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="text-2xl font-serif font-black text-stone-900 flex items-center gap-3">
            Your Inquiry
            <span className="bg-amber-100 text-amber-800 text-xs py-1 px-3 rounded-full font-bold">
              {totalItems} items
            </span>
          </h2>
          <button onClick={closeCart} className="p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors">
            <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Cart Items Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <svg className="w-16 h-16 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <p className="font-bold text-stone-600 text-lg">Your inquiry cart is empty</p>
              <p className="text-sm text-stone-400">Add heritage items to request a wholesale quote.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                {/* Item Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex-shrink-0">
                  <img src={item.images ? item.images[0] : item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm leading-tight mb-1 line-clamp-2">{item.name}</h4>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">{item.bulkPrice}</span>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-stone-100 font-bold text-stone-600 transition-colors">-</button>
                      <span className="px-3 py-1 text-sm font-black border-x border-stone-200">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-stone-100 font-bold text-stone-600 transition-colors">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-xs font-bold text-red-400 hover:text-red-600 uppercase tracking-wider transition-colors">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Button */}
        {cart.length > 0 && (
          <div className="p-6 bg-stone-50 border-t border-stone-200">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-stone-500 uppercase tracking-widest text-xs">Quote Request</span>
              <span className="font-serif font-black text-xl text-stone-900">Pending Review</span>
            </div>
            
            <button 
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white py-4 rounded-xl font-black text-lg shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.126.551 4.192 1.597 6.01L.002 24l6.113-1.603c1.764.965 3.766 1.474 5.916 1.474 6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 21.84c-1.801 0-3.565-.484-5.115-1.403l-.367-.217-3.801.996.997-3.705-.238-.378a9.982 9.982 0 01-1.528-5.263C1.979 5.364 7.363 0 12.031 0c5.518 0 10.052 4.534 10.052 10.052 0 5.518-4.534 10.052-10.052 10.052zm5.525-7.532c-.303-.152-1.792-.885-2.071-.986-.278-.101-.482-.152-.684.152-.202.303-.784.986-.961 1.188-.177.202-.355.228-.658.076-.303-.152-1.28-.472-2.438-1.506-.902-.805-1.51-1.798-1.687-2.102-.177-.304-.019-.469.133-.62.137-.137.303-.355.455-.533.152-.177.202-.303.303-.507.101-.202.051-.38-.025-.532-.076-.152-.684-1.648-.938-2.257-.247-.594-.497-.514-.684-.523-.177-.008-.38-.01-.582-.01-.202 0-.532.076-.81.38-.278.304-1.064 1.04-1.064 2.534 0 1.494 1.089 2.937 1.241 3.14.152.202 2.14 3.264 5.184 4.577.724.312 1.289.498 1.729.638.725.231 1.386.198 1.9.12.576-.088 1.792-.732 2.045-1.439.253-.707.253-1.312.177-1.439-.076-.126-.278-.202-.582-.354z"/></svg>
              Send to WhatsApp
            </button>
            <p className="text-center text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-4">No payment required yet</p>
          </div>
        )}

      </div>
    </div>
  );
}