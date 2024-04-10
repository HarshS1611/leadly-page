
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://leadly-page.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-800 font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
