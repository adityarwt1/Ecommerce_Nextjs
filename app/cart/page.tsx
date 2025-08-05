import React from "react";
export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Page Header */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900">Shopping Cart</h2>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-blue-100 rounded-lg">
                <div className="p-6 border-b border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Cart Items
                  </h3>
                </div>

                {/* Cart Item 1 */}
                <div className="p-6 border-b border-blue-100">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Wireless Headphones"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-blue-900">
                        Wireless Headphones
                      </h4>
                      <p className="text-blue-600">Premium sound quality</p>
                      <p className="text-blue-800 font-bold">$99.99</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        -
                      </button>
                      <span className="text-blue-900 font-semibold">1</span>
                      <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        +
                      </button>
                    </div>
                    <button className="text-red-600 hover:text-red-800">
                      Remove
                    </button>
                  </div>
                </div>

                {/* Cart Item 2 */}
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Smartphone"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-blue-900">
                        Smartphone
                      </h4>
                      <p className="text-blue-600">Latest technology</p>
                      <p className="text-blue-800 font-bold">$699.99</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        -
                      </button>
                      <span className="text-blue-900 font-semibold">1</span>
                      <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        +
                      </button>
                    </div>
                    <button className="text-red-600 hover:text-red-800">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Order Summary
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-blue-700">
                    <span>Subtotal</span>
                    <span>$799.98</span>
                  </div>
                  <div className="flex justify-between text-blue-700">
                    <span>Shipping</span>
                    <span>$9.99</span>
                  </div>
                  <div className="flex justify-between text-blue-700">
                    <span>Tax</span>
                    <span>$64.00</span>
                  </div>
                  <div className="border-t border-blue-100 pt-2">
                    <div className="flex justify-between text-blue-900 font-bold text-lg">
                      <span>Total</span>
                      <span>$873.97</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="/checkout"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 inline-block text-center"
                  >
                    Proceed to Checkout
                  </a>
                  <a
                    href="/products"
                    className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 inline-block text-center"
                  >
                    Continue Shopping
                  </a>
                </div>
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
