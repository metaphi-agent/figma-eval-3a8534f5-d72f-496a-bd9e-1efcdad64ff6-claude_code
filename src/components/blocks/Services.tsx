const services = [
  {
    icon: './assets/icons/weather-icon.svg',
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
    active: false,
  },
  {
    icon: './assets/icons/flights-icon.svg',
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    active: true,
  },
  {
    icon: './assets/icons/events-icon.svg',
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    active: false,
  },
  {
    icon: './assets/icons/customization-icon.svg',
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers',
    active: false,
  },
];

export default function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative plus signs */}
      <div className="absolute top-20 right-20 grid grid-cols-5 gap-8 opacity-50">
        {Array(15).fill(0).map((_, i) => (
          <span key={i} className={`text-2xl ${i === 10 ? 'text-[#6246E5]' : i === 0 ? 'text-[#FF7152]' : 'text-gray-300'}`}>+</span>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#5E6282] text-lg font-semibold uppercase mb-2">CATEGORY</p>
          <h2 className="font-[Volkhov] text-[50px] font-bold text-[#14183E] capitalize">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center p-8 rounded-[36px] transition-all duration-300 hover:shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64px_47px_rgba(0,0,0,0.015),0_20px_13px_rgba(0,0,0,0.01)] ${
                service.active
                  ? 'bg-white shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64px_47px_rgba(0,0,0,0.015),0_20px_13px_rgba(0,0,0,0.01)]'
                  : 'bg-transparent'
              }`}
            >
              {/* Active indicator */}
              {service.active && (
                <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-[#DF6951] rounded-tl-[30px] rounded-br-[10px] -z-10" />
              )}

              {/* Icon */}
              <div className="w-[100px] h-[100px] mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#1E1D4C] text-xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#5E6282] text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
