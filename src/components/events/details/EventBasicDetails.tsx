import { User } from 'lucide-react';

interface Creator {
  avatar_url: string | null;
  username: string;
  full_name: string;
}

interface EventBasicDetailsProps {
  category: string;
  isPublic: boolean;
  startTime: string;
  name: string;
  creator: Creator;
}

export const EventBasicDetails = ({ 
  category, 
  isPublic, 
  startTime, 
  name, 
  creator 
}: EventBasicDetailsProps) => {
  const daysUntil = Math.ceil((new Date(startTime).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm event-type-badge">
          {category || 'Concert'}
        </span>
        {isPublic && (
          <span className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-sm event-type-badge">
            Free
          </span>
        )}
        <span className="ml-auto text-sm text-muted-foreground">
          in {daysUntil} days
        </span>
      </div>

      <h1 className="text-3xl font-bold event-detail-primary-text">{name}</h1>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          {creator.avatar_url ? (
            <img 
              src={creator.avatar_url} 
              alt={creator.username}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
        <div>
          <div className="font-medium event-detail-primary-text">{creator.full_name}</div>
          <div className="text-sm text-muted-foreground event-detail-secondary-text">Host</div>
        </div>
      </div>
    </div>
  );
}; 