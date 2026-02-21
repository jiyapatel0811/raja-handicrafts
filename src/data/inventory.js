export const products = [
  // --- BAJOT ---
  { 
    id: 1, name: "Royal Meenakari Bajot", category: "Bajot", description: "Brass Meenakari work on seasoned teak. Heritage quality.", retailPrice: "₹4,500", bulkPrice: "₹2,800", images: ["/products/Bajot 00.jpg", "/products/bajot 01.jpg"], isCustomizable: true, badges: ["🔥 Best Seller", "💎 Premium"], material: "Teak & Brass", dimensions: "18x18x6 in", craftHistory: "Rooted in Gujarat's royal courts."
  },
  { 
    id: 2, name: "Classic Teak Bajot", category: "Bajot", description: "Minimalist heritage design with a polished natural finish.", retailPrice: "₹2,200", bulkPrice: "₹1,200", images: ["/products/bajot 02.jpg"], isCustomizable: true, badges: ["⭐ Classic"], material: "100% Solid Teak", dimensions: "15x15x5 in", craftHistory: "Traditional hand-turned legs."
  },
  { 
    id: 3, name: "Imperial Brass-Work Bajot", category: "Bajot", description: "Detailed brass latticework top with mahogany finish.", retailPrice: "₹5,200", bulkPrice: "₹3,200", images: ["/products/bajot 03.jpg", "/products/bajot 05.jpg"], isCustomizable: true, badges: ["💎 Premium"], material: "Mahogany & Brass", dimensions: "20x20x7 in", craftHistory: "Symbol of wedding opulence."
  },
  { 
    id: 4, name: "Octagonal Heritage Bajot", category: "Bajot", description: "A rare eight-sided stool with subtle brass accents.", retailPrice: "₹3,500", bulkPrice: "₹2,100", images: ["/products/bajot 06.jpg"], isCustomizable: true, badges: ["🏷️ Limited"], material: "Indian Rosewood", dimensions: "16x16x6 in", craftHistory: "Vastu-inspired octagonal design."
  },

  // --- HOME DECOR ---
  { 
    id: 5, name: "Traditional Bullock Cart", category: "Home Decor", description: "Large-scale museum-quality model of a Gujarati cart.", retailPrice: "₹8,500", bulkPrice: "₹5,500", images: ["/products/Bullock Cart 00.jpg"], isCustomizable: true, badges: ["🔥 Best Seller", "🏆 Masterpiece"], material: "Neem Wood", dimensions: "24x10x12 in", craftHistory: "Tribute to agrarian Saurashtra."
  },
  { 
    id: 6, name: "Majestic Wooden Elephant", category: "Home Decor", description: "Symbol of wisdom, carved from a single block of wood.", retailPrice: "₹3,200", bulkPrice: "₹1,900", images: ["/products/Decor 01.jpg", "/products/Decor 00.jpg"], isCustomizable: true, badges: ["⭐ New Arrival"], material: "Kadam Wood", dimensions: "12x5x10 in", craftHistory: "Single-block artisanal carving."
  },
  { 
    id: 7, name: "Artisan Wood Totem", category: "Home Decor", description: "Hand-carved stacked figures representing folk heritage.", retailPrice: "₹2,800", bulkPrice: "₹1,600", images: ["/products/Decor 02.jpg"], isCustomizable: false, badges: ["🌍 Cultural"], material: "Mango Wood", dimensions: "6x6x18 in", craftHistory: "Inspired by tribal ancestor pillars."
  },
  { 
    id: 8, name: "Royal Guard Pair", category: "Home Decor", description: "Hand-painted traditional figurines in authentic colors.", retailPrice: "₹1,800", bulkPrice: "₹1,000", images: ["/products/Decor 03.jpg", "/products/Decor 04.jpg"], isCustomizable: false, badges: ["🎨 Hand-Painted"], material: "Softwood & Lacquer", dimensions: "4x4x14 in", craftHistory: "Painted with organic local lacquer."
  },
  { 
    id: 9, name: "Folk Culture Miniature Set", category: "Home Decor", description: "Wooden dolls representing local village life.", retailPrice: "₹1,200", bulkPrice: "₹700", images: ["/products/Decor 04.jpg"], isCustomizable: false, badges: ["🎁 Gift Idea"], material: "Neem Wood", dimensions: "Miniature", craftHistory: "Carved on traditional hand-lathes."
  },
  { 
    id: 10, name: "Traditional Musicians", category: "Home Decor", description: "Hand-painted ensemble celebrating folk music.", retailPrice: "₹2,200", bulkPrice: "₹1,300", images: ["/products/Decor 05.jpg"], isCustomizable: false, badges: ["⭐ Classic"], material: "Softwood", dimensions: "14x6x8 in", craftHistory: "Captures the cultural soul of Gujarat."
  },
  { 
    id: 11, name: "Ceremonial Royal Boat", category: "Home Decor", description: "Elaborate carving of a ceremonial royal barge.", retailPrice: "₹5,500", bulkPrice: "₹3,500", images: ["/products/Decor 06.jpg"], isCustomizable: true, badges: ["💎 Premium"], material: "Rosewood", dimensions: "28x6x10 in", craftHistory: "Modeled after royal river barges."
  },

  // --- KHATLI ---
  { 
    id: 12, name: "Heritage Khatli (Miniature)", category: "Khatli", description: "Authentic charpai with hand-woven silk threads.", retailPrice: "₹1,500", bulkPrice: "₹900", images: ["/products/Khatli 00.jpg", "/products/khatli 01.jpg"], isCustomizable: false, badges: ["🔥 Best Seller"], material: "Teak & Silk", dimensions: "12x8x6 in", craftHistory: "Authentic village knotting."
  },
  { 
    id: 13, name: "Woven Artisan Khatli", category: "Khatli", description: "Perfectly scaled replica of a traditional cot.", retailPrice: "₹1,100", bulkPrice: "₹650", images: ["/products/khatli 01.jpg"], isCustomizable: false, badges: ["⭐ New"], material: "Mango Wood", dimensions: "10x6x5 in", craftHistory: "Fusion of woodwork and textile art."
  },
  { 
    id: 14, name: "Round Heritage Stool", category: "Khatli", description: "Versatile round stool with ornately carved legs.", retailPrice: "₹1,800", bulkPrice: "₹1,000", images: ["/products/khatli02.jpg"], isCustomizable: false, badges: ["🏷️ 10% Off"], material: "Rosewood", dimensions: "12x12x12 in", craftHistory: "Used traditionally by artisans."
  },

  // --- KITCHENWARE ---
  { 
    id: 15, name: "Floral Spice Chakkar", category: "Kitchenware", description: "Round spice box with deep floral lid carvings.", retailPrice: "₹1,800", bulkPrice: "₹1,100", images: ["/products/Chakkar 00.jpg", "/products/Chakkar 01.jpg"], isCustomizable: true, badges: ["🔥 Best Seller"], material: "Sheesham", dimensions: "8x8x3 in", craftHistory: "Airtight traditional joinery."
  },
  { 
    id: 16, name: "Artisan Masala Dabba", category: "Kitchenware", description: "Open dabba with seven removable wooden bowls.", retailPrice: "₹2,100", bulkPrice: "₹1,300", images: ["/products/Chakkar 01.jpg"], isCustomizable: false, badges: ["👨‍🍳 Chef's Choice"], material: "Neem Wood", dimensions: "9x9x3 in", craftHistory: "Neem is naturally antibacterial."
  },
  { 
    id: 17, name: "Geometric Spice Box", category: "Kitchenware", description: "Precision geometric patterns on a spice box.", retailPrice: "₹1,800", bulkPrice: "₹1,100", images: ["/products/Chakkar 2.jpg"], isCustomizable: true, badges: ["⭐ Classic"], material: "Rosewood", dimensions: "8x8x3 in", craftHistory: "Islamic architectural influence."
  },
  { 
    id: 18, name: "Premium Square Spice Box", category: "Kitchenware", description: "9 compartments with a clear glass lid.", retailPrice: "₹2,500", bulkPrice: "₹1,500", images: ["/products/Chhakar 02.jpg"], isCustomizable: true, badges: ["💎 Premium"], material: "Teak & Glass", dimensions: "10x10x3 in", craftHistory: "Modernized heritage utility."
  },
  { 
    id: 19, name: "Hexagonal Spice Box", category: "Kitchenware", description: "Six-sided storage box with internal dividers.", retailPrice: "₹2,000", bulkPrice: "₹1,200", images: ["/products/chhakar 03.jpg"], isCustomizable: true, badges: ["⭐ New"], material: "Sheesham", dimensions: "9x9x3 in", craftHistory: "Inspired by honeycomb geometry."
  },
  { 
    id: 20, name: "Heritage Roti Box", category: "Kitchenware", description: "Seasoned wood casserole for keeping breads warm.", retailPrice: "₹1,800", bulkPrice: "₹1,100", images: ["/products/Roti Box 0.jpg", "/products/Roti Box 01.jpg"], isCustomizable: true, badges: ["🔥 Best Seller"], material: "Teak Wood", dimensions: "9x9x4 in", craftHistory: "Natural insulation for chapatis."
  },
  { 
    id: 21, name: "Lacquered Roti Box", category: "Kitchenware", description: "High-gloss lacquer finish for luxury dining.", retailPrice: "₹2,000", bulkPrice: "₹1,250", images: ["/products/Roti Box 02.jpg"], isCustomizable: true, badges: ["💎 Premium"], material: "Lacquered Teak", dimensions: "9x9x4 in", craftHistory: "Friction-heat lacquer technique."
  },
  { 
    id: 22, name: "Premium Roti Box (L)", category: "Kitchenware", description: "Large bread box with brass handles.", retailPrice: "₹2,200", bulkPrice: "₹1,400", images: ["/products/Roti Box 03.jpg", "/products/Roti Box 04.jpg"], isCustomizable: true, badges: ["👑 Royal"], material: "Rosewood & Brass", dimensions: "11x11x5 in", craftHistory: "Designed for joint family meals."
  },
  { 
    id: 23, name: "Minimalist Roti Box", category: "Kitchenware", description: "Handle-free design highlighting wood grain.", retailPrice: "₹1,600", bulkPrice: "₹950", images: ["/products/Roti Box 04.jpg"], isCustomizable: false, badges: ["⭐ Classic"], material: "Polished Teak", dimensions: "8x8x4 in", craftHistory: "Sanded to a mirror finish."
  },
  { 
    id: 24, name: "Hand-Carved Casserole", category: "Kitchenware", description: "Deeply carved lid showcasing master artisanry.", retailPrice: "₹2,400", bulkPrice: "₹1,500", images: ["/products/Roti Box 05.jpg", "/products/Roti Box 06.jpg"], isCustomizable: true, badges: ["🏆 Masterpiece"], material: "Sheesham", dimensions: "10x10x5 in", craftHistory: "Detailed with micro-chisels."
  },
  { 
    id: 25, name: "Artisan Wood Mug", category: "Kitchenware", description: "Finely turned light wood mug with safe lacquer.", retailPrice: "₹650", bulkPrice: "₹380", images: ["/products/cup 00.jpg"], isCustomizable: false, badges: ["🔥 Best Seller"], material: "Neem Wood", dimensions: "3x3x5 in", craftHistory: "Natural antibacterial vessel."
  },
  { 
    id: 26, name: "Barrel Style Mug", category: "Kitchenware", description: "Robust dark wood mug with barrel profile.", retailPrice: "₹700", bulkPrice: "₹420", images: ["/products/cup 01.jpg"], isCustomizable: false, badges: ["⭐ Classic"], material: "Dark Sheesham", dimensions: "4x4x5 in", craftHistory: "Solid-block durability."
  },
  { 
    id: 27, name: "Rustic Banded Mug", category: "Kitchenware", description: "Features rustic carving bands for vintage charm.", retailPrice: "₹850", bulkPrice: "₹500", images: ["/products/cup 02.jpg"], isCustomizable: false, badges: ["🏷️ Vintage"], material: "Mango Wood", dimensions: "3x3x6 in", craftHistory: "Grip inspired by merchant mugs."
  },
  { 
    id: 28, name: "Sleek Wood Tumbler", category: "Kitchenware", description: "Modern ergonomic handle-less tumbler.", retailPrice: "₹600", bulkPrice: "₹350", images: ["/products/cup 03.jpg"], isCustomizable: false, badges: ["💧 Eco"], material: "Polished Teak", dimensions: "3x3x6 in", craftHistory: "100% plastic-free vessel."
  },
  { 
    id: 29, name: "Wide Rosewood Cup", category: "Kitchenware", description: "Wide profile carved from dense rosewood.", retailPrice: "₹750", bulkPrice: "₹450", images: ["/products/cup 04.jpg"], isCustomizable: false, badges: ["💎 Premium"], material: "Indian Rosewood", dimensions: "4x4x4 in", craftHistory: "Naturally heat-resistant wood."
  },
  { 
    id: 30, name: "Premium Grain Mug", category: "Kitchenware", description: "Selected for high-contrast wood grain patterns.", retailPrice: "₹800", bulkPrice: "₹480", images: ["/products/cup 06.jpg"], isCustomizable: false, badges: ["⭐ New"], material: "Select Teak", dimensions: "3x3x6 in", craftHistory: "Rare grain selection process."
  },
  { 
    id: 31, name: "Master Chef Spoon Set", category: "Kitchenware", description: "5-piece set of essential cooking tools.", retailPrice: "₹1,200", bulkPrice: "₹700", images: ["/products/spoon 05.jpg", "/products/spoon 00.jpg"], isCustomizable: false, badges: ["👨‍🍳 Chef Choice"], material: "Solid Neem", dimensions: "12 in length", craftHistory: "Non-stick safe cookware."
  },
  { 
    id: 32, name: "Elite Cutlery Set", category: "Kitchenware", description: "Eco-friendly wooden forks and spoons.", retailPrice: "₹900", bulkPrice: "₹550", images: ["/products/spoon 01.jpg"], isCustomizable: false, badges: ["💧 Eco"], material: "Mango Wood", dimensions: "8 in length", craftHistory: "Meticulously hand-sanded."
  },
  { 
    id: 33, name: "Large Serving Ladle", category: "Kitchenware", description: "Massive ladle carved from single-piece hardwood.", retailPrice: "₹450", bulkPrice: "₹250", images: ["/products/spoon 02.jpg"], isCustomizable: false, badges: ["⭐ Classic"], material: "Sheesham", dimensions: "14 in length", craftHistory: "Scaled for community dining."
  },
  { 
    id: 34, name: "Kitchen Tool Set w/ Stand", category: "Kitchenware", description: "Tools and mashers with matching stand.", retailPrice: "₹1,800", bulkPrice: "₹1,100", images: ["/products/spoon 03.jpg"], isCustomizable: false, badges: ["🎁 Gift Idea"], material: "Neem & Teak", dimensions: "6x6x14 in", craftHistory: "Generational kitchen toolkit."
  },
  { 
    id: 35, name: "Dessert Spoon Pair", category: "Kitchenware", description: "Small delicate wooden spoons for sweets.", retailPrice: "₹600", bulkPrice: "₹350", images: ["/products/spoon 04.jpg"], isCustomizable: false, badges: ["💎 Premium"], material: "Fine Teak", dimensions: "6 in length", craftHistory: "Carved with micro-tools."
  },
  { 
    id: 36, name: "Heritage Tray (R)", category: "Kitchenware", description: "Large tray with ornate handles and finish.", retailPrice: "₹1,800", bulkPrice: "₹1,100", images: ["/products/Tray 00.jpg"], isCustomizable: true, badges: ["🔥 Best Seller"], material: "Solid Teak", dimensions: "18x12x2 in", craftHistory: "Reinforced dovetail joinery."
  },
  { 
    id: 37, name: "Minimalist Tray", category: "Kitchenware", description: "Sleek flat tray focusing on grain beauty.", retailPrice: "₹1,400", bulkPrice: "₹850", images: ["/products/tray 01.jpg"], isCustomizable: true, badges: ["⭐ Modern"], material: "Sheesham", dimensions: "16x10x2 in", craftHistory: "Low-profile heritage design."
  },
  { 
    id: 38, name: "Classic Round Tray", category: "Kitchenware", description: "Timeless round tray for drink service.", retailPrice: "₹1,600", bulkPrice: "₹950", images: ["/products/tray 02.jpg"], isCustomizable: true, badges: ["⭐ Classic"], material: "Mango Wood", dimensions: "14 in diameter", craftHistory: "Turned on massive lathes."
  },
  { 
    id: 39, name: "Nesting Tray Set (3pc)", category: "Kitchenware", description: "Three trays that nest perfectly for storage.", retailPrice: "₹3,200", bulkPrice: "₹2,000", images: ["/products/tray 03.jpg"], isCustomizable: true, badges: ["💎 Premium"], material: "Teak Wood", dimensions: "S/M/L Set", craftHistory: "Precision-milled nesting."
  },
  { 
    id: 40, name: "Decorative Border Tray", category: "Kitchenware", description: "Intricately carved floral border grips.", retailPrice: "₹2,200", bulkPrice: "₹1,300", images: ["/products/tray 04.jpg"], isCustomizable: true, badges: ["👑 Royal"], material: "Sheesham", dimensions: "16x12x2 in", craftHistory: "Ergonomic master carving."
  },
  { 
    id: 41, name: "Artisan Wood Goblet", category: "Kitchenware", description: "Finely turned goblet for royal dining.", retailPrice: "₹800", bulkPrice: "₹450", images: ["/products/wooden glass 00.jpg"], isCustomizable: false, badges: ["⭐ New"], material: "Rosewood", dimensions: "3x3x7 in", craftHistory: "Ceremonial royal profile."
  },
  { 
    id: 42, name: "Heritage Chalice Pair", category: "Kitchenware", description: "Pair of chalices for special occasions.", retailPrice: "₹1,500", bulkPrice: "₹900", images: ["/products/wooden glass 01.jpg"], isCustomizable: false, badges: ["🎁 Gift Idea"], material: "Teak Wood", dimensions: "3x3x7 in each", craftHistory: "Unity-themed paired carving."
  },
  { 
    id: 43, name: "Hand-Turned Dining Plate", category: "Kitchenware", description: "Organic wooden thali for healthy dining.", retailPrice: "₹900", bulkPrice: "₹500", images: ["/products/Plate 00.jpg"], isCustomizable: true, badges: ["💧 Eco"], material: "Neem Wood", dimensions: "12 in diameter", craftHistory: "Ayurvedic dining tradition."
  }
];