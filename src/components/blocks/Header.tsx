import Button from '../ui/Button';

export default function Header() {
  const navItems = ['Destinations', 'Hotels', 'Flights', 'Bookings'];

  return (
    <header className="w-full py-8 px-6 lg:px-[186px]">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="./assets/logo.svg" 
            alt="Jadoo" 
            className="h-8"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#212832] hover:text-[#F1A501] transition-colors text-[17px] font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="text-[#212832] font-medium text-[17px] hover:text-[#F1A501] transition-colors">
            Login
          </button>
          <Button variant="secondary" size="sm" className="px-6 py-2.5">
            Sign Up
          </Button>
          
          {/* Language Selector */}
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[#212832] font-medium text-[17px]">EN</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-[#212832]">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
