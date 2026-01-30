import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Hotels', href: '#hotels' },
    { label: 'Flights', href: '#flights' },
    { label: 'Bookings', href: '#bookings' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="./assets/logo.svg"
              alt="Jadoo Travel Agency"
              className="h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#212832] text-[17px] font-medium hover:text-[#DF6951] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#login"
              className="text-[#212832] text-[17px] font-medium hover:text-[#DF6951] transition-colors"
            >
              Login
            </a>
            <a
              href="#signup"
              className="px-6 py-2.5 border border-[#212832] rounded-[5px] text-[#212832] text-[17px] font-medium hover:bg-[#212832] hover:text-white transition-colors"
            >
              Sign up
            </a>
            {/* Language Dropdown */}
            <button className="flex items-center gap-1 text-[#212832] text-[17px] font-medium">
              EN
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {isMenuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="#212832" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#212832" strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#212832] text-[17px] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-gray-200" />
              <a href="#login" className="text-[#212832] text-[17px] font-medium py-2">
                Login
              </a>
              <a
                href="#signup"
                className="text-center px-6 py-2.5 border border-[#212832] rounded-[5px] text-[#212832] text-[17px] font-medium"
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
