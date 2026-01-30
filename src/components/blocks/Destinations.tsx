const destinations = [
  {
    image: './assets/images/destination-rome.png',
    city: 'Rome, Italy',
    price: '$5,42k',
    duration: '10 Days Trip',
  },
  {
    image: './assets/images/destination-london.png',
    city: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
  },
  {
    image: './assets/images/destination-europe.png',
    city: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
  },
];

export default function Destinations() {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#5E6282] text-lg font-semibold mb-2">Top Selling</p>
          <h2 className="font-[Volkhov] text-[50px] font-bold text-[#14183E] capitalize">
            Top Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64px_47px_rgba(0,0,0,0.015),0_20px_13px_rgba(0,0,0,0.01)] hover:shadow-[0_100px_80px_rgba(0,0,0,0.04),0_64px_47px_rgba(0,0,0,0.03)] transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  loading="lazy"
                  className="w-full h-[314px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#5E6282] text-lg font-medium">
                    {destination.city}
                  </h3>
                  <span className="text-[#5E6282] text-lg font-medium">
                    {destination.price}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Navigation icon */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M14.25 7.5C14.25 12 9 16.5 9 16.5C9 16.5 3.75 12 3.75 7.5C3.75 5.77609 4.43526 4.12279 5.65381 2.90381C6.87235 1.68482 8.52609 1 10.25 1C11.9739 1 13.6272 1.68482 14.8457 2.90381C16.0647 4.12279 16.75 5.77609 16.75 7.5Z"
                      stroke="#5E6282"
                      strokeWidth="1.5"
                    />
                    <circle cx="9" cy="7.5" r="2.25" stroke="#5E6282" strokeWidth="1.5" />
                  </svg>
                  <span className="text-[#5E6282] text-base">
                    {destination.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative curved line */}
        <div className="absolute right-0 top-1/2 hidden lg:block">
          <svg width="96" height="252" viewBox="0 0 96 252" fill="none">
            <path
              d="M1 1C1 1 95 50 95 126C95 202 1 251 1 251"
              stroke="#5E6282"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
