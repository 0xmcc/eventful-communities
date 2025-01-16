import Layout from "@/components/layout/Layout";
import GoogleMapComponent from "@/components/map/GoogleMapComponent";
import { Database } from "@/integrations/supabase/types";
import { useEffect } from "react";

type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];

const Map = () => {
  useEffect(() => {
    console.log("Map component mounted");
  }, []);
  // Dummy data for development
  const dummyEvents: Tables<"events">[] = [
    {
      id: "1",
      name: "Tech Conference 2024",
      description: "Join us for the biggest tech conference of the year!",
      address: "123 Tech Street, San Francisco, CA",
      start_time: new Date().toISOString(),
      duration: "02:00:00",
      category: "Technology",
      is_public: true,
      creator_id: "1",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      cover_image_url: "https://source.unsplash.com/random/800x600?technology",
      latitude: 37.7749,
      longitude: -122.4194,
      community_id: null,
    },
    {
      id: "2",
      name: "Summer Music Festival",
      description: "A day full of amazing live performances!",
      address: "456 Music Avenue, Los Angeles, CA",
      start_time: new Date(Date.now() + 86400000).toISOString(),
      duration: "08:00:00",
      category: "Music",
      is_public: true,
      creator_id: "2",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      cover_image_url: "https://source.unsplash.com/random/800x600?concert",
      latitude: 34.0522,
      longitude: -118.2437,
      community_id: null,
    },
    {
      id: "3",
      name: "Art Exhibition",
      description: "Featuring works from local and international artists",
      address: "789 Gallery Road, New York, NY",
      start_time: new Date(Date.now() + 172800000).toISOString(),
      duration: "04:00:00",
      category: "Arts",
      is_public: true,
      creator_id: "3",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      cover_image_url: "https://source.unsplash.com/random/800x600?art",
      latitude: 40.7128,
      longitude: -74.0060,
      community_id: null,
    },
  ];

  console.log("Map rendering with events:", dummyEvents.length);

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <GoogleMapComponent events={dummyEvents} />
      </div>
    </Layout>
  );
};

export default Map;