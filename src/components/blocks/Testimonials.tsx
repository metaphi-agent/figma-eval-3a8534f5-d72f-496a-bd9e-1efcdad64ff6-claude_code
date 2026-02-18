export default function Testimonials() {
  return (
    <section className="w-full px-6 lg:px-[186px] py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-16">
        {/* Left Content */}
        <div className="lg:w-1/3">
          <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wide mb-4">
            TESTIMONIALS
          </p>
          <h2 className="font-heading text-[#14183E] text-4xl lg:text-[50px] font-bold leading-[1.3] mb-8">
            What people say about Us.
          </h2>
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-5">
            <button className="w-3 h-3 rounded-full bg-[#39425D] transition-all hover:scale-110" />
            <button className="w-3 h-3 rounded-full bg-[#E5E5E5] transition-all hover:scale-110 hover:bg-[#39425D]" />
            <button className="w-3 h-3 rounded-full bg-[#E5E5E5] transition-all hover:scale-110 hover:bg-[#39425D]" />
          </div>
        </div>

        {/* Right Content - Testimonial Cards */}
        <div className="lg:w-2/3 relative">
          {/* Main Card */}
          <div className="bg-white rounded-xl p-10 shadow-[var(--shadow-card)] max-w-[504px] ml-auto relative">
            <img
              src="./assets/images/testimonial-avatar.png"
              alt="Mike Taylor"
              className="absolute -left-9 -top-5 w-[68px] h-[68px] rounded-full object-cover"
            />
            
            <p className="text-[#5E6282] text-base leading-[2] mb-8">
              "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
            </p>
            
            <h4 className="text-[#5E6282] font-semibold text-lg">
              Mike taylor
            </h4>
            <p className="text-[#5E6282] text-sm">
              Lahore, Pakistan
            </p>
          </div>

          {/* Secondary Card (dimmed) */}
          <div className="bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] max-w-[450px] ml-auto mt-6 opacity-50">
            <p className="text-[#5E6282] text-sm leading-relaxed">
              "On the Windows talking painted pasture yet its express parties use."
            </p>
            <div className="mt-4">
              <h4 className="text-[#5E6282] font-semibold text-base">Chris Thomas</h4>
              <p className="text-[#5E6282] text-xs">CEO of Red Button</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 flex flex-col gap-3">
            <button className="w-[14px] h-[14px] rotate-45 border-t-2 border-r-2 border-[#3E2D47]/30 hover:border-[#3E2D47] transition-colors" />
            <button className="w-[14px] h-[14px] rotate-[-135deg] border-t-2 border-r-2 border-[#3E2D47]/30 hover:border-[#3E2D47] transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
