export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[766px] h-[872px] bg-[#FFF1DA] rounded-bl-[100%] -z-10" />
      <div className="absolute top-[50px] left-[50px] w-[300px] h-[300px] bg-[#D5AEE4] opacity-30 blur-[150px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Content */}
          <div className="flex-1 max-w-[545px]">
            {/* Tagline */}
            <p className="text-[#DF6951] text-xl font-bold uppercase tracking-wide mb-6">
              Best Destinations around the world
            </p>

            {/* Main Heading */}
            <h1 className="font-[Volkhov] text-[50px] lg:text-[84px] font-bold leading-[1.06] tracking-[-0.04em] text-[#181E4B] mb-6">
              Travel,{' '}
              <span className="relative">
                enjoy
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 385 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 9C100 3 200 1 384 9"
                    stroke="#DF6951"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              and live a new
              <br />
              and full life
            </h1>

            {/* Description */}
            <p className="text-[#5E6282] text-base leading-[1.875] max-w-[477px] mb-8">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-8 flex-wrap">
              <a
                href="#book"
                className="px-6 py-4 bg-[#F1A501] text-white font-medium rounded-[10px] shadow-[0_10px_20px_rgba(241,165,1,0.3)] hover:bg-[#e09a01] transition-colors"
              >
                Find out more
              </a>

              <button className="flex items-center gap-4 group">
                <div className="w-[52px] h-[52px] rounded-full bg-[#DF6951] flex items-center justify-center shadow-[0_15px_30px_rgba(223,105,81,0.3)] group-hover:scale-105 transition-transform">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M12.5 7.5L5 12.5V2.5L12.5 7.5Z" fill="white" />
                  </svg>
                </div>
                <span className="text-[#686D77] text-[17px] font-medium">Play Demo</span>
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 relative">
            <img
              src="./assets/images/hero-traveller.png"
              alt="Happy traveller with backpack"
              className="w-full max-w-[765px] h-auto"
            />
            {/* Decorative planes */}
            <svg
              className="absolute top-[10%] left-[10%] w-20 h-20 text-[#DF6951] opacity-80"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M50 10L90 50L50 90L10 50L50 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
