import React from 'react';
import { ShoppingCart } from 'lucide-react';

function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Club Jersey",
      price: 75.00,
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=1920",
      description: "High-quality cycling jersey with club logo"
    },
    {
      id: 2,
      name: "Cycling Shorts",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?auto=format&fit=crop&q=80&w=1920",
      description: "Comfortable padded cycling shorts"
    },
    {
      id: 3,
      name: "Water Bottle",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=1920",
      description: "Insulated club water bottle"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;