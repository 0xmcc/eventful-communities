import { AdvancedMarker, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

interface CustomMarkerProps {
  position: google.maps.LatLngLiteral;
  title?: string;
  imageUrl?: string;
}

const CustomMarker = ({ position, title, imageUrl }: CustomMarkerProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!marker) return;

    marker.addListener('mouseover', () => setIsHovered(true));
    marker.addListener('mouseout', () => setIsHovered(false));
  }, [marker]);

  return (
    <AdvancedMarker
      ref={markerRef}
      position={position}
      title={title}
    >
      <div className="relative group">
        <div 
          className={`
            w-12 h-12 rounded-full bg-white shadow-lg 
            transform transition-transform duration-200
            ${isHovered ? 'scale-110' : 'scale-100'}
            flex items-center justify-center overflow-hidden
            border-2 border-white
          `}
        >
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full bg-primary/20 rounded-full" />
          )}
        </div>
        <div 
          className={`
            absolute -bottom-2 left-1/2 transform -translate-x-1/2
            w-4 h-4 bg-white rotate-45
            shadow-lg
          `}
        />
        {isHovered && title && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <div className="bg-white px-2 py-1 rounded shadow-lg text-sm">
              {title}
            </div>
          </div>
        )}
      </div>
    </AdvancedMarker>
  );
};

export default CustomMarker;