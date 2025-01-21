import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

interface EventMarkerPinProps {
  event: {
    name: string;
    image?: string;
    location: {
      lat: number;
      lng: number;
    };
  };
  isSelected: boolean;
  onClick: () => void;
}

export const EventMarkerPin = ({ event, isSelected, onClick }: EventMarkerPinProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    if (!marker) return;

    const listeners = [
      marker.addListener('click', (e: google.maps.MapMouseEvent) => {
        console.log('click');
        e.stop();
        onClick();
      }),
      marker.addListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      })
    ];

    return () => listeners.forEach(listener => 
      google.maps.event.removeListener(listener)
    );
  }, [marker, onClick]);

  return (
    <AdvancedMarker
      ref={markerRef}
      position={event.location}
      title={event.name}
      role="button"
      tabIndex={0}
    >
      <div 
        className={`
          w-12 h-12 rounded-full 
          transform transition-all duration-200 ease-in-out
          ${isSelected ? 'scale-110 shadow-lg' : 'scale-100 shadow-md'}
          overflow-hidden border-2 border-white
        `}
        aria-label={`Event marker for ${event.name}`}
      >
        {event.image ? (
          <img 
            src={event.image} 
            alt={event.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-primary/20" />
        )}
      </div>
    </AdvancedMarker>
  );
}; 