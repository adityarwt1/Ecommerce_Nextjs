import React from "react";
export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
    

      {/* Page Header */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900">Checkout</h2>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div>
              <form className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-white border border-blue-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Shipping Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-blue-900 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-blue-900 font-medium mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white border border-blue-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Payment Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-blue-900 font-medium mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-blue-900 font-medium mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-blue-900 font-medium mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white border border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Order Summary
                </h3>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Wireless Headphones"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-blue-900 font-medium">
                        Wireless Headphones
                      </h4>
                      <p className="text-blue-600 text-sm">Qty: 1</p>
                    </div>
                    <p className="text-blue-800 font-bold">$99.99</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Smartphone"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-blue-900 font-medium">Smartphone</h4>
                      <p className="text-blue-600 text-sm">Qty: 1</p>
                    </div>
                    <p className="text-blue-800 font-bold">$699.99</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-2 mb-6 border-t border-blue-100 pt-4">
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

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700">
                  Place Order
                </button>
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
