import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export const EventHeader = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <Link 
        to="/" 
        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Events
      </Link>
    </div>
  );
}; 