"use client";

import { useEffect, useState } from "react";
import LoadingProfileLogo from "./LoadingProfileLogo"; // make sure path is correct

export default function Navbar() {
  const [userData, setUserData] = useState<null | {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: number;
  }>(null);

  const [loading, setLoading] = useState(true);

  const fetchUserInformaFromcookie = async () => {
    try {
      const response = await fetch("/api/credetials", {
        method: "POST",
      });
      const { data } = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInformaFromcookie();
  }, []);

  return (
    <header className="bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ShopEasy</h1>
          </div>

          {/* Navigation Links */}
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

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <a href="/cart" className="text-blue-600 hover:text-blue-800">
              Cart (0)
            </a>

            {loading ? (
              <LoadingProfileLogo />
            ) : userData ? (
              <div className="flex items-center space-x-2">
                {/* Profile Letter Logo */}
                <a
                  href="/profile"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition"
                  title="Go to Profile"
                >
                  {userData.firstname.charAt(0).toUpperCase()}
                </a>

                {/* Optional user info */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-sm font-medium text-gray-700">
                    {userData.firstname} {userData.lastname}
                  </span>
                  <span className="text-xs text-gray-500">
                    {userData.email}
                  </span>
                </div>
              </div>
            ) : (
              <>
                <a href="/signin" className="text-blue-600 hover:text-blue-800">
                  Sign In
                </a>
                <a
                  href="/signup"
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
