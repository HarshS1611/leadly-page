import React, { useState, useEffect } from 'react';

export default function Products() {
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
        <div className='flex flex-col justify-center mx-auto px-5 md:px-20 xl:px-60'>
            <h1 className="flex justify-center text-4xl mt-5 font-bold mb-4">Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 justify-center">
                {products.map((product, index) => (
                    <div key={index} className="bg-gray-100 p-4 xl:w-80 mb-5 rounded-xl shadow-xl">
                        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-gray-800 font-semibold mt-2">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}