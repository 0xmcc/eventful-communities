import { Calendar, MapPin } from 'lucide-react';

interface EventTimeLocationProps {
  startTime: string;
  address: string;
}

export const EventTimeLocation = ({ startTime, address }: EventTimeLocationProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="w-5 h-5" />
        <div>
          <div className="event-detail-secondary-text">{new Date(startTime).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</div>
          <div className="event-detail-secondary-text">{new Date(startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="w-5 h-5 flex-shrink-0 event-detail-secondary-text" />
        <span className="event-detail-secondary-text">{address}</span>
      </div>
    </div>
  );
}; 