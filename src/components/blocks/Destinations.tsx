const destinations = [
  {
    image: './assets/images/destination-london.png',
    city: 'Rome, Italy',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    image: './assets/images/destination-europe.png',
    city: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
  },
  {
    image: './assets/images/destination-rome.png',
    city: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
  },
];

export default function Destinations() {
  return (
    <section className="w-full px-6 lg:px-[186px] py-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#5E6282] font-semibold text-lg mb-2">
            Top Selling
          </p>
          <h2 className="font-heading text-[#14183E] text-4xl lg:text-[50px] font-bold">
            Top Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  loading="lazy"
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#5E6282] text-lg font-medium">
                    {destination.city}
                  </h3>
                  <span className="text-[#5E6282] text-lg font-medium">
                    {destination.price}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[#5E6282]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M14.25 7.5C14.25 12.75 9 16.5 9 16.5C9 16.5 3.75 12.75 3.75 7.5C3.75 5.77609 4.43482 4.12279 5.65381 2.90381C6.87279 1.68482 8.52609 1 10.25 1C11.9739 1 13.6272 1.68482 14.8462 2.90381C16.0652 4.12279 16.75 5.77609 16.75 7.5Z" stroke="#5E6282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base">{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="hidden lg:block absolute right-32 mt-[-200px]">
          <svg width="96" height="252" viewBox="0 0 96 252" fill="none" className="text-[#5E6282] opacity-50">
            <path d="M1 1C1 1 96 83 96 126C96 169 1 251 1 251" stroke="currentColor" strokeDasharray="4 4"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
