import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';

const EventDetailPage = () => {
  const { id } = useParams();
  
  const { data: event, isLoading } = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          creator:creator_id (
            id,
            username,
            full_name,
            avatar_url
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;

  return (
    <div className="event-detail-container max-w-4xl mx-auto p-4">
      <div className="event-header space-y-4">
        <img 
          src={event.cover_image_url} 
          alt={event.name}
          className="event-image w-full h-[300px] object-cover rounded-lg"
        />
        
        <div className="event-info space-y-4">
          <div className="event-badges flex gap-2">
            <span className="event-type-badge px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
              {event.category || 'Social'}
            </span>
            <span className="event-price-badge px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
              ${'20.00'}
            </span>
          </div>

          <h1 className="event-title text-3xl font-bold">{event.name}</h1>

          <div className="event-host flex items-center gap-2">
            <img 
              src={event.creator.avatar_url} 
              alt={event.creator.username}
              className="host-avatar w-10 h-10 rounded-full"
            />
            <div>
              <p className="host-label text-sm text-muted-foreground">Host</p>
              <p className="host-name font-medium">{event.creator.full_name}</p>
            </div>
          </div>

          <div className="event-metadata space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span>{new Date(event.start_time).toLocaleDateString()} at {new Date(event.start_time).toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>{event.address}</span>
            </div>
          </div>
        </div>

        <Button className="event-action w-full" size="lg">
          Purchase Tickets
        </Button>

        <div className="event-description mt-8">
          <h2 className="text-xl font-semibold mb-4">About this Event</h2>
          <p className="text-muted-foreground whitespace-pre-wrap">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage; 