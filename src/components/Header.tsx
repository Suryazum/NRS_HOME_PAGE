import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Updated branding to Rokka Brothers & NRS Distributor */}
        <a href="/" className="flex flex-col text-white rounded-lg p-2 hover:bg-blue-800 transition-colors">
          <span className="text-3xl font-bold tracking-tight">Rokka Brothers</span>
          <span className="text-xs font-light tracking-wide mt-[-5px] opacity-75">
            Official Distributor of NRS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-lg">
            <li><a href="#about" className="hover:text-blue-200 transition-colors">About Us</a></li>
            <li><a href="#gallery" className="hover:text-blue-200 transition-colors">Gallery</a></li>
            <li><a href="#trips" className="hover:text-blue-200 transition-colors">Our Trips</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded-md"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 p-4 mt-2 rounded-lg shadow-inner">
          <ul className="flex flex-col space-y-4 text-center text-lg">
            <li><a href="#about" className="block py-2 hover:bg-blue-700 rounded transition-colors">About Us</a></li>
            <li><a href="#gallery" className="block py-2 hover:bg-blue-700 rounded transition-colors">Gallery</a></li>
            <li><a href="#trips" className="block py-2 hover:bg-blue-700 rounded transition-colors">Our Trips</a></li>
            <li><a href="#contact" className="block py-2 hover:bg-blue-700 rounded transition-colors">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;