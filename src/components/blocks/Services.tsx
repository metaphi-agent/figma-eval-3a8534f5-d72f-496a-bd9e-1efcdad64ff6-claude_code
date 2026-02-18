const services = [
  {
    icon: './assets/icons/weather-icon.svg',
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    icon: './assets/icons/flights-icon.svg',
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    featured: true,
  },
  {
    icon: './assets/icons/events-icon.svg',
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
  },
  {
    icon: './assets/icons/customization-icon.svg',
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers',
  },
];

export default function Services() {
  return (
    <section className="w-full px-6 lg:px-[186px] py-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wide mb-2">
            CATEGORY
          </p>
          <h2 className="font-heading text-[#14183E] text-4xl lg:text-[50px] font-bold">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative text-center p-8 rounded-[36px] transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 ${
                service.featured 
                  ? 'bg-white shadow-[var(--shadow-card)]' 
                  : 'hover:bg-white'
              }`}
            >
              {/* Decorative corner */}
              {service.featured && (
                <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-[#DF6951] rounded-br-[30px] rounded-tl-[10px] -z-10" />
              )}
              
              <div className="mb-6 flex justify-center">
                <img 
                  src={service.icon} 
                  alt="" 
                  className="w-auto h-[78px] object-contain"
                  aria-hidden="true"
                />
              </div>
              
              <h3 className="font-card font-semibold text-xl text-[#1E1D4C] mb-4">
                {service.title}
              </h3>
              
              <p className="text-[#5E6282] text-base leading-[1.625]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
