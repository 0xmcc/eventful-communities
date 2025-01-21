import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

interface EventInfoWindowProps {
  event: {
    name: string;
    image?: string;
    location: {
      lat: number;
      lng: number;
    };
  };
  onViewDetails: () => void;
}

export const EventInfoWindow = ({ event, onViewDetails }: EventInfoWindowProps) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement>(null);
  
  // Ensure location values are numbers and add slight offset for better positioning
  const position = {
    lat: Number(event.location.lat) + 0.007,
    lng: Number(event.location.lng)
  };

  useEffect(() => {
    if (markerRef.current) {
      // Add native click listener for better cross-platform compatibility
      markerRef.current.addListener('click', (e: Event) => {
        e.stopPropagation();
      });
    }
  }, []);

  const handleViewDetails = (e: React.MouseEvent) => {
    console.log('Viewing details for event:', event.name);
    e.preventDefault();
    e.stopPropagation();
    onViewDetails();
  };

  return (
    <AdvancedMarker
      ref={markerRef}
      position={position}
      clickable={true}
      draggable={false}
    >
      <div 
        className="relative -translate-y-4 map-info-window-bg-background pointer-events-auto z-50 event-marker-bg-background"
        role="dialog"
        aria-label={`Details for ${event.name}`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        style={{ touchAction: 'auto' }}
      >
        <div 
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 event-marker-bg-background"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden w-[300px] event-marker-bg-background"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            {event.image && (
              <img 
                src={event.image} 
                alt={event.name}
                className="w-full h-[150px] object-cover"
              />
            )}
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-lg">{event.name}</h3>
              <div className="relative z-50">
                <Button 
                  className="w-full relative z-50 event-marker-button" 
                  size="sm"
                  onClick={handleViewDetails}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    handleViewDetails(e as any);
                  }}
                  type="button"
                  style={{ 
                    cursor: 'pointer',
                    touchAction: 'manipulation'
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
          <div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </AdvancedMarker>
  );
};