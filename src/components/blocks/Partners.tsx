const partners = [
  { image: './assets/images/logo-axon.png', name: 'Axon' },
  { image: './assets/images/logo-jetstar.png', name: 'Jetstar' },
  { image: './assets/images/logo-expedia.png', name: 'Expedia' },
  { image: './assets/images/logo-qantas.png', name: 'Qantas' },
  { image: './assets/images/logo-alitalia.png', name: 'Alitalia' },
];

export default function Partners() {
  return (
    <section className="w-full px-6 lg:px-[186px] py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-16 grayscale opacity-70">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.image}
              alt={partner.name}
              loading="lazy"
              className="h-8 lg:h-10 w-auto object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
