const steps = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#F0BB1F" />
        <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="white" strokeWidth="2" />
        <path d="M24 18V24L28 26" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    color: '#F0BB1F',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#F15A2B" />
        <path d="M33 17H15C14.4477 17 14 17.4477 14 18V30C14 30.5523 14.4477 31 15 31H33C33.5523 31 34 30.5523 34 30V18C34 17.4477 33.5523 17 33 17Z" stroke="white" strokeWidth="2" />
        <path d="M14 22H34" stroke="white" strokeWidth="2" />
      </svg>
    ),
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    color: '#F15A2B',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#006380" />
        <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="white" strokeWidth="2" />
        <path d="M18 24L22 28L30 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    color: '#006380',
  },
];

export default function BookTrip() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Content */}
          <div className="flex-1">
            {/* Section Header */}
            <div className="mb-10">
              <p className="text-[#5E6282] text-lg font-semibold mb-2">Easy and Fast</p>
              <h2 className="font-[Volkhov] text-[50px] font-bold text-[#14183E] leading-[1.3]">
                Book your next trip
                <br />
                in 3 easy steps
              </h2>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">{step.icon}</div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[#5E6282] font-semibold text-base mb-1">
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
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-[354px] h-[367px] bg-[#59B1E6] opacity-40 rounded-[150px] blur-[80px] -z-10" />

            {/* Main Card */}
            <div className="bg-white rounded-[26px] p-6 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64px_47px_rgba(0,0,0,0.015),0_20px_13px_rgba(0,0,0,0.01)] max-w-[370px]">
              {/* Trip Image */}
              <img
                src="./assets/images/trip-greece.png"
                alt="Trip to Greece"
                loading="lazy"
                className="w-full h-[161px] object-cover rounded-[24px] mb-6"
              />

              {/* Trip Details */}
              <h3 className="text-[#080809] text-lg font-medium tracking-[0.015em] mb-3">
                Trip To Greece
              </h3>

              <div className="flex items-center gap-4 text-[#84829A] text-base mb-6">
                <span>14-29 June</span>
                <span className="w-px h-4 bg-[#84829A]" />
                <span>by Robbin joseph</span>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-4 mb-6">
                <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 14C8 14 14 10 14 6C14 3.79086 12.2091 2 10 2C8.5 2 7.5 3 8 4C8.5 3 7.5 2 6 2C3.79086 2 2 3.79086 2 6C2 10 8 14 8 14Z" stroke="#84829A" strokeWidth="1.5" />
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8L8 14L14 8M8 2V14" stroke="#84829A" strokeWidth="1.5" />
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 2L2 14M2 2L14 14" stroke="#84829A" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              {/* People Going */}
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#84829A" strokeWidth="1.5" />
                  <path d="M8 5V8L10 10" stroke="#84829A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[#84829A] text-base">24 people going</span>
              </div>
            </div>

            {/* Ongoing Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-[18px] p-5 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64px_47px_rgba(0,0,0,0.015),0_20px_13px_rgba(0,0,0,0.01)] w-[263px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[50px] h-[50px] rounded-full bg-white/30 flex items-center justify-center shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8A79EC" strokeWidth="2" />
                    <path d="M10 8L16 12L10 16V8Z" fill="#8A79EC" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#84829A] text-sm font-medium mb-1">Ongoing</p>
                  <h4 className="text-[#080809] text-lg font-medium">Trip to rome</h4>
                </div>
              </div>

              <p className="text-[#8A79EC] text-sm font-medium mb-2">
                <span className="text-[#8A79EC]">40%</span> completed
              </p>

              {/* Progress Bar */}
              <div className="h-[5px] bg-[#F5F5F5] rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-[#8A79EC] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
