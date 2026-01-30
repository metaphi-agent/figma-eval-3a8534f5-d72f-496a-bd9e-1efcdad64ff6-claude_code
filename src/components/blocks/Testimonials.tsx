import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
    name: 'Mike taylor',
    location: 'Lahore, Pakistan',
    avatar: './assets/images/testimonial-avatar.png',
  },
  {
    id: 2,
    quote: '"The service was exceptional! Every detail of our trip was perfectly planned. I would highly recommend Jadoo to anyone looking for a hassle-free travel experience."',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: './assets/images/testimonial-avatar.png',
  },
  {
    id: 3,
    quote: '"Amazing experience from start to finish. The team went above and beyond to make our vacation memorable. Can\'t wait to book our next trip!"',
    name: 'Chris Thomas',
    location: 'London, UK',
    avatar: './assets/images/testimonial-avatar.png',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Content - Section Header */}
          <div className="flex-none lg:w-[400px]">
            <p className="text-[#5E6282] text-lg font-semibold uppercase mb-2">
              Testimonials
            </p>
            <h2 className="font-[Volkhov] text-[50px] font-bold text-[#14183E] leading-[1.3]">
              What People Say
              <br />
              About Us.
            </h2>

            {/* Pagination Dots */}
            <div className="flex items-center gap-4 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#39425D]' : 'bg-[#E5E5E5]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Testimonial Cards */}
          <div className="flex-1 relative">
            {/* Main Testimonial Card */}
            <div className="relative">
              {/* Avatar */}
              <div className="absolute -left-8 -top-6 z-10">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-[68px] h-[68px] rounded-full object-cover"
                />
              </div>

              {/* Card */}
              <div className="bg-white rounded-[10px] p-8 pl-16 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64px_47px_rgba(0,0,0,0.015),0_20px_13px_rgba(0,0,0,0.01)]">
                <p className="text-[#5E6282] text-base leading-[2] mb-8">
                  {testimonials[currentIndex].quote}
                </p>

                <h4 className="text-[#5E6282] text-lg font-semibold mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#5E6282] text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L1 7L7 13" stroke="#3E4958" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 7L7 13" stroke="#3E4958" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
