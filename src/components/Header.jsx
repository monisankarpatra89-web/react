import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0">My Application</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300 transition-colors duration-200">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300 transition-colors duration-200">About</a></li>
            <li><a href="/services" className="hover:text-gray-300 transition-colors duration-200">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition-colors duration-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
