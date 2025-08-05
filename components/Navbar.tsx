export default  function Navbar(){
    return(
        <header className="bg-white border-b border-blue-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-600">ShopEasy</h1>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="/" className="text-blue-600 hover:text-blue-800">
          Home
        </a>
        <a href="/products" className="text-blue-600 hover:text-blue-800">
          Products
        </a>
        <a href="/about" className="text-blue-600 hover:text-blue-800">
          About
        </a>
        <a href="/contact" className="text-blue-600 hover:text-blue-800">
          Contact
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="/cart" className="text-blue-600 hover:text-blue-800">
          Cart (0)
        </a>
      </div>
    </div>
  </div>
</header>

    )
}