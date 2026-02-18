interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-[10px] transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#F1A501] text-white hover:bg-[#d99401] shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border border-[#212832] text-[#212832] hover:bg-gray-50',
    outline: 'bg-white/10 text-white border border-white/30 hover:bg-white/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
