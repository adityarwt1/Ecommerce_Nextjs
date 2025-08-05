"use client";

import { useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  description: string;
  images: string[];
  features: string[];
  specification: string[];
  price: number;
  createdAt: string;
  updatedAt: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.products); // assuming `{ products: [...] }` structure
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <div className="text-center p-6">Loading products...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
          <img
            src={product.images[0] || "/placeholder.png"}
            alt={product.title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 text-xl font-semibold text-blue-600">
            {product.title}
          </h2>
          <p className="text-gray-700 mt-1">${product.price}</p>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-900">Features:</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-900">
              Specifications:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {product.specification.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
