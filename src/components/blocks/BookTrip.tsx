const steps = [
  {
    color: '#F0BB1F',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#F0BB1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#F0BB1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    color: '#F15A2B',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#F15A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V6" stroke="#F15A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 2V6" stroke="#F15A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 10H21" stroke="#F15A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    color: '#006380',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#006380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01L9 11.01" stroke="#006380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
];

export default function BookTrip() {
  return (
    <section className="w-full px-6 lg:px-[186px] py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-[510px]">
          <p className="text-[#5E6282] font-semibold text-lg mb-4">
            Easy and Fast
          </p>
          <h2 className="font-heading text-[#14183E] text-4xl lg:text-[50px] font-bold leading-[1.3] mb-12">
            Book your next trip in 3 easy steps
          </h2>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-[#5E6282] font-bold text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#5E6282] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Trip Card */}
        <div className="flex-1 relative">
          <div className="bg-white rounded-[26px] shadow-[var(--shadow-card)] p-6 max-w-[370px] mx-auto">
            <img 
              src="./assets/images/trip-card.png" 
              alt="Trip to Greece"
              loading="lazy"
              className="w-full h-[200px] object-cover rounded-3xl mb-6"
            />
            
            <h3 className="text-[#080809] text-lg font-medium mb-3">
              Trip To Greece
            </h3>
            
            <div className="flex items-center gap-4 text-[#84829A] text-sm mb-4">
              <span>14-29 June</span>
              <span>|</span>
              <span>by Robbin joseph</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#F0BB1F]/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 5V8H11" stroke="#84829A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="7" stroke="#84829A" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#F0BB1F]/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="#84829A" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#F0BB1F]/10 transition-colors">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                  <path d="M8 13L1.5 7.5C0.5 6.5 0 5 0.5 3.5C1.5 1 4 0.5 5.5 1.5C6.5 2 7.5 3 8 4C8.5 3 9.5 2 10.5 1.5C12 0.5 14.5 1 15.5 3.5C16 5 15.5 6.5 14.5 7.5L8 13Z" stroke="#84829A" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-[#84829A]">
                🏢 24 people going
              </span>
            </div>
          </div>
          
          {/* Decorative background circles */}
          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-[#59B1E6]/30 rounded-full blur-[60px] -z-10" />
        </div>
      </div>
    </section>
  );
}
