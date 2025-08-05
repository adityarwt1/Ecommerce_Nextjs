import React from "react";
export default function WirelessHeadphonesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    

      {/* Breadcrumb */}
      <nav className="bg-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-blue-600">
            <a href="/" className="hover:text-blue-800">
              Home
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-blue-800">
              Products
            </a>
            <span>/</span>
            <span className="text-blue-800">Wireless Headphones</span>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Wireless Headphones"
                className="w-full rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Wireless Headphones
              </h2>
              <p className="text-3xl font-bold text-blue-800 mb-6">$99.99</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Description
                </h3>
                <p className="text-blue-700">
                  Experience premium sound quality with our wireless headphones
                  featuring advanced noise cancellation technology. Perfect for
                  music lovers, professionals, and anyone who values
                  crystal-clear audio.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Features
                </h3>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                  <li>Active noise cancellation</li>
                  <li>30-hour battery life</li>
                  <li>Bluetooth 5.0 connectivity</li>
                  <li>Quick charge technology</li>
                  <li>Comfortable over-ear design</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Specifications
                </h3>
                <div className="text-blue-700">
                  <p>
                    <strong>Weight:</strong> 250g
                  </p>
                  <p>
                    <strong>Frequency Response:</strong> 20Hz - 20kHz
                  </p>
                  <p>
                    <strong>Impedance:</strong> 32 ohms
                  </p>
                  <p>
                    <strong>Charging Time:</strong> 2 hours
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="/cart"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 inline-block text-center"
                >
                  Add to Cart
                </a>
                <a
                  href="/checkout"
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 inline-block text-center"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            Related Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Bluetooth Speaker"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-blue-900">
                  Bluetooth Speaker
                </h4>
                <p className="text-blue-800 font-bold">$79.99</p>
                <a
                  href="/products/bluetooth-speaker"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Smartphone"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-blue-900">Smartphone</h4>
                <p className="text-blue-800 font-bold">$699.99</p>
                <a
                  href="/products/smartphone"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Smartwatch"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-blue-900">Smartwatch</h4>
                <p className="text-blue-800 font-bold">$299.99</p>
                <a
                  href="/products/smartwatch"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Tablet"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-blue-900">Tablet</h4>
                <p className="text-blue-800 font-bold">$499.99</p>
                <a
                  href="/products/tablet"
                  className="text-blue-600 hover:text-blue-800 text-sm"
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
