import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

// types
type Product = {
  id: number;
  title: string;
  category: string;
  description?: string;
  img?: string;
  price?: number;
};

type CartItem = {
  id: number;
  title: string;
  category: string;
  description?: string;
  img?: string;
  price: number;
  qty: number;
};

// initial cart
const initialCart: CartItem[] = [
  {
    id: 1,
    title: "Hydraulic Hose – R2A Skive Type",
    category: "Hoses & Connectors",
    description: "High-pressure...",
    qty: 2,
    price: 120,
    img: "/images/cart5.webp"
  },
  {
    id: 2,
    title: "BSP Female 60° Cone Fitting",
    category: "Hose Fittings",
    description: "Precision...",
    qty: 5,
    price: 18,
    img: "/images/cart6.webp"
  }
];

export default function CartPage() {
  const fbtMap = {
    "Hoses & Connectors": ["Hose Fittings", "Gaskets"],
    "Hose Fittings": ["Hoses & Connectors", "Tools"],
    "Gaskets": ["Hose Fittings", "Safety Items"],
    "Safety Items": ["Tools"],
    "Tools": ["Safety Items"]
  };

  // ⭐ keep only ONE cart state
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const [cartAnimate, setCartAnimate] = useState(false);

  useEffect(() => {
    if (cartAnimate) {
      const timer = setTimeout(() => setCartAnimate(false), 400);
      return () => clearTimeout(timer);
    }
  }, [cartAnimate]);

  const updateQty = (id: number, value: number) => {
    if (value < 1) return;
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: value } : item
    ));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // add a single product safely
  function addProductToCart(product: Product) {
    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      category: product.category,
      description: product.description,
      img: product.img,
      price: product.price ?? 0,
      qty: 1
    };

    setCart(prev => {
      const exists = prev.find(p => p.id === cartItem.id);
      if (exists) {
        return prev.map(p =>
          p.id === cartItem.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, cartItem];
    });

    setCartAnimate(true);
  }

  function addAllToCart(products: Product[]) {
    setCart(prev => {
      const next = [...prev];

      products.forEach(product => {
        const existing = next.find(p => p.id === product.id);
        if (existing) {
          existing.qty += 1;
        } else {
          next.push({
            id: product.id,
            title: product.title,
            category: product.category,
            description: product.description,
            img: product.img,
            price: product.price ?? 0,
            qty: 1
          });
        }
      });

      return next;
    });

    setCartAnimate(true);
  }

  const subtotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  const allProducts: Product[] = [
    { id: 101, title: "Hydraulic Fittings", category: "Hose Fittings", img: "/images/cart4.jpg", description: "High-pressure steel fittings for industrial systems.", price: 25 },
    { id: 102, title: "Composite Hose", category: "Hoses & Connectors", img: "/images/cart5.webp", description: "Flexible chemical-resistant composite hose.", price: 90 },
    { id: 103, title: "Ring Joint Gasket", category: "Gaskets", img: "/images/cart1.png", description: "API-certified metal sealing gasket.", price: 15 },
    { id:104, title:"Safety Shoes", category:"Safety Items", img:"/images/cart2.jpg", description:"Heavy-duty steel toe industrial shoes.", price:80 },
    { id:105, title:"Adjustable Spanner", category:"Tools", img:"/images/cart3.webp", description:"Multi-size adjustable wrench.", price:20 }
  ];

  const recommended = allProducts
    .filter(product => !cart.some(item => item.category === product.category))
    .slice(0, 4);

  const fbtCategories = [
    ...new Set(
      cart.flatMap(item => fbtMap[item.category] || [])
    )
  ];

  const frequentlyBoughtTogether = allProducts.filter(product =>
    fbtCategories.includes(product.category)
  );

  return (
    <div className="w-full mx-auto py-16 px-6">

      {/* Banner Section */}
<div
  className="w-full h-64 rounded-xl mb-12 bg-cover bg-center relative shadow-lg overflow-hidden"
  style={{
    backgroundImage: "url('/images/cartBanner9.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

  {/* Content Wrapper (row layout) */}
  <div className="relative z-10 flex items-center justify-between h-full px-10">

    {/* LEFT SIDE TEXT */}
    {/* <h1 className="text-4xl font-bold text-white drop-shadow-lg mr-6">
    Your Cart
  </h1> */}


    {/* RIGHT SIDE IMAGE */}
    {/* <img
  src="/images/cartBanner4.png"
  alt="Cart Banner Illustration"
  className="h-full scale-125 object-contain drop-shadow-lg w-[500px]"
/> */}


  </div>
</div>


      <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
<p className="text-gray-500 mb-8">{cart.length} items</p>

{/* GRID LAYOUT: Left = items | Right = summary */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

  {/* LEFT SIDE – Cart Items (2 Columns on large screen) */}
  <div className="lg:col-span-2 bg-white shadow-lg rounded-xl p-6">
    {cart.map(item => (
      <div
        key={item.id}
        className="flex items-center gap-6 border-b py-6 last:border-none fade-slide-in"
      >
        <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-md border" />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 mt-1">
            {item.category}
          </span>
          <p className="text-sm text-gray-500 mt-2">{item.description}</p>
        </div>

        {/* Quantity */}
        <div className="flex items-center border rounded-md">
          <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-3 py-2 hover:bg-gray-100">-</button>
          <span className="px-4">{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-3 py-2 hover:bg-gray-100">+</button>
        </div>

        {/* Subtotal */}
        <div className="w-24 text-right font-semibold">
          AED {item.qty * item.price}
        </div>

        {/* Remove */}
        <button onClick={() => removeItem(item.id)}>
          <Trash2 className="text-red-600 w-5 h-5 hover:scale-110 transition" />
        </button>
      </div>
    ))}
  </div>

  {/* RIGHT SIDE – Summary */}
<div className="max-w-md bg-gray-200 shadow-lg rounded-2xl p-10 h-fit sticky top-24">

  <h2 className="text-2xl font-bold mb-8 text-gray-900">Cart Totals</h2>

  <div className="space-y-4 text-lg text-gray-800">

    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>AED {subtotal.toFixed(2)}</span>
    </div>

    <div className="flex justify-between">
      <span>VAT (5%)</span>
      <span>AED {vat.toFixed(2)}</span>
    </div>

    <div className="flex justify-between font-bold text-2xl border-t pt-6 text-gray-900">
      <span>Total</span>
      <span>AED {total.toFixed(2)}</span>
    </div>
  </div>

  <button className="w-full mt-10 bg-gray-700 text-white py-3 rounded-lg text-base font-medium hover:bg-black transition-all">
    Proceed to Checkout
  </button>

</div>


</div>


      {/* Recommended */}
      <h2 className="text-2xl font-bold mt-16 mb-6">Recommended for You</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommended.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
            <img src={product.img} className="w-full h-40 object-cover rounded-md" />
            <h3 className="font-semibold mt-3 text-lg">{product.title}</h3>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 mt-2">{product.category}</span>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            <Link to="/products" className="text-secondary font-semibold text-sm mt-3 inline-block">View Product →</Link>
          </div>
        ))}
      </div>

      {/* FBT */}
      {frequentlyBoughtTogether.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-16 mb-6">Frequently Bought Together</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frequentlyBoughtTogether.map(product => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
                <img src={product.img} className="w-full h-40 object-cover rounded-md" />
                <h3 className="font-semibold mt-3 text-lg">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{product.description}</p>

                {/* FIXED: Typed Add to Cart */}
                <button
                  onClick={() => addProductToCart(product)}
                  className="mt-4 bg-secondary text-white px-4 py-2 rounded-md w-full hover:bg-secondary/90"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Add All */}
          <button
            onClick={() => addAllToCart(frequentlyBoughtTogether)}
            className="mt-6 bg-blue-700 text-white py-3 rounded-lg font-bold w-full hover:bg-blue-800"
          >
            Add All to Cart
          </button>
        </>
      )}
    </div>
  );
}
