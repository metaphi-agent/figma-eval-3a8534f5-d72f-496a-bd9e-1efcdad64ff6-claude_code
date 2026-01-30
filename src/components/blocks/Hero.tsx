export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#FFF1DA] to-[#FFE5D5] rounded-bl-full opacity-70" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#DF6951] text-[20px] font-bold uppercase tracking-wider">
                Best Destinations around the world
              </p>
              <h1 className="text-[84px] leading-[89px] font-bold text-[#181E4B] font-['Volkhov'] capitalize">
                Travel, enjoy<br />
                and live a new<br />
                and full life
              </h1>
            </div>

            <p className="text-[16px] leading-[30px] text-[#5E6282] max-w-[477px]">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>

            <div className="flex items-center gap-11">
              <button className="px-6 py-4 bg-[#F1A501] text-white rounded-[10px] font-medium text-[18px] hover:bg-[#DF6951] transition-colors shadow-[0px_20px_35px_rgba(241,165,1,0.15)]">
                Find out more
              </button>
              <button className="flex items-center gap-3 text-[#686D77] hover:text-[#DF6951] transition-colors">
                <div className="w-[52px] h-[52px] rounded-full bg-[#DF6951] flex items-center justify-center shadow-[0px_15px_30px_rgba(223,105,81,0.3)]">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="font-medium text-[17px]">Play Demo</span>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for hero image - woman with backpack */}
            <div className="relative w-full h-[580px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}