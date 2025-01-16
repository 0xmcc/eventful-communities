import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Onboarding = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
        return;
      }
      setUser(user);
    };
    checkUser();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .insert({
          user_id: user.id,
          username: user.email,
          full_name: fullName,
          avatar_url: avatarUrl,
        });

      if (error) throw error;

      toast.success("Profile created successfully!");
      navigate("/events");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-lg mx-auto pt-8">
      <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Profile Picture</label>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>
                {user?.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Input
              type="url"
              placeholder="Enter image URL"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              className="flex-1"
            />
          </div>
        </div>
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
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Saving..." : "Complete Profile"}
        </Button>
      </form>
    </div>
  );
};

export default Onboarding;