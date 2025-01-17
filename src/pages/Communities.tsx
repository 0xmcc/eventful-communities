import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import CommunityCard from "@/components/communities/CommunityCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Communities = () => {
  const [followedCommunities, setFollowedCommunities] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  // Add query to fetch communities
  const { data: communities, isLoading } = useQuery({
    queryKey: ["communities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("communities")
        .select(`
          *,
          creator:creator_id (
            id,
            username,
            full_name,
            avatar_url
          )
        `)
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Failed to load communities");
        throw error;
      }

      return data;
    },
  });

  const handleFollowToggle = (communityId: string) => {
    setFollowedCommunities((prev) => {
      if (prev.includes(communityId)) {
        toast.success("Community unfollowed");
        return prev.filter((id) => id !== communityId);
      } else {
        toast.success("Community followed");
        return [...prev, communityId];
      }
    });
  };

  const displayedCommunities =
    activeTab === "following"
      ? (communities || []).filter((community) =>
          followedCommunities.includes(community.id)
        )
      : communities || [];

  return (
    <Layout>
      <div className="container py-6 space-y-6 communities-container-bg-background">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold communities-text-color">Communities</h1>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all" className="communities-tab-button">All Communities</TabsTrigger>
            <TabsTrigger value="following" className="communities-tab-button">Following</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCommunities.map((community) => (
                  <CommunityCard
                    key={community.id}
                    id={community.id}
                    name={community.name}
                    bio={community.bio}
                    imageUrl={community.image_url}
                    creator={community.creator}
                    isFollowing={followedCommunities.includes(community.id)}
                    onFollowToggle={handleFollowToggle}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="following" className="mt-6">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCommunities.length === 0 ? (
                  <p className="text-muted-foreground col-span-full text-center py-8">
                    You haven't followed any communities yet.
                  </p>
                ) : (
                  displayedCommunities.map((community) => (
                    <CommunityCard
                      key={community.id}
                      id={community.id}
                      name={community.name}
                      bio={community.bio}
                      imageUrl={community.image_url}
                      creator={community.creator}
                      isFollowing={followedCommunities.includes(community.id)}
                      onFollowToggle={handleFollowToggle}
                    />
                  ))
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Communities;