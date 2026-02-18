import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full px-6 lg:px-[186px] pt-8 pb-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[766px] h-[872px] bg-[#FFF1DA] rounded-bl-[180px] -z-10 hidden lg:block" />
      <div className="absolute top-40 left-10 w-[478px] h-[496px] bg-[#D5AEE4] rounded-full blur-[150px] opacity-30 -z-10" />

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-[630px]">
          <p className="text-[#DF6951] font-bold text-xl uppercase tracking-wide mb-6">
            Best Destinations around the world
          </p>
          
          <h1 className="font-heading text-[#181E4B] text-5xl lg:text-[84px] font-bold leading-[1.06] tracking-[-0.04em] mb-6">
            Travel, enjoy
            <br />
            and live a new
            <br />
            and full life
          </h1>
          
          <p className="text-[#5E6282] text-base leading-[1.875] max-w-[477px] mb-10">
            Built Wicket longer admire do barton vanity itself do in it. 
            Preferred to sportsmen it engrossed listening. Park gate sell 
            they west hard for the.
          </p>
          
          <div className="flex items-center gap-6">
            <Button variant="primary" size="lg">
              Find out more
            </Button>
            
            <button className="flex items-center gap-4 group">
              <div className="w-[52px] h-[52px] rounded-full bg-[#DF6951] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M12 7L0 14V0L12 7Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[#686D77] font-medium">Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 relative">
          {/* Plane decorations */}
          <img 
            src="./assets/plane-decoration-1.svg" 
            alt="" 
            className="absolute top-0 left-16 w-[167px] opacity-80 hidden lg:block"
            aria-hidden="true"
          />
          <img 
            src="./assets/plane-decoration-2.svg" 
            alt="" 
            className="absolute top-10 right-0 w-[167px] opacity-80 hidden lg:block"
            aria-hidden="true"
          />
          
          {/* Main Hero Image */}
          <img 
            src="./assets/images/hero-traveller.png" 
            alt="Happy traveller with backpack"
            className="w-full max-w-[765px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
