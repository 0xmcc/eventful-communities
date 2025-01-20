import { Link } from 'react-router-dom';

interface VentlyLogoProps {
  className?: string;
}

const VentlyLogo = ({ className = "w-8 h-8" }: VentlyLogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <svg 
        className={className} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 20C15 40 30 80 50 90C70 80 85 40 80 20C75 40 60 70 50 80C40 70 25 40 20 20Z"
          fill="url(#vently-gradient)"
        />
        <defs>
          <linearGradient
            id="vently-gradient"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FF1F8F" />
            <stop offset="100%" stopColor="#A32FFF" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
};

export default VentlyLogo; 