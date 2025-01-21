import { EventInfoWindow } from './EventInfoWindow';
import { EventMarkerPin } from './EventMarkerPin';


export interface MapEvent {
    id: string;
    name: string;
    image?: string;
    location: {
      lat: number;
      lng: number;
    };
  }
  
  export interface BaseEventMarkerProps {
    event: MapEvent;
    isSelected: boolean;
  }
interface EventMarkerProps {
  event: MapEvent;
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
  return (
    <>
      {isSelected && (
        <EventInfoWindow 
          event={event} 
          onViewDetails={onViewDetails} 
        />
      )}
      <EventMarkerPin
        event={event}
        isSelected={isSelected}
        onClick={onClick}
      />
    </>
  );
}; 