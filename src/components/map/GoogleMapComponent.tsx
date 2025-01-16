import React, { useEffect } from 'react';
import { 
  APIProvider, 
  Map
} from '@vis.gl/react-google-maps';
import { Tables } from "@/integrations/supabase/types";
import CustomMarker from './CustomMarker';

interface GoogleMapComponentProps {
  events: Tables<"events">[];
}

const GoogleMapComponent = ({ events }: GoogleMapComponentProps) => {
  useEffect(() => {
    console.log("GoogleMap events:", events);
  }, [events]);

  // San Francisco coordinates
  const defaultCenter = { lat: 37.7749, lng: -122.4194 };
  
  const center = events.length > 0
    ? { lat: events[0].latitude, lng: events[0].longitude }
    : defaultCenter;

  return (
    <div className="relative w-full h-full">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
        <Map
          defaultZoom={13}
          defaultCenter={defaultCenter}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
          className="w-full h-full"
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {events.map((event) => (
            <CustomMarker
              key={`marker-${event.id}`}
              position={{ lat: event.latitude, lng: event.longitude }}
              title={event.name}
              imageUrl={event.cover_image_url}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMapComponent;