import { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Decorative plus signs */}
        <div className="absolute top-0 right-[10%] grid grid-cols-5 gap-8 opacity-50">
          {Array(25).fill(0).map((_, i) => (
            <span
              key={i}
              className={`text-2xl ${
                i === 7 ? 'text-[#6246E5]' : i === 20 ? 'text-[#FF7152]' : 'text-gray-300'
              }`}
            >
              +
            </span>
          ))}
        </div>

        {/* Subscribe Card */}
        <div className="relative bg-[#DFD7F9] bg-opacity-20 rounded-[20px] rounded-tr-[129px] py-16 px-8 lg:px-20">
          {/* Decorative circles */}
          <div className="absolute top-[-20px] right-[-20px] w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#747DEF] to-[#5E3BB7] flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="rotate-[-30deg]">
              <path
                d="M26 4L4 15L13 17L15 26L26 4Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Background wave decorations */}
          <div className="absolute bottom-0 left-0 opacity-10">
            <svg width="264" height="351" viewBox="0 0 264 351" fill="none">
              <path
                d="M-100 351C-100 351 100 251 100 176C100 101 -100 1 -100 1"
                stroke="#5E3BB7"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 opacity-10 rotate-180">
            <svg width="264" height="351" viewBox="0 0 264 351" fill="none">
              <path
                d="M-100 351C-100 351 100 251 100 176C100 101 -100 1 -100 1"
                stroke="#5E3BB7"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="text-center relative z-10">
            <h2 className="font-[Poppins] text-[28px] lg:text-[33px] font-semibold text-[#5E6282] leading-[1.64] mb-8">
              Subscribe to get information, latest news and other
              <br className="hidden lg:block" />
              interesting offers about Jadoo
            </h2>

            {submitted ? (
              <div className="text-[#5E3BB7] text-xl font-medium">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Email Input */}
                <div className="relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2">
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                      <path
                        d="M1.5 3L10.5 10L19.5 3"
                        stroke="#39425D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="1.5"
                        y="1"
                        width="18"
                        height="16"
                        rx="2"
                        stroke="#39425D"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full sm:w-[421px] h-[68px] pl-16 pr-6 bg-white rounded-[10px] text-[#39425D] placeholder-[#39425D] text-sm focus:outline-none focus:ring-2 focus:ring-[#5E3BB7]"
                    required
                  />
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-[180px] h-[68px] bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white font-semibold text-[17px] rounded-[10px] hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
