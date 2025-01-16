import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { NameStepProps } from "@/types/onboarding";

export const NameStep = ({ fullName, setFullName, onNext }: NameStepProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <Input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <Button
        type="button"
        className="w-full"
        onClick={onNext}
      >
        Next
      </Button>
    </div>
  );
};