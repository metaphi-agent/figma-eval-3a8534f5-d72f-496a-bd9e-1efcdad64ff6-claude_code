export default function Subscribe() {
  return (
    <section className="w-full px-6 lg:px-[186px] py-20">
      <div className="max-w-[1170px] mx-auto relative">
        {/* Background Box */}
        <div className="bg-[#DFD7F9]/20 rounded-tl-[20px] rounded-tr-[129px] rounded-br-[20px] rounded-bl-[20px] p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative Pattern Left */}
          <div className="absolute left-0 top-0 w-[264px] h-full opacity-10">
            <svg viewBox="0 0 264 351" fill="none" className="w-full h-full">
              <circle cx="0" cy="175" r="175" fill="#6246E5"/>
            </svg>
          </div>
          
          {/* Decorative Pattern Right */}
          <div className="absolute right-0 bottom-0 w-[264px] h-full opacity-10">
            <svg viewBox="0 0 264 351" fill="none" className="w-full h-full">
              <circle cx="264" cy="175" r="175" fill="#6246E5"/>
            </svg>
          </div>

          {/* Content */}
          <div className="text-center relative z-10">
            <h2 className="text-[#5E6282] font-semibold text-2xl lg:text-[33px] leading-[1.64] mb-10 max-w-[881px] mx-auto">
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>

            {/* Form */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[600px] mx-auto">
              <div className="flex-1 relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#39425D]">
                  <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <path d="M1.5 3L10.5 9L19.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="1" y="1" width="19" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white rounded-[10px] py-5 pl-14 pr-6 text-sm text-[#39425D] placeholder:text-[#39425D] focus:outline-none focus:ring-2 focus:ring-[#6246E5]/20"
                />
              </div>
              
              <button className="bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white font-semibold rounded-[10px] px-8 py-5 hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Floating Send Icon */}
        <div className="absolute -top-10 right-20 hidden lg:block">
          <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-b from-[#747DEF] to-[#5E3BE1] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-[-30deg]">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
