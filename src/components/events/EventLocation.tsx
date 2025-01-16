import { AddressInput } from "@/components/location/AddressInput";
import { Label } from "@/components/ui/label";

interface EventLocationProps {
  address: string;
  onAddressSelect: (address: string, lat: number, lng: number) => void;
}

export const EventLocation = ({ address, onAddressSelect }: EventLocationProps) => {
  return (
    <div className="space-y-2">
      <Label>Location</Label>
      <AddressInput onAddressSelect={onAddressSelect} />
    </div>
  );
};