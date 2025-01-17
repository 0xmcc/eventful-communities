import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useGeocoding } from "@/hooks/useGeocoding";
import { loadGoogleMapsApi } from "@/utils/loadGoogleMapsApi";

interface AddressInputProps {
  onAddressSelect: (address: string, lat: number, lng: number) => void;
}

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const AddressInput = ({ onAddressSelect }: AddressInputProps) => {
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { geocodeAddress, isLoading, error } = useGeocoding();
  const checkIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Load the Google Maps script if it's not already loaded
    if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    const checkGoogleMapsLoaded = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        setIsGoogleLoaded(true);
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current);
          checkIntervalRef.current = null;
        }
        return true;
      }
      return false;
    };

    // Only set up interval if Google isn't loaded yet
    if (!checkGoogleMapsLoaded()) {
      checkIntervalRef.current = window.setInterval(checkGoogleMapsLoaded, 500);
    }

    // Cleanup
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    };
  }, []); // Empty dependency array since we only want this to run once on mount

  useEffect(() => {
    if (!isGoogleLoaded || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ['address'],
        componentRestrictions: { country: 'US' },
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place?.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        onAddressSelect(place.formatted_address || "", lat, lng);
      }
    });
  }, [isGoogleLoaded, onAddressSelect]); 

  return (
    <div className="space-y-2">
      <Input
        ref={inputRef}
        type="text"
        placeholder={isGoogleLoaded ? "Enter location" : "Loading..."}
        className="w-full"
        disabled={!isGoogleLoaded || isLoading}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AddressInput;