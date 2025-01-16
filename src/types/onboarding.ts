export interface OnboardingStepProps {
  onNext?: () => void;
  onBack?: () => void;
  loading?: boolean;
}

export interface NameStepProps extends OnboardingStepProps {
  fullName: string;
  setFullName: (name: string) => void;
}

export interface PhotoStepProps extends OnboardingStepProps {
  user: any;
  selectedFile: File | null;
  previewUrl: string;
  onFileSelect: (file: File) => void;
}