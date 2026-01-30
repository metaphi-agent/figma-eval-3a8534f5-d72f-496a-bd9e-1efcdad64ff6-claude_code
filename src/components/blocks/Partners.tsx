const partners = [
  {
    name: 'Axon',
    logo: './assets/images/partner-axon.png',
  },
  {
    name: 'Jetstar',
    logo: './assets/images/partner-jetstar.png',
  },
  {
    name: 'Expedia',
    logo: './assets/images/partner-expedia.png',
    highlight: true,
  },
  {
    name: 'Qantas',
    logo: './assets/images/partner-qantas.png',
  },
  {
    name: 'Alitalia',
    logo: './assets/images/partner-alitalia.png',
  },
];

export default function Partners() {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center transition-all duration-300 ${
                partner.highlight
                  ? 'bg-white p-6 rounded-[10px] shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64px_47px_rgba(0,0,0,0.015),0_20px_13px_rgba(0,0,0,0.01)]'
                  : 'grayscale hover:grayscale-0'
              }`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
