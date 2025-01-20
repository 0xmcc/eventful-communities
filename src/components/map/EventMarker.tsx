import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface EventMarkerProps {
  event: {
    id: string;
    name: string;
    image?: string;
    location: {
      lat: number;
      lng: number;
    };
  };
  isSelected: boolean;
  onClick: () => void;
  onViewDetails: () => void;
}

export const EventMarker = ({ 
  event, 
  isSelected, 
  onClick, 
  onViewDetails 
}: EventMarkerProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    if (!marker) return;
    const listener = marker.addListener('click', (e: google.maps.MapMouseEvent) => {
      e.stop(); // Prevent event from bubbling to map
      onClick();
    });
    return () => google.maps.event.removeListener(listener);
  }, [marker, onClick]);

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onViewDetails(); // Just call the prop, don't navigate
  };

  return (
    <>
      {/* Info Window */}
      {isSelected && (
        <AdvancedMarker
          position={{
            lat: event.location.lat + 0.007,
            lng: event.location.lng
          }}
        >
          <div 
            className="relative -translate-y-4 map-info-window-bg-background pointer-events-auto z-50" 
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: 'default' }}
          >
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2">
              <div 
                className="bg-white rounded-lg shadow-lg overflow-hidden w-[300px] pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {event.image && (
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-[150px] object-cover"
                  />
                )}
                <div 
                  className="p-3 space-y-2 pointer-events-auto"
                >
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <div className="relative z-50 pointer-events-auto">
                    <Button 
                      className="w-full pointer-events-auto relative z-50" 
                      size="sm"
                      onClick={handleViewDetails}
                      type="button"
                      style={{ cursor: 'pointer' }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg" />
            </div>
          </div>
        </AdvancedMarker>
      )}

      {/* Marker */}
      <AdvancedMarker
        ref={markerRef}
        position={event.location}
        onClick={onClick}
      >
        <div className={`
          w-12 h-12 rounded-full 
          transform transition-all duration-200 ease-in-out
          ${isSelected ? 'scale-110 shadow-lg' : 'scale-100 shadow-md'}
          overflow-hidden border-2 border-white
        `}>
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
    </>
  );
}; 