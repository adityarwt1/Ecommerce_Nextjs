import React from "react";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
     
      {/* Page Header */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            About ShopEasy
          </h2>
          <p className="text-xl text-blue-700">
            Your trusted partner in online shopping
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Our Story
              </h3>
              <p className="text-blue-700 mb-4">
                Founded in 2020, ShopEasy has been dedicated to providing
                customers with the best online shopping experience. We believe
                that shopping should be simple, convenient, and enjoyable for
                everyone.
              </p>
              <p className="text-blue-700 mb-4">
                Our mission is to offer high-quality products at competitive
                prices while maintaining exceptional customer service. We
                carefully curate our product selection to ensure that every item
                meets our standards of quality and value.
              </p>
              <p className="text-blue-700">
                With thousands of satisfied customers worldwide, we continue to
                grow and evolve, always putting our customers first.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Our Team"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Q</span>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                Quality
              </h4>
              <p className="text-blue-700">
                We source only the highest quality products from trusted
                manufacturers and suppliers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">S</span>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                Service
              </h4>
              <p className="text-blue-700">
                Our customer service team is dedicated to providing exceptional
                support and assistance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                Value
              </h4>
              <p className="text-blue-700">
                We offer competitive prices and great deals to ensure you get
                the best value for your money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-blue-900 font-semibold">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-blue-900 font-semibold">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-blue-900 font-semibold">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-blue-900 font-semibold">Star Rating</div>
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
