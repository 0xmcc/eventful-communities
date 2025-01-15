import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Tables } from "@/integrations/supabase/types";

interface MapComponentProps {
  events: Tables<"events">[];
}

const MapComponent = ({ events }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHRxOXJ3ZGUwMXFrMmlvNjRxbmxhNHZsIn0.a9qz8ON6DwQoVJGg-jbZaQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5795, 39.8283], // Center of USA
      zoom: 3
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    return () => {
      markers.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  // Add markers when events change
  useEffect(() => {
    if (!map.current) return;

    // Remove existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Add new markers
    events.forEach(event => {
      if (event.latitude && event.longitude) {
        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2">
            <h3 class="font-bold">${event.name}</h3>
            <p class="text-sm">${event.address}</p>
            <p class="text-sm">${new Date(event.start_time).toLocaleDateString()}</p>
          </div>`
        );

        // Create marker
        const marker = new mapboxgl.Marker()
          .setLngLat([event.longitude, event.latitude])
          .setPopup(popup)
          .addTo(map.current!);

        markers.current.push(marker);
      }
    });
  }, [events]);

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};

export default MapComponent;