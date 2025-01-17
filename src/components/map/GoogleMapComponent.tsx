import React, { useEffect, useState } from 'react';
import { 
  APIProvider, 
  Map
} from '@vis.gl/react-google-maps';
import { Tables } from "@/integrations/supabase/types";
import { EventMarker } from './EventMarker';

interface GoogleMapComponentProps {
  events: Tables<"events">[];
}

const GoogleMapComponent = ({ events }: GoogleMapComponentProps) => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const defaultCenter = { lat: 37.7749, lng: -122.4194 };

  const validEvents = events.filter(event => 
    typeof event.latitude === 'number' && 
    typeof event.longitude === 'number' &&
    !isNaN(event.latitude) && 
    !isNaN(event.longitude)
  );

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
          onClick={() => setSelectedEventId(null)}
        >
          {validEvents.map((event) => (
            <EventMarker
              key={`marker-${event.id}`}
              event={{
                id: event.id,
                name: event.name,
                image: event.cover_image_url,
                location: { 
                  lat: event.latitude, 
                  lng: event.longitude 
                }
              }}
              isSelected={selectedEventId === event.id}
              onClick={() => setSelectedEventId(event.id)}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMapComponent;