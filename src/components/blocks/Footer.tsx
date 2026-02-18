const footerLinks = {
  company: ['About', 'Careers', 'Mobile'],
  contact: ['Help/FAQ', 'Press', 'Affiliates'],
  more: ['Airline Fees', 'Airlines', 'Low Fare Tips'],
};

const socialLinks = [
  {
    name: 'Facebook',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.125V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z" fill="currentColor"/>
      </svg>
    ),
    bgColor: 'bg-white hover:bg-[#1877F2]',
  },
  {
    name: 'Instagram',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C7.284 0 6.944.012 5.877.06 4.813.11 4.086.278 3.45.525c-.658.256-1.216.598-1.772 1.154C1.123 2.234.78 2.792.525 3.45.278 4.086.11 4.812.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.05 1.065.218 1.791.465 2.428.256.658.598 1.216 1.154 1.772.556.555 1.114.898 1.772 1.153.637.247 1.363.415 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.05 1.791-.218 2.428-.465a4.918 4.918 0 001.772-1.153 4.918 4.918 0 001.153-1.772c.247-.637.415-1.363.465-2.428.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.05-1.065-.218-1.791-.465-2.427a4.918 4.918 0 00-1.153-1.772A4.918 4.918 0 0016.55.525C15.913.278 15.187.11 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.058.975.045 1.504.207 1.857.344.466.181.8.398 1.15.748.35.35.566.684.747 1.15.137.353.3.882.344 1.857.048 1.055.058 1.372.058 4.041 0 2.67-.01 2.987-.058 4.042-.045.975-.207 1.504-.344 1.857a3.1 3.1 0 01-.748 1.15c-.35.35-.683.566-1.15.747-.352.137-.881.3-1.856.344-1.055.048-1.372.058-4.042.058-2.67 0-2.986-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 01-1.15-.748 3.1 3.1 0 01-.747-1.15c-.137-.352-.3-.881-.344-1.856-.048-1.055-.058-1.372-.058-4.042 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.398-.8.748-1.15.35-.35.683-.566 1.15-.747.352-.137.881-.3 1.856-.344 1.055-.048 1.372-.058 4.041-.058z" fill="currentColor"/>
        <path d="M10 13.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.538-.203a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill="currentColor"/>
      </svg>
    ),
    bgColor: 'bg-white hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f]',
  },
  {
    name: 'Twitter',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" fill="currentColor"/>
      </svg>
    ),
    bgColor: 'bg-white hover:bg-[#1DA1F2]',
  },
];

export default function Footer() {
  return (
    <footer className="w-full px-6 lg:px-[186px] py-16 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[478px] h-[496px] bg-[#D5AEE4] rounded-full blur-[150px] opacity-20 -z-10" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-medium text-[44px] text-[#181E4B] mb-4">
              Jadoo.
            </h3>
            <p className="text-[#5E6282] text-[13px] leading-relaxed max-w-[207px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#080809] font-bold text-[21px] mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5E6282] hover:text-[#F1A501] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-[#080809] font-bold text-[21px] mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5E6282] hover:text-[#F1A501] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-[#080809] font-bold text-[21px] mb-6">
              More
            </h4>
            <ul className="space-y-3">
              {footerLinks.more.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5E6282] hover:text-[#F1A501] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & App Links */}
          <div>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-[45px] h-[45px] rounded-full ${social.bgColor} shadow-md flex items-center justify-center text-[#080809] hover:text-white transition-all`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-[#5E6282] text-sm mb-3">
              Discover our app
            </p>
            <div className="flex gap-2">
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png" 
                  alt="Download on App Store" 
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-[#5E6282] text-sm">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
}
