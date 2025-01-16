import React, { useEffect } from 'react';
import { 
  APIProvider, 
  Map, 
  Marker
} from '@vis.gl/react-google-maps';
import { Tables } from "@/integrations/supabase/types";

interface GoogleMapComponentProps {
  events: Tables<"events">[];
}
// Zoom level reference:
// 1: World view
// 5: Landmass/continent
// 10: City
// 11: City with some detail
// 12: City districts
// 13: City streets visible
// 14: Street names clear
// 15: Buildings visible
// 16: Buildings clear
// 17: Street details
// 18: Buildings detailed
// 20: Maximum zoom
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
        //   options={{
        //     zoomControl: false,
        //     mapTypeControl: false,
        //     scaleControl: false,
        //     streetViewControl: false,
        //     rotateControl: false,
        //     fullscreenControl: false
        //   }}
        >
          {events.map((event) => (
            <Marker
              key={`marker-${event.id}`}
              position={{ lat: event.latitude, lng: event.longitude }}
              title={event.name}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMapComponent; 