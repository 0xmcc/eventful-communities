import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CommunityCard from "@/components/communities/CommunityCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Dummy data
const DUMMY_COMMUNITIES = [
  {
    id: "1",
    name: "Tech Enthusiasts",
    bio: "A community for technology lovers and innovators. Join us to discuss the latest tech trends and share your knowledge!",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    followersCount: 1234,
  },
  {
    id: "2",
    name: "Creative Arts Hub",
    bio: "Connect with fellow artists, share your work, and get inspired by amazing creativity from around the world.",
    imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    followersCount: 856,
  },
  {
    id: "3",
    name: "Business Network",
    bio: "A professional network for entrepreneurs and business leaders to share insights and opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    followersCount: 2341,
  },
  {
    id: "4",
    name: "Education Forum",
    bio: "Dedicated to lifelong learning and educational resources sharing. Join educators and students alike!",
    imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    followersCount: 567,
  },
];

const Communities = () => {
  const [followedCommunities, setFollowedCommunities] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("all");

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
      ? DUMMY_COMMUNITIES.filter((community) =>
          followedCommunities.includes(community.id)
        )
      : DUMMY_COMMUNITIES;

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCommunities.map((community) => (
                <CommunityCard
                  key={community.id}
                  {...community}
                  isFollowing={followedCommunities.includes(community.id)}
                  onFollowToggle={handleFollowToggle}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="following" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCommunities.length === 0 ? (
                <p className="text-muted-foreground col-span-full text-center py-8">
                  You haven't followed any communities yet.
                </p>
              ) : (
                displayedCommunities.map((community) => (
                  <CommunityCard
                    key={community.id}
                    {...community}
                    isFollowing={followedCommunities.includes(community.id)}
                    onFollowToggle={handleFollowToggle}
                  />
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Communities;