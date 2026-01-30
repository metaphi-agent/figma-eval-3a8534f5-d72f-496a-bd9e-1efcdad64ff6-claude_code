export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-[1240px] mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-[#14183E] font-['Poppins']">Jadoo</h1>
          </div>

          <ul className="hidden md:flex items-center gap-12 text-[17px] text-[#212832]">
            <li><a href="#destinations" className="hover:text-[#DF6951] transition-colors">Destinations</a></li>
            <li><a href="#hotels" className="hover:text-[#DF6951] transition-colors">Hotels</a></li>
            <li><a href="#flights" className="hover:text-[#DF6951] transition-colors">Flights</a></li>
            <li><a href="#bookings" className="hover:text-[#DF6951] transition-colors">Bookings</a></li>
          </ul>

          <div className="hidden md:flex items-center gap-8">
            <button className="text-[17px] text-[#212832] hover:text-[#DF6951] transition-colors">Login</button>
            <button className="px-6 py-2 border-2 border-[#212832] rounded-[5px] text-[17px] text-[#212832] hover:bg-[#212832] hover:text-white transition-all">
              Sign up
            </button>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
