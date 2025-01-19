import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { Button } from '@/components/ui/button';

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

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onViewDetails();
  };

  return (
    <>
      {/* Info Window */}
      {isSelected && (
        <AdvancedMarker
          position={{
            lat: event.location.lat + 0.007, // Offset slightly north
            lng: event.location.lng
          }}
        >
          <div 
            className="relative -translate-y-4 map-info-window-bg-background" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2">
              <div 
                className="bg-white rounded-lg shadow-lg overflow-hidden w-[300px]"
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
                  className="p-3 space-y-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={handleViewDetails}
                    type="button"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              {/* Arrow pointer */}
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