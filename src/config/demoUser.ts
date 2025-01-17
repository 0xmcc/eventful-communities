export const DEMO_USER = {
  id: "00000000-0000-4000-a000-000000000000",      // Valid UUID for profile
  user_id: "00000000-0000-4000-a000-000000000001", // Valid UUID for auth user
  username: "demouser",
  full_name: "Demo User",
  avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

// Simple hook that always returns demo user
export const useDemoAuth = () => ({
  userProfile: DEMO_USER,
  isLoading: false
}); 