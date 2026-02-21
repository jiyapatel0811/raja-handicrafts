import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import CartModal from "./components/CartModal";

export default function App() {
  // --- GLOBAL STATE ---
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- HISTORY NAVIGATION STATE ---
  // Instead of just 'selectedProduct', we keep a stack of viewed products.
  // Example history: [ProductA, ProductB, ProductC] -> Currently viewing C.
  const [viewHistory, setViewHistory] = useState([]); 
  
  // The product to display is the last one in the history stack.
  const currentProduct = viewHistory.length > 0 ? viewHistory[viewHistory.length - 1] : null;

  // --- NAVIGATION FUNCTIONS ---

  // 1. Go to a product (pushes to history)
  const navigateToProduct = (product) => {
    setViewHistory([...viewHistory, product]);
    // Note: Scrolling to top is handled inside ProductDetails useEffect
  };

  // 2. Go Back (pops from history)
  const navigateBack = () => {
    if (viewHistory.length > 1) {
      // If deeper than 1 level, pop the current product off stack
      setViewHistory(viewHistory.slice(0, -1));
    } else {
      // If at level 1, clear history to go to home
      setViewHistory([]);
      // Wait for home component to mount, then scroll to the grid section
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // --- CART LOGIC ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-amber-200">
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      
      {currentProduct ? (
        // Show Details View if history has items
        <ProductDetails 
          product={currentProduct} 
          goBack={navigateBack} // Pass the new back function
          addToCart={addToCart} 
          navigateToProduct={navigateToProduct} // Pass navigation function
        />
      ) : (
        // Show Home View if history is empty
        <>
          <Hero />
          {/* Important: Ensure ID matches what Hero button looks for */}
          <section id="products">
             <ProductGrid 
               addToCart={addToCart} 
               navigateToProduct={navigateToProduct} // Pass navigation function
             />
          </section>
        </>
      )}

      <CartModal 
        isOpen={isCartOpen} 
        closeCart={() => setIsCartOpen(false)} 
        cart={cart} 
        setCart={setCart} 
      />
    </div>
  );
}