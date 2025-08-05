"use client"
import { useEffect } from "react";

export default function HomePage() {
  const fetchbacken = async()=>{
    try {
      const response = await fetch(`http://localhost:5000/hello`);
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log((error as Error).message)
    }
  }
  useEffect(()=>{
    fetchbacken()
  },[])
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Welcome to ShopEasy
          </h2>
          <p className="text-xl text-blue-700 mb-8">
            Discover amazing products at unbeatable prices
          </p>
          <a
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 inline-block"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Wireless Headphones"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Wireless Headphones
                </h4>
                <p className="text-blue-600 mb-2">Premium sound quality</p>
                <p className="text-2xl font-bold text-blue-800">$99.99</p>
                <a
                  href="/products/wireless-headphones"
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Smartphone"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Smartphone
                </h4>
                <p className="text-blue-600 mb-2">Latest technology</p>
                <p className="text-2xl font-bold text-blue-800">$699.99</p>
                <a
                  href="/products/smartphone"
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Laptop"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Laptop
                </h4>
                <p className="text-blue-600 mb-2">High performance</p>
                <p className="text-2xl font-bold text-blue-800">$1299.99</p>
                <a
                  href="/products/laptop"
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Smartwatch"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Smartwatch
                </h4>
                <p className="text-blue-600 mb-2">Fitness tracking</p>
                <p className="text-2xl font-bold text-blue-800">$299.99</p>
                <a
                  href="/products/smartwatch"
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block text-center"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">ShopEasy</h5>
              <p className="text-blue-200">
                Your trusted online shopping destination
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-blue-200 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-blue-200 hover:text-white"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-blue-200 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-blue-200 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Customer Service</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <p className="text-blue-200">Email: info@shopeasy.com</p>
              <p className="text-blue-200">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              &copy; 2024 ShopEasy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
