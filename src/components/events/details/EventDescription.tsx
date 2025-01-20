import ReactMarkdown from 'react-markdown';

interface EventDescriptionProps {
  description: string;
}

export const EventDescription = ({ description }: EventDescriptionProps) => {
  return (
    <div className="max-w-3xl event-detail-description-bg-background">
      <h2 className="text-xl font-semibold mb-4 event-detail-primary-text">About this Event</h2>
      <div className="prose prose-sm dark:prose-invert max-w-none event-detail-primary-text">
        <ReactMarkdown>
          {description || ''}
        </ReactMarkdown>
      </div>
    </div>
  );
}; 