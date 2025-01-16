import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useGeocoding } from "@/hooks/useGeocoding";
import { loadGoogleMapsApi } from "@/utils/loadGoogleMapsApi";

interface AddressInputProps {
  onAddressSelect: (address: string, lat: number, lng: number) => void;
}

export const AddressInput = ({ onAddressSelect }: AddressInputProps) => {
  const [address, setAddress] = useState("");
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const { geocodeAddress, isLoading, error } = useGeocoding();

  useEffect(() => {
    loadGoogleMapsApi()
      .then(() => setIsApiLoaded(true))
      .catch(console.error);
  }, []);

  const handleAddressSubmit = async () => {
    if (!address) return;

    const result = await geocodeAddress(address);
    if (result) {
      onAddressSelect(result.address, result.latitude, result.longitude);
    }
  };

  if (!isApiLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
    <div className="space-y-2">
      <Input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
        onBlur={handleAddressSubmit}
        disabled={isLoading}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}; 