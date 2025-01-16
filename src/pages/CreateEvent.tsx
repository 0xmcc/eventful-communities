import Layout from "@/components/layout/Layout";
import { EventForm } from "@/components/events/EventForm";
import { useProfile } from "@/hooks/useProfile";
import { useEventSubmission } from "@/hooks/useEventSubmission";
import { useAuthCheck } from "@/hooks/useAuthCheck";

const CreateEvent = () => {
  const { userProfile, isLoading } = useAuthCheck();
  const { handleSubmit, isSubmitting } = useEventSubmission(userProfile);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!userProfile) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            Please sign in to create an event
          </div>
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