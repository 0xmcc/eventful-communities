import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useGeocoding } from "@/hooks/useGeocoding";
import { loadGoogleMapsApi } from "@/utils/loadGoogleMapsApi";

interface AddressInputProps {
  onAddressSelect: (address: string, lat: number, lng: number) => void;
}

export const AddressInput = ({ onAddressSelect }: AddressInputProps) => {
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const { geocodeAddress, isLoading, error } = useGeocoding();

  useEffect(() => {
    loadGoogleMapsApi()
      .then(() => setIsApiLoaded(true))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (isApiLoaded && inputRef.current) {
      autocompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current,
        { types: ["address"] }
      );

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.geometry?.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          onAddressSelect(place.formatted_address || "", lat, lng);
        }
      });
    }
  }, [isApiLoaded, onAddressSelect]);

  if (!isApiLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
    <div className="space-y-2">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Enter location"
        className="w-full"
        disabled={isLoading}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};