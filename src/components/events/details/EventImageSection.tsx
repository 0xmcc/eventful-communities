interface EventImageSectionProps {
  imageUrl: string;
  eventName: string;
}

export const EventImageSection = ({ imageUrl, eventName }: EventImageSectionProps) => {
  return (
    <div className="lg:flex-1">
      <img 
        src={imageUrl} 
        alt={eventName}
        className="w-full aspect-[3/2] object-cover rounded-lg"
      />
    </div>
  );
}; 