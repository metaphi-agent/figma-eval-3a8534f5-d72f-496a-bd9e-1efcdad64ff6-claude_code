const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Mobile', href: '#mobile' },
    ],
  },
  contact: {
    title: 'Contact',
    links: [
      { label: 'Help/FAQ', href: '#help' },
      { label: 'Press', href: '#press' },
      { label: 'Affiliates', href: '#affiliates' },
    ],
  },
  more: {
    title: 'More',
    links: [
      { label: 'Airlinefees', href: '#airlinefees' },
      { label: 'Airline', href: '#airline' },
      { label: 'Low fare tips', href: '#lowfaretips' },
    ],
  },
};

const socialLinks = [
  {
    name: 'Facebook',
    href: '#facebook',
    icon: (
      <svg width="6" height="13" viewBox="0 0 6 13" fill="none">
        <path
          d="M5.07143 4.5H3.5V3.25C3.5 2.83579 3.83579 2.5 4.25 2.5H5V0.5H3.5C2.11929 0.5 1 1.61929 1 3V4.5H0V6.5H1V12.5H3.5V6.5H5L5.07143 4.5Z"
          fill="#080809"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5Z"
          stroke="#080809"
          strokeWidth="1.5"
        />
        <path
          d="M1 5C1 2.79086 2.79086 1 5 1H11C13.2091 1 15 2.79086 15 5V11C15 13.2091 13.2091 15 11 15H5C2.79086 15 1 13.2091 1 11V5Z"
          stroke="#080809"
          strokeWidth="1.5"
        />
        <circle cx="11.5" cy="4.5" r="1" fill="#080809" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#twitter',
    icon: (
      <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
        <path
          d="M15 1.5C14.3 1.9 13.5 2.1 12.7 2.2C13.5 1.7 14.1 0.9 14.4 0C13.6 0.5 12.7 0.8 11.8 1C11 0.2 9.9 -0.2 8.8 0.1C7.3 0.5 6.2 1.9 6.2 3.5C6.2 3.8 6.2 4.1 6.3 4.4C3.8 4.2 1.5 3 0 1C-0.3 1.8 -0.2 2.7 0.3 3.4C0.7 4 1.2 4.5 1.9 4.8C1.3 4.8 0.8 4.6 0.3 4.4C0.3 5.9 1.3 7.2 2.7 7.5C2.2 7.6 1.7 7.7 1.2 7.6C1.6 8.9 2.8 9.8 4.2 9.8C3.1 10.7 1.6 11.2 0 11C1.5 11.9 3.2 12.5 5 12.5C10.5 12.5 13.6 8 13.6 4.1C13.6 4 13.6 3.8 13.6 3.7C14.4 3.1 15 2.4 15 1.5Z"
          fill="#080809"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute bottom-0 right-0 w-[478px] h-[496px] bg-[#D5AEE4] opacity-30 blur-[150px] -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="font-[Poppins] text-[44px] font-medium text-[#181E4B]">
                Jadoo.
              </span>
            </a>
            <p className="text-[#5E6282] text-[13px] leading-[1.25] max-w-[207px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Footer Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-[#080809] text-[21px] font-bold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#5E6282] text-[18px] font-medium hover:text-[#DF6951] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Discover Apps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-[41px] h-[41px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-shadow"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Discover Apps */}
          <div className="flex items-center gap-2 text-[#5E6282] text-lg font-medium">
            Discover our app
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#5E6282] text-sm font-medium">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
}
