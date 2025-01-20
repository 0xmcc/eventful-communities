import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { EventHeader } from '@/components/events/details/EventHeader';
import { EventImageSection } from '@/components/events/details/EventImageSection';
import { EventBasicDetails } from '@/components/events/details/EventBasicDetails';
import { EventTimeLocation } from '@/components/events/details/EventTimeLocation';
import { EventAttendance } from '@/components/events/details/EventAttendance';
import { EventDescription } from '@/components/events/details/EventDescription';
import Layout from "@/components/layout/Layout";

const EventDetailPage = () => {
  const { id } = useParams();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  
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

  const handlePurchase = async () => {
    setIsPurchasing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsPurchasing(false);
    setIsPurchased(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;

  return (
    <Layout>
    <div className="event-detail-bg-background">

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <EventImageSection 
            imageUrl={event.cover_image_url} 
            eventName={event.name} 
          />

          <div className="lg:flex-1 space-y-6">
            <EventBasicDetails 
              category={event.category}
              isPublic={event.is_public}
              startTime={event.start_time}
              name={event.name}
              creator={event.creator}
            />

            <EventTimeLocation 
              startTime={event.start_time}
              address={event.address}
            />

            <EventAttendance 
              isPurchasing={isPurchasing}
              isPurchased={isPurchased}
              onPurchase={handlePurchase}
            />
          </div>
        </div>

        <EventDescription description={event.description} />
      </div>
    </div>
    </Layout>
  );
};

export default EventDetailPage; 
