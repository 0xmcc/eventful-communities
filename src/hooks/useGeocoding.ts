import { useState } from "react";

interface GeocodeResult {
  address: string;
  latitude: number;
  longitude: number;
}

interface UseGeocodingReturn {
  isLoading: boolean;
  error: string | null;
  geocodeAddress: (address: string) => Promise<GeocodeResult | null>;
  reverseGeocode: (lat: number, lng: number) => Promise<string | null>;
}

export function useGeocoding(): UseGeocodingReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const geocodeAddress = async (address: string): Promise<GeocodeResult | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const geocoder = new google.maps.Geocoder();
      
      const result = await new Promise<google.maps.GeocoderResult | null>((resolve, reject) => {
        geocoder.geocode({ address }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
            resolve(results[0]);
          } else {
            reject(new Error(`Geocoding failed: ${status}`));
          }
        });
      });

      if (!result) {
        throw new Error("No results found");
      }

      const { lat, lng } = result.geometry.location;
      
      return {
        address: result.formatted_address,
        latitude: lat(),
        longitude: lng(),
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Geocoding failed";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const reverseGeocode = async (lat: number, lng: number): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const geocoder = new google.maps.Geocoder();
      const latLng = { lat, lng };

      const result = await new Promise<google.maps.GeocoderResult | null>((resolve, reject) => {
        geocoder.geocode({ location: latLng }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
            resolve(results[0]);
          } else {
            reject(new Error(`Reverse geocoding failed: ${status}`));
          }
        });
      });

      if (!result) {
        throw new Error("No results found");
      }

      return result.formatted_address;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Reverse geocoding failed";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    geocodeAddress,
    reverseGeocode,
  };
} 