import Layout from "@/components/layout/Layout";
import { EventForm } from "@/components/events/EventForm";
import { useProfile } from "@/hooks/useProfile";
import { useEventSubmission } from "@/hooks/useEventSubmission";

const CreateEvent = () => {
  const { profile, isLoading } = useProfile();
  const { handleSubmit, isSubmitting } = useEventSubmission(profile);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          Loading...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <EventForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </Layout>
  );
};

export default CreateEvent;