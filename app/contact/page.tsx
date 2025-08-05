import React from "react";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page Header */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-xl text-blue-700">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
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
                </div>
                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Address
                    </h4>
                    <p className="text-blue-700">
                      123 Shopping Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Phone
                    </h4>
                    <p className="text-blue-700">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Email
                    </h4>
                    <p className="text-blue-700">info@shopeasy.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      Business Hours
                    </h4>
                    <p className="text-blue-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                What is your return policy?
              </h4>
              <p className="text-blue-700">
                We offer a 30-day return policy for all items in original
                condition. Please contact our customer service team to initiate
                a return.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                How long does shipping take?
              </h4>
              <p className="text-blue-700">
                Standard shipping takes 3-5 business days. Express shipping
                options are available for faster delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Do you ship internationally?
              </h4>
              <p className="text-blue-700">
                Yes, we ship to over 50 countries worldwide. International
                shipping rates and times vary by destination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                How can I track my order?
              </h4>
              <p className="text-blue-700">
                Once your order ships, you'll receive a tracking number via
                email. You can use this to track your package on our website.
              </p>
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
