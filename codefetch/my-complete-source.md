```
Project Structure:
├── README.md
├── bun.lockb
├── codefetch
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── og-image.png
│   └── placeholder.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── supabase
│   ├── config.toml
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

.cursorrules
```
1 | # Cursor Rules for Vently Project
2 | 
3 | ## Project Overview
4 | 
5 | *   **Project Name:** Vently
6 | 
7 | *   **Description:** Vently is a dynamic, mobile-friendly platform designed to centralize event promotion and engagement within communities. It features a user-friendly interface that allows users to discover events through a map, engage with communities, purchase tickets, and participate in discussions.
8 | 
9 | *   **Tech Stack:**
10 | 
11 |     *   Frontend: ReactJS
12 |     *   Styling: Tailwind CSS
13 |     *   Backend & Database: Supabase
14 |     *   Payment Integration: Stripe
15 |     *   Location Services: Google Maps API
16 | 
17 | *   **Key Features:**
18 | 
19 |     *   Interactive event map with clickable pins for event discovery.
20 |     *   Event and community management capabilities.
21 |     *   Secure ticket purchasing with payment gateway integration.
22 |     *   User roles for Regular Users, Event Organizers, and Community Admins.
23 | 
24 | ## Project Structure
25 | 
26 | *   **Root Directory:** Contains the main configuration files and documentation.
27 | 
28 | *   `/frontend/`: All frontend-related code.
29 | 
30 |     *   `/components/`:
31 | 
32 |         *   `MapView`: Displays events on a map.
33 |         *   `EventCard`: Presents event details.
34 |         *   `CommunityList`: Displays a list of communities.
35 |         *   Other UI components as necessary.
36 | 
37 |     *   `/assets/`:
38 | 
39 |         *   Event images and icons.
40 |         *   Community profile pictures.
41 | 
42 |     *   `/styles/`:
43 | 
44 |         *   Global styles utilizing Tailwind CSS.
45 | 
46 | *   `/backend/`: All backend-related code.
47 | 
48 |     *   `/controllers/`: Handles CRUD operations for events and community entities.
49 |     *   `/models/`: Schema definitions for Events, Tickets, Users, and Communities.
50 |     *   `/routes/`: API endpoints for frontend-backend communication.
51 | 
52 | *   `/config/`: Configuration files for environment variables and application settings.
53 | 
54 | *   `/tests/`: Unit and integration tests for frontend and backend modules.
55 | 
56 | ## Development Guidelines
57 | 
58 | *   **Coding Standards:**
59 | 
60 |     *   Follow the Airbnb React/JSX Style Guide for JavaScript and React components.
61 |     *   Consistent use of `eslint` for styling and error prevention.
62 |     *   Component files should be organized by feature or route for clarity.
63 | 
64 | *   **Component Organization:**
65 | 
66 |     *   Each component should be modular, maintaining a single responsibility principle.
67 |     *   Utilize context API or third-party state management tools where appropriate.
68 | 
69 | ## Cursor IDE Integration
70 | 
71 | *   **Setup Instructions:**
72 | 
73 |     *   Clone the repository locally.
74 |     *   Run `npm install` to set up dependencies.
75 |     *   Start the development environment with `npm start` for frontend and backend servers.
76 | 
77 | *   **Key Commands:**
78 | 
79 |     *   `npm run test` to run tests.
80 |     *   Use the built-in tools of Cursor AI for real-time code suggestions and modifications.
81 | 
82 | ## Additional Context
83 | 
84 | *   **User Roles:**
85 | 
86 |     *   Regular Users: Can browse events and communities, RSVP, and purchase tickets.
87 |     *   Event Organizers: Can create and manage events, access to event-related analytics (future feature).
88 |     *   Community Admins: Manage community settings and moderate content.
89 | 
90 | *   **Accessibility Considerations:**
91 | 
92 |     *   Use ARIA roles to enhance component accessibility.
93 |     *   Ensure color contrast meets WCAG standards for the synthe purple theme.
```

components.json
```
1 | {
2 |   "$schema": "https://ui.shadcn.com/schema.json",
3 |   "style": "default",
4 |   "rsc": false,
5 |   "tsx": true,
6 |   "tailwind": {
7 |     "config": "tailwind.config.ts",
8 |     "css": "src/index.css",
9 |     "baseColor": "slate",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "aliases": {
14 |     "components": "@/components",
15 |     "utils": "@/lib/utils",
16 |     "ui": "@/components/ui",
17 |     "lib": "@/lib",
18 |     "hooks": "@/hooks"
19 |   }
20 | }
```

eslint.config.js
```
1 | import js from "@eslint/js";
2 | import globals from "globals";
3 | import reactHooks from "eslint-plugin-react-hooks";
4 | import reactRefresh from "eslint-plugin-react-refresh";
5 | import tseslint from "typescript-eslint";
6 | 
7 | export default tseslint.config(
8 |   { ignores: ["dist"] },
9 |   {
10 |     extends: [js.configs.recommended, ...tseslint.configs.recommended],
11 |     files: ["**/*.{ts,tsx}"],
12 |     languageOptions: {
13 |       ecmaVersion: 2020,
14 |       globals: globals.browser,
15 |     },
16 |     plugins: {
17 |       "react-hooks": reactHooks,
18 |       "react-refresh": reactRefresh,
19 |     },
20 |     rules: {
21 |       ...reactHooks.configs.recommended.rules,
22 |       "react-refresh/only-export-components": [
23 |         "warn",
24 |         { allowConstantExport: true },
25 |       ],
26 |       "@typescript-eslint/no-unused-vars": "off",
27 |     },
28 |   }
29 | );
```

index.html
```
1 | <!DOCTYPE html>
2 | <html lang="en">
3 |   <head>
4 |     <meta charset="UTF-8" />
5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
6 |     <title>eventful-communities</title>
7 |     <meta name="description" content="Lovable Generated Project" />
8 |     <meta name="author" content="Lovable" />
9 |     <meta property="og:image" content="/og-image.png" />
10 |   </head>
11 | 
12 |   <body>
13 |     <div id="root"></div>
14 |     <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
15 |     <script type="module" src="/src/main.tsx"></script>
16 |   </body>
17 | </html>
```

package.json
```
1 | {
2 |   "name": "vite_react_shadcn_ts",
3 |   "private": true,
4 |   "version": "0.0.0",
5 |   "type": "module",
6 |   "scripts": {
7 |     "dev": "vite",
8 |     "build": "vite build",
9 |     "build:dev": "vite build --mode development",
10 |     "lint": "eslint .",
11 |     "preview": "vite preview"
12 |   },
13 |   "dependencies": {
14 |     "@googlemaps/markerclusterer": "^2.5.3",
15 |     "@hookform/resolvers": "^3.9.0",
16 |     "@radix-ui/react-accordion": "^1.2.0",
17 |     "@radix-ui/react-alert-dialog": "^1.1.1",
18 |     "@radix-ui/react-aspect-ratio": "^1.1.0",
19 |     "@radix-ui/react-avatar": "^1.1.0",
20 |     "@radix-ui/react-checkbox": "^1.1.1",
21 |     "@radix-ui/react-collapsible": "^1.1.0",
22 |     "@radix-ui/react-context-menu": "^2.2.1",
23 |     "@radix-ui/react-dialog": "^1.1.2",
24 |     "@radix-ui/react-dropdown-menu": "^2.1.1",
25 |     "@radix-ui/react-hover-card": "^1.1.1",
26 |     "@radix-ui/react-label": "^2.1.0",
27 |     "@radix-ui/react-menubar": "^1.1.1",
28 |     "@radix-ui/react-navigation-menu": "^1.2.0",
29 |     "@radix-ui/react-popover": "^1.1.1",
30 |     "@radix-ui/react-progress": "^1.1.0",
31 |     "@radix-ui/react-radio-group": "^1.2.0",
32 |     "@radix-ui/react-scroll-area": "^1.1.0",
33 |     "@radix-ui/react-select": "^2.1.1",
34 |     "@radix-ui/react-separator": "^1.1.0",
35 |     "@radix-ui/react-slider": "^1.2.0",
36 |     "@radix-ui/react-slot": "^1.1.0",
37 |     "@radix-ui/react-switch": "^1.1.0",
38 |     "@radix-ui/react-tabs": "^1.1.0",
39 |     "@radix-ui/react-toast": "^1.2.1",
40 |     "@radix-ui/react-toggle": "^1.1.0",
41 |     "@radix-ui/react-toggle-group": "^1.1.0",
42 |     "@radix-ui/react-tooltip": "^1.1.4",
43 |     "@supabase/auth-helpers-react": "^0.5.0",
44 |     "@supabase/auth-ui-react": "^0.4.7",
45 |     "@supabase/auth-ui-shared": "^0.1.8",
46 |     "@supabase/supabase-js": "^2.47.14",
47 |     "@tanstack/react-query": "^5.56.2",
48 |     "@vis.gl/react-google-maps": "^1.5.0",
49 |     "class-variance-authority": "^0.7.1",
50 |     "clsx": "^2.1.1",
51 |     "cmdk": "^1.0.0",
52 |     "codefetch": "^1.2.4",
53 |     "date-fns": "^3.6.0",
54 |     "embla-carousel-react": "^8.3.0",
55 |     "input-otp": "^1.2.4",
56 |     "lucide-react": "^0.462.0",
57 |     "mapbox-gl": "^3.9.3",
58 |     "next-themes": "^0.3.0",
59 |     "react": "^18.3.1",
60 |     "react-day-picker": "^8.10.1",
61 |     "react-dom": "^18.3.1",
62 |     "react-hook-form": "^7.53.0",
63 |     "react-resizable-panels": "^2.1.3",
64 |     "react-router-dom": "^6.26.2",
65 |     "recharts": "^2.12.7",
66 |     "sonner": "^1.5.0",
67 |     "tailwind-merge": "^2.5.2",
68 |     "tailwindcss-animate": "^1.0.7",
69 |     "vaul": "^0.9.3",
70 |     "zod": "^3.23.8"
71 |   },
72 |   "devDependencies": {
73 |     "@eslint/js": "^9.9.0",
74 |     "@tailwindcss/typography": "^0.5.15",
75 |     "@types/node": "^22.5.5",
76 |     "@types/react": "^18.3.3",
77 |     "@types/react-dom": "^18.3.0",
78 |     "@vitejs/plugin-react-swc": "^3.5.0",
79 |     "autoprefixer": "^10.4.20",
80 |     "eslint": "^9.9.0",
81 |     "eslint-plugin-react-hooks": "^5.1.0-rc.0",
82 |     "eslint-plugin-react-refresh": "^0.4.9",
83 |     "globals": "^15.9.0",
84 |     "lovable-tagger": "^1.0.19",
85 |     "postcss": "^8.4.47",
86 |     "tailwindcss": "^3.4.11",
87 |     "typescript": "^5.5.3",
88 |     "typescript-eslint": "^8.0.1",
89 |     "vite": "^5.4.1"
90 |   }
91 | }
```

postcss.config.js
```
1 | export default {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | }
```

src/App.css
```
1 | #root {
2 |   max-width: 1280px;
3 |   margin: 0 auto;
4 |   padding: 2rem;
5 |   text-align: center;
6 | }
7 | 
8 | .logo {
9 |   height: 6em;
10 |   padding: 1.5em;
11 |   will-change: filter;
12 |   transition: filter 300ms;
13 | }
14 | .logo:hover {
15 |   filter: drop-shadow(0 0 2em #646cffaa);
16 | }
17 | .logo.react:hover {
18 |   filter: drop-shadow(0 0 2em #61dafbaa);
19 | }
20 | 
21 | @keyframes logo-spin {
22 |   from {
23 |     transform: rotate(0deg);
24 |   }
25 |   to {
26 |     transform: rotate(360deg);
27 |   }
28 | }
29 | 
30 | @media (prefers-reduced-motion: no-preference) {
31 |   a:nth-of-type(2) .logo {
32 |     animation: logo-spin infinite 20s linear;
33 |   }
34 | }
35 | 
36 | .card {
37 |   padding: 2em;
38 | }
39 | 
40 | .read-the-docs {
41 |   color: #888;
42 | }
```

src/App.tsx
```
1 | import { Toaster } from "@/components/ui/toaster";
2 | import { Toaster as Sonner } from "@/components/ui/sonner";
3 | import { TooltipProvider } from "@/components/ui/tooltip";
4 | import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
5 | import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
6 | import Communities from "./pages/Communities";
7 | import CreateEvent from "./pages/CreateEvent";
8 | import Map from "./pages/Map";
9 | import Onboarding from "./pages/Onboarding";
10 | 
11 | const queryClient = new QueryClient();
12 | 
13 | const App = () => (
14 |   <QueryClientProvider client={queryClient}>
15 |     <TooltipProvider>
16 |       <Toaster />
17 |       <Sonner />
18 |       <BrowserRouter>
19 |         <Routes>
20 |           <Route path="/" element={<Map />} />
21 |           <Route path="/communities" element={<Communities />} />
22 |           <Route path="/create-event" element={<CreateEvent />} />
23 |           <Route path="/map" element={<Navigate to="/" replace />} />
24 |           <Route path="/onboarding" element={<Onboarding />} />
25 |         </Routes>
26 |       </BrowserRouter>
27 |     </TooltipProvider>
28 |   </QueryClientProvider>
29 | );
30 | 
31 | export default App;
```

src/components/auth/EmailAuthDialog.tsx
```
1 | import { useState, useEffect } from 'react';
2 | import { useNavigate } from 'react-router-dom';
3 | import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
4 | import { Button } from '@/components/ui/button';
5 | import { Input } from '@/components/ui/input';
6 | import { useAuth } from '@/hooks/useAuth';
7 | import { toast } from 'sonner';
8 | import { supabase } from '@/integrations/supabase/client';
9 | 
10 | interface EmailAuthDialogProps {
11 |   isOpen: boolean;
12 |   onClose: () => void;
13 | }
14 | 
15 | export function EmailAuthDialog({ isOpen, onClose }: EmailAuthDialogProps) {
16 |   const navigate = useNavigate();
17 |   const [email, setEmail] = useState('');
18 |   const [password, setPassword] = useState('');
19 |   const [isSignUp, setIsSignUp] = useState(false);
20 |   const { signInWithEmail, signUp, isLoading, error } = useAuth();
21 | 
22 |   // Reset form when dialog closes
23 |   useEffect(() => {
24 |     if (!isOpen) {
25 |       setEmail('');
26 |       setPassword('');
27 |       setIsSignUp(false);
28 |     }
29 |   }, [isOpen]);
30 | 
31 |   // Add timeout for loading state
32 |   useEffect(() => {
33 |     let timeoutId: NodeJS.Timeout;
34 |     
35 |     if (isLoading) {
36 |       timeoutId = setTimeout(() => {
37 |         toast.error('Request timed out. Please try again.');
38 |         onClose();
39 |       }, 10000); // 10 second timeout
40 |     }
41 | 
42 |     return () => {
43 |       if (timeoutId) clearTimeout(timeoutId);
44 |     };
45 |   }, [isLoading, onClose]);
46 | 
47 |   const createProfile = async (userId: string) => {
48 |     console.log('Creating profile for user:', userId);
49 |     try {
50 |       const { error } = await supabase
51 |         .from('profiles')
52 |         .insert({
53 |           user_id: userId,
54 |           username: email
55 |         });
56 |       
57 |       if (error) {
58 |         console.error('Profile creation error:', error);
59 |         throw error;
60 |       }
61 |       console.log('Profile created successfully');
62 |     } catch (error: any) {
63 |       console.error('Error creating profile:', error);
64 |       toast.error('Failed to create profile');
65 |       throw error;
66 |     }
67 |   };
68 | 
69 |   const handleSubmit = async () => {
70 |     if (!email || !password) {
71 |       toast.error('Please fill in all fields');
72 |       return;
73 |     }
74 | 
75 |     try {
76 |       console.log(`Attempting to ${isSignUp ? 'sign up' : 'sign in'} with email`);
77 |       const result = isSignUp 
78 |         ? await signUp(email, password)
79 |         : await signInWithEmail(email, password);
80 |       
81 |       if (result.success) {
82 |         console.log('Authentication successful:', result.data);
83 |         if (isSignUp) {
84 |           await createProfile(result.data.user.id);
85 |           toast.success('Account created successfully!');
86 |           onClose();
87 |           navigate('/onboarding');
88 |         } else {
89 |           const { data: profile } = await supabase
90 |             .from('profiles')
91 |             .select()
92 |             .eq('user_id', result.data.user.id)
93 |             .maybeSingle();
94 | 
95 |           console.log('Retrieved profile:', profile);
96 |           toast.success('Signed in successfully!');
97 |           onClose();
98 |           
99 |           if (!profile || !profile.full_name) {
100 |             navigate('/onboarding');
101 |           } else {
102 |             navigate('/events');
103 |           }
104 |         }
105 |       } else {
106 |         console.error('Authentication error:', result.error);
107 |         toast.error(result.error || 'Authentication failed');
108 |       }
109 |     } catch (err) {
110 |       console.error('Unexpected error during authentication:', err);
111 |       toast.error('An unexpected error occurred. Please try again.');
112 |       onClose();
113 |     }
114 |   };
115 | 
116 |   return (
117 |     <Dialog open={isOpen} onOpenChange={onClose}>
118 |       <DialogContent className="sm:max-w-[425px]">
119 |         <DialogHeader>
120 |           <DialogTitle>{isSignUp ? 'Sign up with Email' : 'Sign in with Email'}</DialogTitle>
121 |         </DialogHeader>
122 |         <div className="grid gap-4 py-4">
123 |           <Input
124 |             placeholder="Email"
125 |             type="email"
126 |             value={email}
127 |             onChange={(e) => setEmail(e.target.value)}
128 |           />
129 |           <Input
130 |             placeholder="Password"
131 |             type="password"
132 |             value={password}
133 |             onChange={(e) => setPassword(e.target.value)}
134 |           />
135 |           <Button 
136 |             onClick={handleSubmit}
137 |             disabled={isLoading}
138 |             className="w-full"
139 |           >
140 |             {isLoading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
141 |           </Button>
142 |           <Button
143 |             variant="ghost"
144 |             onClick={() => setIsSignUp(!isSignUp)}
145 |             className="w-full"
146 |           >
147 |             {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
148 |           </Button>
149 |           {error && (
150 |             <p className="text-sm text-red-500">{error}</p>
151 |           )}
152 |         </div>
153 |       </DialogContent>
154 |     </Dialog>
155 |   );
156 | }
```

src/components/auth/PhoneAuthDialog.tsx
```
1 | import { useState, useEffect } from 'react';
2 | import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
3 | import { Button } from '@/components/ui/button';
4 | import { Input } from '@/components/ui/input';
5 | import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
6 | import { useAuth } from '@/hooks/useAuth';
7 | import { usePhoneInput } from '@/hooks/usePhoneInput';
8 | import { COUNTRY_CODES, getPhoneNumberPlaceholder, getPhoneNumberExample } from '@/utils/phoneFormatting';
9 | import { toast } from 'sonner';
10 | 
11 | interface PhoneAuthDialogProps {
12 |   isOpen: boolean;
13 |   onClose: () => void;
14 | }
15 | 
16 | export function PhoneAuthDialog({ isOpen, onClose }: PhoneAuthDialogProps) {
17 |   const {
18 |     phoneNumber,
19 |     countryCode,
20 |     formattedE164,
21 |     isValid,
22 |     setCountryCode,
23 |     handlePhoneChange,
24 |   } = usePhoneInput();
25 | 
26 |   const [otp, setOtp] = useState('');
27 |   const [showOtpInput, setShowOtpInput] = useState(false);
28 |   const { signInWithPhone, verifyOTP, isLoading, error } = useAuth();
29 | 
30 |   // Reset state when dialog is closed
31 |   useEffect(() => {
32 |     if (!isOpen) {
33 |       setShowOtpInput(false);
34 |       setOtp('');
35 |       handlePhoneChange('');
36 |       setCountryCode('1');
37 |     }
38 |   }, [isOpen]);
39 | 
40 |   // Add timeout for loading state
41 |   useEffect(() => {
42 |     let timeoutId: NodeJS.Timeout;
43 |     
44 |     if (isLoading) {
45 |       timeoutId = setTimeout(() => {
46 |         toast.error('Request timed out. Please try again.');
47 |         onClose();
48 |       }, 10000); // 10 second timeout
49 |     }
50 | 
51 |     return () => {
52 |       if (timeoutId) clearTimeout(timeoutId);
53 |     };
54 |   }, [isLoading, onClose]);
55 | 
56 |   const handleSendOTP = async () => {
57 |     if (!isValid) {
58 |       toast.error('Please enter a valid phone number');
59 |       return;
60 |     }
61 | 
62 |     try {
63 |       console.log('Attempting to send OTP to:', formattedE164);
64 |       const result = await signInWithPhone(formattedE164);
65 |       
66 |       if (result.success) {
67 |         setShowOtpInput(true);
68 |         toast.success('OTP sent successfully!');
69 |       } else {
70 |         console.error('Failed to send OTP:', result.error);
71 |         toast.error(result.error || 'Failed to send OTP');
72 |       }
73 |     } catch (err) {
74 |       console.error('Unexpected error sending OTP:', err);
75 |       toast.error('An unexpected error occurred. Please try again.');
76 |       onClose();
77 |     }
78 |   };
79 | 
80 |   const handleVerifyOTP = async () => {
81 |     try {
82 |       console.log('Attempting to verify OTP for:', formattedE164);
83 |       const result = await verifyOTP(formattedE164, otp);
84 |       
85 |       if (result.success) {
86 |         toast.success('Successfully authenticated!');
87 |         onClose();
88 |       } else {
89 |         console.error('Failed to verify OTP:', result.error);
90 |         toast.error(result.error || 'Failed to verify OTP');
91 |       }
92 |     } catch (err) {
93 |       console.error('Unexpected error verifying OTP:', err);
94 |       toast.error('An unexpected error occurred. Please try again.');
95 |       onClose();
96 |     }
97 |   };
98 | 
99 |   return (
100 |     <Dialog open={isOpen} onOpenChange={onClose}>
101 |       <DialogContent className="sm:max-w-[425px]">
102 |         <DialogHeader>
103 |           <DialogTitle>Sign in with Phone</DialogTitle>
104 |         </DialogHeader>
105 |         <div className="grid gap-4 py-4">
106 |           {!showOtpInput ? (
107 |             <div className="space-y-4">
108 |               <div className="flex gap-2">
109 |                 <Select
110 |                   value={countryCode}
111 |                   onValueChange={setCountryCode}
112 |                 >
113 |                   <SelectTrigger className="w-[120px]">
114 |                     <SelectValue />
115 |                   </SelectTrigger>
116 |                   <SelectContent>
117 |                     {COUNTRY_CODES.map((country) => (
118 |                       <SelectItem key={country.code} value={country.dialCode}>
119 |                         {country.flag} +{country.dialCode}
120 |                       </SelectItem>
121 |                     ))}
122 |                   </SelectContent>
123 |                 </Select>
124 |                 <Input
125 |                   placeholder={getPhoneNumberPlaceholder(countryCode)}
126 |                   value={phoneNumber}
127 |                   onChange={(e) => handlePhoneChange(e.target.value)}
128 |                   type="tel"
129 |                   className="flex-1"
130 |                 />
131 |               </div>
132 |               <div className="text-sm text-muted-foreground">
133 |                 Example: {getPhoneNumberExample(countryCode)}
134 |               </div>
135 |               <Button 
136 |                 onClick={handleSendOTP} 
137 |                 disabled={isLoading || !isValid}
138 |                 className="w-full"
139 |               >
140 |                 {isLoading ? 'Sending...' : 'Send OTP'}
141 |               </Button>
142 |             </div>
143 |           ) : (
144 |             <div className="space-y-4">
145 |               <Input
146 |                 placeholder="Enter OTP"
147 |                 value={otp}
148 |                 onChange={(e) => setOtp(e.target.value)}
149 |                 type="number"
150 |                 maxLength={6}
151 |               />
152 |               <Button 
153 |                 onClick={handleVerifyOTP} 
154 |                 disabled={isLoading || !otp}
155 |                 className="w-full"
156 |               >
157 |                 {isLoading ? 'Verifying...' : 'Verify OTP'}
158 |               </Button>
159 |             </div>
160 |           )}
161 |           {error && (
162 |             <p className="text-sm text-red-500">{error}</p>
163 |           )}
164 |         </div>
165 |       </DialogContent>
166 |     </Dialog>
167 |   );
168 | }
```

src/components/communities/CommunityCard.tsx
```
1 | import { Button } from "@/components/ui/button";
2 | import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
3 | import { Users } from "lucide-react";
4 | 
5 | interface CommunityCardProps {
6 |   id: string;
7 |   name: string;
8 |   bio?: string | null;
9 |   imageUrl?: string | null;
10 |   followersCount: number;
11 |   isFollowing: boolean;
12 |   onFollowToggle: (communityId: string) => void;
13 | }
14 | 
15 | const CommunityCard = ({
16 |   id,
17 |   name,
18 |   bio,
19 |   imageUrl,
20 |   followersCount,
21 |   isFollowing,
22 |   onFollowToggle,
23 | }: CommunityCardProps) => {
24 |   return (
25 |     <Card className="overflow-hidden">
26 |       <div className="relative h-32 w-full">
27 |         <img
28 |           src={imageUrl || "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"}
29 |           alt={name}
30 |           className="h-full w-full object-cover"
31 |         />
32 |       </div>
33 |       <CardHeader>
34 |         <h3 className="text-lg font-bold">{name}</h3>
35 |       </CardHeader>
36 |       <CardContent>
37 |         <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>
38 |       </CardContent>
39 |       <CardFooter className="flex justify-between items-center">
40 |         <div className="flex items-center gap-1 text-sm text-muted-foreground">
41 |           <Users className="h-4 w-4" />
42 |           <span>{followersCount} followers</span>
43 |         </div>
44 |         <Button
45 |           variant={isFollowing ? "outline" : "default"}
46 |           onClick={() => onFollowToggle(id)}
47 |         >
48 |           {isFollowing ? "Unfollow" : "Follow"}
49 |         </Button>
50 |       </CardFooter>
51 |     </Card>
52 |   );
53 | };
54 | 
55 | export default CommunityCard;
```

src/components/events/EventBasicInfo.tsx
```
1 | import { Input } from "@/components/ui/input";
2 | import { Label } from "@/components/ui/label";
3 | import { Textarea } from "@/components/ui/textarea";
4 | import { Button } from "@/components/ui/button";
5 | import { Loader2, Wand2 } from "lucide-react";
6 | import {
7 |   Select,
8 |   SelectContent,
9 |   SelectItem,
10 |   SelectTrigger,
11 |   SelectValue,
12 | } from "@/components/ui/select";
13 | import { Tables } from "@/integrations/supabase/types";
14 | 
15 | type EventCategory = Tables<"events">["category"];
16 | 
17 | const EVENT_CATEGORIES: EventCategory[] = [
18 |   "Technology",
19 |   "Music",
20 |   "Arts",
21 |   "Sports",
22 |   "Food",
23 |   "Business",
24 |   "Education",
25 |   "Other",
26 | ];
27 | 
28 | interface EventBasicInfoProps {
29 |   name: string;
30 |   description: string;
31 |   category: EventCategory;
32 |   onNameChange: (value: string) => void;
33 |   onDescriptionChange: (value: string) => void;
34 |   onCategoryChange: (value: EventCategory) => void;
35 |   onGenerateNameClick: () => void;
36 |   onGenerateDescriptionClick: () => void;
37 |   isGeneratingName: boolean;
38 |   isGeneratingDescription: boolean;
39 | }
40 | 
41 | export const EventBasicInfo = ({
42 |   name,
43 |   description,
44 |   category,
45 |   onNameChange,
46 |   onDescriptionChange,
47 |   onCategoryChange,
48 |   onGenerateNameClick,
49 |   onGenerateDescriptionClick,
50 |   isGeneratingName,
51 |   isGeneratingDescription,
52 | }: EventBasicInfoProps) => {
53 |   return (
54 |     <div className="space-y-8">
55 |       <div className="flex items-center gap-2">
56 |         <div className="flex-1">
57 |           <Input
58 |             placeholder="Event Name"
59 |             value={name}
60 |             onChange={(e) => onNameChange(e.target.value)}
61 |             required
62 |             className="text-4xl font-bold border-none px-0 placeholder:text-muted-foreground/50"
63 |           />
64 |         </div>
65 |         <Button
66 |           type="button"
67 |           variant="outline"
68 |           size="icon"
69 |           onClick={onGenerateNameClick}
70 |           disabled={isGeneratingName}
71 |           className="shrink-0"
72 |         >
73 |           {isGeneratingName ? (
74 |             <Loader2 className="h-4 w-4 animate-spin" />
75 |           ) : (
76 |             <Wand2 className="h-4 w-4" />
77 |           )}
78 |         </Button>
79 |       </div>
80 | 
81 |       <div className="space-y-2">
82 |         <Label htmlFor="description">Description</Label>
83 |         <div className="flex gap-2">
84 |           <div className="flex-1">
85 |             <Textarea
86 |               id="description"
87 |               placeholder="Tell people what your event is about"
88 |               className="min-h-[120px] text-base"
89 |               value={description}
90 |               onChange={(e) => onDescriptionChange(e.target.value)}
91 |               required
92 |             />
93 |           </div>
94 |           <Button
95 |             type="button"
96 |             variant="outline"
97 |             size="icon"
98 |             onClick={onGenerateDescriptionClick}
99 |             disabled={isGeneratingDescription}
100 |             className="shrink-0 self-start"
101 |           >
102 |             {isGeneratingDescription ? (
103 |               <Loader2 className="h-4 w-4 animate-spin" />
104 |             ) : (
105 |               <Wand2 className="h-4 w-4" />
106 |             )}
107 |           </Button>
108 |         </div>
109 |       </div>
110 | 
111 |       <div className="space-y-2">
112 |         <Label>Category</Label>
113 |         <Select value={category} onValueChange={onCategoryChange} required>
114 |           <SelectTrigger className="w-full">
115 |             <SelectValue placeholder="Select category" />
116 |           </SelectTrigger>
117 |           <SelectContent>
118 |             {EVENT_CATEGORIES.map((category) => (
119 |               <SelectItem key={category} value={category}>
120 |                 {category}
121 |               </SelectItem>
122 |             ))}
123 |           </SelectContent>
124 |         </Select>
125 |       </div>
126 |     </div>
127 |   );
128 | };
```

src/components/events/EventCard.tsx
```
1 | import { Card } from "@/components/ui/card";
2 | import { Calendar, MapPin } from "lucide-react";
3 | import { format } from "date-fns";
4 | import { Tables } from "@/integrations/supabase/types";
5 | import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
6 | 
7 | interface EventCardProps {
8 |   event: Tables<"events"> & {
9 |     creator: Tables<"profiles">
10 |   };
11 | }
12 | 
13 | const EventCard = ({ event }: EventCardProps) => {
14 |   return (
15 |     <Card className="overflow-hidden bg-secondary hover:bg-secondary/90 transition-colors border-0">
16 |       <div className="flex gap-4 p-4">
17 |         <div className="flex-1 space-y-4">
18 |           {/* Date and Time */}
19 |           <div className="flex items-center text-secondary-foreground/80">
20 |             <Calendar className="w-4 h-4 mr-2" />
21 |             <span className="text-sm">
22 |               {format(new Date(event.start_time), "MMM d'th' 'at' h:mm a")}
23 |             </span>
24 |           </div>
25 | 
26 |           {/* Event Title */}
27 |           <h3 className="font-semibold text-xl text-secondary-foreground">
28 |             {event.name}
29 |           </h3>
30 | 
31 |           {/* Host Info */}
32 |           <div className="flex items-center gap-2">
33 |             <Avatar className="w-6 h-6">
34 |               <AvatarImage src={event.creator.avatar_url || undefined} />
35 |               <AvatarFallback>
36 |                 {event.creator.full_name?.charAt(0) || event.creator.username?.charAt(0)}
37 |               </AvatarFallback>
38 |             </Avatar>
39 |             <span className="text-sm text-secondary-foreground/80">
40 |               {event.creator.full_name || event.creator.username}
41 |             </span>
42 |           </div>
43 | 
44 |           {/* Location */}
45 |           <div className="flex items-center text-sm text-secondary-foreground/80">
46 |             <MapPin className="w-4 h-4 mr-2" />
47 |             <span className="line-clamp-1">{event.address}</span>
48 |           </div>
49 | 
50 |           {/* Category Tags */}
51 |           <div className="flex gap-2">
52 |             <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary">
53 |               {event.category}
54 |             </span>
55 |             {event.is_public && (
56 |               <span className="text-sm px-3 py-1 rounded-full bg-red-500/20 text-red-400">
57 |                 Free
58 |               </span>
59 |             )}
60 |           </div>
61 |         </div>
62 | 
63 |         {/* Event Image */}
64 |         <div className="w-32 h-32">
65 |           <img
66 |             src={event.cover_image_url || "https://source.unsplash.com/random/400x300?event"}
67 |             alt={event.name}
68 |             className="w-full h-full object-cover rounded-lg"
69 |           />
70 |         </div>
71 |       </div>
72 |     </Card>
73 |   );
74 | };
75 | 
76 | export default EventCard;
```

src/components/events/EventCoverImage.tsx
```
1 | import { Button } from "@/components/ui/button";
2 | import { ImageIcon, Shuffle } from "lucide-react";
3 | import { useState } from "react";
4 | import { supabase } from "@/integrations/supabase/client";
5 | 
6 | interface EventCoverImageProps {
7 |   onImageChange: (file: File) => void;
8 | }
9 | 
10 | export const EventCoverImage = ({ onImageChange }: EventCoverImageProps) => {
11 |   const [imagePreview, setImagePreview] = useState<string>("");
12 |   const [isLoading, setIsLoading] = useState(false);
13 | 
14 |   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
15 |     const file = e.target.files?.[0];
16 |     if (file) {
17 |       onImageChange(file);
18 |       const reader = new FileReader();
19 |       reader.onloadend = () => {
20 |         setImagePreview(reader.result as string);
21 |       };
22 |       reader.readAsDataURL(file);
23 |     }
24 |   };
25 | 
26 |   const getRandomImage = async () => {
27 |     try {
28 |       setIsLoading(true);
29 |       const { data: { data: { publicUrl } } } = await supabase
30 |         .functions.invoke('get-random-unsplash-image');
31 | 
32 |       if (publicUrl) {
33 |         const response = await fetch(publicUrl);
34 |         const blob = await response.blob();
35 |         const file = new File([blob], 'random-cover.jpg', { type: 'image/jpeg' });
36 |         onImageChange(file);
37 |         setImagePreview(URL.createObjectURL(blob));
38 |       }
39 |     } catch (error) {
40 |       console.error('Error fetching random image:', error);
41 |     } finally {
42 |       setIsLoading(false);
43 |     }
44 |   };
45 | 
46 |   return (
47 |     <div className="relative">
48 |       <Button
49 |         type="button"
50 |         variant="outline"
51 |         size="sm"
52 |         onClick={getRandomImage}
53 |         disabled={isLoading}
54 |         className="absolute top-2 right-2 z-10"
55 |       >
56 |         <Shuffle className="w-4 h-4" />
57 |       </Button>
58 |       
59 |       <div 
60 |         className="w-full h-[200px] rounded-lg overflow-hidden cursor-pointer group"
61 |         onClick={() => document.getElementById("cover-image")?.click()}
62 |       >
63 |         {imagePreview ? (
64 |           <img
65 |             src={imagePreview}
66 |             alt="Cover preview"
67 |             className="w-full h-full object-cover"
68 |           />
69 |         ) : (
70 |           <div className="w-full h-full bg-secondary/10 flex flex-col items-center justify-center">
71 |             <ImageIcon className="w-12 h-12 text-muted-foreground mb-2" />
72 |             <p className="text-sm text-muted-foreground">Click to upload cover image</p>
73 |           </div>
74 |         )}
75 |         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
76 |           <p className="text-white font-medium">Change cover image</p>
77 |         </div>
78 |         <input
79 |           id="cover-image"
80 |           type="file"
81 |           accept="image/*"
82 |           className="hidden"
83 |           onChange={handleImageChange}
84 |         />
85 |       </div>
86 |     </div>
87 |   );
88 | };
```

src/components/events/EventDateTime.tsx
```
1 | import { Button } from "@/components/ui/button";
2 | import { Calendar } from "@/components/ui/calendar";
3 | import { Input } from "@/components/ui/input";
4 | import { Label } from "@/components/ui/label";
5 | import {
6 |   Popover,
7 |   PopoverContent,
8 |   PopoverTrigger,
9 | } from "@/components/ui/popover";
10 | import {
11 |   Select,
12 |   SelectContent,
13 |   SelectItem,
14 |   SelectTrigger,
15 |   SelectValue,
16 | } from "@/components/ui/select";
17 | import { cn } from "@/lib/utils";
18 | import { format } from "date-fns";
19 | import { CalendarIcon, Clock } from "lucide-react";
20 | import { useEffect } from "react";
21 | 
22 | interface EventDateTimeProps {
23 |   date: Date | undefined;
24 |   time: string;
25 |   duration: string;
26 |   onDateChange: (date: Date | undefined) => void;
27 |   onTimeChange: (time: string) => void;
28 |   onDurationChange: (duration: string) => void;
29 | }
30 | 
31 | const DURATION_OPTIONS = [
32 |   "00:30",
33 |   "01:00",
34 |   "01:30",
35 |   "02:00",
36 |   "02:30",
37 |   "03:00",
38 |   "03:30",
39 |   "04:00",
40 | ];
41 | 
42 | export const EventDateTime = ({
43 |   date,
44 |   time,
45 |   duration,
46 |   onDateChange,
47 |   onTimeChange,
48 |   onDurationChange,
49 | }: EventDateTimeProps) => {
50 |   // Set default time to next hour rounded up
51 |   useEffect(() => {
52 |     if (!time) {
53 |       const now = new Date();
54 |       const nextHour = new Date(now.setHours(now.getHours() + 1, 0, 0));
55 |       onTimeChange(format(nextHour, "HH:mm"));
56 |     }
57 |   }, [time, onTimeChange]);
58 | 
59 |   return (
60 |     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
61 |       <div className="space-y-2">
62 |         <Label>Date</Label>
63 |         <Popover>
64 |           <PopoverTrigger asChild>
65 |             <Button
66 |               variant="outline"
67 |               className={cn(
68 |                 "w-full justify-start text-left font-normal",
69 |                 !date && "text-muted-foreground"
70 |               )}
71 |             >
72 |               <CalendarIcon className="mr-2 h-4 w-4" />
73 |               {date ? format(date, "PPP") : "Pick a date"}
74 |             </Button>
75 |           </PopoverTrigger>
76 |           <PopoverContent className="w-auto p-0" align="start">
77 |             <Calendar
78 |               mode="single"
79 |               selected={date}
80 |               onSelect={onDateChange}
81 |               initialFocus
82 |             />
83 |           </PopoverContent>
84 |         </Popover>
85 |       </div>
86 | 
87 |       <div className="space-y-2">
88 |         <Label>Start Time</Label>
89 |         <div className="relative">
90 |           <Input
91 |             type="time"
92 |             value={time}
93 |             onChange={(e) => onTimeChange(e.target.value)}
94 |             required
95 |             className="pl-10"
96 |           />
97 |           <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
98 |         </div>
99 |       </div>
100 | 
101 |       <div className="space-y-2">
102 |         <Label>Duration</Label>
103 |         <Select value={duration} onValueChange={onDurationChange}>
104 |           <SelectTrigger>
105 |             <SelectValue placeholder="Select duration" />
106 |           </SelectTrigger>
107 |           <SelectContent>
108 |             {DURATION_OPTIONS.map((option) => (
109 |               <SelectItem key={option} value={option}>
110 |                 {option.replace(":", "h ")}m
111 |               </SelectItem>
112 |             ))}
113 |           </SelectContent>
114 |         </Select>
115 |       </div>
116 |     </div>
117 |   );
118 | };
```

src/components/events/EventForm.tsx
```
1 | import { useState } from "react";
2 | import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
3 | import { Button } from "@/components/ui/button";
4 | import { Loader2 } from "lucide-react";
5 | import { Tables } from "@/integrations/supabase/types";
6 | import { EventBasicInfo } from "./EventBasicInfo";
7 | import { EventDateTime } from "./EventDateTime";
8 | import { EventLocation } from "./EventLocation";
9 | import { EventCoverImage } from "./EventCoverImage";
10 | import { supabase } from "@/integrations/supabase/client";
11 | import { useToast } from "@/components/ui/use-toast";
12 | import { addHours } from "date-fns";
13 | 
14 | type EventCategory = Tables<"events">["category"];
15 | 
16 | interface EventFormProps {
17 |   onSubmit: (data: {
18 |     name: string;
19 |     description: string;
20 |     category: EventCategory;
21 |     address: string;
22 |     latitude: number | null;
23 |     longitude: number | null;
24 |     date: Date | undefined;
25 |     time: string;
26 |     duration: string;
27 |     coverImage: File | null;
28 |   }) => Promise<void>;
29 |   isSubmitting: boolean;
30 | }
31 | 
32 | export const EventForm = ({ onSubmit, isSubmitting }: EventFormProps) => {
33 |   const { toast } = useToast();
34 |   const [formData, setFormData] = useState({
35 |     name: "",
36 |     description: "",
37 |     category: "Other" as EventCategory,
38 |     address: "",
39 |     latitude: null as number | null,
40 |     longitude: null as number | null,
41 |   });
42 | 
43 |   const defaultDate = addHours(new Date(), 24);
44 |   const [date, setDate] = useState<Date>(defaultDate);
45 |   const [time, setTime] = useState(defaultDate.getHours().toString().padStart(2, '0') + ":00");
46 |   const [duration, setDuration] = useState("01:00");
47 |   const [coverImage, setCoverImage] = useState<File | null>(null);
48 |   const [isGeneratingName, setIsGeneratingName] = useState(false);
49 |   const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
50 | 
51 |   const generateSuggestion = async (field: 'name' | 'description') => {
52 |     const isName = field === 'name';
53 |     const setGenerating = isName ? setIsGeneratingName : setIsGeneratingDescription;
54 |     
55 |     try {
56 |       setGenerating(true);
57 |       const { data, error } = await supabase.functions.invoke('generate-event-suggestions', {
58 |         body: { 
59 |           field,
60 |           currentName: formData.name,
61 |           currentDescription: formData.description,
62 |         }
63 |       });
64 | 
65 |       if (error) throw error;
66 | 
67 |       if (data.suggestion) {
68 |         setFormData(prev => ({
69 |           ...prev,
70 |           [field]: data.suggestion.trim()
71 |         }));
72 |         
73 |         toast({
74 |           title: "AI Suggestion Generated",
75 |           description: `The event ${field} has been updated with AI suggestions.`,
76 |         });
77 |       }
78 |     } catch (error) {
79 |       console.error('Error generating suggestions:', error);
80 |       toast({
81 |         title: "Error",
82 |         description: `Failed to generate AI suggestions for ${field}. Please try again.`,
83 |         variant: "destructive",
84 |       });
85 |     } finally {
86 |       setGenerating(false);
87 |     }
88 |   };
89 | 
90 |   const handleSubmit = async (e: React.FormEvent) => {
91 |     e.preventDefault();
92 |     await onSubmit({
93 |       ...formData,
94 |       date,
95 |       time,
96 |       duration,
97 |       coverImage,
98 |     });
99 |   };
100 | 
101 |   return (
102 |     <Card className="max-w-3xl mx-auto">
103 |       <CardHeader>
104 |         <CardTitle className="text-2xl font-bold">Create New Event</CardTitle>
105 |       </CardHeader>
106 |       <CardContent>
107 |         <form onSubmit={handleSubmit} className="space-y-8">
108 |           <EventCoverImage
109 |             onImageChange={(file) => setCoverImage(file)}
110 |           />
111 |           
112 |           <EventBasicInfo
113 |             name={formData.name}
114 |             description={formData.description}
115 |             category={formData.category}
116 |             onNameChange={(name) => setFormData((prev) => ({ ...prev, name }))}
117 |             onDescriptionChange={(description) =>
118 |               setFormData((prev) => ({ ...prev, description }))
119 |             }
120 |             onCategoryChange={(category) =>
121 |               setFormData((prev) => ({ ...prev, category }))
122 |             }
123 |             onGenerateNameClick={() => generateSuggestion('name')}
124 |             onGenerateDescriptionClick={() => generateSuggestion('description')}
125 |             isGeneratingName={isGeneratingName}
126 |             isGeneratingDescription={isGeneratingDescription}
127 |           />
128 | 
129 |           <EventDateTime
130 |             date={date}
131 |             time={time}
132 |             duration={duration}
133 |             onDateChange={setDate}
134 |             onTimeChange={setTime}
135 |             onDurationChange={setDuration}
136 |           />
137 | 
138 |           <EventLocation
139 |             address={formData.address}
140 |             onAddressSelect={(address, lat, lng) =>
141 |               setFormData((prev) => ({
142 |                 ...prev,
143 |                 address,
144 |                 latitude: lat,
145 |                 longitude: lng,
146 |               }))
147 |             }
148 |           />
149 | 
150 |           <Button
151 |             type="submit"
152 |             className="w-full"
153 |             disabled={isSubmitting}
154 |             size="lg"
155 |           >
156 |             {isSubmitting ? (
157 |               <>
158 |                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
159 |                 Creating...
160 |               </>
161 |             ) : (
162 |               "Create Event"
163 |             )}
164 |           </Button>
165 |         </form>
166 |       </CardContent>
167 |     </Card>
168 |   );
169 | };
```

src/components/events/EventLocation.tsx
```
1 | import { AddressInput } from "@/components/location/AddressInput";
2 | import { Label } from "@/components/ui/label";
3 | 
4 | interface EventLocationProps {
5 |   address: string;
6 |   onAddressSelect: (address: string, lat: number, lng: number) => void;
7 | }
8 | 
9 | export const EventLocation = ({ address, onAddressSelect }: EventLocationProps) => {
10 |   return (
11 |     <div className="space-y-2">
12 |       <Label>Location</Label>
13 |       <AddressInput onAddressSelect={onAddressSelect} />
14 |     </div>
15 |   );
16 | };
```

src/components/events/EventsFilters.tsx
```
1 | import { Button } from "@/components/ui/button";
2 | 
3 | interface EventsFiltersProps {
4 |   dateFilter: string | null;
5 |   setDateFilter: (filter: string | null) => void;
6 | }
7 | 
8 | const EventsFilters = ({
9 |   dateFilter,
10 |   setDateFilter,
11 | }: EventsFiltersProps) => {
12 |   const dateFilters = ["Today", "Tomorrow", "This Week", "This Month"];
13 | 
14 |   return (
15 |     <div className="flex flex-col md:flex-row gap-4 mb-8">
16 |       <div className="flex gap-2 flex-wrap">
17 |         {dateFilters.map((filter) => (
18 |           <Button
19 |             key={filter}
20 |             variant={dateFilter === filter ? "default" : "outline"}
21 |             size="sm"
22 |             onClick={() => setDateFilter(dateFilter === filter ? null : filter)}
23 |           >
24 |             {filter}
25 |           </Button>
26 |         ))}
27 |       </div>
28 |     </div>
29 |   );
30 | };
31 | 
32 | export default EventsFilters;
```

src/components/events/EventsGrid.tsx
```
1 | import { Tables } from "@/integrations/supabase/types";
2 | import { Loader2 } from "lucide-react";
3 | import EventCard from "./EventCard";
4 | 
5 | interface EventsGridProps {
6 |   events: (Tables<"events"> & {
7 |     creator: Tables<"profiles">
8 |   })[] | undefined;
9 |   isLoading: boolean;
10 |   error: Error | null;
11 | }
12 | 
13 | const EventsGrid = ({ events, isLoading, error }: EventsGridProps) => {
14 |   if (isLoading) {
15 |     return (
16 |       <div className="flex justify-center items-center min-h-[200px]">
17 |         <Loader2 className="h-8 w-8 animate-spin text-primary" />
18 |       </div>
19 |     );
20 |   }
21 | 
22 |   if (error) {
23 |     return (
24 |       <div className="text-center text-muted-foreground">
25 |         Failed to load events. Please try again later.
26 |       </div>
27 |     );
28 |   }
29 | 
30 |   if (!events?.length) {
31 |     return (
32 |       <div className="text-center text-muted-foreground">
33 |         No events found.
34 |       </div>
35 |     );
36 |   }
37 | 
38 |   return (
39 |     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
40 |       {events.map((event) => (
41 |         <EventCard key={event.id} event={event} />
42 |       ))}
43 |     </div>
44 |   );
45 | };
46 | 
47 | export default EventsGrid;
```

src/components/events/EventsList.tsx
```
1 | import { useState } from "react";
2 | import { startOfDay, endOfDay, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";
3 | import EventsGrid from "./EventsGrid";
4 | import EventsFilters from "./EventsFilters";
5 | import { useEvents } from "./useEvents";
6 | 
7 | const EventsList = () => {
8 |   const [dateFilter, setDateFilter] = useState<string | null>(null);
9 |   
10 |   const { data: events, isLoading, error } = useEvents();
11 | 
12 |   const getDateRange = (filter: string) => {
13 |     const now = new Date();
14 |     switch (filter) {
15 |       case "Today":
16 |         return {
17 |           start: startOfDay(now),
18 |           end: endOfDay(now),
19 |         };
20 |       case "Tomorrow":
21 |         const tomorrow = addDays(now, 1);
22 |         return {
23 |           start: startOfDay(tomorrow),
24 |           end: endOfDay(tomorrow),
25 |         };
26 |       case "This Week":
27 |         return {
28 |           start: startOfWeek(now),
29 |           end: endOfWeek(now),
30 |         };
31 |       case "This Month":
32 |         return {
33 |           start: startOfMonth(now),
34 |           end: endOfMonth(now),
35 |         };
36 |       default:
37 |         return null;
38 |     }
39 |   };
40 | 
41 |   const filteredEvents = events?.filter((event) => {
42 |     if (!dateFilter) return true;
43 | 
44 |     const dateRange = getDateRange(dateFilter);
45 |     if (!dateRange) return true;
46 | 
47 |     const eventDate = new Date(event.start_time);
48 |     return (
49 |       eventDate >= dateRange.start &&
50 |       eventDate <= dateRange.end
51 |     );
52 |   });
53 | 
54 |   return (
55 |     <div className="container mx-auto px-4 py-8">
56 |       <div className="flex justify-between items-center mb-8">
57 |         <h1 className="text-3xl font-bold">Events</h1>
58 |       </div>
59 | 
60 |       <EventsFilters
61 |         dateFilter={dateFilter}
62 |         setDateFilter={setDateFilter}
63 |       />
64 | 
65 |       <EventsGrid
66 |         events={filteredEvents}
67 |         isLoading={isLoading}
68 |         error={error}
69 |       />
70 |     </div>
71 |   );
72 | };
73 | 
74 | export default EventsList;
```

src/components/events/MobileEventSheet.tsx
```
1 | import { Button } from "@/components/ui/button";
2 | import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
3 | import EventsList from "./EventsList";
4 | import { ChevronUp } from "lucide-react";
5 | import { Input } from "@/components/ui/input";
6 | import { useQuery } from "@tanstack/react-query";
7 | import { supabase } from "@/integrations/supabase/client";
8 | import {
9 |   Select,
10 |   SelectContent,
11 |   SelectItem,
12 |   SelectTrigger,
13 |   SelectValue,
14 | } from "@/components/ui/select";
15 | import { useState } from "react";
16 | 
17 | const MobileEventSheet = () => {
18 |   const [searchQuery, setSearchQuery] = useState("");
19 |   
20 |   const { data: events } = useQuery({
21 |     queryKey: ["events", searchQuery],
22 |     queryFn: async () => {
23 |       const { data, error } = await supabase
24 |         .from("events")
25 |         .select(`
26 |           *,
27 |           creator:creator_id (
28 |             id,
29 |             username,
30 |             full_name,
31 |             avatar_url
32 |           )
33 |         `)
34 |         .order("start_time", { ascending: true })
35 |         .ilike("name", `%${searchQuery}%`);
36 | 
37 |       if (error) throw error;
38 |       return data;
39 |     },
40 |   });
41 | 
42 |   const eventCount = events?.length || 0;
43 | 
44 |   return (
45 |     <Sheet>
46 |       <SheetTrigger asChild>
47 |         <Button 
48 |           className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 gap-2 group"
49 |           variant="secondary"
50 |         >
51 |           <span>{eventCount} Events</span>
52 |           <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
53 |         </Button>
54 |       </SheetTrigger>
55 |       <SheetContent 
56 |         side="bottom" 
57 |         className="h-[80vh] w-full !border-t-0 rounded-t-xl"
58 |       >
59 |         <div className="space-y-4">
60 |           <div className="flex gap-2">
61 |             <Input 
62 |               type="search" 
63 |               placeholder="Search events..." 
64 |               className="flex-1"
65 |               value={searchQuery}
66 |               onChange={(e) => setSearchQuery(e.target.value)}
67 |             />
68 |             <Select>
69 |               <SelectTrigger className="w-[140px]">
70 |                 <SelectValue placeholder="Filter by date" />
71 |               </SelectTrigger>
72 |               <SelectContent>
73 |                 <SelectItem value="today">Today</SelectItem>
74 |                 <SelectItem value="tomorrow">Tomorrow</SelectItem>
75 |                 <SelectItem value="this-week">This Week</SelectItem>
76 |                 <SelectItem value="this-month">This Month</SelectItem>
77 |               </SelectContent>
78 |             </Select>
79 |           </div>
80 |           <EventsList />
81 |         </div>
82 |       </SheetContent>
83 |     </Sheet>
84 |   );
85 | };
86 | 
87 | export default MobileEventSheet;
```

src/components/events/useEvents.ts
```
1 | import { supabase } from "@/integrations/supabase/client";
2 | import { Tables } from "@/integrations/supabase/types";
3 | import { useQuery } from "@tanstack/react-query";
4 | import { useToast } from "@/components/ui/use-toast";
5 | 
6 | export const useEvents = () => {
7 |   const { toast } = useToast();
8 | 
9 |   return useQuery({
10 |     queryKey: ["events"],
11 |     queryFn: async () => {
12 |       console.log("Fetching events...");
13 |       const { data, error } = await supabase
14 |         .from("events")
15 |         .select(`
16 |           *,
17 |           creator:creator_id (
18 |             id,
19 |             username,
20 |             full_name,
21 |             avatar_url
22 |           )
23 |         `)
24 |         .order("start_time", { ascending: true });
25 | 
26 |       if (error) {
27 |         console.error("Error fetching events:", error);
28 |         throw error;
29 |       }
30 | 
31 |       console.log("Fetched events:", data);
32 |       return data as (Tables<"events"> & {
33 |         creator: Tables<"profiles">
34 |       })[];
35 |     },
36 |     meta: {
37 |       onError: (error: Error) => {
38 |         console.error("Query error:", error);
39 |         toast({
40 |           title: "Error",
41 |           description: "Failed to load events. Please try again later.",
42 |           variant: "destructive",
43 |         });
44 |       },
45 |     },
46 |   });
47 | };
```

src/components/layout/HeaderActions.tsx
```
1 | import { useNavigate } from "react-router-dom";
2 | import { PlusCircle } from "lucide-react";
3 | import { Button } from "@/components/ui/button";
4 | import UserMenu from "./UserMenu";
5 | import { Tables } from "@/integrations/supabase/types";
6 | 
7 | interface HeaderActionsProps {
8 |   userProfile: Tables<"profiles"> | null;
9 |   onOpenEmailAuth: () => void;
10 |   onOpenPhoneAuth: () => void;
11 | }
12 | 
13 | const HeaderActions = ({ userProfile, onOpenEmailAuth, onOpenPhoneAuth }: HeaderActionsProps) => {
14 |   const navigate = useNavigate();
15 | 
16 |   return (
17 |     <div className="flex items-center space-x-4">
18 |       <Button
19 |         variant="ghost"
20 |         size="sm"
21 |         onClick={() => navigate('/create-event')}
22 |       >
23 |         <PlusCircle className="h-4 w-4 mr-2" />
24 |         Create
25 |       </Button>
26 |       <UserMenu
27 |         userProfile={userProfile}
28 |         onOpenEmailAuth={onOpenEmailAuth}
29 |         onOpenPhoneAuth={onOpenPhoneAuth}
30 |       />
31 |     </div>
32 |   );
33 | };
34 | 
35 | export default HeaderActions;
```

src/components/layout/Layout.tsx
```
1 | import { useState } from "react";
2 | import Navigation from "./Navigation";
3 | import TopNavigation from "./TopNavigation";
4 | import { PhoneAuthDialog } from "../auth/PhoneAuthDialog";
5 | import { EmailAuthDialog } from "../auth/EmailAuthDialog";
6 | import HeaderActions from "./HeaderActions";
7 | import { useAuthCheck } from "@/hooks/useAuthCheck";
8 | 
9 | interface LayoutProps {
10 |   children: React.ReactNode;
11 | }
12 | 
13 | const Layout = ({ children }: LayoutProps) => {
14 |   const [isPhoneAuthDialogOpen, setIsPhoneAuthDialogOpen] = useState(false);
15 |   const [isEmailAuthDialogOpen, setIsEmailAuthDialogOpen] = useState(false);
16 |   const { userProfile, isLoading } = useAuthCheck();
17 | 
18 |   return (
19 |     <div className="min-h-screen bg-background">
20 |       <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
21 |         <div className="relative flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
22 |           <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">
23 |             vently
24 |           </span>
25 |           <div className="hidden md:flex flex-1 justify-center">
26 |             <TopNavigation isAuthenticated={!isLoading && !!userProfile} />
27 |           </div>
28 |           <HeaderActions
29 |             userProfile={userProfile}
30 |             onOpenEmailAuth={() => setIsEmailAuthDialogOpen(true)}
31 |             onOpenPhoneAuth={() => setIsPhoneAuthDialogOpen(true)}
32 |           />
33 |         </div>
34 |       </header>
35 |       <main className="pt-14 pb-16 md:pb-0">
36 |         {children}
37 |       </main>
38 |       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
39 |         <Navigation />
40 |       </div>
41 |       <PhoneAuthDialog 
42 |         isOpen={isPhoneAuthDialogOpen} 
43 |         onClose={() => setIsPhoneAuthDialogOpen(false)} 
44 |       />
45 |       <EmailAuthDialog 
46 |         isOpen={isEmailAuthDialogOpen} 
47 |         onClose={() => setIsEmailAuthDialogOpen(false)} 
48 |       />
49 |     </div>
50 |   );
51 | };
52 | 
53 | export default Layout;
```

src/components/layout/Navigation.tsx
```
1 | import { useState } from "react";
2 | import { Link, useLocation } from "react-router-dom";
3 | import { MapPin, Users, PlusCircle } from "lucide-react";
4 | 
5 | const Navigation = () => {
6 |   const location = useLocation();
7 |   const [activeTab, setActiveTab] = useState(location.pathname);
8 | 
9 |   const tabs = [
10 |     { icon: MapPin, label: "Map", path: "/map" },
11 |     { icon: Users, label: "Communities", path: "/communities" },
12 |     { icon: PlusCircle, label: "Create", path: "/create-event" },
13 |   ];
14 | 
15 |   return (
16 |     <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe-area-inset-bottom z-50">
17 |       <div className="flex justify-around items-center h-16">
18 |         {tabs.map(({ icon: Icon, label, path }) => (
19 |           <Link
20 |             key={path}
21 |             to={path}
22 |             className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
23 |               activeTab === path
24 |                 ? "text-primary"
25 |                 : "text-gray-500 hover:text-primary"
26 |             }`}
27 |             onClick={() => setActiveTab(path)}
28 |           >
29 |             <Icon className="w-6 h-6" />
30 |             <span className="text-xs">{label}</span>
31 |           </Link>
32 |         ))}
33 |       </div>
34 |     </nav>
35 |   );
36 | };
37 | 
38 | export default Navigation;
```

src/components/layout/TopNavigation.tsx
```
1 | import { Link, useLocation } from "react-router-dom";
2 | import { MapPin, Calendar, Users } from "lucide-react";
3 | 
4 | interface TopNavigationProps {
5 |   isAuthenticated: boolean;
6 | }
7 | 
8 | const TopNavigation = ({ isAuthenticated }: TopNavigationProps) => {
9 |   const location = useLocation();
10 | 
11 |   const tabs = [
12 |     { icon: MapPin, label: "Map", path: "/map" },
13 |     { icon: Calendar, label: "Events", path: "/events" },
14 |     { icon: Users, label: "Communities", path: "/communities" },
15 |   ];
16 | 
17 |   return (
18 |     <nav className="flex items-center space-x-6">
19 |       {tabs.map(({ icon: Icon, label, path }) => {
20 |         if (path === "/create-event" && !isAuthenticated) {
21 |           return null;
22 |         }
23 |         return (
24 |           <Link
25 |             key={path}
26 |             to={path}
27 |             className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
28 |               location.pathname === path
29 |                 ? "text-primary bg-primary/10"
30 |                 : "text-gray-600 hover:text-primary hover:bg-primary/5"
31 |             }`}
32 |           >
33 |             <Icon className="w-5 h-5" />
34 |             <span className="font-medium">{label}</span>
35 |           </Link>
36 |         )
37 |       })}
38 |     </nav>
39 |   );
40 | };
41 | 
42 | export default TopNavigation;
```

src/components/layout/UserMenu.tsx
```
1 | import { useNavigate } from "react-router-dom";
2 | import { Mail, Phone } from "lucide-react";
3 | import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
4 | import { Button } from "@/components/ui/button";
5 | import {
6 |   DropdownMenu,
7 |   DropdownMenuContent,
8 |   DropdownMenuItem,
9 |   DropdownMenuTrigger,
10 | } from "@/components/ui/dropdown-menu";
11 | import { Tables } from "@/integrations/supabase/types";
12 | import { supabase } from "@/integrations/supabase/client";
13 | 
14 | interface UserMenuProps {
15 |   userProfile: Tables<"profiles"> | null;
16 |   onOpenEmailAuth: () => void;
17 |   onOpenPhoneAuth: () => void;
18 | }
19 | 
20 | const UserMenu = ({ userProfile, onOpenEmailAuth, onOpenPhoneAuth }: UserMenuProps) => {
21 |   const navigate = useNavigate();
22 | 
23 |   if (userProfile) {
24 |     return (
25 |       <DropdownMenu>
26 |         <DropdownMenuTrigger asChild>
27 |           <Button variant="ghost" size="sm" className="flex items-center space-x-2">
28 |             <Avatar className="h-8 w-8">
29 |               <AvatarImage src={userProfile.avatar_url} />
30 |               <AvatarFallback>
31 |                 {userProfile.full_name?.charAt(0) || userProfile.username?.charAt(0)}
32 |               </AvatarFallback>
33 |             </Avatar>
34 |             <span>{userProfile.full_name || userProfile.username}</span>
35 |           </Button>
36 |         </DropdownMenuTrigger>
37 |         <DropdownMenuContent align="end" className="w-56">
38 |           <DropdownMenuItem onClick={async () => {
39 |             await supabase.auth.signOut();
40 |             navigate('/');
41 |           }}>
42 |             Sign Out
43 |           </DropdownMenuItem>
44 |         </DropdownMenuContent>
45 |       </DropdownMenu>
46 |     );
47 |   }
48 | 
49 |   return (
50 |     <DropdownMenu>
51 |       <DropdownMenuTrigger asChild>
52 |         <Button variant="ghost" size="sm">
53 |           Sign In
54 |         </Button>
55 |       </DropdownMenuTrigger>
56 |       <DropdownMenuContent align="end" className="w-56">
57 |         <DropdownMenuItem onClick={onOpenEmailAuth}>
58 |           <Mail className="h-4 w-4 mr-2" />
59 |           Sign in with Email
60 |         </DropdownMenuItem>
61 |         <DropdownMenuItem onClick={onOpenPhoneAuth}>
62 |           <Phone className="h-4 w-4 mr-2" />
63 |           Sign in with Phone
64 |         </DropdownMenuItem>
65 |       </DropdownMenuContent>
66 |     </DropdownMenu>
67 |   );
68 | };
69 | 
70 | export default UserMenu;
```

src/components/location/AddressInput.tsx
```
1 | import { useEffect, useRef, useState } from "react";
2 | import { Input } from "@/components/ui/input";
3 | import { useGeocoding } from "@/hooks/useGeocoding";
4 | import { loadGoogleMapsApi } from "@/utils/loadGoogleMapsApi";
5 | 
6 | interface AddressInputProps {
7 |   onAddressSelect: (address: string, lat: number, lng: number) => void;
8 | }
9 | 
10 | export const AddressInput = ({ onAddressSelect }: AddressInputProps) => {
11 |   const [isApiLoaded, setIsApiLoaded] = useState(false);
12 |   const inputRef = useRef<HTMLInputElement>(null);
13 |   const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
14 |   const { geocodeAddress, isLoading, error } = useGeocoding();
15 | 
16 |   useEffect(() => {
17 |     loadGoogleMapsApi()
18 |       .then(() => setIsApiLoaded(true))
19 |       .catch(console.error);
20 |   }, []);
21 | 
22 |   useEffect(() => {
23 |     if (isApiLoaded && inputRef.current) {
24 |       autocompleteRef.current = new google.maps.places.Autocomplete(
25 |         inputRef.current,
26 |         { types: ["address"] }
27 |       );
28 | 
29 |       autocompleteRef.current.addListener("place_changed", () => {
30 |         const place = autocompleteRef.current?.getPlace();
31 |         if (place?.geometry?.location) {
32 |           const lat = place.geometry.location.lat();
33 |           const lng = place.geometry.location.lng();
34 |           onAddressSelect(place.formatted_address || "", lat, lng);
35 |         }
36 |       });
37 |     }
38 |   }, [isApiLoaded, onAddressSelect]);
39 | 
40 |   if (!isApiLoaded) {
41 |     return <div>Loading Google Maps...</div>;
42 |   }
43 | 
44 |   return (
45 |     <div className="space-y-2">
46 |       <Input
47 |         ref={inputRef}
48 |         type="text"
49 |         placeholder="Enter location"
50 |         className="w-full"
51 |         disabled={isLoading}
52 |       />
53 |       {error && <p className="text-sm text-red-500">{error}</p>}
54 |     </div>
55 |   );
56 | };
```

src/components/map/CustomMarker.tsx
```
1 | import { AdvancedMarker, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
2 | import { useEffect, useState } from 'react';
3 | 
4 | interface CustomMarkerProps {
5 |   position: google.maps.LatLngLiteral;
6 |   title?: string;
7 |   imageUrl?: string;
8 | }
9 | 
10 | const CustomMarker = ({ position, title, imageUrl }: CustomMarkerProps) => {
11 |   const [markerRef, marker] = useAdvancedMarkerRef();
12 |   const [isHovered, setIsHovered] = useState(false);
13 | 
14 |   useEffect(() => {
15 |     if (!marker) return;
16 | 
17 |     marker.addListener('mouseover', () => setIsHovered(true));
18 |     marker.addListener('mouseout', () => setIsHovered(false));
19 |   }, [marker]);
20 | 
21 |   return (
22 |     <AdvancedMarker
23 |       ref={markerRef}
24 |       position={position}
25 |       title={title}
26 |     >
27 |       <div className="relative group">
28 |         <div 
29 |           className={`
30 |             w-12 h-12 rounded-full bg-white shadow-lg 
31 |             transform transition-transform duration-200
32 |             ${isHovered ? 'scale-110' : 'scale-100'}
33 |             flex items-center justify-center overflow-hidden
34 |             border-2 border-white
35 |           `}
36 |         >
37 |           {imageUrl ? (
38 |             <img 
39 |               src={imageUrl} 
40 |               alt={title} 
41 |               className="w-full h-full object-cover rounded-full"
42 |             />
43 |           ) : (
44 |             <div className="w-full h-full bg-primary/20 rounded-full" />
45 |           )}
46 |         </div>
47 |         <div 
48 |           className={`
49 |             absolute -bottom-2 left-1/2 transform -translate-x-1/2
50 |             w-4 h-4 bg-white rotate-45
51 |             shadow-lg
52 |           `}
53 |         />
54 |         {isHovered && title && (
55 |           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
56 |             <div className="bg-white px-2 py-1 rounded shadow-lg text-sm">
57 |               {title}
58 |             </div>
59 |           </div>
60 |         )}
61 |       </div>
62 |     </AdvancedMarker>
63 |   );
64 | };
65 | 
66 | export default CustomMarker;
```

src/components/map/GoogleMapComponent.tsx
```
1 | import React, { useEffect } from 'react';
2 | import { 
3 |   APIProvider, 
4 |   Map
5 | } from '@vis.gl/react-google-maps';
6 | import { Tables } from "@/integrations/supabase/types";
7 | import CustomMarker from './CustomMarker';
8 | 
9 | interface GoogleMapComponentProps {
10 |   events: Tables<"events">[];
11 | }
12 | 
13 | const GoogleMapComponent = ({ events }: GoogleMapComponentProps) => {
14 |   useEffect(() => {
15 |     console.log("GoogleMap events:", events);
16 |   }, [events]);
17 | 
18 |   // San Francisco coordinates
19 |   const defaultCenter = { lat: 37.7749, lng: -122.4194 };
20 |   
21 |   const center = events.length > 0
22 |     ? { lat: events[0].latitude, lng: events[0].longitude }
23 |     : defaultCenter;
24 | 
25 |   return (
26 |     <div className="relative w-full h-full">
27 |       <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
28 |         <Map
29 |           defaultZoom={13}
30 |           defaultCenter={defaultCenter}
31 |           mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
32 |           className="w-full h-full"
33 |           gestureHandling={'greedy'}
34 |           disableDefaultUI={true}
35 |         >
36 |           {events.map((event) => (
37 |             <CustomMarker
38 |               key={`marker-${event.id}`}
39 |               position={{ lat: event.latitude, lng: event.longitude }}
40 |               title={event.name}
41 |               imageUrl={event.cover_image_url}
42 |             />
43 |           ))}
44 |         </Map>
45 |       </APIProvider>
46 |     </div>
47 |   );
48 | };
49 | 
50 | export default GoogleMapComponent;
```

src/components/map/MapComponent.tsx
```
1 | import React, { useEffect, useRef, useState } from 'react';
2 | import mapboxgl from 'mapbox-gl';
3 | import 'mapbox-gl/dist/mapbox-gl.css';
4 | import { Tables } from "@/integrations/supabase/types";
5 | 
6 | interface MapComponentProps {
7 |   events: Tables<"events">[];
8 | }
9 | 
10 | const MapComponent = ({ events }: MapComponentProps) => {
11 |   const mapContainer = useRef<HTMLDivElement>(null);
12 |   const map = useRef<mapboxgl.Map | null>(null);
13 |   const markers = useRef<mapboxgl.Marker[]>([]);
14 |   const [error, setError] = useState<string | null>(null);
15 | 
16 |   useEffect(() => {
17 |     if (!mapContainer.current) return;
18 | 
19 |     try {
20 |       // Initialize map
21 |       mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';
22 | 
23 |       // Add error handling for missing token
24 |       if (!mapboxgl.accessToken) {
25 |         setError('Mapbox token is missing');
26 |         return;
27 |       }
28 |       
29 |       map.current = new mapboxgl.Map({
30 |         container: mapContainer.current,
31 |         style: 'mapbox://styles/mapbox/light-v11',
32 |         center: [-98.5795, 39.8283], // Center of USA
33 |         zoom: 3
34 |       });
35 | 
36 |       // Add navigation controls
37 |       map.current.addControl(
38 |         new mapboxgl.NavigationControl(),
39 |         'top-right'
40 |       );
41 |     } catch (err) {
42 |       setError(err instanceof Error ? err.message : 'Failed to load map');
43 |     }
44 | 
45 |     return () => {
46 |       markers.current.forEach(marker => marker.remove());
47 |       map.current?.remove();
48 |     };
49 |   }, []);
50 | 
51 |   if (error) {
52 |     return (
53 |       <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
54 |         <p className="text-red-500">Error loading map: {error}</p>
55 |       </div>
56 |     );
57 |   }
58 | 
59 |   // Add markers when events change
60 |   useEffect(() => {
61 |     if (!map.current) return;
62 | 
63 |     // Remove existing markers
64 |     markers.current.forEach(marker => marker.remove());
65 |     markers.current = [];
66 | 
67 |     // Add new markers
68 |     events.forEach(event => {
69 |       if (event.latitude && event.longitude) {
70 |         // Create popup
71 |         const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
72 |           `<div class="p-2">
73 |             <h3 class="font-bold">${event.name}</h3>
74 |             <p class="text-sm">${event.address}</p>
75 |             <p class="text-sm">${new Date(event.start_time).toLocaleDateString()}</p>
76 |           </div>`
77 |         );
78 | 
79 |         // Create marker
80 |         const marker = new mapboxgl.Marker()
81 |           .setLngLat([event.longitude, event.latitude])
82 |           .setPopup(popup)
83 |           .addTo(map.current!);
84 | 
85 |         markers.current.push(marker);
86 |       }
87 |     });
88 |   }, [events]);
89 | 
90 |   return (
91 |     <div ref={mapContainer} className="w-full h-full" />
92 |   );
93 | };
94 | 
95 | export default MapComponent;
```

src/components/onboarding/NameStep.tsx
```
1 | import { Input } from "@/components/ui/input";
2 | import { Button } from "@/components/ui/button";
3 | import type { NameStepProps } from "@/types/onboarding";
4 | 
5 | export const NameStep = ({ fullName, setFullName, onNext }: NameStepProps) => {
6 |   return (
7 |     <div className="space-y-4">
8 |       <div>
9 |         <label className="block text-sm font-medium mb-2">Full Name</label>
10 |         <Input
11 |           type="text"
12 |           placeholder="Enter your full name"
13 |           value={fullName}
14 |           onChange={(e) => setFullName(e.target.value)}
15 |           required
16 |         />
17 |       </div>
18 |       <Button
19 |         type="button"
20 |         className="w-full"
21 |         onClick={onNext}
22 |       >
23 |         Next
24 |       </Button>
25 |     </div>
26 |   );
27 | };
```

src/components/onboarding/PhotoStep.tsx
```
1 | import { useRef } from "react";
2 | import { Button } from "@/components/ui/button";
3 | import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
4 | import type { PhotoStepProps } from "@/types/onboarding";
5 | 
6 | export const PhotoStep = ({ 
7 |   user, 
8 |   selectedFile, 
9 |   previewUrl, 
10 |   onFileSelect,
11 |   onBack,
12 |   loading 
13 | }: PhotoStepProps) => {
14 |   const fileInputRef = useRef<HTMLInputElement>(null);
15 | 
16 |   const handleAvatarClick = () => {
17 |     fileInputRef.current?.click();
18 |   };
19 | 
20 |   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
21 |     const file = event.target.files?.[0];
22 |     if (file) {
23 |       onFileSelect(file);
24 |     }
25 |   };
26 | 
27 |   return (
28 |     <div className="space-y-4">
29 |       <div>
30 |         <label className="block text-sm font-medium mb-2">Profile Picture</label>
31 |         <div className="flex flex-col items-center space-y-4">
32 |           <Avatar 
33 |             className="w-24 h-24 cursor-pointer hover:opacity-80 transition-opacity"
34 |             onClick={handleAvatarClick}
35 |           >
36 |             <AvatarImage src={previewUrl} />
37 |             <AvatarFallback>
38 |               {user?.email?.charAt(0).toUpperCase()}
39 |             </AvatarFallback>
40 |           </Avatar>
41 |           <input
42 |             ref={fileInputRef}
43 |             type="file"
44 |             accept="image/*"
45 |             onChange={handleFileSelect}
46 |             className="hidden"
47 |           />
48 |           <p className="text-sm text-muted-foreground">
49 |             Click the circle to upload a profile picture
50 |           </p>
51 |         </div>
52 |       </div>
53 |       <div className="flex space-x-3">
54 |         <Button
55 |           type="button"
56 |           variant="outline"
57 |           className="flex-1"
58 |           onClick={onBack}
59 |         >
60 |           Back
61 |         </Button>
62 |         <Button
63 |           type="submit"
64 |           className="flex-1"
65 |           disabled={loading}
66 |         >
67 |           {loading ? "Saving..." : "Complete Profile"}
68 |         </Button>
69 |       </div>
70 |     </div>
71 |   );
72 | };
```

src/components/ui/accordion.tsx
```
1 | import * as React from "react"
2 | import * as AccordionPrimitive from "@radix-ui/react-accordion"
3 | import { ChevronDown } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const Accordion = AccordionPrimitive.Root
8 | 
9 | const AccordionItem = React.forwardRef<
10 |   React.ElementRef<typeof AccordionPrimitive.Item>,
11 |   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
12 | >(({ className, ...props }, ref) => (
13 |   <AccordionPrimitive.Item
14 |     ref={ref}
15 |     className={cn("border-b", className)}
16 |     {...props}
17 |   />
18 | ))
19 | AccordionItem.displayName = "AccordionItem"
20 | 
21 | const AccordionTrigger = React.forwardRef<
22 |   React.ElementRef<typeof AccordionPrimitive.Trigger>,
23 |   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
24 | >(({ className, children, ...props }, ref) => (
25 |   <AccordionPrimitive.Header className="flex">
26 |     <AccordionPrimitive.Trigger
27 |       ref={ref}
28 |       className={cn(
29 |         "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
30 |         className
31 |       )}
32 |       {...props}
33 |     >
34 |       {children}
35 |       <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
36 |     </AccordionPrimitive.Trigger>
37 |   </AccordionPrimitive.Header>
38 | ))
39 | AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
40 | 
41 | const AccordionContent = React.forwardRef<
42 |   React.ElementRef<typeof AccordionPrimitive.Content>,
43 |   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
44 | >(({ className, children, ...props }, ref) => (
45 |   <AccordionPrimitive.Content
46 |     ref={ref}
47 |     className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
48 |     {...props}
49 |   >
50 |     <div className={cn("pb-4 pt-0", className)}>{children}</div>
51 |   </AccordionPrimitive.Content>
52 | ))
53 | 
54 | AccordionContent.displayName = AccordionPrimitive.Content.displayName
55 | 
56 | export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

src/components/ui/alert-dialog.tsx
```
1 | import * as React from "react"
2 | import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
3 | 
4 | import { cn } from "@/lib/utils"
5 | import { buttonVariants } from "@/components/ui/button"
6 | 
7 | const AlertDialog = AlertDialogPrimitive.Root
8 | 
9 | const AlertDialogTrigger = AlertDialogPrimitive.Trigger
10 | 
11 | const AlertDialogPortal = AlertDialogPrimitive.Portal
12 | 
13 | const AlertDialogOverlay = React.forwardRef<
14 |   React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
15 |   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
16 | >(({ className, ...props }, ref) => (
17 |   <AlertDialogPrimitive.Overlay
18 |     className={cn(
19 |       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
20 |       className
21 |     )}
22 |     {...props}
23 |     ref={ref}
24 |   />
25 | ))
26 | AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName
27 | 
28 | const AlertDialogContent = React.forwardRef<
29 |   React.ElementRef<typeof AlertDialogPrimitive.Content>,
30 |   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
31 | >(({ className, ...props }, ref) => (
32 |   <AlertDialogPortal>
33 |     <AlertDialogOverlay />
34 |     <AlertDialogPrimitive.Content
35 |       ref={ref}
36 |       className={cn(
37 |         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
38 |         className
39 |       )}
40 |       {...props}
41 |     />
42 |   </AlertDialogPortal>
43 | ))
44 | AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
45 | 
46 | const AlertDialogHeader = ({
47 |   className,
48 |   ...props
49 | }: React.HTMLAttributes<HTMLDivElement>) => (
50 |   <div
51 |     className={cn(
52 |       "flex flex-col space-y-2 text-center sm:text-left",
53 |       className
54 |     )}
55 |     {...props}
56 |   />
57 | )
58 | AlertDialogHeader.displayName = "AlertDialogHeader"
59 | 
60 | const AlertDialogFooter = ({
61 |   className,
62 |   ...props
63 | }: React.HTMLAttributes<HTMLDivElement>) => (
64 |   <div
65 |     className={cn(
66 |       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
67 |       className
68 |     )}
69 |     {...props}
70 |   />
71 | )
72 | AlertDialogFooter.displayName = "AlertDialogFooter"
73 | 
74 | const AlertDialogTitle = React.forwardRef<
75 |   React.ElementRef<typeof AlertDialogPrimitive.Title>,
76 |   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
77 | >(({ className, ...props }, ref) => (
78 |   <AlertDialogPrimitive.Title
79 |     ref={ref}
80 |     className={cn("text-lg font-semibold", className)}
81 |     {...props}
82 |   />
83 | ))
84 | AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName
85 | 
86 | const AlertDialogDescription = React.forwardRef<
87 |   React.ElementRef<typeof AlertDialogPrimitive.Description>,
88 |   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
89 | >(({ className, ...props }, ref) => (
90 |   <AlertDialogPrimitive.Description
91 |     ref={ref}
92 |     className={cn("text-sm text-muted-foreground", className)}
93 |     {...props}
94 |   />
95 | ))
96 | AlertDialogDescription.displayName =
97 |   AlertDialogPrimitive.Description.displayName
98 | 
99 | const AlertDialogAction = React.forwardRef<
100 |   React.ElementRef<typeof AlertDialogPrimitive.Action>,
101 |   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
102 | >(({ className, ...props }, ref) => (
103 |   <AlertDialogPrimitive.Action
104 |     ref={ref}
105 |     className={cn(buttonVariants(), className)}
106 |     {...props}
107 |   />
108 | ))
109 | AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName
110 | 
111 | const AlertDialogCancel = React.forwardRef<
112 |   React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
113 |   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
114 | >(({ className, ...props }, ref) => (
115 |   <AlertDialogPrimitive.Cancel
116 |     ref={ref}
117 |     className={cn(
118 |       buttonVariants({ variant: "outline" }),
119 |       "mt-2 sm:mt-0",
120 |       className
121 |     )}
122 |     {...props}
123 |   />
124 | ))
125 | AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
126 | 
127 | export {
128 |   AlertDialog,
129 |   AlertDialogPortal,
130 |   AlertDialogOverlay,
131 |   AlertDialogTrigger,
132 |   AlertDialogContent,
133 |   AlertDialogHeader,
134 |   AlertDialogFooter,
135 |   AlertDialogTitle,
136 |   AlertDialogDescription,
137 |   AlertDialogAction,
138 |   AlertDialogCancel,
139 | }
```

src/components/ui/alert.tsx
```
1 | import * as React from "react"
2 | import { cva, type VariantProps } from "class-variance-authority"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const alertVariants = cva(
7 |   "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
8 |   {
9 |     variants: {
10 |       variant: {
11 |         default: "bg-background text-foreground",
12 |         destructive:
13 |           "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
14 |       },
15 |     },
16 |     defaultVariants: {
17 |       variant: "default",
18 |     },
19 |   }
20 | )
21 | 
22 | const Alert = React.forwardRef<
23 |   HTMLDivElement,
24 |   React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
25 | >(({ className, variant, ...props }, ref) => (
26 |   <div
27 |     ref={ref}
28 |     role="alert"
29 |     className={cn(alertVariants({ variant }), className)}
30 |     {...props}
31 |   />
32 | ))
33 | Alert.displayName = "Alert"
34 | 
35 | const AlertTitle = React.forwardRef<
36 |   HTMLParagraphElement,
37 |   React.HTMLAttributes<HTMLHeadingElement>
38 | >(({ className, ...props }, ref) => (
39 |   <h5
40 |     ref={ref}
41 |     className={cn("mb-1 font-medium leading-none tracking-tight", className)}
42 |     {...props}
43 |   />
44 | ))
45 | AlertTitle.displayName = "AlertTitle"
46 | 
47 | const AlertDescription = React.forwardRef<
48 |   HTMLParagraphElement,
49 |   React.HTMLAttributes<HTMLParagraphElement>
50 | >(({ className, ...props }, ref) => (
51 |   <div
52 |     ref={ref}
53 |     className={cn("text-sm [&_p]:leading-relaxed", className)}
54 |     {...props}
55 |   />
56 | ))
57 | AlertDescription.displayName = "AlertDescription"
58 | 
59 | export { Alert, AlertTitle, AlertDescription }
```

src/components/ui/aspect-ratio.tsx
```
1 | import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
2 | 
3 | const AspectRatio = AspectRatioPrimitive.Root
4 | 
5 | export { AspectRatio }
```

src/components/ui/avatar.tsx
```
1 | import * as React from "react"
2 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Avatar = React.forwardRef<
7 |   React.ElementRef<typeof AvatarPrimitive.Root>,
8 |   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
9 | >(({ className, ...props }, ref) => (
10 |   <AvatarPrimitive.Root
11 |     ref={ref}
12 |     className={cn(
13 |       "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
14 |       className
15 |     )}
16 |     {...props}
17 |   />
18 | ))
19 | Avatar.displayName = AvatarPrimitive.Root.displayName
20 | 
21 | const AvatarImage = React.forwardRef<
22 |   React.ElementRef<typeof AvatarPrimitive.Image>,
23 |   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
24 | >(({ className, ...props }, ref) => (
25 |   <AvatarPrimitive.Image
26 |     ref={ref}
27 |     className={cn("aspect-square h-full w-full", className)}
28 |     {...props}
29 |   />
30 | ))
31 | AvatarImage.displayName = AvatarPrimitive.Image.displayName
32 | 
33 | const AvatarFallback = React.forwardRef<
34 |   React.ElementRef<typeof AvatarPrimitive.Fallback>,
35 |   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
36 | >(({ className, ...props }, ref) => (
37 |   <AvatarPrimitive.Fallback
38 |     ref={ref}
39 |     className={cn(
40 |       "flex h-full w-full items-center justify-center rounded-full bg-muted",
41 |       className
42 |     )}
43 |     {...props}
44 |   />
45 | ))
46 | AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
47 | 
48 | export { Avatar, AvatarImage, AvatarFallback }
```

src/components/ui/badge.tsx
```
1 | import * as React from "react"
2 | import { cva, type VariantProps } from "class-variance-authority"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const badgeVariants = cva(
7 |   "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
8 |   {
9 |     variants: {
10 |       variant: {
11 |         default:
12 |           "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
13 |         secondary:
14 |           "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
15 |         destructive:
16 |           "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
17 |         outline: "text-foreground",
18 |       },
19 |     },
20 |     defaultVariants: {
21 |       variant: "default",
22 |     },
23 |   }
24 | )
25 | 
26 | export interface BadgeProps
27 |   extends React.HTMLAttributes<HTMLDivElement>,
28 |     VariantProps<typeof badgeVariants> {}
29 | 
30 | function Badge({ className, variant, ...props }: BadgeProps) {
31 |   return (
32 |     <div className={cn(badgeVariants({ variant }), className)} {...props} />
33 |   )
34 | }
35 | 
36 | export { Badge, badgeVariants }
```

src/components/ui/breadcrumb.tsx
```
1 | import * as React from "react"
2 | import { Slot } from "@radix-ui/react-slot"
3 | import { ChevronRight, MoreHorizontal } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const Breadcrumb = React.forwardRef<
8 |   HTMLElement,
9 |   React.ComponentPropsWithoutRef<"nav"> & {
10 |     separator?: React.ReactNode
11 |   }
12 | >(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
13 | Breadcrumb.displayName = "Breadcrumb"
14 | 
15 | const BreadcrumbList = React.forwardRef<
16 |   HTMLOListElement,
17 |   React.ComponentPropsWithoutRef<"ol">
18 | >(({ className, ...props }, ref) => (
19 |   <ol
20 |     ref={ref}
21 |     className={cn(
22 |       "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
23 |       className
24 |     )}
25 |     {...props}
26 |   />
27 | ))
28 | BreadcrumbList.displayName = "BreadcrumbList"
29 | 
30 | const BreadcrumbItem = React.forwardRef<
31 |   HTMLLIElement,
32 |   React.ComponentPropsWithoutRef<"li">
33 | >(({ className, ...props }, ref) => (
34 |   <li
35 |     ref={ref}
36 |     className={cn("inline-flex items-center gap-1.5", className)}
37 |     {...props}
38 |   />
39 | ))
40 | BreadcrumbItem.displayName = "BreadcrumbItem"
41 | 
42 | const BreadcrumbLink = React.forwardRef<
43 |   HTMLAnchorElement,
44 |   React.ComponentPropsWithoutRef<"a"> & {
45 |     asChild?: boolean
46 |   }
47 | >(({ asChild, className, ...props }, ref) => {
48 |   const Comp = asChild ? Slot : "a"
49 | 
50 |   return (
51 |     <Comp
52 |       ref={ref}
53 |       className={cn("transition-colors hover:text-foreground", className)}
54 |       {...props}
55 |     />
56 |   )
57 | })
58 | BreadcrumbLink.displayName = "BreadcrumbLink"
59 | 
60 | const BreadcrumbPage = React.forwardRef<
61 |   HTMLSpanElement,
62 |   React.ComponentPropsWithoutRef<"span">
63 | >(({ className, ...props }, ref) => (
64 |   <span
65 |     ref={ref}
66 |     role="link"
67 |     aria-disabled="true"
68 |     aria-current="page"
69 |     className={cn("font-normal text-foreground", className)}
70 |     {...props}
71 |   />
72 | ))
73 | BreadcrumbPage.displayName = "BreadcrumbPage"
74 | 
75 | const BreadcrumbSeparator = ({
76 |   children,
77 |   className,
78 |   ...props
79 | }: React.ComponentProps<"li">) => (
80 |   <li
81 |     role="presentation"
82 |     aria-hidden="true"
83 |     className={cn("[&>svg]:size-3.5", className)}
84 |     {...props}
85 |   >
86 |     {children ?? <ChevronRight />}
87 |   </li>
88 | )
89 | BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
90 | 
91 | const BreadcrumbEllipsis = ({
92 |   className,
93 |   ...props
94 | }: React.ComponentProps<"span">) => (
95 |   <span
96 |     role="presentation"
97 |     aria-hidden="true"
98 |     className={cn("flex h-9 w-9 items-center justify-center", className)}
99 |     {...props}
100 |   >
101 |     <MoreHorizontal className="h-4 w-4" />
102 |     <span className="sr-only">More</span>
103 |   </span>
104 | )
105 | BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
106 | 
107 | export {
108 |   Breadcrumb,
109 |   BreadcrumbList,
110 |   BreadcrumbItem,
111 |   BreadcrumbLink,
112 |   BreadcrumbPage,
113 |   BreadcrumbSeparator,
114 |   BreadcrumbEllipsis,
115 | }
```

src/components/ui/button.tsx
```
1 | import * as React from "react"
2 | import { Slot } from "@radix-ui/react-slot"
3 | import { cva, type VariantProps } from "class-variance-authority"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const buttonVariants = cva(
8 |   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
9 |   {
10 |     variants: {
11 |       variant: {
12 |         default: "bg-primary text-primary-foreground hover:bg-primary/90",
13 |         destructive:
14 |           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
15 |         outline:
16 |           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
17 |         secondary:
18 |           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
19 |         ghost: "hover:bg-accent hover:text-accent-foreground",
20 |         link: "text-primary underline-offset-4 hover:underline",
21 |       },
22 |       size: {
23 |         default: "h-10 px-4 py-2",
24 |         sm: "h-9 rounded-md px-3",
25 |         lg: "h-11 rounded-md px-8",
26 |         icon: "h-10 w-10",
27 |       },
28 |     },
29 |     defaultVariants: {
30 |       variant: "default",
31 |       size: "default",
32 |     },
33 |   }
34 | )
35 | 
36 | export interface ButtonProps
37 |   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
38 |     VariantProps<typeof buttonVariants> {
39 |   asChild?: boolean
40 | }
41 | 
42 | const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
43 |   ({ className, variant, size, asChild = false, ...props }, ref) => {
44 |     const Comp = asChild ? Slot : "button"
45 |     return (
46 |       <Comp
47 |         className={cn(buttonVariants({ variant, size, className }))}
48 |         ref={ref}
49 |         {...props}
50 |       />
51 |     )
52 |   }
53 | )
54 | Button.displayName = "Button"
55 | 
56 | export { Button, buttonVariants }
```

src/components/ui/calendar.tsx
```
1 | import * as React from "react";
2 | import { ChevronLeft, ChevronRight } from "lucide-react";
3 | import { DayPicker } from "react-day-picker";
4 | 
5 | import { cn } from "@/lib/utils";
6 | import { buttonVariants } from "@/components/ui/button";
7 | 
8 | export type CalendarProps = React.ComponentProps<typeof DayPicker>;
9 | 
10 | function Calendar({
11 |   className,
12 |   classNames,
13 |   showOutsideDays = true,
14 |   ...props
15 | }: CalendarProps) {
16 |   return (
17 |     <DayPicker
18 |       showOutsideDays={showOutsideDays}
19 |       className={cn("p-3", className)}
20 |       classNames={{
21 |         months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
22 |         month: "space-y-4",
23 |         caption: "flex justify-center pt-1 relative items-center",
24 |         caption_label: "text-sm font-medium",
25 |         nav: "space-x-1 flex items-center",
26 |         nav_button: cn(
27 |           buttonVariants({ variant: "outline" }),
28 |           "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
29 |         ),
30 |         nav_button_previous: "absolute left-1",
31 |         nav_button_next: "absolute right-1",
32 |         table: "w-full border-collapse space-y-1",
33 |         head_row: "flex",
34 |         head_cell:
35 |           "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
36 |         row: "flex w-full mt-2",
37 |         cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
38 |         day: cn(
39 |           buttonVariants({ variant: "ghost" }),
40 |           "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
41 |         ),
42 |         day_range_end: "day-range-end",
43 |         day_selected:
44 |           "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
45 |         day_today: "bg-accent text-accent-foreground",
46 |         day_outside:
47 |           "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
48 |         day_disabled: "text-muted-foreground opacity-50",
49 |         day_range_middle:
50 |           "aria-selected:bg-accent aria-selected:text-accent-foreground",
51 |         day_hidden: "invisible",
52 |         ...classNames,
53 |       }}
54 |       components={{
55 |         IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
56 |         IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
57 |       }}
58 |       {...props}
59 |     />
60 |   );
61 | }
62 | Calendar.displayName = "Calendar";
63 | 
64 | export { Calendar };
```

src/components/ui/card.tsx
```
1 | import * as React from "react"
2 | 
3 | import { cn } from "@/lib/utils"
4 | 
5 | const Card = React.forwardRef<
6 |   HTMLDivElement,
7 |   React.HTMLAttributes<HTMLDivElement>
8 | >(({ className, ...props }, ref) => (
9 |   <div
10 |     ref={ref}
11 |     className={cn(
12 |       "rounded-lg border bg-card text-card-foreground shadow-sm",
13 |       className
14 |     )}
15 |     {...props}
16 |   />
17 | ))
18 | Card.displayName = "Card"
19 | 
20 | const CardHeader = React.forwardRef<
21 |   HTMLDivElement,
22 |   React.HTMLAttributes<HTMLDivElement>
23 | >(({ className, ...props }, ref) => (
24 |   <div
25 |     ref={ref}
26 |     className={cn("flex flex-col space-y-1.5 p-6", className)}
27 |     {...props}
28 |   />
29 | ))
30 | CardHeader.displayName = "CardHeader"
31 | 
32 | const CardTitle = React.forwardRef<
33 |   HTMLParagraphElement,
34 |   React.HTMLAttributes<HTMLHeadingElement>
35 | >(({ className, ...props }, ref) => (
36 |   <h3
37 |     ref={ref}
38 |     className={cn(
39 |       "text-2xl font-semibold leading-none tracking-tight",
40 |       className
41 |     )}
42 |     {...props}
43 |   />
44 | ))
45 | CardTitle.displayName = "CardTitle"
46 | 
47 | const CardDescription = React.forwardRef<
48 |   HTMLParagraphElement,
49 |   React.HTMLAttributes<HTMLParagraphElement>
50 | >(({ className, ...props }, ref) => (
51 |   <p
52 |     ref={ref}
53 |     className={cn("text-sm text-muted-foreground", className)}
54 |     {...props}
55 |   />
56 | ))
57 | CardDescription.displayName = "CardDescription"
58 | 
59 | const CardContent = React.forwardRef<
60 |   HTMLDivElement,
61 |   React.HTMLAttributes<HTMLDivElement>
62 | >(({ className, ...props }, ref) => (
63 |   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
64 | ))
65 | CardContent.displayName = "CardContent"
66 | 
67 | const CardFooter = React.forwardRef<
68 |   HTMLDivElement,
69 |   React.HTMLAttributes<HTMLDivElement>
70 | >(({ className, ...props }, ref) => (
71 |   <div
72 |     ref={ref}
73 |     className={cn("flex items-center p-6 pt-0", className)}
74 |     {...props}
75 |   />
76 | ))
77 | CardFooter.displayName = "CardFooter"
78 | 
79 | export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

src/components/ui/carousel.tsx
```
1 | import * as React from "react"
2 | import useEmblaCarousel, {
3 |   type UseEmblaCarouselType,
4 | } from "embla-carousel-react"
5 | import { ArrowLeft, ArrowRight } from "lucide-react"
6 | 
7 | import { cn } from "@/lib/utils"
8 | import { Button } from "@/components/ui/button"
9 | 
10 | type CarouselApi = UseEmblaCarouselType[1]
11 | type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
12 | type CarouselOptions = UseCarouselParameters[0]
13 | type CarouselPlugin = UseCarouselParameters[1]
14 | 
15 | type CarouselProps = {
16 |   opts?: CarouselOptions
17 |   plugins?: CarouselPlugin
18 |   orientation?: "horizontal" | "vertical"
19 |   setApi?: (api: CarouselApi) => void
20 | }
21 | 
22 | type CarouselContextProps = {
23 |   carouselRef: ReturnType<typeof useEmblaCarousel>[0]
24 |   api: ReturnType<typeof useEmblaCarousel>[1]
25 |   scrollPrev: () => void
26 |   scrollNext: () => void
27 |   canScrollPrev: boolean
28 |   canScrollNext: boolean
29 | } & CarouselProps
30 | 
31 | const CarouselContext = React.createContext<CarouselContextProps | null>(null)
32 | 
33 | function useCarousel() {
34 |   const context = React.useContext(CarouselContext)
35 | 
36 |   if (!context) {
37 |     throw new Error("useCarousel must be used within a <Carousel />")
38 |   }
39 | 
40 |   return context
41 | }
42 | 
43 | const Carousel = React.forwardRef<
44 |   HTMLDivElement,
45 |   React.HTMLAttributes<HTMLDivElement> & CarouselProps
46 | >(
47 |   (
48 |     {
49 |       orientation = "horizontal",
50 |       opts,
51 |       setApi,
52 |       plugins,
53 |       className,
54 |       children,
55 |       ...props
56 |     },
57 |     ref
58 |   ) => {
59 |     const [carouselRef, api] = useEmblaCarousel(
60 |       {
61 |         ...opts,
62 |         axis: orientation === "horizontal" ? "x" : "y",
63 |       },
64 |       plugins
65 |     )
66 |     const [canScrollPrev, setCanScrollPrev] = React.useState(false)
67 |     const [canScrollNext, setCanScrollNext] = React.useState(false)
68 | 
69 |     const onSelect = React.useCallback((api: CarouselApi) => {
70 |       if (!api) {
71 |         return
72 |       }
73 | 
74 |       setCanScrollPrev(api.canScrollPrev())
75 |       setCanScrollNext(api.canScrollNext())
76 |     }, [])
77 | 
78 |     const scrollPrev = React.useCallback(() => {
79 |       api?.scrollPrev()
80 |     }, [api])
81 | 
82 |     const scrollNext = React.useCallback(() => {
83 |       api?.scrollNext()
84 |     }, [api])
85 | 
86 |     const handleKeyDown = React.useCallback(
87 |       (event: React.KeyboardEvent<HTMLDivElement>) => {
88 |         if (event.key === "ArrowLeft") {
89 |           event.preventDefault()
90 |           scrollPrev()
91 |         } else if (event.key === "ArrowRight") {
92 |           event.preventDefault()
93 |           scrollNext()
94 |         }
95 |       },
96 |       [scrollPrev, scrollNext]
97 |     )
98 | 
99 |     React.useEffect(() => {
100 |       if (!api || !setApi) {
101 |         return
102 |       }
103 | 
104 |       setApi(api)
105 |     }, [api, setApi])
106 | 
107 |     React.useEffect(() => {
108 |       if (!api) {
109 |         return
110 |       }
111 | 
112 |       onSelect(api)
113 |       api.on("reInit", onSelect)
114 |       api.on("select", onSelect)
115 | 
116 |       return () => {
117 |         api?.off("select", onSelect)
118 |       }
119 |     }, [api, onSelect])
120 | 
121 |     return (
122 |       <CarouselContext.Provider
123 |         value={{
124 |           carouselRef,
125 |           api: api,
126 |           opts,
127 |           orientation:
128 |             orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
129 |           scrollPrev,
130 |           scrollNext,
131 |           canScrollPrev,
132 |           canScrollNext,
133 |         }}
134 |       >
135 |         <div
136 |           ref={ref}
137 |           onKeyDownCapture={handleKeyDown}
138 |           className={cn("relative", className)}
139 |           role="region"
140 |           aria-roledescription="carousel"
141 |           {...props}
142 |         >
143 |           {children}
144 |         </div>
145 |       </CarouselContext.Provider>
146 |     )
147 |   }
148 | )
149 | Carousel.displayName = "Carousel"
150 | 
151 | const CarouselContent = React.forwardRef<
152 |   HTMLDivElement,
153 |   React.HTMLAttributes<HTMLDivElement>
154 | >(({ className, ...props }, ref) => {
155 |   const { carouselRef, orientation } = useCarousel()
156 | 
157 |   return (
158 |     <div ref={carouselRef} className="overflow-hidden">
159 |       <div
160 |         ref={ref}
161 |         className={cn(
162 |           "flex",
163 |           orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
164 |           className
165 |         )}
166 |         {...props}
167 |       />
168 |     </div>
169 |   )
170 | })
171 | CarouselContent.displayName = "CarouselContent"
172 | 
173 | const CarouselItem = React.forwardRef<
174 |   HTMLDivElement,
175 |   React.HTMLAttributes<HTMLDivElement>
176 | >(({ className, ...props }, ref) => {
177 |   const { orientation } = useCarousel()
178 | 
179 |   return (
180 |     <div
181 |       ref={ref}
182 |       role="group"
183 |       aria-roledescription="slide"
184 |       className={cn(
185 |         "min-w-0 shrink-0 grow-0 basis-full",
186 |         orientation === "horizontal" ? "pl-4" : "pt-4",
187 |         className
188 |       )}
189 |       {...props}
190 |     />
191 |   )
192 | })
193 | CarouselItem.displayName = "CarouselItem"
194 | 
195 | const CarouselPrevious = React.forwardRef<
196 |   HTMLButtonElement,
197 |   React.ComponentProps<typeof Button>
198 | >(({ className, variant = "outline", size = "icon", ...props }, ref) => {
199 |   const { orientation, scrollPrev, canScrollPrev } = useCarousel()
200 | 
201 |   return (
202 |     <Button
203 |       ref={ref}
204 |       variant={variant}
205 |       size={size}
206 |       className={cn(
207 |         "absolute  h-8 w-8 rounded-full",
208 |         orientation === "horizontal"
209 |           ? "-left-12 top-1/2 -translate-y-1/2"
210 |           : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
211 |         className
212 |       )}
213 |       disabled={!canScrollPrev}
214 |       onClick={scrollPrev}
215 |       {...props}
216 |     >
217 |       <ArrowLeft className="h-4 w-4" />
218 |       <span className="sr-only">Previous slide</span>
219 |     </Button>
220 |   )
221 | })
222 | CarouselPrevious.displayName = "CarouselPrevious"
223 | 
224 | const CarouselNext = React.forwardRef<
225 |   HTMLButtonElement,
226 |   React.ComponentProps<typeof Button>
227 | >(({ className, variant = "outline", size = "icon", ...props }, ref) => {
228 |   const { orientation, scrollNext, canScrollNext } = useCarousel()
229 | 
230 |   return (
231 |     <Button
232 |       ref={ref}
233 |       variant={variant}
234 |       size={size}
235 |       className={cn(
236 |         "absolute h-8 w-8 rounded-full",
237 |         orientation === "horizontal"
238 |           ? "-right-12 top-1/2 -translate-y-1/2"
239 |           : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
240 |         className
241 |       )}
242 |       disabled={!canScrollNext}
243 |       onClick={scrollNext}
244 |       {...props}
245 |     >
246 |       <ArrowRight className="h-4 w-4" />
247 |       <span className="sr-only">Next slide</span>
248 |     </Button>
249 |   )
250 | })
251 | CarouselNext.displayName = "CarouselNext"
252 | 
253 | export {
254 |   type CarouselApi,
255 |   Carousel,
256 |   CarouselContent,
257 |   CarouselItem,
258 |   CarouselPrevious,
259 |   CarouselNext,
260 | }
```

src/components/ui/chart.tsx
```
1 | import * as React from "react"
2 | import * as RechartsPrimitive from "recharts"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | // Format: { THEME_NAME: CSS_SELECTOR }
7 | const THEMES = { light: "", dark: ".dark" } as const
8 | 
9 | export type ChartConfig = {
10 |   [k in string]: {
11 |     label?: React.ReactNode
12 |     icon?: React.ComponentType
13 |   } & (
14 |     | { color?: string; theme?: never }
15 |     | { color?: never; theme: Record<keyof typeof THEMES, string> }
16 |   )
17 | }
18 | 
19 | type ChartContextProps = {
20 |   config: ChartConfig
21 | }
22 | 
23 | const ChartContext = React.createContext<ChartContextProps | null>(null)
24 | 
25 | function useChart() {
26 |   const context = React.useContext(ChartContext)
27 | 
28 |   if (!context) {
29 |     throw new Error("useChart must be used within a <ChartContainer />")
30 |   }
31 | 
32 |   return context
33 | }
34 | 
35 | const ChartContainer = React.forwardRef<
36 |   HTMLDivElement,
37 |   React.ComponentProps<"div"> & {
38 |     config: ChartConfig
39 |     children: React.ComponentProps<
40 |       typeof RechartsPrimitive.ResponsiveContainer
41 |     >["children"]
42 |   }
43 | >(({ id, className, children, config, ...props }, ref) => {
44 |   const uniqueId = React.useId()
45 |   const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`
46 | 
47 |   return (
48 |     <ChartContext.Provider value={{ config }}>
49 |       <div
50 |         data-chart={chartId}
51 |         ref={ref}
52 |         className={cn(
53 |           "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
54 |           className
55 |         )}
56 |         {...props}
57 |       >
58 |         <ChartStyle id={chartId} config={config} />
59 |         <RechartsPrimitive.ResponsiveContainer>
60 |           {children}
61 |         </RechartsPrimitive.ResponsiveContainer>
62 |       </div>
63 |     </ChartContext.Provider>
64 |   )
65 | })
66 | ChartContainer.displayName = "Chart"
67 | 
68 | const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
69 |   const colorConfig = Object.entries(config).filter(
70 |     ([_, config]) => config.theme || config.color
71 |   )
72 | 
73 |   if (!colorConfig.length) {
74 |     return null
75 |   }
76 | 
77 |   return (
78 |     <style
79 |       dangerouslySetInnerHTML={{
80 |         __html: Object.entries(THEMES)
81 |           .map(
82 |             ([theme, prefix]) => `
83 | ${prefix} [data-chart=${id}] {
84 | ${colorConfig
85 |   .map(([key, itemConfig]) => {
86 |     const color =
87 |       itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
88 |       itemConfig.color
89 |     return color ? `  --color-${key}: ${color};` : null
90 |   })
91 |   .join("\n")}
92 | }
93 | `
94 |           )
95 |           .join("\n"),
96 |       }}
97 |     />
98 |   )
99 | }
100 | 
101 | const ChartTooltip = RechartsPrimitive.Tooltip
102 | 
103 | const ChartTooltipContent = React.forwardRef<
104 |   HTMLDivElement,
105 |   React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
106 |     React.ComponentProps<"div"> & {
107 |       hideLabel?: boolean
108 |       hideIndicator?: boolean
109 |       indicator?: "line" | "dot" | "dashed"
110 |       nameKey?: string
111 |       labelKey?: string
112 |     }
113 | >(
114 |   (
115 |     {
116 |       active,
117 |       payload,
118 |       className,
119 |       indicator = "dot",
120 |       hideLabel = false,
121 |       hideIndicator = false,
122 |       label,
123 |       labelFormatter,
124 |       labelClassName,
125 |       formatter,
126 |       color,
127 |       nameKey,
128 |       labelKey,
129 |     },
130 |     ref
131 |   ) => {
132 |     const { config } = useChart()
133 | 
134 |     const tooltipLabel = React.useMemo(() => {
135 |       if (hideLabel || !payload?.length) {
136 |         return null
137 |       }
138 | 
139 |       const [item] = payload
140 |       const key = `${labelKey || item.dataKey || item.name || "value"}`
141 |       const itemConfig = getPayloadConfigFromPayload(config, item, key)
142 |       const value =
143 |         !labelKey && typeof label === "string"
144 |           ? config[label as keyof typeof config]?.label || label
145 |           : itemConfig?.label
146 | 
147 |       if (labelFormatter) {
148 |         return (
149 |           <div className={cn("font-medium", labelClassName)}>
150 |             {labelFormatter(value, payload)}
151 |           </div>
152 |         )
153 |       }
154 | 
155 |       if (!value) {
156 |         return null
157 |       }
158 | 
159 |       return <div className={cn("font-medium", labelClassName)}>{value}</div>
160 |     }, [
161 |       label,
162 |       labelFormatter,
163 |       payload,
164 |       hideLabel,
165 |       labelClassName,
166 |       config,
167 |       labelKey,
168 |     ])
169 | 
170 |     if (!active || !payload?.length) {
171 |       return null
172 |     }
173 | 
174 |     const nestLabel = payload.length === 1 && indicator !== "dot"
175 | 
176 |     return (
177 |       <div
178 |         ref={ref}
179 |         className={cn(
180 |           "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
181 |           className
182 |         )}
183 |       >
184 |         {!nestLabel ? tooltipLabel : null}
185 |         <div className="grid gap-1.5">
186 |           {payload.map((item, index) => {
187 |             const key = `${nameKey || item.name || item.dataKey || "value"}`
188 |             const itemConfig = getPayloadConfigFromPayload(config, item, key)
189 |             const indicatorColor = color || item.payload.fill || item.color
190 | 
191 |             return (
192 |               <div
193 |                 key={item.dataKey}
194 |                 className={cn(
195 |                   "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
196 |                   indicator === "dot" && "items-center"
197 |                 )}
198 |               >
199 |                 {formatter && item?.value !== undefined && item.name ? (
200 |                   formatter(item.value, item.name, item, index, item.payload)
201 |                 ) : (
202 |                   <>
203 |                     {itemConfig?.icon ? (
204 |                       <itemConfig.icon />
205 |                     ) : (
206 |                       !hideIndicator && (
207 |                         <div
208 |                           className={cn(
209 |                             "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
210 |                             {
211 |                               "h-2.5 w-2.5": indicator === "dot",
212 |                               "w-1": indicator === "line",
213 |                               "w-0 border-[1.5px] border-dashed bg-transparent":
214 |                                 indicator === "dashed",
215 |                               "my-0.5": nestLabel && indicator === "dashed",
216 |                             }
217 |                           )}
218 |                           style={
219 |                             {
220 |                               "--color-bg": indicatorColor,
221 |                               "--color-border": indicatorColor,
222 |                             } as React.CSSProperties
223 |                           }
224 |                         />
225 |                       )
226 |                     )}
227 |                     <div
228 |                       className={cn(
229 |                         "flex flex-1 justify-between leading-none",
230 |                         nestLabel ? "items-end" : "items-center"
231 |                       )}
232 |                     >
233 |                       <div className="grid gap-1.5">
234 |                         {nestLabel ? tooltipLabel : null}
235 |                         <span className="text-muted-foreground">
236 |                           {itemConfig?.label || item.name}
237 |                         </span>
238 |                       </div>
239 |                       {item.value && (
240 |                         <span className="font-mono font-medium tabular-nums text-foreground">
241 |                           {item.value.toLocaleString()}
242 |                         </span>
243 |                       )}
244 |                     </div>
245 |                   </>
246 |                 )}
247 |               </div>
248 |             )
249 |           })}
250 |         </div>
251 |       </div>
252 |     )
253 |   }
254 | )
255 | ChartTooltipContent.displayName = "ChartTooltip"
256 | 
257 | const ChartLegend = RechartsPrimitive.Legend
258 | 
259 | const ChartLegendContent = React.forwardRef<
260 |   HTMLDivElement,
261 |   React.ComponentProps<"div"> &
262 |     Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
263 |       hideIcon?: boolean
264 |       nameKey?: string
265 |     }
266 | >(
267 |   (
268 |     { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
269 |     ref
270 |   ) => {
271 |     const { config } = useChart()
272 | 
273 |     if (!payload?.length) {
274 |       return null
275 |     }
276 | 
277 |     return (
278 |       <div
279 |         ref={ref}
280 |         className={cn(
281 |           "flex items-center justify-center gap-4",
282 |           verticalAlign === "top" ? "pb-3" : "pt-3",
283 |           className
284 |         )}
285 |       >
286 |         {payload.map((item) => {
287 |           const key = `${nameKey || item.dataKey || "value"}`
288 |           const itemConfig = getPayloadConfigFromPayload(config, item, key)
289 | 
290 |           return (
291 |             <div
292 |               key={item.value}
293 |               className={cn(
294 |                 "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
295 |               )}
296 |             >
297 |               {itemConfig?.icon && !hideIcon ? (
298 |                 <itemConfig.icon />
299 |               ) : (
300 |                 <div
301 |                   className="h-2 w-2 shrink-0 rounded-[2px]"
302 |                   style={{
303 |                     backgroundColor: item.color,
304 |                   }}
305 |                 />
306 |               )}
307 |               {itemConfig?.label}
308 |             </div>
309 |           )
310 |         })}
311 |       </div>
312 |     )
313 |   }
314 | )
315 | ChartLegendContent.displayName = "ChartLegend"
316 | 
317 | // Helper to extract item config from a payload.
318 | function getPayloadConfigFromPayload(
319 |   config: ChartConfig,
320 |   payload: unknown,
321 |   key: string
322 | ) {
323 |   if (typeof payload !== "object" || payload === null) {
324 |     return undefined
325 |   }
326 | 
327 |   const payloadPayload =
328 |     "payload" in payload &&
329 |     typeof payload.payload === "object" &&
330 |     payload.payload !== null
331 |       ? payload.payload
332 |       : undefined
333 | 
334 |   let configLabelKey: string = key
335 | 
336 |   if (
337 |     key in payload &&
338 |     typeof payload[key as keyof typeof payload] === "string"
339 |   ) {
340 |     configLabelKey = payload[key as keyof typeof payload] as string
341 |   } else if (
342 |     payloadPayload &&
343 |     key in payloadPayload &&
344 |     typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
345 |   ) {
346 |     configLabelKey = payloadPayload[
347 |       key as keyof typeof payloadPayload
348 |     ] as string
349 |   }
350 | 
351 |   return configLabelKey in config
352 |     ? config[configLabelKey]
353 |     : config[key as keyof typeof config]
354 | }
355 | 
356 | export {
357 |   ChartContainer,
358 |   ChartTooltip,
359 |   ChartTooltipContent,
360 |   ChartLegend,
361 |   ChartLegendContent,
362 |   ChartStyle,
363 | }
```

src/components/ui/checkbox.tsx
```
1 | import * as React from "react"
2 | import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
3 | import { Check } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const Checkbox = React.forwardRef<
8 |   React.ElementRef<typeof CheckboxPrimitive.Root>,
9 |   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
10 | >(({ className, ...props }, ref) => (
11 |   <CheckboxPrimitive.Root
12 |     ref={ref}
13 |     className={cn(
14 |       "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
15 |       className
16 |     )}
17 |     {...props}
18 |   >
19 |     <CheckboxPrimitive.Indicator
20 |       className={cn("flex items-center justify-center text-current")}
21 |     >
22 |       <Check className="h-4 w-4" />
23 |     </CheckboxPrimitive.Indicator>
24 |   </CheckboxPrimitive.Root>
25 | ))
26 | Checkbox.displayName = CheckboxPrimitive.Root.displayName
27 | 
28 | export { Checkbox }
```

src/components/ui/collapsible.tsx
```
1 | import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
2 | 
3 | const Collapsible = CollapsiblePrimitive.Root
4 | 
5 | const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger
6 | 
7 | const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent
8 | 
9 | export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

src/components/ui/command.tsx
```
1 | import * as React from "react"
2 | import { type DialogProps } from "@radix-ui/react-dialog"
3 | import { Command as CommandPrimitive } from "cmdk"
4 | import { Search } from "lucide-react"
5 | 
6 | import { cn } from "@/lib/utils"
7 | import { Dialog, DialogContent } from "@/components/ui/dialog"
8 | 
9 | const Command = React.forwardRef<
10 |   React.ElementRef<typeof CommandPrimitive>,
11 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive>
12 | >(({ className, ...props }, ref) => (
13 |   <CommandPrimitive
14 |     ref={ref}
15 |     className={cn(
16 |       "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
17 |       className
18 |     )}
19 |     {...props}
20 |   />
21 | ))
22 | Command.displayName = CommandPrimitive.displayName
23 | 
24 | interface CommandDialogProps extends DialogProps {}
25 | 
26 | const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
27 |   return (
28 |     <Dialog {...props}>
29 |       <DialogContent className="overflow-hidden p-0 shadow-lg">
30 |         <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
31 |           {children}
32 |         </Command>
33 |       </DialogContent>
34 |     </Dialog>
35 |   )
36 | }
37 | 
38 | const CommandInput = React.forwardRef<
39 |   React.ElementRef<typeof CommandPrimitive.Input>,
40 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
41 | >(({ className, ...props }, ref) => (
42 |   <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
43 |     <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
44 |     <CommandPrimitive.Input
45 |       ref={ref}
46 |       className={cn(
47 |         "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
48 |         className
49 |       )}
50 |       {...props}
51 |     />
52 |   </div>
53 | ))
54 | 
55 | CommandInput.displayName = CommandPrimitive.Input.displayName
56 | 
57 | const CommandList = React.forwardRef<
58 |   React.ElementRef<typeof CommandPrimitive.List>,
59 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
60 | >(({ className, ...props }, ref) => (
61 |   <CommandPrimitive.List
62 |     ref={ref}
63 |     className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
64 |     {...props}
65 |   />
66 | ))
67 | 
68 | CommandList.displayName = CommandPrimitive.List.displayName
69 | 
70 | const CommandEmpty = React.forwardRef<
71 |   React.ElementRef<typeof CommandPrimitive.Empty>,
72 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
73 | >((props, ref) => (
74 |   <CommandPrimitive.Empty
75 |     ref={ref}
76 |     className="py-6 text-center text-sm"
77 |     {...props}
78 |   />
79 | ))
80 | 
81 | CommandEmpty.displayName = CommandPrimitive.Empty.displayName
82 | 
83 | const CommandGroup = React.forwardRef<
84 |   React.ElementRef<typeof CommandPrimitive.Group>,
85 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
86 | >(({ className, ...props }, ref) => (
87 |   <CommandPrimitive.Group
88 |     ref={ref}
89 |     className={cn(
90 |       "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
91 |       className
92 |     )}
93 |     {...props}
94 |   />
95 | ))
96 | 
97 | CommandGroup.displayName = CommandPrimitive.Group.displayName
98 | 
99 | const CommandSeparator = React.forwardRef<
100 |   React.ElementRef<typeof CommandPrimitive.Separator>,
101 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
102 | >(({ className, ...props }, ref) => (
103 |   <CommandPrimitive.Separator
104 |     ref={ref}
105 |     className={cn("-mx-1 h-px bg-border", className)}
106 |     {...props}
107 |   />
108 | ))
109 | CommandSeparator.displayName = CommandPrimitive.Separator.displayName
110 | 
111 | const CommandItem = React.forwardRef<
112 |   React.ElementRef<typeof CommandPrimitive.Item>,
113 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
114 | >(({ className, ...props }, ref) => (
115 |   <CommandPrimitive.Item
116 |     ref={ref}
117 |     className={cn(
118 |       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
119 |       className
120 |     )}
121 |     {...props}
122 |   />
123 | ))
124 | 
125 | CommandItem.displayName = CommandPrimitive.Item.displayName
126 | 
127 | const CommandShortcut = ({
128 |   className,
129 |   ...props
130 | }: React.HTMLAttributes<HTMLSpanElement>) => {
131 |   return (
132 |     <span
133 |       className={cn(
134 |         "ml-auto text-xs tracking-widest text-muted-foreground",
135 |         className
136 |       )}
137 |       {...props}
138 |     />
139 |   )
140 | }
141 | CommandShortcut.displayName = "CommandShortcut"
142 | 
143 | export {
144 |   Command,
145 |   CommandDialog,
146 |   CommandInput,
147 |   CommandList,
148 |   CommandEmpty,
149 |   CommandGroup,
150 |   CommandItem,
151 |   CommandShortcut,
152 |   CommandSeparator,
153 | }
```

src/components/ui/context-menu.tsx
```
1 | import * as React from "react"
2 | import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
3 | import { Check, ChevronRight, Circle } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const ContextMenu = ContextMenuPrimitive.Root
8 | 
9 | const ContextMenuTrigger = ContextMenuPrimitive.Trigger
10 | 
11 | const ContextMenuGroup = ContextMenuPrimitive.Group
12 | 
13 | const ContextMenuPortal = ContextMenuPrimitive.Portal
14 | 
15 | const ContextMenuSub = ContextMenuPrimitive.Sub
16 | 
17 | const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
18 | 
19 | const ContextMenuSubTrigger = React.forwardRef<
20 |   React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
21 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
22 |     inset?: boolean
23 |   }
24 | >(({ className, inset, children, ...props }, ref) => (
25 |   <ContextMenuPrimitive.SubTrigger
26 |     ref={ref}
27 |     className={cn(
28 |       "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
29 |       inset && "pl-8",
30 |       className
31 |     )}
32 |     {...props}
33 |   >
34 |     {children}
35 |     <ChevronRight className="ml-auto h-4 w-4" />
36 |   </ContextMenuPrimitive.SubTrigger>
37 | ))
38 | ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
39 | 
40 | const ContextMenuSubContent = React.forwardRef<
41 |   React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
42 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
43 | >(({ className, ...props }, ref) => (
44 |   <ContextMenuPrimitive.SubContent
45 |     ref={ref}
46 |     className={cn(
47 |       "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
48 |       className
49 |     )}
50 |     {...props}
51 |   />
52 | ))
53 | ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName
54 | 
55 | const ContextMenuContent = React.forwardRef<
56 |   React.ElementRef<typeof ContextMenuPrimitive.Content>,
57 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
58 | >(({ className, ...props }, ref) => (
59 |   <ContextMenuPrimitive.Portal>
60 |     <ContextMenuPrimitive.Content
61 |       ref={ref}
62 |       className={cn(
63 |         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
64 |         className
65 |       )}
66 |       {...props}
67 |     />
68 |   </ContextMenuPrimitive.Portal>
69 | ))
70 | ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName
71 | 
72 | const ContextMenuItem = React.forwardRef<
73 |   React.ElementRef<typeof ContextMenuPrimitive.Item>,
74 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
75 |     inset?: boolean
76 |   }
77 | >(({ className, inset, ...props }, ref) => (
78 |   <ContextMenuPrimitive.Item
79 |     ref={ref}
80 |     className={cn(
81 |       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
82 |       inset && "pl-8",
83 |       className
84 |     )}
85 |     {...props}
86 |   />
87 | ))
88 | ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName
89 | 
90 | const ContextMenuCheckboxItem = React.forwardRef<
91 |   React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
92 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
93 | >(({ className, children, checked, ...props }, ref) => (
94 |   <ContextMenuPrimitive.CheckboxItem
95 |     ref={ref}
96 |     className={cn(
97 |       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
98 |       className
99 |     )}
100 |     checked={checked}
101 |     {...props}
102 |   >
103 |     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
104 |       <ContextMenuPrimitive.ItemIndicator>
105 |         <Check className="h-4 w-4" />
106 |       </ContextMenuPrimitive.ItemIndicator>
107 |     </span>
108 |     {children}
109 |   </ContextMenuPrimitive.CheckboxItem>
110 | ))
111 | ContextMenuCheckboxItem.displayName =
112 |   ContextMenuPrimitive.CheckboxItem.displayName
113 | 
114 | const ContextMenuRadioItem = React.forwardRef<
115 |   React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
116 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
117 | >(({ className, children, ...props }, ref) => (
118 |   <ContextMenuPrimitive.RadioItem
119 |     ref={ref}
120 |     className={cn(
121 |       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
122 |       className
123 |     )}
124 |     {...props}
125 |   >
126 |     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
127 |       <ContextMenuPrimitive.ItemIndicator>
128 |         <Circle className="h-2 w-2 fill-current" />
129 |       </ContextMenuPrimitive.ItemIndicator>
130 |     </span>
131 |     {children}
132 |   </ContextMenuPrimitive.RadioItem>
133 | ))
134 | ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName
135 | 
136 | const ContextMenuLabel = React.forwardRef<
137 |   React.ElementRef<typeof ContextMenuPrimitive.Label>,
138 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
139 |     inset?: boolean
140 |   }
141 | >(({ className, inset, ...props }, ref) => (
142 |   <ContextMenuPrimitive.Label
143 |     ref={ref}
144 |     className={cn(
145 |       "px-2 py-1.5 text-sm font-semibold text-foreground",
146 |       inset && "pl-8",
147 |       className
148 |     )}
149 |     {...props}
150 |   />
151 | ))
152 | ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName
153 | 
154 | const ContextMenuSeparator = React.forwardRef<
155 |   React.ElementRef<typeof ContextMenuPrimitive.Separator>,
156 |   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
157 | >(({ className, ...props }, ref) => (
158 |   <ContextMenuPrimitive.Separator
159 |     ref={ref}
160 |     className={cn("-mx-1 my-1 h-px bg-border", className)}
161 |     {...props}
162 |   />
163 | ))
164 | ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
165 | 
166 | const ContextMenuShortcut = ({
167 |   className,
168 |   ...props
169 | }: React.HTMLAttributes<HTMLSpanElement>) => {
170 |   return (
171 |     <span
172 |       className={cn(
173 |         "ml-auto text-xs tracking-widest text-muted-foreground",
174 |         className
175 |       )}
176 |       {...props}
177 |     />
178 |   )
179 | }
180 | ContextMenuShortcut.displayName = "ContextMenuShortcut"
181 | 
182 | export {
183 |   ContextMenu,
184 |   ContextMenuTrigger,
185 |   ContextMenuContent,
186 |   ContextMenuItem,
187 |   ContextMenuCheckboxItem,
188 |   ContextMenuRadioItem,
189 |   ContextMenuLabel,
190 |   ContextMenuSeparator,
191 |   ContextMenuShortcut,
192 |   ContextMenuGroup,
193 |   ContextMenuPortal,
194 |   ContextMenuSub,
195 |   ContextMenuSubContent,
196 |   ContextMenuSubTrigger,
197 |   ContextMenuRadioGroup,
198 | }
```

src/components/ui/dialog.tsx
```
1 | import * as React from "react"
2 | import * as DialogPrimitive from "@radix-ui/react-dialog"
3 | import { X } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const Dialog = DialogPrimitive.Root
8 | 
9 | const DialogTrigger = DialogPrimitive.Trigger
10 | 
11 | const DialogPortal = DialogPrimitive.Portal
12 | 
13 | const DialogClose = DialogPrimitive.Close
14 | 
15 | const DialogOverlay = React.forwardRef<
16 |   React.ElementRef<typeof DialogPrimitive.Overlay>,
17 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
18 | >(({ className, ...props }, ref) => (
19 |   <DialogPrimitive.Overlay
20 |     ref={ref}
21 |     className={cn(
22 |       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
23 |       className
24 |     )}
25 |     {...props}
26 |   />
27 | ))
28 | DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
29 | 
30 | const DialogContent = React.forwardRef<
31 |   React.ElementRef<typeof DialogPrimitive.Content>,
32 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
33 | >(({ className, children, ...props }, ref) => (
34 |   <DialogPortal>
35 |     <DialogOverlay />
36 |     <DialogPrimitive.Content
37 |       ref={ref}
38 |       className={cn(
39 |         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
40 |         className
41 |       )}
42 |       {...props}
43 |     >
44 |       {children}
45 |       <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
46 |         <X className="h-4 w-4" />
47 |         <span className="sr-only">Close</span>
48 |       </DialogPrimitive.Close>
49 |     </DialogPrimitive.Content>
50 |   </DialogPortal>
51 | ))
52 | DialogContent.displayName = DialogPrimitive.Content.displayName
53 | 
54 | const DialogHeader = ({
55 |   className,
56 |   ...props
57 | }: React.HTMLAttributes<HTMLDivElement>) => (
58 |   <div
59 |     className={cn(
60 |       "flex flex-col space-y-1.5 text-center sm:text-left",
61 |       className
62 |     )}
63 |     {...props}
64 |   />
65 | )
66 | DialogHeader.displayName = "DialogHeader"
67 | 
68 | const DialogFooter = ({
69 |   className,
70 |   ...props
71 | }: React.HTMLAttributes<HTMLDivElement>) => (
72 |   <div
73 |     className={cn(
74 |       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
75 |       className
76 |     )}
77 |     {...props}
78 |   />
79 | )
80 | DialogFooter.displayName = "DialogFooter"
81 | 
82 | const DialogTitle = React.forwardRef<
83 |   React.ElementRef<typeof DialogPrimitive.Title>,
84 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
85 | >(({ className, ...props }, ref) => (
86 |   <DialogPrimitive.Title
87 |     ref={ref}
88 |     className={cn(
89 |       "text-lg font-semibold leading-none tracking-tight",
90 |       className
91 |     )}
92 |     {...props}
93 |   />
94 | ))
95 | DialogTitle.displayName = DialogPrimitive.Title.displayName
96 | 
97 | const DialogDescription = React.forwardRef<
98 |   React.ElementRef<typeof DialogPrimitive.Description>,
99 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
100 | >(({ className, ...props }, ref) => (
101 |   <DialogPrimitive.Description
102 |     ref={ref}
103 |     className={cn("text-sm text-muted-foreground", className)}
104 |     {...props}
105 |   />
106 | ))
107 | DialogDescription.displayName = DialogPrimitive.Description.displayName
108 | 
109 | export {
110 |   Dialog,
111 |   DialogPortal,
112 |   DialogOverlay,
113 |   DialogClose,
114 |   DialogTrigger,
115 |   DialogContent,
116 |   DialogHeader,
117 |   DialogFooter,
118 |   DialogTitle,
119 |   DialogDescription,
120 | }
```

src/components/ui/drawer.tsx
```
1 | import * as React from "react"
2 | import { Drawer as DrawerPrimitive } from "vaul"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Drawer = ({
7 |   shouldScaleBackground = true,
8 |   ...props
9 | }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
10 |   <DrawerPrimitive.Root
11 |     shouldScaleBackground={shouldScaleBackground}
12 |     {...props}
13 |   />
14 | )
15 | Drawer.displayName = "Drawer"
16 | 
17 | const DrawerTrigger = DrawerPrimitive.Trigger
18 | 
19 | const DrawerPortal = DrawerPrimitive.Portal
20 | 
21 | const DrawerClose = DrawerPrimitive.Close
22 | 
23 | const DrawerOverlay = React.forwardRef<
24 |   React.ElementRef<typeof DrawerPrimitive.Overlay>,
25 |   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
26 | >(({ className, ...props }, ref) => (
27 |   <DrawerPrimitive.Overlay
28 |     ref={ref}
29 |     className={cn("fixed inset-0 z-50 bg-black/80", className)}
30 |     {...props}
31 |   />
32 | ))
33 | DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName
34 | 
35 | const DrawerContent = React.forwardRef<
36 |   React.ElementRef<typeof DrawerPrimitive.Content>,
37 |   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
38 | >(({ className, children, ...props }, ref) => (
39 |   <DrawerPortal>
40 |     <DrawerOverlay />
41 |     <DrawerPrimitive.Content
42 |       ref={ref}
43 |       className={cn(
44 |         "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
45 |         className
46 |       )}
47 |       {...props}
48 |     >
49 |       <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
50 |       {children}
51 |     </DrawerPrimitive.Content>
52 |   </DrawerPortal>
53 | ))
54 | DrawerContent.displayName = "DrawerContent"
55 | 
56 | const DrawerHeader = ({
57 |   className,
58 |   ...props
59 | }: React.HTMLAttributes<HTMLDivElement>) => (
60 |   <div
61 |     className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
62 |     {...props}
63 |   />
64 | )
65 | DrawerHeader.displayName = "DrawerHeader"
66 | 
67 | const DrawerFooter = ({
68 |   className,
69 |   ...props
70 | }: React.HTMLAttributes<HTMLDivElement>) => (
71 |   <div
72 |     className={cn("mt-auto flex flex-col gap-2 p-4", className)}
73 |     {...props}
74 |   />
75 | )
76 | DrawerFooter.displayName = "DrawerFooter"
77 | 
78 | const DrawerTitle = React.forwardRef<
79 |   React.ElementRef<typeof DrawerPrimitive.Title>,
80 |   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
81 | >(({ className, ...props }, ref) => (
82 |   <DrawerPrimitive.Title
83 |     ref={ref}
84 |     className={cn(
85 |       "text-lg font-semibold leading-none tracking-tight",
86 |       className
87 |     )}
88 |     {...props}
89 |   />
90 | ))
91 | DrawerTitle.displayName = DrawerPrimitive.Title.displayName
92 | 
93 | const DrawerDescription = React.forwardRef<
94 |   React.ElementRef<typeof DrawerPrimitive.Description>,
95 |   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
96 | >(({ className, ...props }, ref) => (
97 |   <DrawerPrimitive.Description
98 |     ref={ref}
99 |     className={cn("text-sm text-muted-foreground", className)}
100 |     {...props}
101 |   />
102 | ))
103 | DrawerDescription.displayName = DrawerPrimitive.Description.displayName
104 | 
105 | export {
106 |   Drawer,
107 |   DrawerPortal,
108 |   DrawerOverlay,
109 |   DrawerTrigger,
110 |   DrawerClose,
111 |   DrawerContent,
112 |   DrawerHeader,
113 |   DrawerFooter,
114 |   DrawerTitle,
115 |   DrawerDescription,
116 | }
```

src/components/ui/dropdown-menu.tsx
```
1 | import * as React from "react"
2 | import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
3 | import { Check, ChevronRight, Circle } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const DropdownMenu = DropdownMenuPrimitive.Root
8 | 
9 | const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
10 | 
11 | const DropdownMenuGroup = DropdownMenuPrimitive.Group
12 | 
13 | const DropdownMenuPortal = DropdownMenuPrimitive.Portal
14 | 
15 | const DropdownMenuSub = DropdownMenuPrimitive.Sub
16 | 
17 | const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
18 | 
19 | const DropdownMenuSubTrigger = React.forwardRef<
20 |   React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
21 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
22 |     inset?: boolean
23 |   }
24 | >(({ className, inset, children, ...props }, ref) => (
25 |   <DropdownMenuPrimitive.SubTrigger
26 |     ref={ref}
27 |     className={cn(
28 |       "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
29 |       inset && "pl-8",
30 |       className
31 |     )}
32 |     {...props}
33 |   >
34 |     {children}
35 |     <ChevronRight className="ml-auto h-4 w-4" />
36 |   </DropdownMenuPrimitive.SubTrigger>
37 | ))
38 | DropdownMenuSubTrigger.displayName =
39 |   DropdownMenuPrimitive.SubTrigger.displayName
40 | 
41 | const DropdownMenuSubContent = React.forwardRef<
42 |   React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
43 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
44 | >(({ className, ...props }, ref) => (
45 |   <DropdownMenuPrimitive.SubContent
46 |     ref={ref}
47 |     className={cn(
48 |       "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
49 |       className
50 |     )}
51 |     {...props}
52 |   />
53 | ))
54 | DropdownMenuSubContent.displayName =
55 |   DropdownMenuPrimitive.SubContent.displayName
56 | 
57 | const DropdownMenuContent = React.forwardRef<
58 |   React.ElementRef<typeof DropdownMenuPrimitive.Content>,
59 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
60 | >(({ className, sideOffset = 4, ...props }, ref) => (
61 |   <DropdownMenuPrimitive.Portal>
62 |     <DropdownMenuPrimitive.Content
63 |       ref={ref}
64 |       sideOffset={sideOffset}
65 |       className={cn(
66 |         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
67 |         className
68 |       )}
69 |       {...props}
70 |     />
71 |   </DropdownMenuPrimitive.Portal>
72 | ))
73 | DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
74 | 
75 | const DropdownMenuItem = React.forwardRef<
76 |   React.ElementRef<typeof DropdownMenuPrimitive.Item>,
77 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
78 |     inset?: boolean
79 |   }
80 | >(({ className, inset, ...props }, ref) => (
81 |   <DropdownMenuPrimitive.Item
82 |     ref={ref}
83 |     className={cn(
84 |       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
85 |       inset && "pl-8",
86 |       className
87 |     )}
88 |     {...props}
89 |   />
90 | ))
91 | DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
92 | 
93 | const DropdownMenuCheckboxItem = React.forwardRef<
94 |   React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
95 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
96 | >(({ className, children, checked, ...props }, ref) => (
97 |   <DropdownMenuPrimitive.CheckboxItem
98 |     ref={ref}
99 |     className={cn(
100 |       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
101 |       className
102 |     )}
103 |     checked={checked}
104 |     {...props}
105 |   >
106 |     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
107 |       <DropdownMenuPrimitive.ItemIndicator>
108 |         <Check className="h-4 w-4" />
109 |       </DropdownMenuPrimitive.ItemIndicator>
110 |     </span>
111 |     {children}
112 |   </DropdownMenuPrimitive.CheckboxItem>
113 | ))
114 | DropdownMenuCheckboxItem.displayName =
115 |   DropdownMenuPrimitive.CheckboxItem.displayName
116 | 
117 | const DropdownMenuRadioItem = React.forwardRef<
118 |   React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
119 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
120 | >(({ className, children, ...props }, ref) => (
121 |   <DropdownMenuPrimitive.RadioItem
122 |     ref={ref}
123 |     className={cn(
124 |       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
125 |       className
126 |     )}
127 |     {...props}
128 |   >
129 |     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
130 |       <DropdownMenuPrimitive.ItemIndicator>
131 |         <Circle className="h-2 w-2 fill-current" />
132 |       </DropdownMenuPrimitive.ItemIndicator>
133 |     </span>
134 |     {children}
135 |   </DropdownMenuPrimitive.RadioItem>
136 | ))
137 | DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName
138 | 
139 | const DropdownMenuLabel = React.forwardRef<
140 |   React.ElementRef<typeof DropdownMenuPrimitive.Label>,
141 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
142 |     inset?: boolean
143 |   }
144 | >(({ className, inset, ...props }, ref) => (
145 |   <DropdownMenuPrimitive.Label
146 |     ref={ref}
147 |     className={cn(
148 |       "px-2 py-1.5 text-sm font-semibold",
149 |       inset && "pl-8",
150 |       className
151 |     )}
152 |     {...props}
153 |   />
154 | ))
155 | DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
156 | 
157 | const DropdownMenuSeparator = React.forwardRef<
158 |   React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
159 |   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
160 | >(({ className, ...props }, ref) => (
161 |   <DropdownMenuPrimitive.Separator
162 |     ref={ref}
163 |     className={cn("-mx-1 my-1 h-px bg-muted", className)}
164 |     {...props}
165 |   />
166 | ))
167 | DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
168 | 
169 | const DropdownMenuShortcut = ({
170 |   className,
171 |   ...props
172 | }: React.HTMLAttributes<HTMLSpanElement>) => {
173 |   return (
174 |     <span
175 |       className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
176 |       {...props}
177 |     />
178 |   )
179 | }
180 | DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
181 | 
182 | export {
183 |   DropdownMenu,
184 |   DropdownMenuTrigger,
185 |   DropdownMenuContent,
186 |   DropdownMenuItem,
187 |   DropdownMenuCheckboxItem,
188 |   DropdownMenuRadioItem,
189 |   DropdownMenuLabel,
190 |   DropdownMenuSeparator,
191 |   DropdownMenuShortcut,
192 |   DropdownMenuGroup,
193 |   DropdownMenuPortal,
194 |   DropdownMenuSub,
195 |   DropdownMenuSubContent,
196 |   DropdownMenuSubTrigger,
197 |   DropdownMenuRadioGroup,
198 | }
```

src/components/ui/form.tsx
```
1 | import * as React from "react"
2 | import * as LabelPrimitive from "@radix-ui/react-label"
3 | import { Slot } from "@radix-ui/react-slot"
4 | import {
5 |   Controller,
6 |   ControllerProps,
7 |   FieldPath,
8 |   FieldValues,
9 |   FormProvider,
10 |   useFormContext,
11 | } from "react-hook-form"
12 | 
13 | import { cn } from "@/lib/utils"
14 | import { Label } from "@/components/ui/label"
15 | 
16 | const Form = FormProvider
17 | 
18 | type FormFieldContextValue<
19 |   TFieldValues extends FieldValues = FieldValues,
20 |   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
21 | > = {
22 |   name: TName
23 | }
24 | 
25 | const FormFieldContext = React.createContext<FormFieldContextValue>(
26 |   {} as FormFieldContextValue
27 | )
28 | 
29 | const FormField = <
30 |   TFieldValues extends FieldValues = FieldValues,
31 |   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
32 | >({
33 |   ...props
34 | }: ControllerProps<TFieldValues, TName>) => {
35 |   return (
36 |     <FormFieldContext.Provider value={{ name: props.name }}>
37 |       <Controller {...props} />
38 |     </FormFieldContext.Provider>
39 |   )
40 | }
41 | 
42 | const useFormField = () => {
43 |   const fieldContext = React.useContext(FormFieldContext)
44 |   const itemContext = React.useContext(FormItemContext)
45 |   const { getFieldState, formState } = useFormContext()
46 | 
47 |   const fieldState = getFieldState(fieldContext.name, formState)
48 | 
49 |   if (!fieldContext) {
50 |     throw new Error("useFormField should be used within <FormField>")
51 |   }
52 | 
53 |   const { id } = itemContext
54 | 
55 |   return {
56 |     id,
57 |     name: fieldContext.name,
58 |     formItemId: `${id}-form-item`,
59 |     formDescriptionId: `${id}-form-item-description`,
60 |     formMessageId: `${id}-form-item-message`,
61 |     ...fieldState,
62 |   }
63 | }
64 | 
65 | type FormItemContextValue = {
66 |   id: string
67 | }
68 | 
69 | const FormItemContext = React.createContext<FormItemContextValue>(
70 |   {} as FormItemContextValue
71 | )
72 | 
73 | const FormItem = React.forwardRef<
74 |   HTMLDivElement,
75 |   React.HTMLAttributes<HTMLDivElement>
76 | >(({ className, ...props }, ref) => {
77 |   const id = React.useId()
78 | 
79 |   return (
80 |     <FormItemContext.Provider value={{ id }}>
81 |       <div ref={ref} className={cn("space-y-2", className)} {...props} />
82 |     </FormItemContext.Provider>
83 |   )
84 | })
85 | FormItem.displayName = "FormItem"
86 | 
87 | const FormLabel = React.forwardRef<
88 |   React.ElementRef<typeof LabelPrimitive.Root>,
89 |   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
90 | >(({ className, ...props }, ref) => {
91 |   const { error, formItemId } = useFormField()
92 | 
93 |   return (
94 |     <Label
95 |       ref={ref}
96 |       className={cn(error && "text-destructive", className)}
97 |       htmlFor={formItemId}
98 |       {...props}
99 |     />
100 |   )
101 | })
102 | FormLabel.displayName = "FormLabel"
103 | 
104 | const FormControl = React.forwardRef<
105 |   React.ElementRef<typeof Slot>,
106 |   React.ComponentPropsWithoutRef<typeof Slot>
107 | >(({ ...props }, ref) => {
108 |   const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
109 | 
110 |   return (
111 |     <Slot
112 |       ref={ref}
113 |       id={formItemId}
114 |       aria-describedby={
115 |         !error
116 |           ? `${formDescriptionId}`
117 |           : `${formDescriptionId} ${formMessageId}`
118 |       }
119 |       aria-invalid={!!error}
120 |       {...props}
121 |     />
122 |   )
123 | })
124 | FormControl.displayName = "FormControl"
125 | 
126 | const FormDescription = React.forwardRef<
127 |   HTMLParagraphElement,
128 |   React.HTMLAttributes<HTMLParagraphElement>
129 | >(({ className, ...props }, ref) => {
130 |   const { formDescriptionId } = useFormField()
131 | 
132 |   return (
133 |     <p
134 |       ref={ref}
135 |       id={formDescriptionId}
136 |       className={cn("text-sm text-muted-foreground", className)}
137 |       {...props}
138 |     />
139 |   )
140 | })
141 | FormDescription.displayName = "FormDescription"
142 | 
143 | const FormMessage = React.forwardRef<
144 |   HTMLParagraphElement,
145 |   React.HTMLAttributes<HTMLParagraphElement>
146 | >(({ className, children, ...props }, ref) => {
147 |   const { error, formMessageId } = useFormField()
148 |   const body = error ? String(error?.message) : children
149 | 
150 |   if (!body) {
151 |     return null
152 |   }
153 | 
154 |   return (
155 |     <p
156 |       ref={ref}
157 |       id={formMessageId}
158 |       className={cn("text-sm font-medium text-destructive", className)}
159 |       {...props}
160 |     >
161 |       {body}
162 |     </p>
163 |   )
164 | })
165 | FormMessage.displayName = "FormMessage"
166 | 
167 | export {
168 |   useFormField,
169 |   Form,
170 |   FormItem,
171 |   FormLabel,
172 |   FormControl,
173 |   FormDescription,
174 |   FormMessage,
175 |   FormField,
176 | }
```

src/components/ui/hover-card.tsx
```
1 | import * as React from "react"
2 | import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const HoverCard = HoverCardPrimitive.Root
7 | 
8 | const HoverCardTrigger = HoverCardPrimitive.Trigger
9 | 
10 | const HoverCardContent = React.forwardRef<
11 |   React.ElementRef<typeof HoverCardPrimitive.Content>,
12 |   React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
13 | >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
14 |   <HoverCardPrimitive.Content
15 |     ref={ref}
16 |     align={align}
17 |     sideOffset={sideOffset}
18 |     className={cn(
19 |       "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
20 |       className
21 |     )}
22 |     {...props}
23 |   />
24 | ))
25 | HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
26 | 
27 | export { HoverCard, HoverCardTrigger, HoverCardContent }
```

src/components/ui/input-otp.tsx
```
1 | import * as React from "react"
2 | import { OTPInput, OTPInputContext } from "input-otp"
3 | import { Dot } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const InputOTP = React.forwardRef<
8 |   React.ElementRef<typeof OTPInput>,
9 |   React.ComponentPropsWithoutRef<typeof OTPInput>
10 | >(({ className, containerClassName, ...props }, ref) => (
11 |   <OTPInput
12 |     ref={ref}
13 |     containerClassName={cn(
14 |       "flex items-center gap-2 has-[:disabled]:opacity-50",
15 |       containerClassName
16 |     )}
17 |     className={cn("disabled:cursor-not-allowed", className)}
18 |     {...props}
19 |   />
20 | ))
21 | InputOTP.displayName = "InputOTP"
22 | 
23 | const InputOTPGroup = React.forwardRef<
24 |   React.ElementRef<"div">,
25 |   React.ComponentPropsWithoutRef<"div">
26 | >(({ className, ...props }, ref) => (
27 |   <div ref={ref} className={cn("flex items-center", className)} {...props} />
28 | ))
29 | InputOTPGroup.displayName = "InputOTPGroup"
30 | 
31 | const InputOTPSlot = React.forwardRef<
32 |   React.ElementRef<"div">,
33 |   React.ComponentPropsWithoutRef<"div"> & { index: number }
34 | >(({ index, className, ...props }, ref) => {
35 |   const inputOTPContext = React.useContext(OTPInputContext)
36 |   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
37 | 
38 |   return (
39 |     <div
40 |       ref={ref}
41 |       className={cn(
42 |         "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
43 |         isActive && "z-10 ring-2 ring-ring ring-offset-background",
44 |         className
45 |       )}
46 |       {...props}
47 |     >
48 |       {char}
49 |       {hasFakeCaret && (
50 |         <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
51 |           <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
52 |         </div>
53 |       )}
54 |     </div>
55 |   )
56 | })
57 | InputOTPSlot.displayName = "InputOTPSlot"
58 | 
59 | const InputOTPSeparator = React.forwardRef<
60 |   React.ElementRef<"div">,
61 |   React.ComponentPropsWithoutRef<"div">
62 | >(({ ...props }, ref) => (
63 |   <div ref={ref} role="separator" {...props}>
64 |     <Dot />
65 |   </div>
66 | ))
67 | InputOTPSeparator.displayName = "InputOTPSeparator"
68 | 
69 | export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
```

src/components/ui/input.tsx
```
1 | import * as React from "react"
2 | 
3 | import { cn } from "@/lib/utils"
4 | 
5 | const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
6 |   ({ className, type, ...props }, ref) => {
7 |     return (
8 |       <input
9 |         type={type}
10 |         className={cn(
11 |           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
12 |           className
13 |         )}
14 |         ref={ref}
15 |         {...props}
16 |       />
17 |     )
18 |   }
19 | )
20 | Input.displayName = "Input"
21 | 
22 | export { Input }
```

src/components/ui/label.tsx
```
1 | import * as React from "react"
2 | import * as LabelPrimitive from "@radix-ui/react-label"
3 | import { cva, type VariantProps } from "class-variance-authority"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const labelVariants = cva(
8 |   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
9 | )
10 | 
11 | const Label = React.forwardRef<
12 |   React.ElementRef<typeof LabelPrimitive.Root>,
13 |   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
14 |     VariantProps<typeof labelVariants>
15 | >(({ className, ...props }, ref) => (
16 |   <LabelPrimitive.Root
17 |     ref={ref}
18 |     className={cn(labelVariants(), className)}
19 |     {...props}
20 |   />
21 | ))
22 | Label.displayName = LabelPrimitive.Root.displayName
23 | 
24 | export { Label }
```

src/components/ui/menubar.tsx
```
1 | import * as React from "react"
2 | import * as MenubarPrimitive from "@radix-ui/react-menubar"
3 | import { Check, ChevronRight, Circle } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const MenubarMenu = MenubarPrimitive.Menu
8 | 
9 | const MenubarGroup = MenubarPrimitive.Group
10 | 
11 | const MenubarPortal = MenubarPrimitive.Portal
12 | 
13 | const MenubarSub = MenubarPrimitive.Sub
14 | 
15 | const MenubarRadioGroup = MenubarPrimitive.RadioGroup
16 | 
17 | const Menubar = React.forwardRef<
18 |   React.ElementRef<typeof MenubarPrimitive.Root>,
19 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
20 | >(({ className, ...props }, ref) => (
21 |   <MenubarPrimitive.Root
22 |     ref={ref}
23 |     className={cn(
24 |       "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
25 |       className
26 |     )}
27 |     {...props}
28 |   />
29 | ))
30 | Menubar.displayName = MenubarPrimitive.Root.displayName
31 | 
32 | const MenubarTrigger = React.forwardRef<
33 |   React.ElementRef<typeof MenubarPrimitive.Trigger>,
34 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
35 | >(({ className, ...props }, ref) => (
36 |   <MenubarPrimitive.Trigger
37 |     ref={ref}
38 |     className={cn(
39 |       "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
40 |       className
41 |     )}
42 |     {...props}
43 |   />
44 | ))
45 | MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName
46 | 
47 | const MenubarSubTrigger = React.forwardRef<
48 |   React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
49 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
50 |     inset?: boolean
51 |   }
52 | >(({ className, inset, children, ...props }, ref) => (
53 |   <MenubarPrimitive.SubTrigger
54 |     ref={ref}
55 |     className={cn(
56 |       "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
57 |       inset && "pl-8",
58 |       className
59 |     )}
60 |     {...props}
61 |   >
62 |     {children}
63 |     <ChevronRight className="ml-auto h-4 w-4" />
64 |   </MenubarPrimitive.SubTrigger>
65 | ))
66 | MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
67 | 
68 | const MenubarSubContent = React.forwardRef<
69 |   React.ElementRef<typeof MenubarPrimitive.SubContent>,
70 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
71 | >(({ className, ...props }, ref) => (
72 |   <MenubarPrimitive.SubContent
73 |     ref={ref}
74 |     className={cn(
75 |       "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
76 |       className
77 |     )}
78 |     {...props}
79 |   />
80 | ))
81 | MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
82 | 
83 | const MenubarContent = React.forwardRef<
84 |   React.ElementRef<typeof MenubarPrimitive.Content>,
85 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
86 | >(
87 |   (
88 |     { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
89 |     ref
90 |   ) => (
91 |     <MenubarPrimitive.Portal>
92 |       <MenubarPrimitive.Content
93 |         ref={ref}
94 |         align={align}
95 |         alignOffset={alignOffset}
96 |         sideOffset={sideOffset}
97 |         className={cn(
98 |           "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
99 |           className
100 |         )}
101 |         {...props}
102 |       />
103 |     </MenubarPrimitive.Portal>
104 |   )
105 | )
106 | MenubarContent.displayName = MenubarPrimitive.Content.displayName
107 | 
108 | const MenubarItem = React.forwardRef<
109 |   React.ElementRef<typeof MenubarPrimitive.Item>,
110 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
111 |     inset?: boolean
112 |   }
113 | >(({ className, inset, ...props }, ref) => (
114 |   <MenubarPrimitive.Item
115 |     ref={ref}
116 |     className={cn(
117 |       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
118 |       inset && "pl-8",
119 |       className
120 |     )}
121 |     {...props}
122 |   />
123 | ))
124 | MenubarItem.displayName = MenubarPrimitive.Item.displayName
125 | 
126 | const MenubarCheckboxItem = React.forwardRef<
127 |   React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
128 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
129 | >(({ className, children, checked, ...props }, ref) => (
130 |   <MenubarPrimitive.CheckboxItem
131 |     ref={ref}
132 |     className={cn(
133 |       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
134 |       className
135 |     )}
136 |     checked={checked}
137 |     {...props}
138 |   >
139 |     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
140 |       <MenubarPrimitive.ItemIndicator>
141 |         <Check className="h-4 w-4" />
142 |       </MenubarPrimitive.ItemIndicator>
143 |     </span>
144 |     {children}
145 |   </MenubarPrimitive.CheckboxItem>
146 | ))
147 | MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName
148 | 
149 | const MenubarRadioItem = React.forwardRef<
150 |   React.ElementRef<typeof MenubarPrimitive.RadioItem>,
151 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
152 | >(({ className, children, ...props }, ref) => (
153 |   <MenubarPrimitive.RadioItem
154 |     ref={ref}
155 |     className={cn(
156 |       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
157 |       className
158 |     )}
159 |     {...props}
160 |   >
161 |     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
162 |       <MenubarPrimitive.ItemIndicator>
163 |         <Circle className="h-2 w-2 fill-current" />
164 |       </MenubarPrimitive.ItemIndicator>
165 |     </span>
166 |     {children}
167 |   </MenubarPrimitive.RadioItem>
168 | ))
169 | MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName
170 | 
171 | const MenubarLabel = React.forwardRef<
172 |   React.ElementRef<typeof MenubarPrimitive.Label>,
173 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
174 |     inset?: boolean
175 |   }
176 | >(({ className, inset, ...props }, ref) => (
177 |   <MenubarPrimitive.Label
178 |     ref={ref}
179 |     className={cn(
180 |       "px-2 py-1.5 text-sm font-semibold",
181 |       inset && "pl-8",
182 |       className
183 |     )}
184 |     {...props}
185 |   />
186 | ))
187 | MenubarLabel.displayName = MenubarPrimitive.Label.displayName
188 | 
189 | const MenubarSeparator = React.forwardRef<
190 |   React.ElementRef<typeof MenubarPrimitive.Separator>,
191 |   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
192 | >(({ className, ...props }, ref) => (
193 |   <MenubarPrimitive.Separator
194 |     ref={ref}
195 |     className={cn("-mx-1 my-1 h-px bg-muted", className)}
196 |     {...props}
197 |   />
198 | ))
199 | MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
200 | 
201 | const MenubarShortcut = ({
202 |   className,
203 |   ...props
204 | }: React.HTMLAttributes<HTMLSpanElement>) => {
205 |   return (
206 |     <span
207 |       className={cn(
208 |         "ml-auto text-xs tracking-widest text-muted-foreground",
209 |         className
210 |       )}
211 |       {...props}
212 |     />
213 |   )
214 | }
215 | MenubarShortcut.displayname = "MenubarShortcut"
216 | 
217 | export {
218 |   Menubar,
219 |   MenubarMenu,
220 |   MenubarTrigger,
221 |   MenubarContent,
222 |   MenubarItem,
223 |   MenubarSeparator,
224 |   MenubarLabel,
225 |   MenubarCheckboxItem,
226 |   MenubarRadioGroup,
227 |   MenubarRadioItem,
228 |   MenubarPortal,
229 |   MenubarSubContent,
230 |   MenubarSubTrigger,
231 |   MenubarGroup,
232 |   MenubarSub,
233 |   MenubarShortcut,
234 | }
```

src/components/ui/navigation-menu.tsx
```
1 | import * as React from "react"
2 | import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
3 | import { cva } from "class-variance-authority"
4 | import { ChevronDown } from "lucide-react"
5 | 
6 | import { cn } from "@/lib/utils"
7 | 
8 | const NavigationMenu = React.forwardRef<
9 |   React.ElementRef<typeof NavigationMenuPrimitive.Root>,
10 |   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
11 | >(({ className, children, ...props }, ref) => (
12 |   <NavigationMenuPrimitive.Root
13 |     ref={ref}
14 |     className={cn(
15 |       "relative z-10 flex max-w-max flex-1 items-center justify-center",
16 |       className
17 |     )}
18 |     {...props}
19 |   >
20 |     {children}
21 |     <NavigationMenuViewport />
22 |   </NavigationMenuPrimitive.Root>
23 | ))
24 | NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
25 | 
26 | const NavigationMenuList = React.forwardRef<
27 |   React.ElementRef<typeof NavigationMenuPrimitive.List>,
28 |   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
29 | >(({ className, ...props }, ref) => (
30 |   <NavigationMenuPrimitive.List
31 |     ref={ref}
32 |     className={cn(
33 |       "group flex flex-1 list-none items-center justify-center space-x-1",
34 |       className
35 |     )}
36 |     {...props}
37 |   />
38 | ))
39 | NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
40 | 
41 | const NavigationMenuItem = NavigationMenuPrimitive.Item
42 | 
43 | const navigationMenuTriggerStyle = cva(
44 |   "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
45 | )
46 | 
47 | const NavigationMenuTrigger = React.forwardRef<
48 |   React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
49 |   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
50 | >(({ className, children, ...props }, ref) => (
51 |   <NavigationMenuPrimitive.Trigger
52 |     ref={ref}
53 |     className={cn(navigationMenuTriggerStyle(), "group", className)}
54 |     {...props}
55 |   >
56 |     {children}{" "}
57 |     <ChevronDown
58 |       className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
59 |       aria-hidden="true"
60 |     />
61 |   </NavigationMenuPrimitive.Trigger>
62 | ))
63 | NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
64 | 
65 | const NavigationMenuContent = React.forwardRef<
66 |   React.ElementRef<typeof NavigationMenuPrimitive.Content>,
67 |   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
68 | >(({ className, ...props }, ref) => (
69 |   <NavigationMenuPrimitive.Content
70 |     ref={ref}
71 |     className={cn(
72 |       "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
73 |       className
74 |     )}
75 |     {...props}
76 |   />
77 | ))
78 | NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
79 | 
80 | const NavigationMenuLink = NavigationMenuPrimitive.Link
81 | 
82 | const NavigationMenuViewport = React.forwardRef<
83 |   React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
84 |   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
85 | >(({ className, ...props }, ref) => (
86 |   <div className={cn("absolute left-0 top-full flex justify-center")}>
87 |     <NavigationMenuPrimitive.Viewport
88 |       className={cn(
89 |         "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
90 |         className
91 |       )}
92 |       ref={ref}
93 |       {...props}
94 |     />
95 |   </div>
96 | ))
97 | NavigationMenuViewport.displayName =
98 |   NavigationMenuPrimitive.Viewport.displayName
99 | 
100 | const NavigationMenuIndicator = React.forwardRef<
101 |   React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
102 |   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
103 | >(({ className, ...props }, ref) => (
104 |   <NavigationMenuPrimitive.Indicator
105 |     ref={ref}
106 |     className={cn(
107 |       "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
108 |       className
109 |     )}
110 |     {...props}
111 |   >
112 |     <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
113 |   </NavigationMenuPrimitive.Indicator>
114 | ))
115 | NavigationMenuIndicator.displayName =
116 |   NavigationMenuPrimitive.Indicator.displayName
117 | 
118 | export {
119 |   navigationMenuTriggerStyle,
120 |   NavigationMenu,
121 |   NavigationMenuList,
122 |   NavigationMenuItem,
123 |   NavigationMenuContent,
124 |   NavigationMenuTrigger,
125 |   NavigationMenuLink,
126 |   NavigationMenuIndicator,
127 |   NavigationMenuViewport,
128 | }
```

src/components/ui/pagination.tsx
```
1 | import * as React from "react"
2 | import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
3 | 
4 | import { cn } from "@/lib/utils"
5 | import { ButtonProps, buttonVariants } from "@/components/ui/button"
6 | 
7 | const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
8 |   <nav
9 |     role="navigation"
10 |     aria-label="pagination"
11 |     className={cn("mx-auto flex w-full justify-center", className)}
12 |     {...props}
13 |   />
14 | )
15 | Pagination.displayName = "Pagination"
16 | 
17 | const PaginationContent = React.forwardRef<
18 |   HTMLUListElement,
19 |   React.ComponentProps<"ul">
20 | >(({ className, ...props }, ref) => (
21 |   <ul
22 |     ref={ref}
23 |     className={cn("flex flex-row items-center gap-1", className)}
24 |     {...props}
25 |   />
26 | ))
27 | PaginationContent.displayName = "PaginationContent"
28 | 
29 | const PaginationItem = React.forwardRef<
30 |   HTMLLIElement,
31 |   React.ComponentProps<"li">
32 | >(({ className, ...props }, ref) => (
33 |   <li ref={ref} className={cn("", className)} {...props} />
34 | ))
35 | PaginationItem.displayName = "PaginationItem"
36 | 
37 | type PaginationLinkProps = {
38 |   isActive?: boolean
39 | } & Pick<ButtonProps, "size"> &
40 |   React.ComponentProps<"a">
41 | 
42 | const PaginationLink = ({
43 |   className,
44 |   isActive,
45 |   size = "icon",
46 |   ...props
47 | }: PaginationLinkProps) => (
48 |   <a
49 |     aria-current={isActive ? "page" : undefined}
50 |     className={cn(
51 |       buttonVariants({
52 |         variant: isActive ? "outline" : "ghost",
53 |         size,
54 |       }),
55 |       className
56 |     )}
57 |     {...props}
58 |   />
59 | )
60 | PaginationLink.displayName = "PaginationLink"
61 | 
62 | const PaginationPrevious = ({
63 |   className,
64 |   ...props
65 | }: React.ComponentProps<typeof PaginationLink>) => (
66 |   <PaginationLink
67 |     aria-label="Go to previous page"
68 |     size="default"
69 |     className={cn("gap-1 pl-2.5", className)}
70 |     {...props}
71 |   >
72 |     <ChevronLeft className="h-4 w-4" />
73 |     <span>Previous</span>
74 |   </PaginationLink>
75 | )
76 | PaginationPrevious.displayName = "PaginationPrevious"
77 | 
78 | const PaginationNext = ({
79 |   className,
80 |   ...props
81 | }: React.ComponentProps<typeof PaginationLink>) => (
82 |   <PaginationLink
83 |     aria-label="Go to next page"
84 |     size="default"
85 |     className={cn("gap-1 pr-2.5", className)}
86 |     {...props}
87 |   >
88 |     <span>Next</span>
89 |     <ChevronRight className="h-4 w-4" />
90 |   </PaginationLink>
91 | )
92 | PaginationNext.displayName = "PaginationNext"
93 | 
94 | const PaginationEllipsis = ({
95 |   className,
96 |   ...props
97 | }: React.ComponentProps<"span">) => (
98 |   <span
99 |     aria-hidden
100 |     className={cn("flex h-9 w-9 items-center justify-center", className)}
101 |     {...props}
102 |   >
103 |     <MoreHorizontal className="h-4 w-4" />
104 |     <span className="sr-only">More pages</span>
105 |   </span>
106 | )
107 | PaginationEllipsis.displayName = "PaginationEllipsis"
108 | 
109 | export {
110 |   Pagination,
111 |   PaginationContent,
112 |   PaginationEllipsis,
113 |   PaginationItem,
114 |   PaginationLink,
115 |   PaginationNext,
116 |   PaginationPrevious,
117 | }
```

src/components/ui/popover.tsx
```
1 | import * as React from "react"
2 | import * as PopoverPrimitive from "@radix-ui/react-popover"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Popover = PopoverPrimitive.Root
7 | 
8 | const PopoverTrigger = PopoverPrimitive.Trigger
9 | 
10 | const PopoverContent = React.forwardRef<
11 |   React.ElementRef<typeof PopoverPrimitive.Content>,
12 |   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
13 | >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
14 |   <PopoverPrimitive.Portal>
15 |     <PopoverPrimitive.Content
16 |       ref={ref}
17 |       align={align}
18 |       sideOffset={sideOffset}
19 |       className={cn(
20 |         "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
21 |         className
22 |       )}
23 |       {...props}
24 |     />
25 |   </PopoverPrimitive.Portal>
26 | ))
27 | PopoverContent.displayName = PopoverPrimitive.Content.displayName
28 | 
29 | export { Popover, PopoverTrigger, PopoverContent }
```

src/components/ui/progress.tsx
```
1 | import * as React from "react"
2 | import * as ProgressPrimitive from "@radix-ui/react-progress"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Progress = React.forwardRef<
7 |   React.ElementRef<typeof ProgressPrimitive.Root>,
8 |   React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
9 | >(({ className, value, ...props }, ref) => (
10 |   <ProgressPrimitive.Root
11 |     ref={ref}
12 |     className={cn(
13 |       "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
14 |       className
15 |     )}
16 |     {...props}
17 |   >
18 |     <ProgressPrimitive.Indicator
19 |       className="h-full w-full flex-1 bg-primary transition-all"
20 |       style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
21 |     />
22 |   </ProgressPrimitive.Root>
23 | ))
24 | Progress.displayName = ProgressPrimitive.Root.displayName
25 | 
26 | export { Progress }
```

src/components/ui/radio-group.tsx
```
1 | import * as React from "react"
2 | import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
3 | import { Circle } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const RadioGroup = React.forwardRef<
8 |   React.ElementRef<typeof RadioGroupPrimitive.Root>,
9 |   React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
10 | >(({ className, ...props }, ref) => {
11 |   return (
12 |     <RadioGroupPrimitive.Root
13 |       className={cn("grid gap-2", className)}
14 |       {...props}
15 |       ref={ref}
16 |     />
17 |   )
18 | })
19 | RadioGroup.displayName = RadioGroupPrimitive.Root.displayName
20 | 
21 | const RadioGroupItem = React.forwardRef<
22 |   React.ElementRef<typeof RadioGroupPrimitive.Item>,
23 |   React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
24 | >(({ className, ...props }, ref) => {
25 |   return (
26 |     <RadioGroupPrimitive.Item
27 |       ref={ref}
28 |       className={cn(
29 |         "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
30 |         className
31 |       )}
32 |       {...props}
33 |     >
34 |       <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
35 |         <Circle className="h-2.5 w-2.5 fill-current text-current" />
36 |       </RadioGroupPrimitive.Indicator>
37 |     </RadioGroupPrimitive.Item>
38 |   )
39 | })
40 | RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
41 | 
42 | export { RadioGroup, RadioGroupItem }
```

src/components/ui/resizable.tsx
```
1 | import { GripVertical } from "lucide-react"
2 | import * as ResizablePrimitive from "react-resizable-panels"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const ResizablePanelGroup = ({
7 |   className,
8 |   ...props
9 | }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
10 |   <ResizablePrimitive.PanelGroup
11 |     className={cn(
12 |       "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
13 |       className
14 |     )}
15 |     {...props}
16 |   />
17 | )
18 | 
19 | const ResizablePanel = ResizablePrimitive.Panel
20 | 
21 | const ResizableHandle = ({
22 |   withHandle,
23 |   className,
24 |   ...props
25 | }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
26 |   withHandle?: boolean
27 | }) => (
28 |   <ResizablePrimitive.PanelResizeHandle
29 |     className={cn(
30 |       "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
31 |       className
32 |     )}
33 |     {...props}
34 |   >
35 |     {withHandle && (
36 |       <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
37 |         <GripVertical className="h-2.5 w-2.5" />
38 |       </div>
39 |     )}
40 |   </ResizablePrimitive.PanelResizeHandle>
41 | )
42 | 
43 | export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
```

src/components/ui/scroll-area.tsx
```
1 | import * as React from "react"
2 | import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const ScrollArea = React.forwardRef<
7 |   React.ElementRef<typeof ScrollAreaPrimitive.Root>,
8 |   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
9 | >(({ className, children, ...props }, ref) => (
10 |   <ScrollAreaPrimitive.Root
11 |     ref={ref}
12 |     className={cn("relative overflow-hidden", className)}
13 |     {...props}
14 |   >
15 |     <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
16 |       {children}
17 |     </ScrollAreaPrimitive.Viewport>
18 |     <ScrollBar />
19 |     <ScrollAreaPrimitive.Corner />
20 |   </ScrollAreaPrimitive.Root>
21 | ))
22 | ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
23 | 
24 | const ScrollBar = React.forwardRef<
25 |   React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
26 |   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
27 | >(({ className, orientation = "vertical", ...props }, ref) => (
28 |   <ScrollAreaPrimitive.ScrollAreaScrollbar
29 |     ref={ref}
30 |     orientation={orientation}
31 |     className={cn(
32 |       "flex touch-none select-none transition-colors",
33 |       orientation === "vertical" &&
34 |         "h-full w-2.5 border-l border-l-transparent p-[1px]",
35 |       orientation === "horizontal" &&
36 |         "h-2.5 flex-col border-t border-t-transparent p-[1px]",
37 |       className
38 |     )}
39 |     {...props}
40 |   >
41 |     <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
42 |   </ScrollAreaPrimitive.ScrollAreaScrollbar>
43 | ))
44 | ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
45 | 
46 | export { ScrollArea, ScrollBar }
```

src/components/ui/select.tsx
```
1 | import * as React from "react"
2 | import * as SelectPrimitive from "@radix-ui/react-select"
3 | import { Check, ChevronDown, ChevronUp } from "lucide-react"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const Select = SelectPrimitive.Root
8 | 
9 | const SelectGroup = SelectPrimitive.Group
10 | 
11 | const SelectValue = SelectPrimitive.Value
12 | 
13 | const SelectTrigger = React.forwardRef<
14 |   React.ElementRef<typeof SelectPrimitive.Trigger>,
15 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
16 | >(({ className, children, ...props }, ref) => (
17 |   <SelectPrimitive.Trigger
18 |     ref={ref}
19 |     className={cn(
20 |       "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
21 |       className
22 |     )}
23 |     {...props}
24 |   >
25 |     {children}
26 |     <SelectPrimitive.Icon asChild>
27 |       <ChevronDown className="h-4 w-4 opacity-50" />
28 |     </SelectPrimitive.Icon>
29 |   </SelectPrimitive.Trigger>
30 | ))
31 | SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
32 | 
33 | const SelectScrollUpButton = React.forwardRef<
34 |   React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
35 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
36 | >(({ className, ...props }, ref) => (
37 |   <SelectPrimitive.ScrollUpButton
38 |     ref={ref}
39 |     className={cn(
40 |       "flex cursor-default items-center justify-center py-1",
41 |       className
42 |     )}
43 |     {...props}
44 |   >
45 |     <ChevronUp className="h-4 w-4" />
46 |   </SelectPrimitive.ScrollUpButton>
47 | ))
48 | SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
49 | 
50 | const SelectScrollDownButton = React.forwardRef<
51 |   React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
52 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
53 | >(({ className, ...props }, ref) => (
54 |   <SelectPrimitive.ScrollDownButton
55 |     ref={ref}
56 |     className={cn(
57 |       "flex cursor-default items-center justify-center py-1",
58 |       className
59 |     )}
60 |     {...props}
61 |   >
62 |     <ChevronDown className="h-4 w-4" />
63 |   </SelectPrimitive.ScrollDownButton>
64 | ))
65 | SelectScrollDownButton.displayName =
66 |   SelectPrimitive.ScrollDownButton.displayName
67 | 
68 | const SelectContent = React.forwardRef<
69 |   React.ElementRef<typeof SelectPrimitive.Content>,
70 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
71 | >(({ className, children, position = "popper", ...props }, ref) => (
72 |   <SelectPrimitive.Portal>
73 |     <SelectPrimitive.Content
74 |       ref={ref}
75 |       className={cn(
76 |         "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
77 |         position === "popper" &&
78 |           "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
79 |         className
80 |       )}
81 |       position={position}
82 |       {...props}
83 |     >
84 |       <SelectScrollUpButton />
85 |       <SelectPrimitive.Viewport
86 |         className={cn(
87 |           "p-1",
88 |           position === "popper" &&
89 |             "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
90 |         )}
91 |       >
92 |         {children}
93 |       </SelectPrimitive.Viewport>
94 |       <SelectScrollDownButton />
95 |     </SelectPrimitive.Content>
96 |   </SelectPrimitive.Portal>
97 | ))
98 | SelectContent.displayName = SelectPrimitive.Content.displayName
99 | 
100 | const SelectLabel = React.forwardRef<
101 |   React.ElementRef<typeof SelectPrimitive.Label>,
102 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
103 | >(({ className, ...props }, ref) => (
104 |   <SelectPrimitive.Label
105 |     ref={ref}
106 |     className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
107 |     {...props}
108 |   />
109 | ))
110 | SelectLabel.displayName = SelectPrimitive.Label.displayName
111 | 
112 | const SelectItem = React.forwardRef<
113 |   React.ElementRef<typeof SelectPrimitive.Item>,
114 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
115 | >(({ className, children, ...props }, ref) => (
116 |   <SelectPrimitive.Item
117 |     ref={ref}
118 |     className={cn(
119 |       "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
120 |       className
121 |     )}
122 |     {...props}
123 |   >
124 |     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
125 |       <SelectPrimitive.ItemIndicator>
126 |         <Check className="h-4 w-4" />
127 |       </SelectPrimitive.ItemIndicator>
128 |     </span>
129 | 
130 |     <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
131 |   </SelectPrimitive.Item>
132 | ))
133 | SelectItem.displayName = SelectPrimitive.Item.displayName
134 | 
135 | const SelectSeparator = React.forwardRef<
136 |   React.ElementRef<typeof SelectPrimitive.Separator>,
137 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
138 | >(({ className, ...props }, ref) => (
139 |   <SelectPrimitive.Separator
140 |     ref={ref}
141 |     className={cn("-mx-1 my-1 h-px bg-muted", className)}
142 |     {...props}
143 |   />
144 | ))
145 | SelectSeparator.displayName = SelectPrimitive.Separator.displayName
146 | 
147 | export {
148 |   Select,
149 |   SelectGroup,
150 |   SelectValue,
151 |   SelectTrigger,
152 |   SelectContent,
153 |   SelectLabel,
154 |   SelectItem,
155 |   SelectSeparator,
156 |   SelectScrollUpButton,
157 |   SelectScrollDownButton,
158 | }
```

src/components/ui/separator.tsx
```
1 | import * as React from "react"
2 | import * as SeparatorPrimitive from "@radix-ui/react-separator"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Separator = React.forwardRef<
7 |   React.ElementRef<typeof SeparatorPrimitive.Root>,
8 |   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
9 | >(
10 |   (
11 |     { className, orientation = "horizontal", decorative = true, ...props },
12 |     ref
13 |   ) => (
14 |     <SeparatorPrimitive.Root
15 |       ref={ref}
16 |       decorative={decorative}
17 |       orientation={orientation}
18 |       className={cn(
19 |         "shrink-0 bg-border",
20 |         orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
21 |         className
22 |       )}
23 |       {...props}
24 |     />
25 |   )
26 | )
27 | Separator.displayName = SeparatorPrimitive.Root.displayName
28 | 
29 | export { Separator }
```

src/components/ui/sheet.tsx
```
1 | import * as SheetPrimitive from "@radix-ui/react-dialog"
2 | import { cva, type VariantProps } from "class-variance-authority"
3 | import { X } from "lucide-react"
4 | import * as React from "react"
5 | 
6 | import { cn } from "@/lib/utils"
7 | 
8 | const Sheet = SheetPrimitive.Root
9 | 
10 | const SheetTrigger = SheetPrimitive.Trigger
11 | 
12 | const SheetClose = SheetPrimitive.Close
13 | 
14 | const SheetPortal = SheetPrimitive.Portal
15 | 
16 | const SheetOverlay = React.forwardRef<
17 |   React.ElementRef<typeof SheetPrimitive.Overlay>,
18 |   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
19 | >(({ className, ...props }, ref) => (
20 |   <SheetPrimitive.Overlay
21 |     className={cn(
22 |       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
23 |       className
24 |     )}
25 |     {...props}
26 |     ref={ref}
27 |   />
28 | ))
29 | SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
30 | 
31 | const sheetVariants = cva(
32 |   "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
33 |   {
34 |     variants: {
35 |       side: {
36 |         top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
37 |         bottom:
38 |           "inset-x-0 bottom-0 w-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
39 |         left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
40 |         right:
41 |           "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
42 |       },
43 |     },
44 |     defaultVariants: {
45 |       side: "right",
46 |     },
47 |   }
48 | )
49 | 
50 | interface SheetContentProps
51 |   extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
52 |   VariantProps<typeof sheetVariants> { }
53 | 
54 | const SheetContent = React.forwardRef<
55 |   React.ElementRef<typeof SheetPrimitive.Content>,
56 |   SheetContentProps
57 | >(({ side = "right", className, children, ...props }, ref) => (
58 |   <SheetPortal>
59 |     <SheetOverlay />
60 |     <SheetPrimitive.Content
61 |       ref={ref}
62 |       className={cn(sheetVariants({ side }), className)}
63 |       {...props}
64 |     >
65 |       {children}
66 |       <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
67 |         <X className="h-4 w-4" />
68 |         <span className="sr-only">Close</span>
69 |       </SheetPrimitive.Close>
70 |     </SheetPrimitive.Content>
71 |   </SheetPortal>
72 | ))
73 | SheetContent.displayName = SheetPrimitive.Content.displayName
74 | 
75 | const SheetHeader = ({
76 |   className,
77 |   ...props
78 | }: React.HTMLAttributes<HTMLDivElement>) => (
79 |   <div
80 |     className={cn(
81 |       "flex flex-col space-y-2 text-center sm:text-left",
82 |       className
83 |     )}
84 |     {...props}
85 |   />
86 | )
87 | SheetHeader.displayName = "SheetHeader"
88 | 
89 | const SheetFooter = ({
90 |   className,
91 |   ...props
92 | }: React.HTMLAttributes<HTMLDivElement>) => (
93 |   <div
94 |     className={cn(
95 |       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
96 |       className
97 |     )}
98 |     {...props}
99 |   />
100 | )
101 | SheetFooter.displayName = "SheetFooter"
102 | 
103 | const SheetTitle = React.forwardRef<
104 |   React.ElementRef<typeof SheetPrimitive.Title>,
105 |   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
106 | >(({ className, ...props }, ref) => (
107 |   <SheetPrimitive.Title
108 |     ref={ref}
109 |     className={cn("text-lg font-semibold text-foreground", className)}
110 |     {...props}
111 |   />
112 | ))
113 | SheetTitle.displayName = SheetPrimitive.Title.displayName
114 | 
115 | const SheetDescription = React.forwardRef<
116 |   React.ElementRef<typeof SheetPrimitive.Description>,
117 |   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
118 | >(({ className, ...props }, ref) => (
119 |   <SheetPrimitive.Description
120 |     ref={ref}
121 |     className={cn("text-sm text-muted-foreground", className)}
122 |     {...props}
123 |   />
124 | ))
125 | SheetDescription.displayName = SheetPrimitive.Description.displayName
126 | 
127 | export {
128 |   Sheet, SheetClose,
129 |   SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger
130 | }
```

src/components/ui/sidebar.tsx
```
1 | import * as React from "react"
2 | import { Slot } from "@radix-ui/react-slot"
3 | import { VariantProps, cva } from "class-variance-authority"
4 | import { PanelLeft } from "lucide-react"
5 | 
6 | import { useIsMobile } from "@/hooks/use-mobile"
7 | import { cn } from "@/lib/utils"
8 | import { Button } from "@/components/ui/button"
9 | import { Input } from "@/components/ui/input"
10 | import { Separator } from "@/components/ui/separator"
11 | import { Sheet, SheetContent } from "@/components/ui/sheet"
12 | import { Skeleton } from "@/components/ui/skeleton"
13 | import {
14 |   Tooltip,
15 |   TooltipContent,
16 |   TooltipProvider,
17 |   TooltipTrigger,
18 | } from "@/components/ui/tooltip"
19 | 
20 | const SIDEBAR_COOKIE_NAME = "sidebar:state"
21 | const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
22 | const SIDEBAR_WIDTH = "16rem"
23 | const SIDEBAR_WIDTH_MOBILE = "18rem"
24 | const SIDEBAR_WIDTH_ICON = "3rem"
25 | const SIDEBAR_KEYBOARD_SHORTCUT = "b"
26 | 
27 | type SidebarContext = {
28 |   state: "expanded" | "collapsed"
29 |   open: boolean
30 |   setOpen: (open: boolean) => void
31 |   openMobile: boolean
32 |   setOpenMobile: (open: boolean) => void
33 |   isMobile: boolean
34 |   toggleSidebar: () => void
35 | }
36 | 
37 | const SidebarContext = React.createContext<SidebarContext | null>(null)
38 | 
39 | function useSidebar() {
40 |   const context = React.useContext(SidebarContext)
41 |   if (!context) {
42 |     throw new Error("useSidebar must be used within a SidebarProvider.")
43 |   }
44 | 
45 |   return context
46 | }
47 | 
48 | const SidebarProvider = React.forwardRef<
49 |   HTMLDivElement,
50 |   React.ComponentProps<"div"> & {
51 |     defaultOpen?: boolean
52 |     open?: boolean
53 |     onOpenChange?: (open: boolean) => void
54 |   }
55 | >(
56 |   (
57 |     {
58 |       defaultOpen = true,
59 |       open: openProp,
60 |       onOpenChange: setOpenProp,
61 |       className,
62 |       style,
63 |       children,
64 |       ...props
65 |     },
66 |     ref
67 |   ) => {
68 |     const isMobile = useIsMobile()
69 |     const [openMobile, setOpenMobile] = React.useState(false)
70 | 
71 |     // This is the internal state of the sidebar.
72 |     // We use openProp and setOpenProp for control from outside the component.
73 |     const [_open, _setOpen] = React.useState(defaultOpen)
74 |     const open = openProp ?? _open
75 |     const setOpen = React.useCallback(
76 |       (value: boolean | ((value: boolean) => boolean)) => {
77 |         const openState = typeof value === "function" ? value(open) : value
78 |         if (setOpenProp) {
79 |           setOpenProp(openState)
80 |         } else {
81 |           _setOpen(openState)
82 |         }
83 | 
84 |         // This sets the cookie to keep the sidebar state.
85 |         document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
86 |       },
87 |       [setOpenProp, open]
88 |     )
89 | 
90 |     // Helper to toggle the sidebar.
91 |     const toggleSidebar = React.useCallback(() => {
92 |       return isMobile
93 |         ? setOpenMobile((open) => !open)
94 |         : setOpen((open) => !open)
95 |     }, [isMobile, setOpen, setOpenMobile])
96 | 
97 |     // Adds a keyboard shortcut to toggle the sidebar.
98 |     React.useEffect(() => {
99 |       const handleKeyDown = (event: KeyboardEvent) => {
100 |         if (
101 |           event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
102 |           (event.metaKey || event.ctrlKey)
103 |         ) {
104 |           event.preventDefault()
105 |           toggleSidebar()
106 |         }
107 |       }
108 | 
109 |       window.addEventListener("keydown", handleKeyDown)
110 |       return () => window.removeEventListener("keydown", handleKeyDown)
111 |     }, [toggleSidebar])
112 | 
113 |     // We add a state so that we can do data-state="expanded" or "collapsed".
114 |     // This makes it easier to style the sidebar with Tailwind classes.
115 |     const state = open ? "expanded" : "collapsed"
116 | 
117 |     const contextValue = React.useMemo<SidebarContext>(
118 |       () => ({
119 |         state,
120 |         open,
121 |         setOpen,
122 |         isMobile,
123 |         openMobile,
124 |         setOpenMobile,
125 |         toggleSidebar,
126 |       }),
127 |       [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
128 |     )
129 | 
130 |     return (
131 |       <SidebarContext.Provider value={contextValue}>
132 |         <TooltipProvider delayDuration={0}>
133 |           <div
134 |             style={
135 |               {
136 |                 "--sidebar-width": SIDEBAR_WIDTH,
137 |                 "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
138 |                 ...style,
139 |               } as React.CSSProperties
140 |             }
141 |             className={cn(
142 |               "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
143 |               className
144 |             )}
145 |             ref={ref}
146 |             {...props}
147 |           >
148 |             {children}
149 |           </div>
150 |         </TooltipProvider>
151 |       </SidebarContext.Provider>
152 |     )
153 |   }
154 | )
155 | SidebarProvider.displayName = "SidebarProvider"
156 | 
157 | const Sidebar = React.forwardRef<
158 |   HTMLDivElement,
159 |   React.ComponentProps<"div"> & {
160 |     side?: "left" | "right"
161 |     variant?: "sidebar" | "floating" | "inset"
162 |     collapsible?: "offcanvas" | "icon" | "none"
163 |   }
164 | >(
165 |   (
166 |     {
167 |       side = "left",
168 |       variant = "sidebar",
169 |       collapsible = "offcanvas",
170 |       className,
171 |       children,
172 |       ...props
173 |     },
174 |     ref
175 |   ) => {
176 |     const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
177 | 
178 |     if (collapsible === "none") {
179 |       return (
180 |         <div
181 |           className={cn(
182 |             "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
183 |             className
184 |           )}
185 |           ref={ref}
186 |           {...props}
187 |         >
188 |           {children}
189 |         </div>
190 |       )
191 |     }
192 | 
193 |     if (isMobile) {
194 |       return (
195 |         <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
196 |           <SheetContent
197 |             data-sidebar="sidebar"
198 |             data-mobile="true"
199 |             className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
200 |             style={
201 |               {
202 |                 "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
203 |               } as React.CSSProperties
204 |             }
205 |             side={side}
206 |           >
207 |             <div className="flex h-full w-full flex-col">{children}</div>
208 |           </SheetContent>
209 |         </Sheet>
210 |       )
211 |     }
212 | 
213 |     return (
214 |       <div
215 |         ref={ref}
216 |         className="group peer hidden md:block text-sidebar-foreground"
217 |         data-state={state}
218 |         data-collapsible={state === "collapsed" ? collapsible : ""}
219 |         data-variant={variant}
220 |         data-side={side}
221 |       >
222 |         {/* This is what handles the sidebar gap on desktop */}
223 |         <div
224 |           className={cn(
225 |             "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
226 |             "group-data-[collapsible=offcanvas]:w-0",
227 |             "group-data-[side=right]:rotate-180",
228 |             variant === "floating" || variant === "inset"
229 |               ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
230 |               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
231 |           )}
232 |         />
233 |         <div
234 |           className={cn(
235 |             "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
236 |             side === "left"
237 |               ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
238 |               : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
239 |             // Adjust the padding for floating and inset variants.
240 |             variant === "floating" || variant === "inset"
241 |               ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
242 |               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
243 |             className
244 |           )}
245 |           {...props}
246 |         >
247 |           <div
248 |             data-sidebar="sidebar"
249 |             className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
250 |           >
251 |             {children}
252 |           </div>
253 |         </div>
254 |       </div>
255 |     )
256 |   }
257 | )
258 | Sidebar.displayName = "Sidebar"
259 | 
260 | const SidebarTrigger = React.forwardRef<
261 |   React.ElementRef<typeof Button>,
262 |   React.ComponentProps<typeof Button>
263 | >(({ className, onClick, ...props }, ref) => {
264 |   const { toggleSidebar } = useSidebar()
265 | 
266 |   return (
267 |     <Button
268 |       ref={ref}
269 |       data-sidebar="trigger"
270 |       variant="ghost"
271 |       size="icon"
272 |       className={cn("h-7 w-7", className)}
273 |       onClick={(event) => {
274 |         onClick?.(event)
275 |         toggleSidebar()
276 |       }}
277 |       {...props}
278 |     >
279 |       <PanelLeft />
280 |       <span className="sr-only">Toggle Sidebar</span>
281 |     </Button>
282 |   )
283 | })
284 | SidebarTrigger.displayName = "SidebarTrigger"
285 | 
286 | const SidebarRail = React.forwardRef<
287 |   HTMLButtonElement,
288 |   React.ComponentProps<"button">
289 | >(({ className, ...props }, ref) => {
290 |   const { toggleSidebar } = useSidebar()
291 | 
292 |   return (
293 |     <button
294 |       ref={ref}
295 |       data-sidebar="rail"
296 |       aria-label="Toggle Sidebar"
297 |       tabIndex={-1}
298 |       onClick={toggleSidebar}
299 |       title="Toggle Sidebar"
300 |       className={cn(
301 |         "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
302 |         "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
303 |         "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
304 |         "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
305 |         "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
306 |         "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
307 |         className
308 |       )}
309 |       {...props}
310 |     />
311 |   )
312 | })
313 | SidebarRail.displayName = "SidebarRail"
314 | 
315 | const SidebarInset = React.forwardRef<
316 |   HTMLDivElement,
317 |   React.ComponentProps<"main">
318 | >(({ className, ...props }, ref) => {
319 |   return (
320 |     <main
321 |       ref={ref}
322 |       className={cn(
323 |         "relative flex min-h-svh flex-1 flex-col bg-background",
324 |         "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
325 |         className
326 |       )}
327 |       {...props}
328 |     />
329 |   )
330 | })
331 | SidebarInset.displayName = "SidebarInset"
332 | 
333 | const SidebarInput = React.forwardRef<
334 |   React.ElementRef<typeof Input>,
335 |   React.ComponentProps<typeof Input>
336 | >(({ className, ...props }, ref) => {
337 |   return (
338 |     <Input
339 |       ref={ref}
340 |       data-sidebar="input"
341 |       className={cn(
342 |         "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
343 |         className
344 |       )}
345 |       {...props}
346 |     />
347 |   )
348 | })
349 | SidebarInput.displayName = "SidebarInput"
350 | 
351 | const SidebarHeader = React.forwardRef<
352 |   HTMLDivElement,
353 |   React.ComponentProps<"div">
354 | >(({ className, ...props }, ref) => {
355 |   return (
356 |     <div
357 |       ref={ref}
358 |       data-sidebar="header"
359 |       className={cn("flex flex-col gap-2 p-2", className)}
360 |       {...props}
361 |     />
362 |   )
363 | })
364 | SidebarHeader.displayName = "SidebarHeader"
365 | 
366 | const SidebarFooter = React.forwardRef<
367 |   HTMLDivElement,
368 |   React.ComponentProps<"div">
369 | >(({ className, ...props }, ref) => {
370 |   return (
371 |     <div
372 |       ref={ref}
373 |       data-sidebar="footer"
374 |       className={cn("flex flex-col gap-2 p-2", className)}
375 |       {...props}
376 |     />
377 |   )
378 | })
379 | SidebarFooter.displayName = "SidebarFooter"
380 | 
381 | const SidebarSeparator = React.forwardRef<
382 |   React.ElementRef<typeof Separator>,
383 |   React.ComponentProps<typeof Separator>
384 | >(({ className, ...props }, ref) => {
385 |   return (
386 |     <Separator
387 |       ref={ref}
388 |       data-sidebar="separator"
389 |       className={cn("mx-2 w-auto bg-sidebar-border", className)}
390 |       {...props}
391 |     />
392 |   )
393 | })
394 | SidebarSeparator.displayName = "SidebarSeparator"
395 | 
396 | const SidebarContent = React.forwardRef<
397 |   HTMLDivElement,
398 |   React.ComponentProps<"div">
399 | >(({ className, ...props }, ref) => {
400 |   return (
401 |     <div
402 |       ref={ref}
403 |       data-sidebar="content"
404 |       className={cn(
405 |         "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
406 |         className
407 |       )}
408 |       {...props}
409 |     />
410 |   )
411 | })
412 | SidebarContent.displayName = "SidebarContent"
413 | 
414 | const SidebarGroup = React.forwardRef<
415 |   HTMLDivElement,
416 |   React.ComponentProps<"div">
417 | >(({ className, ...props }, ref) => {
418 |   return (
419 |     <div
420 |       ref={ref}
421 |       data-sidebar="group"
422 |       className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
423 |       {...props}
424 |     />
425 |   )
426 | })
427 | SidebarGroup.displayName = "SidebarGroup"
428 | 
429 | const SidebarGroupLabel = React.forwardRef<
430 |   HTMLDivElement,
431 |   React.ComponentProps<"div"> & { asChild?: boolean }
432 | >(({ className, asChild = false, ...props }, ref) => {
433 |   const Comp = asChild ? Slot : "div"
434 | 
435 |   return (
436 |     <Comp
437 |       ref={ref}
438 |       data-sidebar="group-label"
439 |       className={cn(
440 |         "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
441 |         "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
442 |         className
443 |       )}
444 |       {...props}
445 |     />
446 |   )
447 | })
448 | SidebarGroupLabel.displayName = "SidebarGroupLabel"
449 | 
450 | const SidebarGroupAction = React.forwardRef<
451 |   HTMLButtonElement,
452 |   React.ComponentProps<"button"> & { asChild?: boolean }
453 | >(({ className, asChild = false, ...props }, ref) => {
454 |   const Comp = asChild ? Slot : "button"
455 | 
456 |   return (
457 |     <Comp
458 |       ref={ref}
459 |       data-sidebar="group-action"
460 |       className={cn(
461 |         "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
462 |         // Increases the hit area of the button on mobile.
463 |         "after:absolute after:-inset-2 after:md:hidden",
464 |         "group-data-[collapsible=icon]:hidden",
465 |         className
466 |       )}
467 |       {...props}
468 |     />
469 |   )
470 | })
471 | SidebarGroupAction.displayName = "SidebarGroupAction"
472 | 
473 | const SidebarGroupContent = React.forwardRef<
474 |   HTMLDivElement,
475 |   React.ComponentProps<"div">
476 | >(({ className, ...props }, ref) => (
477 |   <div
478 |     ref={ref}
479 |     data-sidebar="group-content"
480 |     className={cn("w-full text-sm", className)}
481 |     {...props}
482 |   />
483 | ))
484 | SidebarGroupContent.displayName = "SidebarGroupContent"
485 | 
486 | const SidebarMenu = React.forwardRef<
487 |   HTMLUListElement,
488 |   React.ComponentProps<"ul">
489 | >(({ className, ...props }, ref) => (
490 |   <ul
491 |     ref={ref}
492 |     data-sidebar="menu"
493 |     className={cn("flex w-full min-w-0 flex-col gap-1", className)}
494 |     {...props}
495 |   />
496 | ))
497 | SidebarMenu.displayName = "SidebarMenu"
498 | 
499 | const SidebarMenuItem = React.forwardRef<
500 |   HTMLLIElement,
501 |   React.ComponentProps<"li">
502 | >(({ className, ...props }, ref) => (
503 |   <li
504 |     ref={ref}
505 |     data-sidebar="menu-item"
506 |     className={cn("group/menu-item relative", className)}
507 |     {...props}
508 |   />
509 | ))
510 | SidebarMenuItem.displayName = "SidebarMenuItem"
511 | 
512 | const sidebarMenuButtonVariants = cva(
513 |   "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
514 |   {
515 |     variants: {
516 |       variant: {
517 |         default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
518 |         outline:
519 |           "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
520 |       },
521 |       size: {
522 |         default: "h-8 text-sm",
523 |         sm: "h-7 text-xs",
524 |         lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
525 |       },
526 |     },
527 |     defaultVariants: {
528 |       variant: "default",
529 |       size: "default",
530 |     },
531 |   }
532 | )
533 | 
534 | const SidebarMenuButton = React.forwardRef<
535 |   HTMLButtonElement,
536 |   React.ComponentProps<"button"> & {
537 |     asChild?: boolean
538 |     isActive?: boolean
539 |     tooltip?: string | React.ComponentProps<typeof TooltipContent>
540 |   } & VariantProps<typeof sidebarMenuButtonVariants>
541 | >(
542 |   (
543 |     {
544 |       asChild = false,
545 |       isActive = false,
546 |       variant = "default",
547 |       size = "default",
548 |       tooltip,
549 |       className,
550 |       ...props
551 |     },
552 |     ref
553 |   ) => {
554 |     const Comp = asChild ? Slot : "button"
555 |     const { isMobile, state } = useSidebar()
556 | 
557 |     const button = (
558 |       <Comp
559 |         ref={ref}
560 |         data-sidebar="menu-button"
561 |         data-size={size}
562 |         data-active={isActive}
563 |         className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
564 |         {...props}
565 |       />
566 |     )
567 | 
568 |     if (!tooltip) {
569 |       return button
570 |     }
571 | 
572 |     if (typeof tooltip === "string") {
573 |       tooltip = {
574 |         children: tooltip,
575 |       }
576 |     }
577 | 
578 |     return (
579 |       <Tooltip>
580 |         <TooltipTrigger asChild>{button}</TooltipTrigger>
581 |         <TooltipContent
582 |           side="right"
583 |           align="center"
584 |           hidden={state !== "collapsed" || isMobile}
585 |           {...tooltip}
586 |         />
587 |       </Tooltip>
588 |     )
589 |   }
590 | )
591 | SidebarMenuButton.displayName = "SidebarMenuButton"
592 | 
593 | const SidebarMenuAction = React.forwardRef<
594 |   HTMLButtonElement,
595 |   React.ComponentProps<"button"> & {
596 |     asChild?: boolean
597 |     showOnHover?: boolean
598 |   }
599 | >(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
600 |   const Comp = asChild ? Slot : "button"
601 | 
602 |   return (
603 |     <Comp
604 |       ref={ref}
605 |       data-sidebar="menu-action"
606 |       className={cn(
607 |         "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
608 |         // Increases the hit area of the button on mobile.
609 |         "after:absolute after:-inset-2 after:md:hidden",
610 |         "peer-data-[size=sm]/menu-button:top-1",
611 |         "peer-data-[size=default]/menu-button:top-1.5",
612 |         "peer-data-[size=lg]/menu-button:top-2.5",
613 |         "group-data-[collapsible=icon]:hidden",
614 |         showOnHover &&
615 |           "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
616 |         className
617 |       )}
618 |       {...props}
619 |     />
620 |   )
621 | })
622 | SidebarMenuAction.displayName = "SidebarMenuAction"
623 | 
624 | const SidebarMenuBadge = React.forwardRef<
625 |   HTMLDivElement,
626 |   React.ComponentProps<"div">
627 | >(({ className, ...props }, ref) => (
628 |   <div
629 |     ref={ref}
630 |     data-sidebar="menu-badge"
631 |     className={cn(
632 |       "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
633 |       "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
634 |       "peer-data-[size=sm]/menu-button:top-1",
635 |       "peer-data-[size=default]/menu-button:top-1.5",
636 |       "peer-data-[size=lg]/menu-button:top-2.5",
637 |       "group-data-[collapsible=icon]:hidden",
638 |       className
639 |     )}
640 |     {...props}
641 |   />
642 | ))
643 | SidebarMenuBadge.displayName = "SidebarMenuBadge"
644 | 
645 | const SidebarMenuSkeleton = React.forwardRef<
646 |   HTMLDivElement,
647 |   React.ComponentProps<"div"> & {
648 |     showIcon?: boolean
649 |   }
650 | >(({ className, showIcon = false, ...props }, ref) => {
651 |   // Random width between 50 to 90%.
652 |   const width = React.useMemo(() => {
653 |     return `${Math.floor(Math.random() * 40) + 50}%`
654 |   }, [])
655 | 
656 |   return (
657 |     <div
658 |       ref={ref}
659 |       data-sidebar="menu-skeleton"
660 |       className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
661 |       {...props}
662 |     >
663 |       {showIcon && (
664 |         <Skeleton
665 |           className="size-4 rounded-md"
666 |           data-sidebar="menu-skeleton-icon"
667 |         />
668 |       )}
669 |       <Skeleton
670 |         className="h-4 flex-1 max-w-[--skeleton-width]"
671 |         data-sidebar="menu-skeleton-text"
672 |         style={
673 |           {
674 |             "--skeleton-width": width,
675 |           } as React.CSSProperties
676 |         }
677 |       />
678 |     </div>
679 |   )
680 | })
681 | SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"
682 | 
683 | const SidebarMenuSub = React.forwardRef<
684 |   HTMLUListElement,
685 |   React.ComponentProps<"ul">
686 | >(({ className, ...props }, ref) => (
687 |   <ul
688 |     ref={ref}
689 |     data-sidebar="menu-sub"
690 |     className={cn(
691 |       "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
692 |       "group-data-[collapsible=icon]:hidden",
693 |       className
694 |     )}
695 |     {...props}
696 |   />
697 | ))
698 | SidebarMenuSub.displayName = "SidebarMenuSub"
699 | 
700 | const SidebarMenuSubItem = React.forwardRef<
701 |   HTMLLIElement,
702 |   React.ComponentProps<"li">
703 | >(({ ...props }, ref) => <li ref={ref} {...props} />)
704 | SidebarMenuSubItem.displayName = "SidebarMenuSubItem"
705 | 
706 | const SidebarMenuSubButton = React.forwardRef<
707 |   HTMLAnchorElement,
708 |   React.ComponentProps<"a"> & {
709 |     asChild?: boolean
710 |     size?: "sm" | "md"
711 |     isActive?: boolean
712 |   }
713 | >(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
714 |   const Comp = asChild ? Slot : "a"
715 | 
716 |   return (
717 |     <Comp
718 |       ref={ref}
719 |       data-sidebar="menu-sub-button"
720 |       data-size={size}
721 |       data-active={isActive}
722 |       className={cn(
723 |         "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
724 |         "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
725 |         size === "sm" && "text-xs",
726 |         size === "md" && "text-sm",
727 |         "group-data-[collapsible=icon]:hidden",
728 |         className
729 |       )}
730 |       {...props}
731 |     />
732 |   )
733 | })
734 | SidebarMenuSubButton.displayName = "SidebarMenuSubButton"
735 | 
736 | export {
737 |   Sidebar,
738 |   SidebarContent,
739 |   SidebarFooter,
740 |   SidebarGroup,
741 |   SidebarGroupAction,
742 |   SidebarGroupContent,
743 |   SidebarGroupLabel,
744 |   SidebarHeader,
745 |   SidebarInput,
746 |   SidebarInset,
747 |   SidebarMenu,
748 |   SidebarMenuAction,
749 |   SidebarMenuBadge,
750 |   SidebarMenuButton,
751 |   SidebarMenuItem,
752 |   SidebarMenuSkeleton,
753 |   SidebarMenuSub,
754 |   SidebarMenuSubButton,
755 |   SidebarMenuSubItem,
756 |   SidebarProvider,
757 |   SidebarRail,
758 |   SidebarSeparator,
759 |   SidebarTrigger,
760 |   useSidebar,
761 | }
```

src/components/ui/skeleton.tsx
```
1 | import { cn } from "@/lib/utils"
2 | 
3 | function Skeleton({
4 |   className,
5 |   ...props
6 | }: React.HTMLAttributes<HTMLDivElement>) {
7 |   return (
8 |     <div
9 |       className={cn("animate-pulse rounded-md bg-muted", className)}
10 |       {...props}
11 |     />
12 |   )
13 | }
14 | 
15 | export { Skeleton }
```

src/components/ui/slider.tsx
```
1 | import * as React from "react"
2 | import * as SliderPrimitive from "@radix-ui/react-slider"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Slider = React.forwardRef<
7 |   React.ElementRef<typeof SliderPrimitive.Root>,
8 |   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
9 | >(({ className, ...props }, ref) => (
10 |   <SliderPrimitive.Root
11 |     ref={ref}
12 |     className={cn(
13 |       "relative flex w-full touch-none select-none items-center",
14 |       className
15 |     )}
16 |     {...props}
17 |   >
18 |     <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
19 |       <SliderPrimitive.Range className="absolute h-full bg-primary" />
20 |     </SliderPrimitive.Track>
21 |     <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
22 |   </SliderPrimitive.Root>
23 | ))
24 | Slider.displayName = SliderPrimitive.Root.displayName
25 | 
26 | export { Slider }
```

src/components/ui/sonner.tsx
```
1 | import { useTheme } from "next-themes"
2 | import { Toaster as Sonner } from "sonner"
3 | 
4 | type ToasterProps = React.ComponentProps<typeof Sonner>
5 | 
6 | const Toaster = ({ ...props }: ToasterProps) => {
7 |   const { theme = "system" } = useTheme()
8 | 
9 |   return (
10 |     <Sonner
11 |       theme={theme as ToasterProps["theme"]}
12 |       className="toaster group"
13 |       toastOptions={{
14 |         classNames: {
15 |           toast:
16 |             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
17 |           description: "group-[.toast]:text-muted-foreground",
18 |           actionButton:
19 |             "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
20 |           cancelButton:
21 |             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
22 |         },
23 |       }}
24 |       {...props}
25 |     />
26 |   )
27 | }
28 | 
29 | export { Toaster }
```

src/components/ui/switch.tsx
```
1 | import * as React from "react"
2 | import * as SwitchPrimitives from "@radix-ui/react-switch"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Switch = React.forwardRef<
7 |   React.ElementRef<typeof SwitchPrimitives.Root>,
8 |   React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
9 | >(({ className, ...props }, ref) => (
10 |   <SwitchPrimitives.Root
11 |     className={cn(
12 |       "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
13 |       className
14 |     )}
15 |     {...props}
16 |     ref={ref}
17 |   >
18 |     <SwitchPrimitives.Thumb
19 |       className={cn(
20 |         "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
21 |       )}
22 |     />
23 |   </SwitchPrimitives.Root>
24 | ))
25 | Switch.displayName = SwitchPrimitives.Root.displayName
26 | 
27 | export { Switch }
```

src/components/ui/table.tsx
```
1 | import * as React from "react"
2 | 
3 | import { cn } from "@/lib/utils"
4 | 
5 | const Table = React.forwardRef<
6 |   HTMLTableElement,
7 |   React.HTMLAttributes<HTMLTableElement>
8 | >(({ className, ...props }, ref) => (
9 |   <div className="relative w-full overflow-auto">
10 |     <table
11 |       ref={ref}
12 |       className={cn("w-full caption-bottom text-sm", className)}
13 |       {...props}
14 |     />
15 |   </div>
16 | ))
17 | Table.displayName = "Table"
18 | 
19 | const TableHeader = React.forwardRef<
20 |   HTMLTableSectionElement,
21 |   React.HTMLAttributes<HTMLTableSectionElement>
22 | >(({ className, ...props }, ref) => (
23 |   <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
24 | ))
25 | TableHeader.displayName = "TableHeader"
26 | 
27 | const TableBody = React.forwardRef<
28 |   HTMLTableSectionElement,
29 |   React.HTMLAttributes<HTMLTableSectionElement>
30 | >(({ className, ...props }, ref) => (
31 |   <tbody
32 |     ref={ref}
33 |     className={cn("[&_tr:last-child]:border-0", className)}
34 |     {...props}
35 |   />
36 | ))
37 | TableBody.displayName = "TableBody"
38 | 
39 | const TableFooter = React.forwardRef<
40 |   HTMLTableSectionElement,
41 |   React.HTMLAttributes<HTMLTableSectionElement>
42 | >(({ className, ...props }, ref) => (
43 |   <tfoot
44 |     ref={ref}
45 |     className={cn(
46 |       "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
47 |       className
48 |     )}
49 |     {...props}
50 |   />
51 | ))
52 | TableFooter.displayName = "TableFooter"
53 | 
54 | const TableRow = React.forwardRef<
55 |   HTMLTableRowElement,
56 |   React.HTMLAttributes<HTMLTableRowElement>
57 | >(({ className, ...props }, ref) => (
58 |   <tr
59 |     ref={ref}
60 |     className={cn(
61 |       "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
62 |       className
63 |     )}
64 |     {...props}
65 |   />
66 | ))
67 | TableRow.displayName = "TableRow"
68 | 
69 | const TableHead = React.forwardRef<
70 |   HTMLTableCellElement,
71 |   React.ThHTMLAttributes<HTMLTableCellElement>
72 | >(({ className, ...props }, ref) => (
73 |   <th
74 |     ref={ref}
75 |     className={cn(
76 |       "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
77 |       className
78 |     )}
79 |     {...props}
80 |   />
81 | ))
82 | TableHead.displayName = "TableHead"
83 | 
84 | const TableCell = React.forwardRef<
85 |   HTMLTableCellElement,
86 |   React.TdHTMLAttributes<HTMLTableCellElement>
87 | >(({ className, ...props }, ref) => (
88 |   <td
89 |     ref={ref}
90 |     className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
91 |     {...props}
92 |   />
93 | ))
94 | TableCell.displayName = "TableCell"
95 | 
96 | const TableCaption = React.forwardRef<
97 |   HTMLTableCaptionElement,
98 |   React.HTMLAttributes<HTMLTableCaptionElement>
99 | >(({ className, ...props }, ref) => (
100 |   <caption
101 |     ref={ref}
102 |     className={cn("mt-4 text-sm text-muted-foreground", className)}
103 |     {...props}
104 |   />
105 | ))
106 | TableCaption.displayName = "TableCaption"
107 | 
108 | export {
109 |   Table,
110 |   TableHeader,
111 |   TableBody,
112 |   TableFooter,
113 |   TableHead,
114 |   TableRow,
115 |   TableCell,
116 |   TableCaption,
117 | }
```

src/components/ui/tabs.tsx
```
1 | import * as React from "react"
2 | import * as TabsPrimitive from "@radix-ui/react-tabs"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const Tabs = TabsPrimitive.Root
7 | 
8 | const TabsList = React.forwardRef<
9 |   React.ElementRef<typeof TabsPrimitive.List>,
10 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
11 | >(({ className, ...props }, ref) => (
12 |   <TabsPrimitive.List
13 |     ref={ref}
14 |     className={cn(
15 |       "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
16 |       className
17 |     )}
18 |     {...props}
19 |   />
20 | ))
21 | TabsList.displayName = TabsPrimitive.List.displayName
22 | 
23 | const TabsTrigger = React.forwardRef<
24 |   React.ElementRef<typeof TabsPrimitive.Trigger>,
25 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
26 | >(({ className, ...props }, ref) => (
27 |   <TabsPrimitive.Trigger
28 |     ref={ref}
29 |     className={cn(
30 |       "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
31 |       className
32 |     )}
33 |     {...props}
34 |   />
35 | ))
36 | TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
37 | 
38 | const TabsContent = React.forwardRef<
39 |   React.ElementRef<typeof TabsPrimitive.Content>,
40 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
41 | >(({ className, ...props }, ref) => (
42 |   <TabsPrimitive.Content
43 |     ref={ref}
44 |     className={cn(
45 |       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
46 |       className
47 |     )}
48 |     {...props}
49 |   />
50 | ))
51 | TabsContent.displayName = TabsPrimitive.Content.displayName
52 | 
53 | export { Tabs, TabsList, TabsTrigger, TabsContent }
```

src/components/ui/textarea.tsx
```
1 | import * as React from "react"
2 | 
3 | import { cn } from "@/lib/utils"
4 | 
5 | export interface TextareaProps
6 |   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
7 | 
8 | const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
9 |   ({ className, ...props }, ref) => {
10 |     return (
11 |       <textarea
12 |         className={cn(
13 |           "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
14 |           className
15 |         )}
16 |         ref={ref}
17 |         {...props}
18 |       />
19 |     )
20 |   }
21 | )
22 | Textarea.displayName = "Textarea"
23 | 
24 | export { Textarea }
```

src/components/ui/toast.tsx
```
1 | import * as React from "react"
2 | import * as ToastPrimitives from "@radix-ui/react-toast"
3 | import { cva, type VariantProps } from "class-variance-authority"
4 | import { X } from "lucide-react"
5 | 
6 | import { cn } from "@/lib/utils"
7 | 
8 | const ToastProvider = ToastPrimitives.Provider
9 | 
10 | const ToastViewport = React.forwardRef<
11 |   React.ElementRef<typeof ToastPrimitives.Viewport>,
12 |   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
13 | >(({ className, ...props }, ref) => (
14 |   <ToastPrimitives.Viewport
15 |     ref={ref}
16 |     className={cn(
17 |       "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
18 |       className
19 |     )}
20 |     {...props}
21 |   />
22 | ))
23 | ToastViewport.displayName = ToastPrimitives.Viewport.displayName
24 | 
25 | const toastVariants = cva(
26 |   "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
27 |   {
28 |     variants: {
29 |       variant: {
30 |         default: "border bg-background text-foreground",
31 |         destructive:
32 |           "destructive group border-destructive bg-destructive text-destructive-foreground",
33 |       },
34 |     },
35 |     defaultVariants: {
36 |       variant: "default",
37 |     },
38 |   }
39 | )
40 | 
41 | const Toast = React.forwardRef<
42 |   React.ElementRef<typeof ToastPrimitives.Root>,
43 |   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
44 |     VariantProps<typeof toastVariants>
45 | >(({ className, variant, ...props }, ref) => {
46 |   return (
47 |     <ToastPrimitives.Root
48 |       ref={ref}
49 |       className={cn(toastVariants({ variant }), className)}
50 |       {...props}
51 |     />
52 |   )
53 | })
54 | Toast.displayName = ToastPrimitives.Root.displayName
55 | 
56 | const ToastAction = React.forwardRef<
57 |   React.ElementRef<typeof ToastPrimitives.Action>,
58 |   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
59 | >(({ className, ...props }, ref) => (
60 |   <ToastPrimitives.Action
61 |     ref={ref}
62 |     className={cn(
63 |       "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
64 |       className
65 |     )}
66 |     {...props}
67 |   />
68 | ))
69 | ToastAction.displayName = ToastPrimitives.Action.displayName
70 | 
71 | const ToastClose = React.forwardRef<
72 |   React.ElementRef<typeof ToastPrimitives.Close>,
73 |   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
74 | >(({ className, ...props }, ref) => (
75 |   <ToastPrimitives.Close
76 |     ref={ref}
77 |     className={cn(
78 |       "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
79 |       className
80 |     )}
81 |     toast-close=""
82 |     {...props}
83 |   >
84 |     <X className="h-4 w-4" />
85 |   </ToastPrimitives.Close>
86 | ))
87 | ToastClose.displayName = ToastPrimitives.Close.displayName
88 | 
89 | const ToastTitle = React.forwardRef<
90 |   React.ElementRef<typeof ToastPrimitives.Title>,
91 |   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
92 | >(({ className, ...props }, ref) => (
93 |   <ToastPrimitives.Title
94 |     ref={ref}
95 |     className={cn("text-sm font-semibold", className)}
96 |     {...props}
97 |   />
98 | ))
99 | ToastTitle.displayName = ToastPrimitives.Title.displayName
100 | 
101 | const ToastDescription = React.forwardRef<
102 |   React.ElementRef<typeof ToastPrimitives.Description>,
103 |   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
104 | >(({ className, ...props }, ref) => (
105 |   <ToastPrimitives.Description
106 |     ref={ref}
107 |     className={cn("text-sm opacity-90", className)}
108 |     {...props}
109 |   />
110 | ))
111 | ToastDescription.displayName = ToastPrimitives.Description.displayName
112 | 
113 | type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
114 | 
115 | type ToastActionElement = React.ReactElement<typeof ToastAction>
116 | 
117 | export {
118 |   type ToastProps,
119 |   type ToastActionElement,
120 |   ToastProvider,
121 |   ToastViewport,
122 |   Toast,
123 |   ToastTitle,
124 |   ToastDescription,
125 |   ToastClose,
126 |   ToastAction,
127 | }
```

src/components/ui/toaster.tsx
```
1 | import { useToast } from "@/hooks/use-toast"
2 | import {
3 |   Toast,
4 |   ToastClose,
5 |   ToastDescription,
6 |   ToastProvider,
7 |   ToastTitle,
8 |   ToastViewport,
9 | } from "@/components/ui/toast"
10 | 
11 | export function Toaster() {
12 |   const { toasts } = useToast()
13 | 
14 |   return (
15 |     <ToastProvider>
16 |       {toasts.map(function ({ id, title, description, action, ...props }) {
17 |         return (
18 |           <Toast key={id} {...props}>
19 |             <div className="grid gap-1">
20 |               {title && <ToastTitle>{title}</ToastTitle>}
21 |               {description && (
22 |                 <ToastDescription>{description}</ToastDescription>
23 |               )}
24 |             </div>
25 |             {action}
26 |             <ToastClose />
27 |           </Toast>
28 |         )
29 |       })}
30 |       <ToastViewport />
31 |     </ToastProvider>
32 |   )
33 | }
```

src/components/ui/toggle-group.tsx
```
1 | import * as React from "react"
2 | import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
3 | import { type VariantProps } from "class-variance-authority"
4 | 
5 | import { cn } from "@/lib/utils"
6 | import { toggleVariants } from "@/components/ui/toggle"
7 | 
8 | const ToggleGroupContext = React.createContext<
9 |   VariantProps<typeof toggleVariants>
10 | >({
11 |   size: "default",
12 |   variant: "default",
13 | })
14 | 
15 | const ToggleGroup = React.forwardRef<
16 |   React.ElementRef<typeof ToggleGroupPrimitive.Root>,
17 |   React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
18 |     VariantProps<typeof toggleVariants>
19 | >(({ className, variant, size, children, ...props }, ref) => (
20 |   <ToggleGroupPrimitive.Root
21 |     ref={ref}
22 |     className={cn("flex items-center justify-center gap-1", className)}
23 |     {...props}
24 |   >
25 |     <ToggleGroupContext.Provider value={{ variant, size }}>
26 |       {children}
27 |     </ToggleGroupContext.Provider>
28 |   </ToggleGroupPrimitive.Root>
29 | ))
30 | 
31 | ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName
32 | 
33 | const ToggleGroupItem = React.forwardRef<
34 |   React.ElementRef<typeof ToggleGroupPrimitive.Item>,
35 |   React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
36 |     VariantProps<typeof toggleVariants>
37 | >(({ className, children, variant, size, ...props }, ref) => {
38 |   const context = React.useContext(ToggleGroupContext)
39 | 
40 |   return (
41 |     <ToggleGroupPrimitive.Item
42 |       ref={ref}
43 |       className={cn(
44 |         toggleVariants({
45 |           variant: context.variant || variant,
46 |           size: context.size || size,
47 |         }),
48 |         className
49 |       )}
50 |       {...props}
51 |     >
52 |       {children}
53 |     </ToggleGroupPrimitive.Item>
54 |   )
55 | })
56 | 
57 | ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
58 | 
59 | export { ToggleGroup, ToggleGroupItem }
```

src/components/ui/toggle.tsx
```
1 | import * as React from "react"
2 | import * as TogglePrimitive from "@radix-ui/react-toggle"
3 | import { cva, type VariantProps } from "class-variance-authority"
4 | 
5 | import { cn } from "@/lib/utils"
6 | 
7 | const toggleVariants = cva(
8 |   "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
9 |   {
10 |     variants: {
11 |       variant: {
12 |         default: "bg-transparent",
13 |         outline:
14 |           "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
15 |       },
16 |       size: {
17 |         default: "h-10 px-3",
18 |         sm: "h-9 px-2.5",
19 |         lg: "h-11 px-5",
20 |       },
21 |     },
22 |     defaultVariants: {
23 |       variant: "default",
24 |       size: "default",
25 |     },
26 |   }
27 | )
28 | 
29 | const Toggle = React.forwardRef<
30 |   React.ElementRef<typeof TogglePrimitive.Root>,
31 |   React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
32 |     VariantProps<typeof toggleVariants>
33 | >(({ className, variant, size, ...props }, ref) => (
34 |   <TogglePrimitive.Root
35 |     ref={ref}
36 |     className={cn(toggleVariants({ variant, size, className }))}
37 |     {...props}
38 |   />
39 | ))
40 | 
41 | Toggle.displayName = TogglePrimitive.Root.displayName
42 | 
43 | export { Toggle, toggleVariants }
```

src/components/ui/tooltip.tsx
```
1 | import * as React from "react"
2 | import * as TooltipPrimitive from "@radix-ui/react-tooltip"
3 | 
4 | import { cn } from "@/lib/utils"
5 | 
6 | const TooltipProvider = TooltipPrimitive.Provider
7 | 
8 | const Tooltip = TooltipPrimitive.Root
9 | 
10 | const TooltipTrigger = TooltipPrimitive.Trigger
11 | 
12 | const TooltipContent = React.forwardRef<
13 |   React.ElementRef<typeof TooltipPrimitive.Content>,
14 |   React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
15 | >(({ className, sideOffset = 4, ...props }, ref) => (
16 |   <TooltipPrimitive.Content
17 |     ref={ref}
18 |     sideOffset={sideOffset}
19 |     className={cn(
20 |       "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
21 |       className
22 |     )}
23 |     {...props}
24 |   />
25 | ))
26 | TooltipContent.displayName = TooltipPrimitive.Content.displayName
27 | 
28 | export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
```

src/components/ui/use-toast.ts
```
1 | import { useToast, toast } from "@/hooks/use-toast";
2 | 
3 | export { useToast, toast };
```

src/hooks/use-mobile.tsx
```
1 | import * as React from "react"
2 | 
3 | const MOBILE_BREAKPOINT = 768
4 | 
5 | export function useIsMobile() {
6 |   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
7 | 
8 |   React.useEffect(() => {
9 |     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
10 |     const onChange = () => {
11 |       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
12 |     }
13 |     mql.addEventListener("change", onChange)
14 |     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
15 |     return () => mql.removeEventListener("change", onChange)
16 |   }, [])
17 | 
18 |   return !!isMobile
19 | }
```

src/hooks/use-toast.ts
```
1 | import * as React from "react"
2 | 
3 | import type {
4 |   ToastActionElement,
5 |   ToastProps,
6 | } from "@/components/ui/toast"
7 | 
8 | const TOAST_LIMIT = 1
9 | const TOAST_REMOVE_DELAY = 1000000
10 | 
11 | type ToasterToast = ToastProps & {
12 |   id: string
13 |   title?: React.ReactNode
14 |   description?: React.ReactNode
15 |   action?: ToastActionElement
16 | }
17 | 
18 | const actionTypes = {
19 |   ADD_TOAST: "ADD_TOAST",
20 |   UPDATE_TOAST: "UPDATE_TOAST",
21 |   DISMISS_TOAST: "DISMISS_TOAST",
22 |   REMOVE_TOAST: "REMOVE_TOAST",
23 | } as const
24 | 
25 | let count = 0
26 | 
27 | function genId() {
28 |   count = (count + 1) % Number.MAX_SAFE_INTEGER
29 |   return count.toString()
30 | }
31 | 
32 | type ActionType = typeof actionTypes
33 | 
34 | type Action =
35 |   | {
36 |       type: ActionType["ADD_TOAST"]
37 |       toast: ToasterToast
38 |     }
39 |   | {
40 |       type: ActionType["UPDATE_TOAST"]
41 |       toast: Partial<ToasterToast>
42 |     }
43 |   | {
44 |       type: ActionType["DISMISS_TOAST"]
45 |       toastId?: ToasterToast["id"]
46 |     }
47 |   | {
48 |       type: ActionType["REMOVE_TOAST"]
49 |       toastId?: ToasterToast["id"]
50 |     }
51 | 
52 | interface State {
53 |   toasts: ToasterToast[]
54 | }
55 | 
56 | const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
57 | 
58 | const addToRemoveQueue = (toastId: string) => {
59 |   if (toastTimeouts.has(toastId)) {
60 |     return
61 |   }
62 | 
63 |   const timeout = setTimeout(() => {
64 |     toastTimeouts.delete(toastId)
65 |     dispatch({
66 |       type: "REMOVE_TOAST",
67 |       toastId: toastId,
68 |     })
69 |   }, TOAST_REMOVE_DELAY)
70 | 
71 |   toastTimeouts.set(toastId, timeout)
72 | }
73 | 
74 | export const reducer = (state: State, action: Action): State => {
75 |   switch (action.type) {
76 |     case "ADD_TOAST":
77 |       return {
78 |         ...state,
79 |         toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
80 |       }
81 | 
82 |     case "UPDATE_TOAST":
83 |       return {
84 |         ...state,
85 |         toasts: state.toasts.map((t) =>
86 |           t.id === action.toast.id ? { ...t, ...action.toast } : t
87 |         ),
88 |       }
89 | 
90 |     case "DISMISS_TOAST": {
91 |       const { toastId } = action
92 | 
93 |       // ! Side effects ! - This could be extracted into a dismissToast() action,
94 |       // but I'll keep it here for simplicity
95 |       if (toastId) {
96 |         addToRemoveQueue(toastId)
97 |       } else {
98 |         state.toasts.forEach((toast) => {
99 |           addToRemoveQueue(toast.id)
100 |         })
101 |       }
102 | 
103 |       return {
104 |         ...state,
105 |         toasts: state.toasts.map((t) =>
106 |           t.id === toastId || toastId === undefined
107 |             ? {
108 |                 ...t,
109 |                 open: false,
110 |               }
111 |             : t
112 |         ),
113 |       }
114 |     }
115 |     case "REMOVE_TOAST":
116 |       if (action.toastId === undefined) {
117 |         return {
118 |           ...state,
119 |           toasts: [],
120 |         }
121 |       }
122 |       return {
123 |         ...state,
124 |         toasts: state.toasts.filter((t) => t.id !== action.toastId),
125 |       }
126 |   }
127 | }
128 | 
129 | const listeners: Array<(state: State) => void> = []
130 | 
131 | let memoryState: State = { toasts: [] }
132 | 
133 | function dispatch(action: Action) {
134 |   memoryState = reducer(memoryState, action)
135 |   listeners.forEach((listener) => {
136 |     listener(memoryState)
137 |   })
138 | }
139 | 
140 | type Toast = Omit<ToasterToast, "id">
141 | 
142 | function toast({ ...props }: Toast) {
143 |   const id = genId()
144 | 
145 |   const update = (props: ToasterToast) =>
146 |     dispatch({
147 |       type: "UPDATE_TOAST",
148 |       toast: { ...props, id },
149 |     })
150 |   const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
151 | 
152 |   dispatch({
153 |     type: "ADD_TOAST",
154 |     toast: {
155 |       ...props,
156 |       id,
157 |       open: true,
158 |       onOpenChange: (open) => {
159 |         if (!open) dismiss()
160 |       },
161 |     },
162 |   })
163 | 
164 |   return {
165 |     id: id,
166 |     dismiss,
167 |     update,
168 |   }
169 | }
170 | 
171 | function useToast() {
172 |   const [state, setState] = React.useState<State>(memoryState)
173 | 
174 |   React.useEffect(() => {
175 |     listeners.push(setState)
176 |     return () => {
177 |       const index = listeners.indexOf(setState)
178 |       if (index > -1) {
179 |         listeners.splice(index, 1)
180 |       }
181 |     }
182 |   }, [state])
183 | 
184 |   return {
185 |     ...state,
186 |     toast,
187 |     dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
188 |   }
189 | }
190 | 
191 | export { useToast, toast }
```

src/hooks/useAuth.ts
```
1 | import { useState } from 'react';
2 | import { supabase } from '@/integrations/supabase/client';
3 | import { AuthError, User } from '@supabase/supabase-js';
4 | 
5 | interface AuthResponse {
6 |   success: boolean;
7 |   error: string | null;
8 |   data?: {
9 |     user: User | null;
10 |     session?: any;
11 |   } | null;
12 | }
13 | 
14 | export function useAuth() {
15 |   const [isLoading, setIsLoading] = useState(false);
16 |   const [error, setError] = useState<string | null>(null);
17 | 
18 |   const signInWithPhone = async (phoneNumber: string): Promise<AuthResponse> => {
19 |     console.group('📱 Phone Sign In Attempt');
20 |     console.log('Phone Number:', phoneNumber);
21 |     setIsLoading(true);
22 |     setError(null);
23 |     
24 |     try {
25 |       const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
26 |       console.log('Formatted Number:', formattedNumber);
27 |       
28 |       console.log('Calling Supabase signInWithOtp...');
29 |       const { data, error: signInError } = await supabase.auth.signInWithOtp({
30 |         phone: formattedNumber,
31 |         options: {
32 |           channel: 'sms',
33 |           shouldCreateUser: true,
34 |         }
35 |       });
36 | 
37 |       console.log('Supabase Response:', { data, error: signInError });
38 | 
39 |       if (signInError) {
40 |         console.error('Sign In Error:', {
41 |           message: signInError.message,
42 |           status: signInError?.status,
43 |           details: signInError
44 |         });
45 |         throw signInError;
46 |       }
47 | 
48 |       console.log('OTP Sent Successfully');
49 |       return { success: true, error: null };
50 |     } catch (err) {
51 |       console.error('Sign In Error Details:', {
52 |         error: err,
53 |         type: err instanceof Error ? 'Error Object' : typeof err,
54 |         message: err instanceof Error ? err.message : 'Unknown error'
55 |       });
56 |       
57 |       const errorMessage = err instanceof Error ? err.message : 'Failed to send OTP';
58 |       setError(errorMessage);
59 |       return { success: false, error: errorMessage };
60 |     } finally {
61 |       setIsLoading(false);
62 |       console.groupEnd();
63 |     }
64 |   };
65 | 
66 |   const verifyOTP = async (phoneNumber: string, token: string): Promise<AuthResponse> => {
67 |     console.group('🔐 OTP Verification Attempt');
68 |     console.log('Phone:', phoneNumber);
69 |     console.log('Token Length:', token.length);
70 |     setIsLoading(true);
71 |     setError(null);
72 | 
73 |     try {
74 |       console.log('Calling Supabase verifyOtp...');
75 |       const { data, error: verifyError } = await supabase.auth.verifyOtp({
76 |         phone: phoneNumber,
77 |         token,
78 |         type: 'sms',
79 |       });
80 | 
81 |       console.log('Verification Response:', { data, error: verifyError });
82 | 
83 |       if (verifyError) {
84 |         console.error('Verification Error:', {
85 |           message: verifyError.message,
86 |           status: verifyError?.status,
87 |           details: verifyError
88 |         });
89 |         throw verifyError;
90 |       }
91 | 
92 |       console.log('User Data:', data.user);
93 |       console.log('Session:', data.session);
94 |       return { success: true, error: null };
95 |     } catch (err) {
96 |       console.error('Verification Error Details:', {
97 |         error: err,
98 |         type: err instanceof Error ? 'Error Object' : typeof err,
99 |         message: err instanceof Error ? err.message : 'Unknown error'
100 |       });
101 |       
102 |       const errorMessage = err instanceof Error ? err.message : 'Failed to verify OTP';
103 |       setError(errorMessage);
104 |       return { success: false, error: errorMessage };
105 |     } finally {
106 |       setIsLoading(false);
107 |       console.groupEnd();
108 |     }
109 |   };
110 | 
111 |   const signInWithEmail = async (email: string, password: string): Promise<AuthResponse> => {
112 |     console.group('📧 Email Sign In Attempt');
113 |     setIsLoading(true);
114 |     setError(null);
115 | 
116 |     try {
117 |       const { data, error } = await supabase.auth.signInWithPassword({
118 |         email,
119 |         password,
120 |       });
121 | 
122 |       if (error) throw error;
123 | 
124 |       console.log('Sign in successful:', data);
125 |       return { success: true, error: null, data };
126 |     } catch (err) {
127 |       console.error('Email Sign In Error:', err);
128 |       const errorMessage = err instanceof Error ? err.message : 'Failed to sign in';
129 |       setError(errorMessage);
130 |       return { success: false, error: errorMessage, data: null };
131 |     } finally {
132 |       setIsLoading(false);
133 |       console.groupEnd();
134 |     }
135 |   };
136 | 
137 |   const signUp = async (email: string, password: string): Promise<AuthResponse> => {
138 |     console.group('📝 Sign Up Attempt');
139 |     setIsLoading(true);
140 |     setError(null);
141 | 
142 |     try {
143 |       const { data, error } = await supabase.auth.signUp({
144 |         email,
145 |         password,
146 |       });
147 | 
148 |       if (error) throw error;
149 | 
150 |       console.log('Sign up successful:', data);
151 |       return { success: true, error: null, data };
152 |     } catch (err) {
153 |       console.error('Sign Up Error:', err);
154 |       const errorMessage = err instanceof Error ? err.message : 'Failed to sign up';
155 |       setError(errorMessage);
156 |       return { success: false, error: errorMessage, data: null };
157 |     } finally {
158 |       setIsLoading(false);
159 |       console.groupEnd();
160 |     }
161 |   };
162 | 
163 |   const signOut = async (): Promise<void> => {
164 |     console.log('📤 Signing out user...');
165 |     await supabase.auth.signOut();
166 |     console.log('Sign out complete');
167 |   };
168 | 
169 |   return {
170 |     signInWithPhone,
171 |     verifyOTP,
172 |     signInWithEmail,
173 |     signUp,
174 |     signOut,
175 |     isLoading,
176 |     error,
177 |   };
178 | }
```

src/hooks/useAuthCheck.ts
```
1 | import { useState, useEffect } from "react";
2 | import { useNavigate } from "react-router-dom";
3 | import { supabase } from "@/integrations/supabase/client";
4 | 
5 | export interface AuthCheckResult {
6 |   userProfile: any;
7 |   isLoading: boolean;
8 | }
9 | 
10 | export function useAuthCheck(): AuthCheckResult {
11 |   const navigate = useNavigate();
12 |   const [userProfile, setUserProfile] = useState<any>(null);
13 |   const [isLoading, setIsLoading] = useState(true);
14 | 
15 |   const fetchProfile = async (userId: string) => {
16 |     try {
17 |       const { data: profile } = await supabase
18 |         .from('profiles')
19 |         .select('*')
20 |         .eq('user_id', userId)
21 |         .single();
22 |       
23 |       if (profile) {
24 |         setUserProfile(profile);
25 |       } else {
26 |         navigate('/onboarding');
27 |       }
28 |     } catch (error) {
29 |       console.error('Error fetching profile:', error);
30 |       setUserProfile(null);
31 |     }
32 |   };
33 | 
34 |   useEffect(() => {
35 |     const checkUser = async () => {
36 |       try {
37 |         setIsLoading(true);
38 |         const { data: { user } } = await supabase.auth.getUser();
39 |         
40 |         if (user) {
41 |           await fetchProfile(user.id);
42 |         } else {
43 |           setUserProfile(null);
44 |         }
45 |       } catch (error) {
46 |         console.error('Error checking user:', error);
47 |         setUserProfile(null);
48 |       } finally {
49 |         setIsLoading(false);
50 |       }
51 |     };
52 | 
53 |     checkUser();
54 | 
55 |     const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
56 |       console.log('Auth state changed:', event, session?.user?.id);
57 |       
58 |       if (event === 'SIGNED_IN' && session?.user) {
59 |         await fetchProfile(session.user.id);
60 |       } else if (event === 'SIGNED_OUT') {
61 |         setUserProfile(null);
62 |         navigate('/');
63 |       }
64 |     });
65 | 
66 |     return () => {
67 |       subscription.unsubscribe();
68 |     };
69 |   }, [navigate]);
70 | 
71 |   return { userProfile, isLoading };
72 | }
```

src/hooks/useEventSubmission.ts
```
1 | import { useState } from "react";
2 | import { useToast } from "@/components/ui/use-toast";
3 | import { useNavigate } from "react-router-dom";
4 | import { supabase } from "@/integrations/supabase/client";
5 | import { Tables } from "@/integrations/supabase/types";
6 | import { useGeocoding } from "@/hooks/useGeocoding";
7 | import { uploadEventCoverImage } from "@/utils/eventImageUpload";
8 | import { transformEventData } from "@/utils/eventDataTransform";
9 | 
10 | interface EventSubmissionData {
11 |   name: string;
12 |   description: string;
13 |   category: Tables<"events">["category"];
14 |   address: string;
15 |   latitude: number | null;
16 |   longitude: number | null;
17 |   date: Date | undefined;
18 |   time: string;
19 |   duration: string;
20 |   coverImage: File | null;
21 | }
22 | 
23 | export const useEventSubmission = (profile: Tables<"profiles"> | null) => {
24 |   const { toast } = useToast();
25 |   const navigate = useNavigate();
26 |   const [isSubmitting, setIsSubmitting] = useState(false);
27 |   const { geocodeAddress } = useGeocoding();
28 | 
29 |   const handleSubmit = async (data: EventSubmissionData) => {
30 |     if (!profile) {
31 |       toast({
32 |         title: "Authentication required",
33 |         description: "Please sign in to create an event",
34 |         variant: "destructive",
35 |       });
36 |       return;
37 |     }
38 | 
39 |     if (!data.date) {
40 |       toast({
41 |         title: "Date required",
42 |         description: "Please select an event date",
43 |         variant: "destructive",
44 |       });
45 |       return;
46 |     }
47 | 
48 |     try {
49 |       setIsSubmitting(true);
50 | 
51 |       // Get coordinates from address if not provided
52 |       let latitude = data.latitude;
53 |       let longitude = data.longitude;
54 |       
55 |       if (!latitude || !longitude) {
56 |         const geocodeResult = await geocodeAddress(data.address);
57 |         if (geocodeResult) {
58 |           latitude = geocodeResult.latitude;
59 |           longitude = geocodeResult.longitude;
60 |         }
61 |       }
62 | 
63 |       // Upload image if exists
64 |       let coverImageUrl = "";
65 |       if (data.coverImage) {
66 |         coverImageUrl = await uploadEventCoverImage(data.coverImage);
67 |       }
68 | 
69 |       // Transform and save event data
70 |       const eventData = transformEventData(
71 |         data,
72 |         coverImageUrl,
73 |         latitude,
74 |         longitude,
75 |         profile.id
76 |       );
77 | 
78 |       const { error: eventError } = await supabase
79 |         .from("events")
80 |         .insert(eventData);
81 | 
82 |       if (eventError) throw eventError;
83 | 
84 |       toast({
85 |         title: "Success",
86 |         description: "Event created successfully",
87 |       });
88 | 
89 |       navigate("/events");
90 |     } catch (error) {
91 |       console.error("Error creating event:", error);
92 |       toast({
93 |         title: "Error",
94 |         description: "Failed to create event. Please try again.",
95 |         variant: "destructive",
96 |       });
97 |     } finally {
98 |       setIsSubmitting(false);
99 |     }
100 |   };
101 | 
102 |   return { handleSubmit, isSubmitting };
103 | };
```

src/hooks/useGeocoding.ts
```
1 | import { useState } from "react";
2 | 
3 | interface GeocodeResult {
4 |   address: string;
5 |   latitude: number;
6 |   longitude: number;
7 | }
8 | 
9 | interface UseGeocodingReturn {
10 |   isLoading: boolean;
11 |   error: string | null;
12 |   geocodeAddress: (address: string) => Promise<GeocodeResult | null>;
13 |   reverseGeocode: (lat: number, lng: number) => Promise<string | null>;
14 | }
15 | 
16 | export function useGeocoding(): UseGeocodingReturn {
17 |   const [isLoading, setIsLoading] = useState(false);
18 |   const [error, setError] = useState<string | null>(null);
19 | 
20 |   const geocodeAddress = async (address: string): Promise<GeocodeResult | null> => {
21 |     setIsLoading(true);
22 |     setError(null);
23 | 
24 |     try {
25 |       const geocoder = new google.maps.Geocoder();
26 |       
27 |       const result = await new Promise<google.maps.GeocoderResult | null>((resolve, reject) => {
28 |         geocoder.geocode({ address }, (results, status) => {
29 |           if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
30 |             resolve(results[0]);
31 |           } else {
32 |             reject(new Error(`Geocoding failed: ${status}`));
33 |           }
34 |         });
35 |       });
36 | 
37 |       if (!result) {
38 |         throw new Error("No results found");
39 |       }
40 | 
41 |       const { lat, lng } = result.geometry.location;
42 |       
43 |       return {
44 |         address: result.formatted_address,
45 |         latitude: lat(),
46 |         longitude: lng(),
47 |       };
48 |     } catch (err) {
49 |       const errorMessage = err instanceof Error ? err.message : "Geocoding failed";
50 |       setError(errorMessage);
51 |       return null;
52 |     } finally {
53 |       setIsLoading(false);
54 |     }
55 |   };
56 | 
57 |   const reverseGeocode = async (lat: number, lng: number): Promise<string | null> => {
58 |     setIsLoading(true);
59 |     setError(null);
60 | 
61 |     try {
62 |       const geocoder = new google.maps.Geocoder();
63 |       const latLng = { lat, lng };
64 | 
65 |       const result = await new Promise<google.maps.GeocoderResult | null>((resolve, reject) => {
66 |         geocoder.geocode({ location: latLng }, (results, status) => {
67 |           if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
68 |             resolve(results[0]);
69 |           } else {
70 |             reject(new Error(`Reverse geocoding failed: ${status}`));
71 |           }
72 |         });
73 |       });
74 | 
75 |       if (!result) {
76 |         throw new Error("No results found");
77 |       }
78 | 
79 |       return result.formatted_address;
80 |     } catch (err) {
81 |       const errorMessage = err instanceof Error ? err.message : "Reverse geocoding failed";
82 |       setError(errorMessage);
83 |       return null;
84 |     } finally {
85 |       setIsLoading(false);
86 |     }
87 |   };
88 | 
89 |   return {
90 |     isLoading,
91 |     error,
92 |     geocodeAddress,
93 |     reverseGeocode,
94 |   };
95 | } 
```

src/hooks/usePhoneInput.ts
```
1 | import { useState } from 'react';
2 | import { formatPhoneNumber, formatE164, isValidPhoneNumber } from '@/utils/phoneFormatting';
3 | 
4 | interface UsePhoneInputReturn {
5 |   phoneNumber: string;
6 |   countryCode: string;
7 |   formattedE164: string;
8 |   isValid: boolean;
9 |   setCountryCode: (code: string) => void;
10 |   handlePhoneChange: (value: string) => void;
11 | }
12 | 
13 | export function usePhoneInput(initialCountryCode = '1'): UsePhoneInputReturn {
14 |   const [phoneNumber, setPhoneNumber] = useState('');
15 |   const [countryCode, setCountryCode] = useState(initialCountryCode);
16 | 
17 |   const handlePhoneChange = (value: string) => {
18 |     const formatted = formatPhoneNumber(value, countryCode);
19 |     setPhoneNumber(formatted);
20 |   };
21 | 
22 |   const formattedE164 = formatE164(phoneNumber, countryCode);
23 |   const isValid = isValidPhoneNumber(formattedE164);
24 | 
25 |   return {
26 |     phoneNumber,
27 |     countryCode,
28 |     formattedE164,
29 |     isValid,
30 |     setCountryCode,
31 |     handlePhoneChange,
32 |   };
33 | } 
```

src/hooks/useProfile.ts
```
1 | import { useState, useEffect } from "react";
2 | import { useUser } from "@supabase/auth-helpers-react";
3 | import { supabase } from "@/integrations/supabase/client";
4 | import { Tables } from "@/integrations/supabase/types";
5 | 
6 | export const useProfile = () => {
7 |   const user = useUser();
8 |   const [isLoading, setIsLoading] = useState(true);
9 |   const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
10 | 
11 |   useEffect(() => {
12 |     const checkProfile = async () => {
13 |       if (user) {
14 |         const { data: profileData } = await supabase
15 |           .from('profiles')
16 |           .select('*')
17 |           .eq('user_id', user.id)
18 |           .single();
19 |         
20 |         if (profileData) {
21 |           setProfile(profileData);
22 |         }
23 |       }
24 |       setIsLoading(false);
25 |     };
26 | 
27 |     checkProfile();
28 |   }, [user]);
29 | 
30 |   return { profile, isLoading };
31 | };
```

src/index.css
```
1 | @tailwind base;
2 | @tailwind components;
3 | @tailwind utilities;
4 | 
5 | @layer base {
6 |   :root {
7 |     --background: 0 0% 100%;
8 |     --foreground: 222.2 84% 4.9%;
9 | 
10 |     --card: 0 0% 100%;
11 |     --card-foreground: 222.2 84% 4.9%;
12 | 
13 |     --popover: 0 0% 100%;
14 |     --popover-foreground: 222.2 84% 4.9%;
15 | 
16 |     --primary: 222.2 47.4% 11.2%;
17 |     --primary-foreground: 210 40% 98%;
18 | 
19 |     --secondary: 210 40% 96.1%;
20 |     --secondary-foreground: 222.2 47.4% 11.2%;
21 | 
22 |     --muted: 210 40% 96.1%;
23 |     --muted-foreground: 215.4 16.3% 46.9%;
24 | 
25 |     --accent: 210 40% 96.1%;
26 |     --accent-foreground: 222.2 47.4% 11.2%;
27 | 
28 |     --destructive: 0 84.2% 60.2%;
29 |     --destructive-foreground: 210 40% 98%;
30 | 
31 |     --border: 214.3 31.8% 91.4%;
32 |     --input: 214.3 31.8% 91.4%;
33 |     --ring: 222.2 84% 4.9%;
34 | 
35 |     --radius: 0.5rem;
36 | 
37 |     --sidebar-background: 0 0% 98%;
38 | 
39 |     --sidebar-foreground: 240 5.3% 26.1%;
40 | 
41 |     --sidebar-primary: 240 5.9% 10%;
42 | 
43 |     --sidebar-primary-foreground: 0 0% 98%;
44 | 
45 |     --sidebar-accent: 240 4.8% 95.9%;
46 | 
47 |     --sidebar-accent-foreground: 240 5.9% 10%;
48 | 
49 |     --sidebar-border: 220 13% 91%;
50 | 
51 |     --sidebar-ring: 217.2 91.2% 59.8%;
52 |   }
53 | 
54 |   .dark {
55 |     --background: 222.2 84% 4.9%;
56 |     --foreground: 210 40% 98%;
57 | 
58 |     --card: 222.2 84% 4.9%;
59 |     --card-foreground: 210 40% 98%;
60 | 
61 |     --popover: 222.2 84% 4.9%;
62 |     --popover-foreground: 210 40% 98%;
63 | 
64 |     --primary: 210 40% 98%;
65 |     --primary-foreground: 222.2 47.4% 11.2%;
66 | 
67 |     --secondary: 217.2 32.6% 17.5%;
68 |     --secondary-foreground: 210 40% 98%;
69 | 
70 |     --muted: 217.2 32.6% 17.5%;
71 |     --muted-foreground: 215 20.2% 65.1%;
72 | 
73 |     --accent: 217.2 32.6% 17.5%;
74 |     --accent-foreground: 210 40% 98%;
75 | 
76 |     --destructive: 0 62.8% 30.6%;
77 |     --destructive-foreground: 210 40% 98%;
78 | 
79 |     --border: 217.2 32.6% 17.5%;
80 |     --input: 217.2 32.6% 17.5%;
81 |     --ring: 212.7 26.8% 83.9%;
82 |     --sidebar-background: 240 5.9% 10%;
83 |     --sidebar-foreground: 240 4.8% 95.9%;
84 |     --sidebar-primary: 224.3 76.3% 48%;
85 |     --sidebar-primary-foreground: 0 0% 100%;
86 |     --sidebar-accent: 240 3.7% 15.9%;
87 |     --sidebar-accent-foreground: 240 4.8% 95.9%;
88 |     --sidebar-border: 240 3.7% 15.9%;
89 |     --sidebar-ring: 217.2 91.2% 59.8%;
90 |   }
91 | }
92 | 
93 | @layer base {
94 |   * {
95 |     @apply border-border;
96 |   }
97 | 
98 |   body {
99 |     @apply bg-background text-foreground;
100 |   }
101 | }
```

src/instructions/app_flow_document.md
```
1 | # App Flow Document for Vently
2 | 
3 | ## Introduction
4 | 
5 | Vently is a mobile-friendly platform designed to revolutionize event promotion by providing an end-to-end solution for discovering and interacting with events and communities. The main goal of the user journey on Vently is to streamline the process of event discovery, community engagement, and ticket purchasing within a single cohesive platform. Users, such as event organizers and attendees, can benefit from features like real-time event mapping, integrated ticket sales, and robust community interaction tools, thereby enhancing their overall experience.
6 | 
7 | ## Onboarding and Sign-In/Sign-Up
8 | 
9 | A new user discovers Vently either through a web search or a direct link shared within their network. Upon landing on the homepage, which prominently features the Vently branding in synth purple, users are prompted to sign up if they're accessing the app for the first time. The sign-up process involves providing an email address and password, with the option to use third-party services like Google or Facebook for a seamless onboarding experience.
10 | 
11 | Once signed up, users can easily sign in through a dedicated sign-in page requiring their credentials or through the social media accounts they initially registered with. If a user forgets their password, the application provides a straightforward password recovery process. Upon clicking the 'Forgot Password?' link, users receive an email to reset their password and are guided back into the application after updating their credentials.
12 | 
13 | ## Main Dashboard or Home Page
14 | 
15 | After logging in, users are welcomed to a vibrant main dashboard dominated by an interactive map showcasing upcoming events around their location, marked by clickable pins. The navigation bar at the bottom presents four primary tabs—Map, Event Feed, Community Feed, and Add Event—ensuring intuitive browsing throughout the app.
16 | 
17 | The Map tab features pins representing events, complete with images and basic information visible on hover. This serves as the gateway to detailed event pages. The sidebar on this page might also feature quick links to recent RSVPs and ticket purchases to enhance navigation within relevant events.
18 | 
19 | ## Detailed Feature Flows and Page Transitions
20 | 
21 | The core features of Vently are designed for smooth transitions between discovering events and engaging with them. On the Map tab, clicking an event pin opens its event page, displaying a cover picture, detailed description, event location integrated with Google Maps, start date and time, and options to RSVP or purchase tickets.
22 | 
23 | Tickets include a name, price, expiry date, and availability, all framed by an easy-to-use purchasing interface linked to Stripe for secure payment processing. Users can comment on events, adding text or pictures, and engage with other users' content through likes or shared links.
24 | 
25 | Navigating to the Event Feed provides a chronological list of events, allowing for exploration beyond the immediate locale. Similarly, the Community Feed empowers users to discover and follow communities, with subsections for 'All Communities' and 'Followed', further fostering engagement by enabling interactions with community-generated content through comments and likes.
26 | 
27 | The Add Event tab guides event organizers through a straightforward process requiring them to input necessary details like event name, location, and description. Once published, these events appear in the relevant feeds and map view.
28 | 
29 | ## Settings and Account Management
30 | 
31 | Through a settings menu, users manage their account information including names, email addresses, and passwords. Here, they can also configure notification preferences, ensuring they receive timely updates about events they are following or participating in.
32 | 
33 | Subscription settings, if applicable, are managed under the same umbrella, allowing users to handle payment details securely via Stripe. Users can easily navigate back to the home map page after managing their account details to continue their user journey seamlessly.
34 | 
35 | ## Error States and Alternate Paths
36 | 
37 | Vently accounts for various error scenarios, such as invalid input during sign-up or map connectivity issues. Users are gently prompted to correct incorrect information with clear, user-friendly messages, without needing to exit the current flow.
38 | 
39 | In cases where events are canceled or altered, users receive immediate notifications, redirecting them to updated event pages. If users attempt restricted actions like commenting without signing in, they are prompted to complete signin first, ensuring security and proper flow continuation.
40 | 
41 | ## Conclusion and Overall App Journey
42 | 
43 | To conclude, Vently provides a streamlined and engaging user experience that begins at sign-up and extends through seamless event discovery and participation. The platform fosters community growth through active engagement features, allowing users to RSVP, purchase tickets, and partake in discussions easily. With a user-friendly interface and strategic use of integrations like Google Maps and Stripe, Vently aims to centralize event promotion while maintaining a high standard of user interaction and satisfaction.
```

src/instructions/backend_structure_document.md
```
1 | # Backend Structure Document for Vently
2 | 
3 | ## Introduction
4 | 
5 | The backend of Vently serves as the essential backbone of the platform, managing the core functionalities that enable the seamless operation of this mobile-friendly event promotion platform. Designed to handle user interactions, data management, and integration with third-party services, the backend ensures that event organizers, community leaders, and general users have a smooth experience. Vently aims to centralize event discovery and engagement, solving the fragmented nature of these processes. By employing sophisticated technologies such as Supabase, the backend promises to efficiently manage data operations and user authentication.
6 | 
7 | ## Backend Architecture
8 | 
9 | The architecture of Vently's backend is structured around a scalable and reliable framework provided by Supabase, an open-source Firebase alternative offering a comprehensive suite of database services, authentication, and real-time communication features. This framework supports RESTful API design which enhances scalability and maintainability by enabling standardized interactions between the client and server. The architecture is capable of handling high loads, ensuring optimal performance even as the user base grows. The use of Supabase facilitates seamless CRUD operations and real-time updates, critical for maintaining user engagement and system responsiveness.
10 | 
11 | ## Database Management
12 | 
13 | Vently’s database management relies on the relational database capabilities of Supabase, which uses PostgreSQL, a robust and scalable SQL database system. This choice supports structured data storage and complex query execution necessary for managing events, users, communities, and ticketing information. Data is organized into tables such as events, users, communities, tickets, and comments, ensuring logical storage and easy retrieval. Data integrity and access are managed through strict relational database principles, which cater to complex transactions and reporting requirements. Supabase also offers real-time subscription features, allowing for immediate updates on events and community activity, catering to the need for real-time interaction.
14 | 
15 | ## API Design and Endpoints
16 | 
17 | The API design of Vently is centered around RESTful principles, allowing for efficient communication between the frontend and backend. Key endpoints include those for user authentication, event creation and management, community interaction, and ticketing processes. For example, `/api/events` allows organizers to create or update events, `/api/communities` manages community data and membership, and `/api/tickets` handles ticket purchasing and sales. These endpoints facilitate user actions such as RSVPing to events, commenting, and following communities, bridging the gap between the user interface and backend operations.
18 | 
19 | ## Hosting Solutions
20 | 
21 | Vently's backend is hosted on a cloud-based platform, Supabase, known for its efficient serverless architecture and ease of integration. This solution is both reliable and cost-effective, eliminating the need for extensive infrastructure management by providing managed databases and authentication systems. The cloud environment ensures automatic scalability, critical for handling peak times and growing user engagement, and includes built-in redundancy measures, enhancing system reliability.
22 | 
23 | ## Infrastructure Components
24 | 
25 | The infrastructure for Vently comprises key components to boost performance and user experience. The use of a Content Delivery Network (CDN) ensures rapid loading times for static and dynamic content by caching information closer to the user’s location. Additionally, load balancers are deployed to distribute incoming traffic evenly across available servers, preventing any single server from being overwhelmed and thus maintaining fast response times. Caching mechanisms are also implemented to reduce database query loads and accelerate data retrieval.
26 | 
27 | ## Security Measures
28 | 
29 | Security is a paramount concern for Vently, and as such, the backend incorporates several protective measures. Data encryption is implemented for sensitive information both in transit and at rest, ensuring user data remains confidential. Supabase entitles its services with robust authentication and authorization protocols, utilizing OAuth for secure user logins and managing permissions based on defined roles such as Regular Users, Event Organizers, and Community Admins. These security practices not only protect user data but also comply with major regulatory frameworks such as GDPR, where applicable.
30 | 
31 | ## Monitoring and Maintenance
32 | 
33 | To ensure the health and performance of Vently’s backend, robust monitoring tools are employed. Real-time analytics provided by Supabase allow for proactive performance management, identifying potential issues before they impact users. Logs are actively monitored, and alerts are established for atypical activity or service disruptions. Regular maintenance schedules are followed, including database backups and software updates, to sustain reliability and extend system life, ensuring that the backend infrastructure remains up-to-date with security patches and performance enhancements.
34 | 
35 | ## Conclusion and Overall Backend Summary
36 | 
37 | In conclusion, Vently's backend is meticulously designed to support the goals of effective event promotion and community engagement. Its use of Supabase not only offers a reliable database solution but also enhances user interaction through real-time features. By aligning the architecture, API design, and infrastructure components with Vently's objectives, the backend stands out as a robust, scalable system that addresses the needs of event organizers, community leaders, and end-users. With a strong focus on security, efficiency, and scalability, Vently is well-positioned to provide an exceptional user experience, distinct from other event platforms.
```

src/instructions/contemplate.md
```
1 | Instructions for Aider and other LLM tools:
2 | Keep it simple!
3 | 
4 | 1. Embrace Simplicity Over Cleverness
5 | - Write code that's immediately understandable to others
6 | - If a solution feels complex, it probably needs simplification
7 | - Optimize for readability first, performance second unless proven otherwise
8 | - Avoid premature optimization
9 | 
10 | ```python
11 | # Avoid clever one-liners
12 | # Bad
13 | return [n for n in range(max_num) if all(n % i != 0 for i in range(2, n))]
14 | 
15 | # Good
16 | def find_prime_numbers(max_num):
17 |     primes = []
18 |     for number in range(2, max_num):
19 |         if is_prime(number):
20 |             primes.append(number)
21 |     return primes
22 | 
23 | def is_prime(n):
24 |     if n < 2:
25 |         return False
26 |     for i in range(2, int(n ** 0.5) + 1):
27 |         if n % i == 0:
28 |             return False
29 |     return True
30 | ```
31 | 
32 | 2. Focus on Core Functionality
33 | - Start with the minimum viable solution
34 | - Question every feature: "Is this really necessary?"
35 | - Build incrementally based on actual needs, not hypothetical ones
36 | - Delete unnecessary code and features
37 | 
38 | ```python
39 | # Bad: Overengineered from the start
40 | class UserManager:
41 |     def __init__(self, db, cache, logger, metrics, notification_service):
42 |         self.db = db
43 |         self.cache = cache
44 |         self.logger = logger
45 |         self.metrics = metrics
46 |         self.notification = notification_service
47 | 
48 | # Good: Start simple, expand when needed
49 | class UserManager:
50 |     def __init__(self, db):
51 |         self.db = db
52 | ```
53 | 
54 | 3. Leverage Existing Solutions
55 | - Use standard libraries whenever possible
56 | - Don't reinvent the wheel
57 | - Choose well-maintained, popular libraries for common tasks
58 | - Keep dependencies minimal but practical
59 | 
60 | ```python
61 | # Bad: Custom implementation
62 | def parse_json_file(file_path):
63 |     with open(file_path, 'r') as f:
64 |         content = f.read()
65 |         # Custom parsing logic...
66 | 
67 | # Good: Use standard library
68 | import json
69 | 
70 | def read_config(file_path):
71 |     with open(file_path, 'r') as f:
72 |         return json.load(f)
73 | ```
74 | 
75 | 4. Function Design
76 | - Each function should have a single responsibility
77 | - Keep functions short (typically under 20 lines)
78 | - Use descriptive names that indicate purpose
79 | - Limit number of parameters (3 or fewer is ideal)
80 | 
81 | ```python
82 | # Bad: Multiple responsibilities
83 | def process_user_data(user_data):
84 |     # Validates, saves, and sends notifications
85 |     if validate_user(user_data):
86 |         save_to_database(user_data)
87 |         send_welcome_email(user_data)
88 |         update_metrics(user_data)
89 | 
90 | # Good: Single responsibility
91 | def save_user(user_data):
92 |     """Saves validated user data to database."""
93 |     if not user_data:
94 |         raise ValueError("User data cannot be empty")
95 |     return database.insert("users", user_data)
96 | ```
97 | 
98 | 5. Project Structure
99 | - Keep related code together
100 | - Use consistent file organization
101 | - Maintain a flat structure where possible
102 | - Group by feature rather than type
103 | 
104 | ```plaintext
105 | # Good project structure
106 | project/
107 | ├── main.py
108 | ├── config.py
109 | ├── users/
110 | │   ├── models.py
111 | │   ├── services.py
112 | │   └── tests/
113 | └── utils/
114 |     └── helpers.py
115 | ```
116 | 
117 | 6. Code Review Guidelines
118 | - Review for simplicity first
119 | - Question complexity and overengineering
120 | - Look for duplicate code and abstraction opportunities
121 | - Ensure consistent style and naming conventions
122 | 
123 | 7. Maintenance Practices
124 | - Regularly remove unused code
125 | - Keep dependencies updated
126 | - Refactor when code becomes unclear
127 | - Document only what's necessary and likely to change
128 | 
129 | Remember:
130 | - Simple code is easier to maintain and debug
131 | - Write code for humans first, computers second
132 | - Add complexity only when justified by requirements
133 | - If you can't explain your code simply, it's probably too complex
134 | 
135 | 
136 | Complexity is what kills you
137 | When you finish editing, present me with a list of options of how we could continue. Indicate what you think should be the next step
138 | When I just send you the letter c, I mean continue
139 | Make scripts executable
140 | Don't add any docstrings or comments, unless they really are needed for explaining the why 
141 | When you see comments or docstrings that are not absolutely necessary remove them.
142 | Use type hints whenever possible.
143 | 
144 | Use descriptive, meaningful names for variables, functions, and classes
145 | 
146 | Group related code together
147 | Use consistent indentation (typically 2 or 4 spaces)
148 | Add spacing between logical sections
149 | 
150 | Handle potential errors explicitly
151 | Validate input data
152 | Return meaningful error messages
153 | 
154 | Use consistent formatting
155 | Avoid deep nesting of conditionals
156 | 
157 | Debugging software involves a systematic and 
158 | methodical approach to identify, isolate, and fix errors or 
159 | bugs in the code. Here are the key steps and techniques to help
160 | you debug software effectively:
161 | 
162 | ## 1. Figure Out the Symptoms
163 | - The first step is to understand the symptoms of the bug. What
164 | is the incorrect behavior? What errors are being reported? Take
165 | time to digest the bug report and play around with the software
166 | to replicate the issue[2][4][5].
167 | 
168 | ## 2. Reproduce the Bug
169 | - Reproduce the bug in a controlled environment. Start by 
170 | reproducing it in the same environment where it was originally 
171 | reported, and then reduce the steps to the minimum necessary to
172 | trigger the bug. This helps in isolating the issue[2][4].
173 | 
174 | ## 3. Understand the System
175 | - Gain a thorough understanding of the system and its 
176 | components. Knowing how different parts of the system interact 
177 | can help you narrow down where the bug might be located[2][4].
178 | 
179 | ## 4. Form a Hypothesis
180 | - Based on your understanding, form a hypothesis about where 
181 | the bug is located. Ask questions like which component or 
182 | module might be causing the issue and whether it's related to 
183 | interactions between components[2].
184 | 
185 | ## 5. Test Your Hypothesis
186 | - Test your hypothesis by validating input/output of the 
187 | suspected component. Modify the code if necessary to get more 
188 | information, such as adding debug logs. Ensure that any 
189 | modifications do not hide the bug[2][4].
190 | 
191 | 
192 | 
193 | # Object-Oriented Programming Guidelines for Simple, Robust Code
194 | 
195 | ## Core Principles
196 | 
197 | ### 1. Single Responsibility Principle
198 | Each class should have one clear purpose and reason to change. Break complex classes into smaller, focused ones.
199 | 
200 | Example:
201 | ```python
202 | # Bad
203 | class UserManager:
204 |     def save_user(self, user): ...
205 |     def send_email(self, user): ...
206 |     def generate_report(self): ...
207 | 
208 | # Good
209 | class UserRepository:
210 |     def save_user(self, user): ...
211 | 
212 | class EmailService:
213 |     def send_email(self, user): ...
214 | 
215 | class ReportGenerator:
216 |     def generate_report(self): ...
217 | ```
218 | 
219 | ### 2. Encapsulation
220 | Hide internal details and provide a clean interface. Use private attributes and public methods judiciously.
221 | 
222 | Example:
223 | ```python
224 | class BankAccount:
225 |     def __init__(self):
226 |         self._balance = 0  # Protected attribute
227 |         
228 |     def deposit(self, amount):
229 |         if amount <= 0:
230 |             raise ValueError("Amount must be positive")
231 |         self._balance += amount
232 |         
233 |     def get_balance(self):
234 |         return self._balance
235 | ```
236 | 
237 | ### 3. Clear Constructor Initialization
238 | Initialize all attributes in the constructor. Make the object's state clear from the start.
239 | 
240 | Example:
241 | ```python
242 | class Customer:
243 |     def __init__(self, name, email):
244 |         self.name = name
245 |         self.email = email
246 |         self.orders = []
247 |         self.total_spent = 0
248 | ```
249 | 
250 | ### 4. Favor Composition Over Inheritance
251 | Use composition to build complex objects from simpler ones instead of deep inheritance hierarchies.
252 | 
253 | Example:
254 | ```python
255 | # Bad
256 | class SupermarketItem(ElectronicDevice, Perishable, Taxable):
257 |     pass
258 | 
259 | # Good
260 | class SupermarketItem:
261 |     def __init__(self):
262 |         self.electronic = ElectronicProperties()
263 |         self.perishable = PerishableProperties()
264 |         self.tax = TaxProperties()
265 | ```
266 | 
267 | ### 5. Make Dependencies Explicit
268 | Use dependency injection instead of creating dependencies inside methods.
269 | 
270 | Example:
271 | ```python
272 | # Bad
273 | class OrderService:
274 |     def process_order(self, order):
275 |         emailer = EmailService()  # Hidden dependency
276 |         emailer.send_confirmation(order)
277 | 
278 | # Good
279 | class OrderService:
280 |     def __init__(self, email_service):
281 |         self.email_service = email_service  # Explicit dependency
282 |         
283 |     def process_order(self, order):
284 |         self.email_service.send_confirmation(order)
285 | ```
286 | 
287 | ### 7. Use Strong Types and Interface Contracts
288 | Define clear interfaces and type hints to make code more maintainable and self-documenting.
289 | 
290 | Example:
291 | ```python
292 | from typing import List, Optional
293 | 
294 | class ShoppingCart:
295 |     def __init__(self) -> None:
296 |         self.items: List[Item] = []
297 |         
298 |     def add_item(self, item: Item) -> None:
299 |         self.items.append(item)
300 |         
301 |     def get_total(self) -> float:
302 |         return sum(item.price for item in self.items)
303 | ```
304 | 
305 | ### 8. Keep Methods Short and Focused
306 | Each method should do one thing well. Extract complex logic into helper methods.
307 | 
308 | Example:
309 | ```python
310 | # Bad
311 | def process_order(self, order):
312 |     # 100 lines of mixed logic
313 | 
314 | # Good
315 | def process_order(self, order):
316 |     self.validate_order(order)
317 |     total = self.calculate_total(order)
318 |     self.apply_discounts(order)
319 |     self.update_inventory(order)
320 |     self.send_confirmation(order)
321 | ```
322 | 
323 | ## Best Practices for Testing
324 | 
325 | 1. Write tests first (TDD) when possible
326 | 2. Test public interfaces, not implementation details
327 | 3. Use meaningful test names that describe the scenario
328 | 4. Keep tests independent and isolated
329 | 5. Test edge cases and error conditions
330 | 
331 | Example:
332 | ```python
333 | def test_withdraw_insufficient_funds():
334 |     account = BankAccount()
335 |     account.deposit(100)
336 |     
337 |     with pytest.raises(InsufficientFunds):
338 |         account.withdraw(150)
339 | ```
340 | 
341 | ## Common Anti-Patterns to Avoid
342 | 
343 | 1. God Classes: Classes that do too much
344 | 2. Feature Envy: Methods that use more features of other classes than their own
345 | 3. Long Parameter Lists: Methods with too many parameters
346 | 4. Tight Coupling: Classes that know too much about each other
347 | 5. Premature Optimization: Making code complex for theoretical performance gains
```

src/instructions/cursorrules_file.md
```
1 | # Cursor Rules for Vently Project
2 | 
3 | ## Project Overview
4 | 
5 | *   **Project Name:** Vently
6 | 
7 | *   **Description:** Vently is a dynamic, mobile-friendly platform designed to centralize event promotion and engagement within communities. It features a user-friendly interface that allows users to discover events through a map, engage with communities, purchase tickets, and participate in discussions.
8 | 
9 | *   **Tech Stack:**
10 | 
11 |     *   Frontend: ReactJS
12 |     *   Styling: Tailwind CSS
13 |     *   Backend & Database: Supabase
14 |     *   Payment Integration: Stripe
15 |     *   Location Services: Google Maps API
16 | 
17 | *   **Key Features:**
18 | 
19 |     *   Interactive event map with clickable pins for event discovery.
20 |     *   Event and community management capabilities.
21 |     *   Secure ticket purchasing with payment gateway integration.
22 |     *   User roles for Regular Users, Event Organizers, and Community Admins.
23 | 
24 | ## Project Structure
25 | 
26 | *   **Root Directory:** Contains the main configuration files and documentation.
27 | 
28 | *   `/frontend/`: All frontend-related code.
29 | 
30 |     *   `/components/`:
31 | 
32 |         *   `MapView`: Displays events on a map.
33 |         *   `EventCard`: Presents event details.
34 |         *   `CommunityList`: Displays a list of communities.
35 |         *   Other UI components as necessary.
36 | 
37 |     *   `/assets/`:
38 | 
39 |         *   Event images and icons.
40 |         *   Community profile pictures.
41 | 
42 |     *   `/styles/`:
43 | 
44 |         *   Global styles utilizing Tailwind CSS.
45 | 
46 | *   `/backend/`: All backend-related code.
47 | 
48 |     *   `/controllers/`: Handles CRUD operations for events and community entities.
49 |     *   `/models/`: Schema definitions for Events, Tickets, Users, and Communities.
50 |     *   `/routes/`: API endpoints for frontend-backend communication.
51 | 
52 | *   `/config/`: Configuration files for environment variables and application settings.
53 | 
54 | *   `/tests/`: Unit and integration tests for frontend and backend modules.
55 | 
56 | ## Development Guidelines
57 | 
58 | *   **Coding Standards:**
59 | 
60 |     *   Follow the Airbnb React/JSX Style Guide for JavaScript and React components.
61 |     *   Consistent use of `eslint` for styling and error prevention.
62 |     *   Component files should be organized by feature or route for clarity.
63 | 
64 | *   **Component Organization:**
65 | 
66 |     *   Each component should be modular, maintaining a single responsibility principle.
67 |     *   Utilize context API or third-party state management tools where appropriate.
68 | 
69 | ## Cursor IDE Integration
70 | 
71 | *   **Setup Instructions:**
72 | 
73 |     *   Clone the repository locally.
74 |     *   Run `npm install` to set up dependencies.
75 |     *   Start the development environment with `npm start` for frontend and backend servers.
76 | 
77 | *   **Key Commands:**
78 | 
79 |     *   `npm run test` to run tests.
80 |     *   Use the built-in tools of Cursor AI for real-time code suggestions and modifications.
81 | 
82 | ## Additional Context
83 | 
84 | *   **User Roles:**
85 | 
86 |     *   Regular Users: Can browse events and communities, RSVP, and purchase tickets.
87 |     *   Event Organizers: Can create and manage events, access to event-related analytics (future feature).
88 |     *   Community Admins: Manage community settings and moderate content.
89 | 
90 | *   **Accessibility Considerations:**
91 | 
92 |     *   Use ARIA roles to enhance component accessibility.
93 |     *   Ensure color contrast meets WCAG standards for the synthe purple theme.
```

src/instructions/database_schema.md
```
1 | # Database Schema for Vently
2 | 
3 | This document outlines the database schema for the Vently platform. The schema is designed to support the fundamental features of the application, including event management, community interactions, user roles and permissions, and ticketing. The database is structured using Supabase, which offers a PostgreSQL-based backend with integrated authentication and real-time capabilities.
4 | 
5 | ## Tables and Relationships
6 | 
7 | ### Users
8 | 
9 | *   **id** (UUID, Primary Key): Unique identifier for each user.
10 | *   **username** (VARCHAR, Unique, Not Null): Username of the user.
11 | *   **email** (VARCHAR, Unique, Not Null): Email address for authentication.
12 | *   **password_hash** (VARCHAR, Not Null): Hashed password for security.
13 | *   **role** (ENUM, Not Null): Defines the role of the user (`regular`, `organizer`, `admin`).
14 | *   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the user account was created.
15 | 
16 | ### Events
17 | 
18 | *   **id** (UUID, Primary Key): Unique identifier for each event.
19 | *   **name** (VARCHAR, Not Null): Name of the event.
20 | *   **cover_picture** (VARCHAR): URL of the event's cover image.
21 | *   **description** (TEXT): Detailed description of the event.
22 | *   **start_datetime** (TIMESTAMP, Not Null): Start date and time of the event.
23 | *   **duration** (INTERVAL): Duration of the event.
24 | *   **category** (ENUM, Not Null): Category of the event (e.g., Music, Tech, Sports).
25 | *   **location** (GEOMETRY): Geospatial data for the event location.
26 | *   **public** (BOOLEAN, Default: TRUE): Determines if the event is public.
27 | *   **organizer_id** (UUID, Foreign Key -> Users.id): Organizer of the event.
28 | *   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the event was created.
29 | 
30 | ### Communities
31 | 
32 | *   **id** (UUID, Primary Key): Unique identifier for each community.
33 | *   **name** (VARCHAR, Unique, Not Null): Name of the community.
34 | *   **bio** (TEXT): A brief description or biography of the community.
35 | *   **profile_picture** (VARCHAR): URL of the community's profile picture.
36 | *   **admin_id** (UUID, Foreign Key -> Users.id): Administrator of the community.
37 | *   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the community was created.
38 | 
39 | ### Tickets
40 | 
41 | *   **id** (UUID, Primary Key): Unique identifier for each ticket.
42 | *   **event_id** (UUID, Foreign Key -> Events.id): Associated event.
43 | *   **name** (VARCHAR, Not Null): Ticket name or type.
44 | *   **price** (DECIMAL(10, 2), Not Null): Price of the ticket.
45 | *   **expiration_date** (DATE): Expiration date for the ticket sale.
46 | *   **quantity** (INTEGER, Default: 0): Number of tickets available (0 = unlimited).
47 | 
48 | ### Comments
49 | 
50 | *   **id** (UUID, Primary Key): Unique identifier for each comment.
51 | *   **user_id** (UUID, Foreign Key -> Users.id): Author of the comment.
52 | *   **event_id** (UUID, Foreign Key, Nullable -> Events.id): Event related to the comment.
53 | *   **community_id** (UUID, Foreign Key, Nullable -> Communities.id): Community related to the comment.
54 | *   **content** (TEXT, Not Null): Content of the comment.
55 | *   **picture** (VARCHAR): Optional image URL associated with the comment.
56 | *   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of when the comment was posted.
57 | 
58 | ### RSVPs
59 | 
60 | *   **user_id** (UUID, Primary Key, Foreign Key -> Users.id): User RSVPing to an event.
61 | *   **event_id** (UUID, Primary Key, Foreign Key -> Events.id): Event to which the user is RSVPing.
62 | *   **status** (ENUM, Not Null): RSVP status (`yes`, `no`, `maybe`).
63 | *   **created_at** (TIMESTAMP, Default: NOW()): Timestamp of the RSVP.
64 | 
65 | ### Follows
66 | 
67 | *   **follower_id** (UUID, Primary Key, Foreign Key -> Users.id): User following the community.
68 | *   **community_id** (UUID, Primary Key, Foreign Key -> Communities.id): Community being followed.
69 | *   **followed_at** (TIMESTAMP, Default: NOW()): Timestamp of when the follow was initiated.
70 | 
71 | ## Additional Considerations
72 | 
73 | *   **Indexes**: Appropriate indexes should be added on frequently queried columns to enhance performance.
74 | *   **Constraints**: Foreign key constraints ensure data integrity between related tables.
75 | *   **Triggers**: Utilize triggers for automatic updates of certain fields or actions, where applicable.
76 | 
77 | This schema serves as the foundation for the Vently platform, supporting scalability and future feature enhancements. The structure efficiently organizes data related to users, events, tickets, communities, comments, and interactions.
```

src/instructions/file_structure_document.md
```
1 | **Introduction**\
2 | In the realm of modern web development, a well-organized file structure is crucial for ensuring scalability and ease of collaboration. The Vently project, an innovative event promotion platform, relies heavily on efficient file structuring to streamline the development process and facilitate smooth communication among team members. By adhering to best practices, Vently aims to offer a seamless user experience, meeting the requirements for an MVP that can quickly be brought to market.
3 | 
4 | **Overview of the Tech Stack**\
5 | Vently employs a cutting-edge tech stack comprising ReactJS for the frontend, Tailwind CSS for styling, Supabase for backend and database management, and Stripe for secure payment integration. The Google Maps API plays a pivotal role in providing location services. This combination of technologies not only enhances the platform’s functionality but also dictates the organization of files and directories, ensuring that each component is easily accessible and logically placed within the system.
6 | 
7 | **Root Directory Structure**\
8 | At the root level, the project's directory structure lays the foundation for easy project navigation and management. Key directories include:
9 | 
10 | 1.  **/src** - This primary folder contains all source code files crucial for the application's functionality. Inside, subdirectories like /components, /pages, and /services help keep the React components, different pages, and service logic neatly organized.
11 | 2.  **/public** - A directory that houses static files, such as images and index.html, which do not require pre-processing before serving to the client.
12 | 3.  **/config** - Configuration files, including setup scripts and possibly environment definitions, reside in this directory ensuring a centralized configuration.
13 | 4.  **/scripts** - Any automation or development scripts used to streamline processes are stored here.
14 | 5.  **.env.local** - This file contains environment-specific variables that are crucial for development and potentially different for production and testing environments.
15 | 
16 | **Configuration and Environment Files**\
17 | Configuration files are fundamental in defining how the project is set up and run. Key configuration files include package.json for dependency management, .babelrc or babel.config.js for JavaScript transpiling configurations, and tsconfig.json if TypeScript integration is considered. The .env.local file stores environment variables, securing sensitive information necessary for developing and deploying the Vently platform, such as API keys for Stripe and Google Maps.
18 | 
19 | **Testing and Documentation Structure**\
20 | The structure for testing and documentation is organized to ensure all aspects of quality assurance and knowledge transfer are straightforward. Test files are typically located in a **tests** directory within /src, using frameworks like Jest for unit testing components. Documentation either resides in a /docs folder or directly within the root directory as markdown files like README.md, offering guidelines on setting up, contributing to, and deploying the project.
21 | 
22 | **Conclusion and Overall Summary**\
23 | The systematic file organization in Vently underpins its development and operational efficiency, proving essential in delivering a robust MVP quickly. This structure not only supports current development needs but also accommodates future scaling and feature extension, such as ticket approval workflows or more advanced analytics. By maintaining a logical and clear file organization, Vently distinguishes itself, ensuring both developers and stakeholders can seamlessly interact with the project, focusing on what truly matters: enabling dynamic event promotion and community engagement.
```

src/instructions/frontend_guidelines_document.md
```
1 | ### Introduction
2 | 
3 | The frontend of the Vently platform plays a crucial role in shaping the overall user experience by providing an intuitive and visually appealing interface for event discovery and community interaction. It is the user's first point of contact with the application, offering functionalities that streamline navigation and engagement with events and communities. The need for a seamless and engaging frontend is underscored by Vently's mission to centralize event promotion and enhance community interactions, thereby providing users with a cohesive platform for discovering and joining events with ease.
4 | 
5 | ### Frontend Architecture
6 | 
7 | Vently’s frontend architecture is built using ReactJS, a popular JavaScript library known for its efficiency in building dynamic user interfaces. The decision to use ReactJS is driven by its component-based architecture, which enhances both scalability and maintainability by promoting reusable components. This allows for the rapid implementation of new features and designs, ensuring that Vently can evolve alongside user needs. Tailwind CSS is leveraged for styling, providing a utility-first approach that enables the rapid design of responsive and consistent interfaces. Together, these technologies ensure that Vently delivers high performance and a smooth user experience.
8 | 
9 | ### Design Principles
10 | 
11 | Key design principles for Vently include usability, accessibility, and responsiveness. Usability ensures that users can easily navigate the platform, with intuitive navigation tabs and clear iconography enhancing the overall user journey. Accessibility principles focus on ensuring the platform can be used by as many people as possible, including those with disabilities, by following best practices in web design and development. Responsiveness guarantees that Vently's interface adjusts seamlessly to various screen sizes and device types, offering mobile-friendly interactions essential for today's users.
12 | 
13 | ### Styling and Theming
14 | 
15 | The styling approach of Vently centers around the use of Tailwind CSS, enabling developers to apply consistent and reusable styles rapidly. Tailwind's utility classes allow for easy customization of components while maintaining a cohesive aesthetic aligned with the brand's 'synth purple' vibe with gradients. If theming is required, Tailwind's configuration capabilities allow effortless customization of color schemes to maintain a consistent look and feel across the application, ensuring brand identity is reinforced in every user interaction.
16 | 
17 | ### Component Structure
18 | 
19 | Vently employs a component-based structure prevalent in ReactJS applications. This approach encourages the breaking down of the application's interface into smaller, reusable components. Each component is self-contained, managing its state where necessary and communicating with others via props. This modular approach promotes maintainability and scalability, allowing developers to update or refactor parts of the application without impacting the overall architecture.
20 | 
21 | ### State Management
22 | 
23 | The application utilizes React's Context API to manage state and facilitate the sharing of data across components efficiently. This approach ensures a centralized state management system that can handle dynamic updates and user interactions in real-time, critical for features like RSVP tracking and commenting. The Context API simplifies the process of passing data globally without the need for intermediary components, enhancing the user experience by streamlining component interaction.
24 | 
25 | ### Routing and Navigation
26 | 
27 | Routing in Vently is handled using React Router, a library that maintains the synchronization between the UI and the URL. This is essential for guiding users through various sections of the application, such as event details or community feeds, while keeping the navigation experience fluid. The navigation structure is strategically designed to allow easy access to key features—Map, Event Feed, Community Feed, and Add Event—through a straightforward tab bar at the bottom of the interface.
28 | 
29 | ### Performance Optimization
30 | 
31 | To optimize the frontend performance of Vently, several strategies are employed, including lazy loading and code splitting. Lazy loading is particularly used for loading event details only when needed, significantly reducing initial load times. Code splitting divides the application into smaller chunks, allowing the browser to efficiently load resources as required. Together, these methods contribute to a responsive and fast-loading user interface, enhancing the overall experience.
32 | 
33 | ### Testing and Quality Assurance
34 | 
35 | Vently’s frontend undergoes rigorous testing to ensure quality and reliability. Unit tests are written for individual components to validate functionality, while integration tests ensure that components work together as expected. End-to-end tests simulate real user scenarios to verify that the application behaves correctly from start to finish. Tools such as Jest and testing libraries compatible with React ensure robust testing processes, catching bugs early and enhancing overall software quality.
36 | 
37 | ### Conclusion and Overall Frontend Summary
38 | 
39 | The frontend guidelines for Vently emphasize a user-centric approach that aligns with the project’s goals of enhancing event discovery and community interaction. By leveraging modern technologies such as ReactJS and Tailwind CSS, the platform delivers an engaging and scalable user experience. Key design principles ensure that usability, accessibility, and responsiveness remain central, while effective state management and routing enhance interaction fluidity. Through careful performance optimization and comprehensive testing, Vently distinguishes itself as a leading platform in mobile-friendly event promotion, setting a benchmark for future enhancements.
```

src/instructions/project_requirements_document.md
```
1 | # Project Requirements Document for Vently
2 | 
3 | ## Project Overview
4 | 
5 | Vently is an innovative mobile-friendly platform designed to revolutionize the way people discover and interact with events and communities. The primary mission of Vently is to solve the prevalent problem of fragmented event discovery by centralizing the location and promotion of events within various communities. By offering features such as real-time event mapping, community engagement tools, and a streamlined ticket purchasing process, Vently enhances user experience and facilitates seamless interaction between event organizers and attendees.
6 | 
7 | The impetus behind building Vently is to create a unified space where event planners and community leaders can efficiently promote their activities and attract more participants. Success for Vently hinges on achieving these objectives: an intuitive event discovery interface, a lively community engagement platform, and an effective ticketing system. This is further underscored by a focus on user experience, ensuring that participants can effortlessly navigate through events worth attending and engage with communities of interest.
8 | 
9 | ## In-Scope vs. Out-of-Scope
10 | 
11 | **In-Scope:**
12 | 
13 | *   A main page featuring a Google Map with pins representing upcoming events.
14 | *   Four main navigation tabs: Map, Event Feed, Community Feed, and Add Event.
15 | *   Creation and management of events, allowing users to add details like cover picture, address (Google Maps compatible), description, category, and other event details.
16 | *   Community creation and management, including follower interactions, bios, and comments.
17 | *   Ticketing module for events, including name, price, expiration date, and the number of tickets (feature for ticket approval reserved for future updates).
18 | *   Comments and interaction features for events and communities, with capabilities for likes and shared links.
19 | *   User role management differentiating between Regular Users, Event Organizers, and Community Admins.
20 | *   Integration with Google Maps for location services.
21 | *   Secure payment integration using Stripe.
22 | *   Adherence to branding guidelines using synth purple with gradients for a modern aesthetic.
23 | 
24 | **Out-of-Scope:**
25 | 
26 | *   Private events that are subject to invitation only (planned for a future phase).
27 | *   Advanced features like ticket buyer approval (planned for a future phase).
28 | *   In-depth analytics and reporting tools beyond basic event tracking.
29 | *   Automated or AI-powered content curation tools (planned for review at later stages).
30 | 
31 | ## User Flow
32 | 
33 | When users launch Vently, they encounter a vibrant main page prominently featuring an interactive map. This map is adorned with clickable pins, each representing an upcoming event that users can explore. Navigation across Vently is facilitated by four distinct tabs: a Map for location-based event discovery, an Event Feed displaying a curated list of events, a Community Feed which highlights both all communities and those followed by the user, and an Add Event tab which empowers users to create new events easily.
34 | 
35 | Upon selecting an event via a pin or from the feed, users are directed to a detailed event page. Here, they can RSVP, purchase tickets securely through the integrated payment system, and engage with other attendees through a comment section. Users can also explore various communities, follow their updates, and partake in discussions. This smooth flow from discovery to engagement encapsulates Vently’s commitment to providing a rich, interactive user experience.
36 | 
37 | ## Core Features
38 | 
39 | *   **Event Discovery**: Interactive map interface that displays events through clickable pins connected to event details.
40 | *   **Event Management**: Features for creating and detailing events with category, description, and location integration.
41 | *   **Community Engagement**: Users can create and manage communities, complete with bios, followers, and comments.
42 | *   **Commenting System**: Interactive comments with the ability to like and share links.
43 | *   **Tickets Management**: Purchase process for events using integrated payment services.
44 | *   **User Roles**: Distinguish roles and permissions for Regular Users, Event Organizers, and Community Admins.
45 | *   **Navigation**: A user-friendly interface with clear navigation tabs for ease of access to all features.
46 | 
47 | ## Tech Stack & Tools
48 | 
49 | *   **Frontend**: ReactJS
50 | *   **Styling**: Tailwind CSS
51 | *   **Backend & Database**: Supabase
52 | *   **Payment Integration**: Stripe
53 | *   **Location Services**: Google Maps API
54 | *   **AI-Powered Tools**: ChatGPT for advanced coding assistance
55 | *   **IDE Integration**: Cursor AI for real-time coding support
56 | 
57 | ## Non-Functional Requirements
58 | 
59 | *   **Performance**: The application should maintain fast loading times, especially under peak use scenarios.
60 | *   **Security**: Data protection measures must comply with regulatory standards (e.g., GDPR, if applicable).
61 | *   **Usability**: The platform should be intuitive, with responsive design ensuring a smooth experience across devices.
62 | *   **Availability**: Target system uptime should remain above 99.9%.
63 | 
64 | ## Constraints & Assumptions
65 | 
66 | *   Utilization of GPT-4o is assumed for any future AI integration needs.
67 | *   The successful implementation of Google Maps API and Stripe as core external services.
68 | 
69 | ## Known Issues & Potential Pitfalls
70 | 
71 | *   **API Rate Limits**: Google Maps API may impose rate limits affecting event loading.
72 | *   **Platform Restrictions**: Payment gateway rules (Stripe) may limit financial transaction capabilities across regions.
73 | *   **Scaling Concerns**: Initially, capacity for high user interactions may strain server resources; consider scalable infrastructure solutions.
74 | 
75 | This PRD will guide the development of Vently, ensuring a cohesive and quality experience for users while providing clear directives for subsequent development phases.
```

src/instructions/tech_stack_document.md
```
1 | ### Introduction
2 | Vently is an intuitive and mobile-friendly platform that centralizes event promotions within communities. The core purpose of Vently is to simplify event discovery and enhance community engagement by providing a seamless user interface that allows users to explore, participate, and manage events and communities effectively. As outlined in the project description, the primary goals of the technological choices for Vently are to support a robust, user-centric platform that is easy to navigate and scalable, with a focus on integrating advanced mapping services and secure payment processing.
3 | 
4 | ### Frontend Technologies
5 | For the frontend of Vently, ReactJS is used as the main framework. ReactJS is chosen for its efficiency in building interactive user interfaces, particularly due to its component-based architecture which ensures a dynamic and responsive user experience. To style the platform, Tailwind CSS is used, offering a utility-first CSS framework that allows for rapid customization and consistent application of the platform’s ‘synth purple’ aesthetic. These technologies work in concert to provide users with a visually appealing and intuitive interface designed for ease of navigation and engagement.
6 | 
7 | ### Backend Technologies
8 | The backend of Vently leverages Supabase as both the server and database solution. Supabase is favored for its realtime features and ease of integration with frontend technologies, providing a robust platform for managing user data, events, and comments. It acts as an efficient database and server framework, allowing real-time communication between the frontend and backend, which is essential for dynamic content updates like event details and community interactions.
9 | 
10 | ### Infrastructure and Deployment
11 | Vently's infrastructure relies on modern deployment practices including continuous integration/continuous deployment (CI/CD) pipelines. Version control is managed through platforms like Git, ensuring smooth collaboration across development teams and reliable deployment processes. These practices enhance scalability and reliability, making it easier to manage updates and maintain uptime as user demand grows.
12 | 
13 | ### Third-Party Integrations
14 | Key third-party services include Google Maps API and Stripe for robust location services and secure payment processing, respectively. Google Maps API enriches the platform by providing interactive maps with event pins, crucial for location-based event discovery. Stripe offers a seamless integration for handling ticket purchases, ensuring that transactions are secure and user-friendly.
15 | 
16 | ### Security and Performance Considerations
17 | Security is paramount in Vently's design, with Stripe providing PCI-compliant payment processing and Supabase ensuring data is securely stored and transmitted. Role-based access control is implemented, distinguishing between Regular Users, Event Organizers, and Community Admins, to safeguard sensitive operations. Performance optimization is achieved through efficient React components and real-time data handling by Supabase, ensuring smooth and responsive user experiences even under peak loads.
18 | 
19 | ### Conclusion and Overall Tech Stack Summary
20 | The Vently tech stack—comprising ReactJS, Tailwind CSS, Supabase, Google Maps API, and Stripe—carefully aligns with the platform's goals of user engagement, security, and scalability. By integrating robust frontend and backend technologies with strategic third-party services, Vently provides a unique and valuable solution for event promotion and community interaction, setting a new standard for mobile-friendly event platforms.
```

src/integrations/supabase/client.ts
```
1 | import { createClient } from '@supabase/supabase-js';
2 | import { Database } from './types';
3 | 
4 | const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
5 | const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
6 | 
7 | if (!supabaseUrl || !supabaseAnonKey) {
8 |   throw new Error('Missing Supabase URL or Anon Key in environment variables');
9 | }
10 | 
11 | export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
```

src/integrations/supabase/types.ts
```
1 | export type Json =
2 |   | string
3 |   | number
4 |   | boolean
5 |   | null
6 |   | { [key: string]: Json | undefined }
7 |   | Json[]
8 | 
9 | export type Database = {
10 |   public: {
11 |     Tables: {
12 |       comment_likes: {
13 |         Row: {
14 |           comment_id: string
15 |           created_at: string
16 |           id: string
17 |           profile_id: string
18 |         }
19 |         Insert: {
20 |           comment_id: string
21 |           created_at?: string
22 |           id?: string
23 |           profile_id: string
24 |         }
25 |         Update: {
26 |           comment_id?: string
27 |           created_at?: string
28 |           id?: string
29 |           profile_id?: string
30 |         }
31 |         Relationships: [
32 |           {
33 |             foreignKeyName: "comment_likes_comment_id_fkey"
34 |             columns: ["comment_id"]
35 |             isOneToOne: false
36 |             referencedRelation: "comments"
37 |             referencedColumns: ["id"]
38 |           },
39 |           {
40 |             foreignKeyName: "comment_likes_profile_id_fkey"
41 |             columns: ["profile_id"]
42 |             isOneToOne: false
43 |             referencedRelation: "profiles"
44 |             referencedColumns: ["id"]
45 |           },
46 |         ]
47 |       }
48 |       comments: {
49 |         Row: {
50 |           author_id: string
51 |           community_id: string | null
52 |           content: string
53 |           created_at: string
54 |           event_id: string | null
55 |           id: string
56 |           image_url: string | null
57 |           updated_at: string
58 |         }
59 |         Insert: {
60 |           author_id: string
61 |           community_id?: string | null
62 |           content: string
63 |           created_at?: string
64 |           event_id?: string | null
65 |           id?: string
66 |           image_url?: string | null
67 |           updated_at?: string
68 |         }
69 |         Update: {
70 |           author_id?: string
71 |           community_id?: string | null
72 |           content?: string
73 |           created_at?: string
74 |           event_id?: string | null
75 |           id?: string
76 |           image_url?: string | null
77 |           updated_at?: string
78 |         }
79 |         Relationships: [
80 |           {
81 |             foreignKeyName: "comments_author_id_fkey"
82 |             columns: ["author_id"]
83 |             isOneToOne: false
84 |             referencedRelation: "profiles"
85 |             referencedColumns: ["id"]
86 |           },
87 |           {
88 |             foreignKeyName: "comments_community_id_fkey"
89 |             columns: ["community_id"]
90 |             isOneToOne: false
91 |             referencedRelation: "communities"
92 |             referencedColumns: ["id"]
93 |           },
94 |           {
95 |             foreignKeyName: "comments_event_id_fkey"
96 |             columns: ["event_id"]
97 |             isOneToOne: false
98 |             referencedRelation: "events"
99 |             referencedColumns: ["id"]
100 |           },
101 |         ]
102 |       }
103 |       communities: {
104 |         Row: {
105 |           address: string | null
106 |           bio: string | null
107 |           created_at: string
108 |           creator_id: string
109 |           id: string
110 |           image_url: string | null
111 |           name: string
112 |           updated_at: string
113 |         }
114 |         Insert: {
115 |           address?: string | null
116 |           bio?: string | null
117 |           created_at?: string
118 |           creator_id: string
119 |           id?: string
120 |           image_url?: string | null
121 |           name: string
122 |           updated_at?: string
123 |         }
124 |         Update: {
125 |           address?: string | null
126 |           bio?: string | null
127 |           created_at?: string
128 |           creator_id?: string
129 |           id?: string
130 |           image_url?: string | null
131 |           name?: string
132 |           updated_at?: string
133 |         }
134 |         Relationships: [
135 |           {
136 |             foreignKeyName: "communities_creator_id_fkey"
137 |             columns: ["creator_id"]
138 |             isOneToOne: false
139 |             referencedRelation: "profiles"
140 |             referencedColumns: ["id"]
141 |           },
142 |         ]
143 |       }
144 |       community_followers: {
145 |         Row: {
146 |           community_id: string
147 |           created_at: string
148 |           id: string
149 |           profile_id: string
150 |         }
151 |         Insert: {
152 |           community_id: string
153 |           created_at?: string
154 |           id?: string
155 |           profile_id: string
156 |         }
157 |         Update: {
158 |           community_id?: string
159 |           created_at?: string
160 |           id?: string
161 |           profile_id?: string
162 |         }
163 |         Relationships: [
164 |           {
165 |             foreignKeyName: "community_followers_community_id_fkey"
166 |             columns: ["community_id"]
167 |             isOneToOne: false
168 |             referencedRelation: "communities"
169 |             referencedColumns: ["id"]
170 |           },
171 |           {
172 |             foreignKeyName: "community_followers_profile_id_fkey"
173 |             columns: ["profile_id"]
174 |             isOneToOne: false
175 |             referencedRelation: "profiles"
176 |             referencedColumns: ["id"]
177 |           },
178 |         ]
179 |       }
180 |       events: {
181 |         Row: {
182 |           address: string
183 |           category: Database["public"]["Enums"]["event_category"]
184 |           community_id: string | null
185 |           cover_image_url: string | null
186 |           created_at: string
187 |           creator_id: string
188 |           description: string | null
189 |           duration: unknown
190 |           id: string
191 |           is_public: boolean
192 |           latitude: number | null
193 |           longitude: number | null
194 |           name: string
195 |           start_time: string
196 |           updated_at: string
197 |         }
198 |         Insert: {
199 |           address: string
200 |           category: Database["public"]["Enums"]["event_category"]
201 |           community_id?: string | null
202 |           cover_image_url?: string | null
203 |           created_at?: string
204 |           creator_id: string
205 |           description?: string | null
206 |           duration: unknown
207 |           id?: string
208 |           is_public?: boolean
209 |           latitude?: number | null
210 |           longitude?: number | null
211 |           name: string
212 |           start_time: string
213 |           updated_at?: string
214 |         }
215 |         Update: {
216 |           address?: string
217 |           category?: Database["public"]["Enums"]["event_category"]
218 |           community_id?: string | null
219 |           cover_image_url?: string | null
220 |           created_at?: string
221 |           creator_id?: string
222 |           description?: string | null
223 |           duration?: unknown
224 |           id?: string
225 |           is_public?: boolean
226 |           latitude?: number | null
227 |           longitude?: number | null
228 |           name?: string
229 |           start_time?: string
230 |           updated_at?: string
231 |         }
232 |         Relationships: [
233 |           {
234 |             foreignKeyName: "events_community_id_fkey"
235 |             columns: ["community_id"]
236 |             isOneToOne: false
237 |             referencedRelation: "communities"
238 |             referencedColumns: ["id"]
239 |           },
240 |           {
241 |             foreignKeyName: "events_creator_id_fkey"
242 |             columns: ["creator_id"]
243 |             isOneToOne: false
244 |             referencedRelation: "profiles"
245 |             referencedColumns: ["id"]
246 |           },
247 |         ]
248 |       }
249 |       profiles: {
250 |         Row: {
251 |           avatar_url: string | null
252 |           created_at: string
253 |           full_name: string | null
254 |           id: string
255 |           updated_at: string
256 |           user_id: string | null
257 |           username: string
258 |         }
259 |         Insert: {
260 |           avatar_url?: string | null
261 |           created_at?: string
262 |           full_name?: string | null
263 |           id?: string
264 |           updated_at?: string
265 |           user_id?: string | null
266 |           username: string
267 |         }
268 |         Update: {
269 |           avatar_url?: string | null
270 |           created_at?: string
271 |           full_name?: string | null
272 |           id?: string
273 |           updated_at?: string
274 |           user_id?: string | null
275 |           username?: string
276 |         }
277 |         Relationships: []
278 |       }
279 |       tickets: {
280 |         Row: {
281 |           created_at: string
282 |           event_id: string
283 |           expiration_date: string | null
284 |           id: string
285 |           name: string
286 |           price: number
287 |           quantity: number | null
288 |           updated_at: string
289 |         }
290 |         Insert: {
291 |           created_at?: string
292 |           event_id: string
293 |           expiration_date?: string | null
294 |           id?: string
295 |           name: string
296 |           price: number
297 |           quantity?: number | null
298 |           updated_at?: string
299 |         }
300 |         Update: {
301 |           created_at?: string
302 |           event_id?: string
303 |           expiration_date?: string | null
304 |           id?: string
305 |           name?: string
306 |           price?: number
307 |           quantity?: number | null
308 |           updated_at?: string
309 |         }
310 |         Relationships: [
311 |           {
312 |             foreignKeyName: "tickets_event_id_fkey"
313 |             columns: ["event_id"]
314 |             isOneToOne: false
315 |             referencedRelation: "events"
316 |             referencedColumns: ["id"]
317 |           },
318 |         ]
319 |       }
320 |     }
321 |     Views: {
322 |       [_ in never]: never
323 |     }
324 |     Functions: {
325 |       [_ in never]: never
326 |     }
327 |     Enums: {
328 |       event_category:
329 |         | "Music"
330 |         | "Technology"
331 |         | "Sports"
332 |         | "Arts"
333 |         | "Food"
334 |         | "Business"
335 |         | "Education"
336 |         | "Social"
337 |         | "Other"
338 |     }
339 |     CompositeTypes: {
340 |       [_ in never]: never
341 |     }
342 |   }
343 | }
344 | 
345 | type PublicSchema = Database[Extract<keyof Database, "public">]
346 | 
347 | export type Tables<
348 |   PublicTableNameOrOptions extends
349 |     | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
350 |     | { schema: keyof Database },
351 |   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
352 |     ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
353 |         Database[PublicTableNameOrOptions["schema"]]["Views"])
354 |     : never = never,
355 | > = PublicTableNameOrOptions extends { schema: keyof Database }
356 |   ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
357 |       Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
358 |       Row: infer R
359 |     }
360 |     ? R
361 |     : never
362 |   : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
363 |         PublicSchema["Views"])
364 |     ? (PublicSchema["Tables"] &
365 |         PublicSchema["Views"])[PublicTableNameOrOptions] extends {
366 |         Row: infer R
367 |       }
368 |       ? R
369 |       : never
370 |     : never
371 | 
372 | export type TablesInsert<
373 |   PublicTableNameOrOptions extends
374 |     | keyof PublicSchema["Tables"]
375 |     | { schema: keyof Database },
376 |   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
377 |     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
378 |     : never = never,
379 | > = PublicTableNameOrOptions extends { schema: keyof Database }
380 |   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
381 |       Insert: infer I
382 |     }
383 |     ? I
384 |     : never
385 |   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
386 |     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
387 |         Insert: infer I
388 |       }
389 |       ? I
390 |       : never
391 |     : never
392 | 
393 | export type TablesUpdate<
394 |   PublicTableNameOrOptions extends
395 |     | keyof PublicSchema["Tables"]
396 |     | { schema: keyof Database },
397 |   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
398 |     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
399 |     : never = never,
400 | > = PublicTableNameOrOptions extends { schema: keyof Database }
401 |   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
402 |       Update: infer U
403 |     }
404 |     ? U
405 |     : never
406 |   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
407 |     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
408 |         Update: infer U
409 |       }
410 |       ? U
411 |       : never
412 |     : never
413 | 
414 | export type Enums<
415 |   PublicEnumNameOrOptions extends
416 |     | keyof PublicSchema["Enums"]
417 |     | { schema: keyof Database },
418 |   EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
419 |     ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
420 |     : never = never,
421 | > = PublicEnumNameOrOptions extends { schema: keyof Database }
422 |   ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
423 |   : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
424 |     ? PublicSchema["Enums"][PublicEnumNameOrOptions]
425 |     : never
426 | 
427 | export type CompositeTypes<
428 |   PublicCompositeTypeNameOrOptions extends
429 |     | keyof PublicSchema["CompositeTypes"]
430 |     | { schema: keyof Database },
431 |   CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
432 |     schema: keyof Database
433 |   }
434 |     ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
435 |     : never = never,
436 | > = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
437 |   ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
438 |   : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
439 |     ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
440 |     : never
```

src/lib/utils.ts
```
1 | import { clsx, type ClassValue } from "clsx"
2 | import { twMerge } from "tailwind-merge"
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs))
6 | }
```

src/main.tsx
```
1 | import { createRoot } from 'react-dom/client'
2 | import App from './App.tsx'
3 | import './index.css'
4 | 
5 | createRoot(document.getElementById("root")!).render(<App />);
```

src/pages/Communities.tsx
```
1 | import { useState } from "react";
2 | import Layout from "@/components/layout/Layout";
3 | import CommunityCard from "@/components/communities/CommunityCard";
4 | import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
5 | import { toast } from "sonner";
6 | 
7 | // Dummy data
8 | const DUMMY_COMMUNITIES = [
9 |   {
10 |     id: "1",
11 |     name: "Tech Enthusiasts",
12 |     bio: "A community for technology lovers and innovators. Join us to discuss the latest tech trends and share your knowledge!",
13 |     imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
14 |     followersCount: 1234,
15 |   },
16 |   {
17 |     id: "2",
18 |     name: "Creative Arts Hub",
19 |     bio: "Connect with fellow artists, share your work, and get inspired by amazing creativity from around the world.",
20 |     imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
21 |     followersCount: 856,
22 |   },
23 |   {
24 |     id: "3",
25 |     name: "Business Network",
26 |     bio: "A professional network for entrepreneurs and business leaders to share insights and opportunities.",
27 |     imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
28 |     followersCount: 2341,
29 |   },
30 |   {
31 |     id: "4",
32 |     name: "Education Forum",
33 |     bio: "Dedicated to lifelong learning and educational resources sharing. Join educators and students alike!",
34 |     imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
35 |     followersCount: 567,
36 |   },
37 | ];
38 | 
39 | const Communities = () => {
40 |   const [followedCommunities, setFollowedCommunities] = useState<string[]>([]);
41 |   const [activeTab, setActiveTab] = useState("all");
42 | 
43 |   const handleFollowToggle = (communityId: string) => {
44 |     setFollowedCommunities((prev) => {
45 |       if (prev.includes(communityId)) {
46 |         toast.success("Community unfollowed");
47 |         return prev.filter((id) => id !== communityId);
48 |       } else {
49 |         toast.success("Community followed");
50 |         return [...prev, communityId];
51 |       }
52 |     });
53 |   };
54 | 
55 |   const displayedCommunities =
56 |     activeTab === "following"
57 |       ? DUMMY_COMMUNITIES.filter((community) =>
58 |           followedCommunities.includes(community.id)
59 |         )
60 |       : DUMMY_COMMUNITIES;
61 | 
62 |   return (
63 |     <Layout>
64 |       <div className="container py-6 space-y-6">
65 |         <div className="flex justify-between items-center">
66 |           <h1 className="text-2xl font-bold">Communities</h1>
67 |         </div>
68 | 
69 |         <Tabs defaultValue="all" onValueChange={setActiveTab}>
70 |           <TabsList>
71 |             <TabsTrigger value="all">All Communities</TabsTrigger>
72 |             <TabsTrigger value="following">Following</TabsTrigger>
73 |           </TabsList>
74 | 
75 |           <TabsContent value="all" className="mt-6">
76 |             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
77 |               {displayedCommunities.map((community) => (
78 |                 <CommunityCard
79 |                   key={community.id}
80 |                   {...community}
81 |                   isFollowing={followedCommunities.includes(community.id)}
82 |                   onFollowToggle={handleFollowToggle}
83 |                 />
84 |               ))}
85 |             </div>
86 |           </TabsContent>
87 | 
88 |           <TabsContent value="following" className="mt-6">
89 |             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
90 |               {displayedCommunities.length === 0 ? (
91 |                 <p className="text-muted-foreground col-span-full text-center py-8">
92 |                   You haven't followed any communities yet.
93 |                 </p>
94 |               ) : (
95 |                 displayedCommunities.map((community) => (
96 |                   <CommunityCard
97 |                     key={community.id}
98 |                     {...community}
99 |                     isFollowing={followedCommunities.includes(community.id)}
100 |                     onFollowToggle={handleFollowToggle}
101 |                   />
102 |                 ))
103 |               )}
104 |             </div>
105 |           </TabsContent>
106 |         </Tabs>
107 |       </div>
108 |     </Layout>
109 |   );
110 | };
111 | 
112 | export default Communities;
```

src/pages/CreateEvent.tsx
```
1 | import Layout from "@/components/layout/Layout";
2 | import { EventForm } from "@/components/events/EventForm";
3 | import { useProfile } from "@/hooks/useProfile";
4 | import { useEventSubmission } from "@/hooks/useEventSubmission";
5 | import { useAuthCheck } from "@/hooks/useAuthCheck";
6 | 
7 | const CreateEvent = () => {
8 |   const { userProfile, isLoading } = useAuthCheck();
9 |   const { handleSubmit, isSubmitting } = useEventSubmission(userProfile);
10 | 
11 |   if (isLoading) {
12 |     return (
13 |       <Layout>
14 |         <div className="container mx-auto px-4 py-8">
15 |           <div className="flex items-center justify-center min-h-[200px]">
16 |             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
17 |           </div>
18 |         </div>
19 |       </Layout>
20 |     );
21 |   }
22 | 
23 |   if (!userProfile) {
24 |     return (
25 |       <Layout>
26 |         <div className="container mx-auto px-4 py-8">
27 |           <div className="text-center">
28 |             Please sign in to create an event
29 |           </div>
30 |         </div>
31 |       </Layout>
32 |     );
33 |   }
34 | 
35 |   return (
36 |     <Layout>
37 |       <div className="container mx-auto px-4 py-8">
38 |         <EventForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
39 |       </div>
40 |     </Layout>
41 |   );
42 | };
43 | 
44 | export default CreateEvent;
```

src/pages/Events.tsx
```
1 | import { useQuery } from "@tanstack/react-query";
2 | import Layout from "@/components/layout/Layout";
3 | import EventCard from "@/components/events/EventCard";
4 | import { supabase } from "@/integrations/supabase/client";
5 | import { Tables } from "@/integrations/supabase/types";
6 | import { Loader2 } from "lucide-react";
7 | import { useToast } from "@/components/ui/use-toast";
8 | 
9 | const Events = () => {
10 |   const { toast } = useToast();
11 |   
12 |   const { data: events, isLoading, error } = useQuery({
13 |     queryKey: ["events"],
14 |     queryFn: async () => {
15 |       console.log("Fetching events...");
16 |       const { data, error } = await supabase
17 |         .from("events")
18 |         .select(`
19 |           *,
20 |           creator:creator_id (
21 |             id,
22 |             username,
23 |             full_name,
24 |             avatar_url
25 |           )
26 |         `)
27 |         .order("start_time", { ascending: true });
28 | 
29 |       if (error) {
30 |         console.error("Error fetching events:", error);
31 |         throw error;
32 |       }
33 | 
34 |       console.log("Fetched events:", data);
35 |       return data as (Tables<"events"> & {
36 |         creator: Tables<"profiles">
37 |       })[];
38 |     },
39 |     meta: {
40 |       onError: (error: Error) => {
41 |         console.error("Query error:", error);
42 |         toast({
43 |           title: "Error",
44 |           description: "Failed to load events. Please try again later.",
45 |           variant: "destructive",
46 |         });
47 |       },
48 |     },
49 |   });
50 | 
51 |   return (
52 |     <Layout>
53 |       <div className="container mx-auto px-4 py-8">
54 |         <div className="flex justify-between items-center mb-8">
55 |           <h1 className="text-3xl font-bold">Events</h1>
56 |           <div className="flex gap-4">
57 |             {/* Add filter buttons here later */}
58 |           </div>
59 |         </div>
60 | 
61 |         {isLoading ? (
62 |           <div className="flex justify-center items-center min-h-[200px]">
63 |             <Loader2 className="h-8 w-8 animate-spin text-primary" />
64 |           </div>
65 |         ) : error ? (
66 |           <div className="text-center text-muted-foreground">
67 |             Failed to load events. Please try again later.
68 |           </div>
69 |         ) : events?.length === 0 ? (
70 |           <div className="text-center text-muted-foreground">
71 |             No events found.
72 |           </div>
73 |         ) : (
74 |           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
75 |             {events?.map((event) => (
76 |               <EventCard key={event.id} event={event} />
77 |             ))}
78 |           </div>
79 |         )}
80 |       </div>
81 |     </Layout>
82 |   );
83 | };
84 | 
85 | export default Events;
```

src/pages/Index.tsx
```
1 | import Layout from "@/components/layout/Layout";
2 | 
3 | const Index = () => {
4 |   return (
5 |     <Layout>
6 |       <div className="p-4">
7 |         <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
8 |           Vently
9 |         </h1>
10 |         <p className="text-gray-600 mt-2">
11 |           Discover amazing events happening around you
12 |         </p>
13 |       </div>
14 |     </Layout>
15 |   );
16 | };
17 | 
18 | export default Index;
```

src/pages/Map.tsx
```
1 | import Layout from "@/components/layout/Layout";
2 | import GoogleMapComponent from "@/components/map/GoogleMapComponent";
3 | import EventsList from "@/components/events/EventsList";
4 | import MobileEventSheet from "@/components/events/MobileEventSheet";
5 | import { useIsMobile } from "@/hooks/use-mobile";
6 | import { useQuery } from "@tanstack/react-query";
7 | import { supabase } from "@/integrations/supabase/client";
8 | import { Tables } from "@/integrations/supabase/types";
9 | 
10 | const Map = () => {
11 |   const isMobile = useIsMobile();
12 |   
13 |   const { data: events } = useQuery({
14 |     queryKey: ["events"],
15 |     queryFn: async () => {
16 |       const { data, error } = await supabase
17 |         .from("events")
18 |         .select("*")
19 |         .order("start_time", { ascending: true });
20 | 
21 |       if (error) throw error;
22 |       return data as Tables<"events">[];
23 |     },
24 |   });
25 | 
26 |   return (
27 |     <Layout>
28 |       <div className="flex flex-col md:flex-row h-[calc(100vh-3.5rem)]">
29 |         {/* Events Section - Left side on desktop */}
30 |         {!isMobile && (
31 |           <div className="w-1/2 border-r overflow-auto">
32 |             <EventsList />
33 |           </div>
34 |         )}
35 | 
36 |         {/* Map Section */}
37 |         <div className="flex-1 relative">
38 |           <GoogleMapComponent events={events || []} />
39 |         </div>
40 | 
41 |         {/* Mobile Bottom Sheet */}
42 |         {isMobile && <MobileEventSheet />}
43 |       </div>
44 |     </Layout>
45 |   );
46 | };
47 | 
48 | export default Map;
```

src/pages/Onboarding.tsx
```
1 | import { useState, useEffect } from "react";
2 | import { useNavigate } from "react-router-dom";
3 | import { supabase } from "@/integrations/supabase/client";
4 | import { toast } from "sonner";
5 | import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
6 | import { NameStep } from "@/components/onboarding/NameStep";
7 | import { PhotoStep } from "@/components/onboarding/PhotoStep";
8 | 
9 | const Onboarding = () => {
10 |   const navigate = useNavigate();
11 |   const [step, setStep] = useState(1);
12 |   const [fullName, setFullName] = useState("");
13 |   const [loading, setLoading] = useState(false);
14 |   const [user, setUser] = useState<any>(null);
15 |   const [selectedFile, setSelectedFile] = useState<File | null>(null);
16 |   const [previewUrl, setPreviewUrl] = useState<string>("");
17 | 
18 |   useEffect(() => {
19 |     const checkUser = async () => {
20 |       const { data: { user } } = await supabase.auth.getUser();
21 |       if (!user) {
22 |         navigate("/");
23 |         return;
24 |       }
25 |       setUser(user);
26 |     };
27 |     checkUser();
28 |   }, [navigate]);
29 | 
30 |   // Cleanup preview URL when component unmounts
31 |   useEffect(() => {
32 |     return () => {
33 |       if (previewUrl) {
34 |         URL.revokeObjectURL(previewUrl);
35 |       }
36 |     };
37 |   }, [previewUrl]);
38 | 
39 |   const handleFileSelect = (file: File) => {
40 |     // Cleanup previous preview URL if it exists
41 |     if (previewUrl) {
42 |       URL.revokeObjectURL(previewUrl);
43 |     }
44 |     
45 |     setSelectedFile(file);
46 |     const objectUrl = URL.createObjectURL(file);
47 |     setPreviewUrl(objectUrl);
48 |   };
49 | 
50 |   const uploadAvatar = async (file: File): Promise<string> => {
51 |     const fileExt = file.name.split('.').pop();
52 |     const fileName = `${crypto.randomUUID()}.${fileExt}`;
53 |     const filePath = fileName;
54 | 
55 |     const { error: uploadError } = await supabase.storage
56 |       .from('avatars')
57 |       .upload(filePath, file);
58 | 
59 |     if (uploadError) {
60 |       throw uploadError;
61 |     }
62 | 
63 |     const { data: { publicUrl } } = supabase.storage
64 |       .from('avatars')
65 |       .getPublicUrl(filePath);
66 | 
67 |     return publicUrl;
68 |   };
69 | 
70 |   const handleNextStep = () => {
71 |     if (step === 1 && !fullName.trim()) {
72 |       toast.error("Please enter your full name");
73 |       return;
74 |     }
75 |     setStep(2);
76 |   };
77 | 
78 |   const handleSubmit = async (e: React.FormEvent) => {
79 |     e.preventDefault();
80 |     if (!user) return;
81 | 
82 |     if (!fullName.trim()) {
83 |       toast.error("Please enter your full name");
84 |       return;
85 |     }
86 | 
87 |     setLoading(true);
88 |     try {
89 |       let avatarUrl = '';
90 |       
91 |       if (selectedFile) {
92 |         avatarUrl = await uploadAvatar(selectedFile);
93 |       }
94 | 
95 |       const { error } = await supabase
96 |         .from("profiles")
97 |         .insert({
98 |           user_id: user.id,
99 |           username: user.email,
100 |           full_name: fullName,
101 |           avatar_url: avatarUrl,
102 |         });
103 | 
104 |       if (error) throw error;
105 | 
106 |       toast.success("Profile created successfully!");
107 |       navigate("/events");
108 |     } catch (error: any) {
109 |       toast.error(error.message);
110 |     } finally {
111 |       setLoading(false);
112 |     }
113 |   };
114 | 
115 |   return (
116 |     <div className="container flex items-center justify-center min-h-screen">
117 |       <Card className="w-full max-w-md">
118 |         <CardHeader>
119 |           <CardTitle>Complete Your Profile</CardTitle>
120 |           <CardDescription>
121 |             {step === 1 
122 |               ? "Let's start with your name" 
123 |               : "Add a profile picture to help others recognize you"}
124 |           </CardDescription>
125 |         </CardHeader>
126 |         <CardContent>
127 |           <form onSubmit={handleSubmit} className="space-y-6">
128 |             {step === 1 ? (
129 |               <NameStep
130 |                 fullName={fullName}
131 |                 setFullName={setFullName}
132 |                 onNext={handleNextStep}
133 |               />
134 |             ) : (
135 |               <PhotoStep
136 |                 user={user}
137 |                 selectedFile={selectedFile}
138 |                 previewUrl={previewUrl}
139 |                 onFileSelect={handleFileSelect}
140 |                 onBack={() => setStep(1)}
141 |                 loading={loading}
142 |               />
143 |             )}
144 |           </form>
145 |         </CardContent>
146 |       </Card>
147 |     </div>
148 |   );
149 | };
150 | 
151 | export default Onboarding;
```

src/styles/globals.css
```
1 | :root {
2 |   --popover: 0 0% 100%; /* Pure white */
3 |   --popover-foreground: 222.2 84% 4.9%;
4 | }
5 | 
6 | .dark {
7 |   --popover: 222.2 84% 4.9%; /* Dark background for dark mode */
8 |   --popover-foreground: 210 40% 98%;
9 | } 
```

src/types/google-maps.d.ts
```
1 | /// <reference types="@types/google.maps" />
2 | 
3 | declare global {
4 |   interface Window {
5 |     google: typeof google;
6 |   }
7 | }
8 | 
9 | export {}; 
```

src/types/onboarding.ts
```
1 | export interface OnboardingStepProps {
2 |   onNext?: () => void;
3 |   onBack?: () => void;
4 |   loading?: boolean;
5 | }
6 | 
7 | export interface NameStepProps extends OnboardingStepProps {
8 |   fullName: string;
9 |   setFullName: (name: string) => void;
10 | }
11 | 
12 | export interface PhotoStepProps extends OnboardingStepProps {
13 |   user: any;
14 |   selectedFile: File | null;
15 |   previewUrl: string;
16 |   onFileSelect: (file: File) => void;
17 | }
```

src/utils/eventDataTransform.ts
```
1 | import { Tables } from "@/integrations/supabase/types";
2 | 
3 | interface EventFormData {
4 |   name: string;
5 |   description: string;
6 |   category: Tables<"events">["category"];
7 |   address: string;
8 |   latitude: number | null;
9 |   longitude: number | null;
10 |   date: Date | undefined;
11 |   time: string;
12 |   duration: string;
13 |   coverImage: File | null;
14 | }
15 | 
16 | export const transformEventData = (
17 |   data: EventFormData,
18 |   coverImageUrl: string,
19 |   latitude: number | null,
20 |   longitude: number | null,
21 |   creatorId: string
22 | ): Omit<Tables<"events">, "id" | "created_at" | "updated_at"> => {
23 |   const eventDateTime = new Date(data.date!);
24 |   const [hours, minutes] = data.time.split(":");
25 |   eventDateTime.setHours(parseInt(hours), parseInt(minutes));
26 | 
27 |   return {
28 |     name: data.name,
29 |     description: data.description,
30 |     category: data.category,
31 |     address: data.address,
32 |     latitude,
33 |     longitude,
34 |     start_time: eventDateTime.toISOString(),
35 |     duration: data.duration,
36 |     cover_image_url: coverImageUrl,
37 |     creator_id: creatorId,
38 |     is_public: true,
39 |     community_id: null,
40 |   };
41 | };
```

src/utils/eventImageUpload.ts
```
1 | import { supabase } from "@/integrations/supabase/client";
2 | 
3 | export const uploadEventCoverImage = async (coverImage: File): Promise<string> => {
4 |   const fileExt = coverImage.name.split(".").pop();
5 |   const fileName = `${Math.random()}.${fileExt}`;
6 |   const filePath = `event-covers/${fileName}`;
7 | 
8 |   const { error: uploadError, data: uploadData } = await supabase.storage
9 |     .from("images")
10 |     .upload(filePath, coverImage);
11 | 
12 |   if (uploadError) throw uploadError;
13 | 
14 |   const {
15 |     data: { publicUrl },
16 |   } = supabase.storage.from("images").getPublicUrl(filePath);
17 | 
18 |   return publicUrl;
19 | };
```

src/utils/loadGoogleMapsApi.ts
```
1 | let googleMapsPromise: Promise<void> | null = null;
2 | 
3 | export const loadGoogleMapsApi = (): Promise<void> => {
4 |   if (googleMapsPromise) {
5 |     return googleMapsPromise;
6 |   }
7 | 
8 |   googleMapsPromise = new Promise((resolve, reject) => {
9 |     // Check if API is already loaded
10 |     if (window.google?.maps) {
11 |       resolve();
12 |       return;
13 |     }
14 | 
15 |     const script = document.createElement('script');
16 |     const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
17 | 
18 |     if (!apiKey) {
19 |       reject(new Error('Google Maps API key is not defined'));
20 |       return;
21 |     }
22 | 
23 |     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
24 |     script.async = true;
25 |     script.defer = true;
26 | 
27 |     script.addEventListener('load', () => resolve());
28 |     script.addEventListener('error', () => 
29 |       reject(new Error('Failed to load Google Maps API'))
30 |     );
31 | 
32 |     document.head.appendChild(script);
33 |   });
34 | 
35 |   return googleMapsPromise;
36 | }; 
```

src/utils/phoneFormatting.ts
```
1 | export const COUNTRY_CODES = [
2 |   { code: 'US', dialCode: '1', flag: '🇺🇸' },
3 |   { code: 'GB', dialCode: '44', flag: '🇬🇧' },
4 |   { code: 'CA', dialCode: '1', flag: '🇨🇦' },
5 |   { code: 'AU', dialCode: '61', flag: '🇦🇺' },
6 |   // Add more countries as needed
7 | ];
8 | 
9 | export const formatPhoneNumber = (value: string, countryCode: string): string => {
10 |   // Remove all non-digit characters
11 |   const cleaned = value.replace(/\D/g, '');
12 |   
13 |   // Format for US/CA numbers
14 |   if (countryCode === '1') {
15 |     if (cleaned.length <= 3) {
16 |       return cleaned;
17 |     } else if (cleaned.length <= 6) {
18 |       return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
19 |     } else {
20 |       return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
21 |     }
22 |   }
23 |   
24 |   // For other countries, just limit the length
25 |   return cleaned.slice(0, 15);
26 | };
27 | 
28 | export const formatE164 = (number: string, countryCode: string): string => {
29 |   const cleaned = number.replace(/\D/g, '');
30 |   return `+${countryCode}${cleaned}`;
31 | };
32 | 
33 | export const isValidPhoneNumber = (number: string): boolean => {
34 |   return number.length >= 8;
35 | };
36 | 
37 | export const getPhoneNumberPlaceholder = (countryCode: string): string => {
38 |   return countryCode === '1' ? "(555) 555-5555" : "Phone number";
39 | };
40 | 
41 | export const getPhoneNumberExample = (countryCode: string): string => {
42 |   return countryCode === '1' ? '+1 (555) 555-5555' : `+${countryCode} XXXXXXXXX`;
43 | }; 
```

src/vite-env.d.ts
```
1 | /// <reference types="vite/client" />
```

supabase/config.toml
```
1 | project_id = "fiwdpoaswapshmmfhzae"
```

supabase/functions/generate-event-suggestions/index.ts
```
1 | import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";
2 | import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
3 | import "https://deno.land/x/xhr@0.1.0/mod.ts";
4 | 
5 | const corsHeaders = {
6 |   'Access-Control-Allow-Origin': '*',
7 |   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
8 | };
9 | 
10 | serve(async (req) => {
11 |   if (req.method === 'OPTIONS') {
12 |     return new Response(null, { headers: corsHeaders });
13 |   }
14 | 
15 |   try {
16 |     const { field, currentName, currentDescription } = await req.json();
17 |     
18 |     const openai = new OpenAI({
19 |       apiKey: Deno.env.get('OPENAI_API_KEY'),
20 |     });
21 | 
22 |     let prompt = "";
23 |     if (field === 'name') {
24 |       prompt = `Generate a creative and engaging event name${currentName ? ` similar to but different from: "${currentName}"` : ''}.${
25 |         currentDescription ? ` The event description is: "${currentDescription}"` : ''
26 |       } Keep it concise and memorable.`;
27 |     } else {
28 |       prompt = `Generate an engaging event description${currentDescription ? ` that improves upon: "${currentDescription}"` : ''}.${
29 |         currentName ? ` The event name is: "${currentName}"` : ''
30 |       } Keep it informative and compelling, focusing on what makes the event special.`;
31 |     }
32 | 
33 |     const completion = await openai.chat.completions.create({
34 |       model: "gpt-4o-mini",
35 |       messages: [
36 |         {
37 |           role: "system",
38 |           content: "You are a helpful assistant that generates creative and professional event content."
39 |         },
40 |         {
41 |           role: "user",
42 |           content: prompt
43 |         }
44 |       ]
45 |     });
46 | 
47 |     const suggestion = completion.choices[0].message.content;
48 | 
49 |     return new Response(
50 |       JSON.stringify({ suggestion }),
51 |       { 
52 |         headers: { ...corsHeaders, 'Content-Type': 'application/json' },
53 |         status: 200 
54 |       }
55 |     );
56 |   } catch (error) {
57 |     console.error('Error in generate-event-suggestions function:', error);
58 |     return new Response(
59 |       JSON.stringify({ error: error.message }),
60 |       { 
61 |         headers: { ...corsHeaders, 'Content-Type': 'application/json' },
62 |         status: 500 
63 |       }
64 |     );
65 |   }
66 | });
```

supabase/functions/get-random-unsplash-image/index.ts
```
1 | import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
2 | 
3 | const corsHeaders = {
4 |   'Access-Control-Allow-Origin': '*',
5 |   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
6 | }
7 | 
8 | serve(async (req) => {
9 |   if (req.method === 'OPTIONS') {
10 |     return new Response(null, { headers: corsHeaders })
11 |   }
12 | 
13 |   try {
14 |     const response = await fetch(
15 |       'https://api.unsplash.com/photos/random?query=event&orientation=landscape',
16 |       {
17 |         headers: {
18 |           Authorization: `Client-ID ${Deno.env.get('UNSPLASH_ACCESS_KEY')}`,
19 |         },
20 |       }
21 |     )
22 | 
23 |     if (!response.ok) {
24 |       throw new Error('Failed to fetch from Unsplash')
25 |     }
26 | 
27 |     const data = await response.json()
28 |     
29 |     return new Response(
30 |       JSON.stringify({ 
31 |         data: { 
32 |           publicUrl: data.urls.regular 
33 |         } 
34 |       }),
35 |       { 
36 |         headers: { ...corsHeaders, 'Content-Type': 'application/json' },
37 |         status: 200 
38 |       }
39 |     )
40 |   } catch (error) {
41 |     return new Response(
42 |       JSON.stringify({ error: error.message }),
43 |       { 
44 |         headers: { ...corsHeaders, 'Content-Type': 'application/json' },
45 |         status: 500 
46 |       }
47 |     )
48 |   }
49 | })
```

tailwind.config.ts
```
1 | import type { Config } from "tailwindcss";
2 | 
3 | export default {
4 |   darkMode: ["class"],
5 |   content: [
6 |     "./pages/**/*.{ts,tsx}",
7 |     "./components/**/*.{ts,tsx}",
8 |     "./app/**/*.{ts,tsx}",
9 |     "./src/**/*.{ts,tsx}",
10 |   ],
11 |   prefix: "",
12 |   theme: {
13 |     container: {
14 |       center: true,
15 |       padding: "2rem",
16 |       screens: {
17 |         "2xl": "1400px",
18 |       },
19 |     },
20 |     extend: {
21 |       colors: {
22 |         border: "hsl(var(--border))",
23 |         input: "hsl(var(--input))",
24 |         ring: "hsl(var(--ring))",
25 |         background: "hsl(var(--background))",
26 |         foreground: "hsl(var(--foreground))",
27 |         primary: {
28 |           DEFAULT: "#9b87f5",
29 |           dark: "#7E69AB",
30 |           light: "#D6BCFA",
31 |         },
32 |         secondary: {
33 |           DEFAULT: "#1A1F2C",
34 |           foreground: "#E5DEFF",
35 |         },
36 |         destructive: {
37 |           DEFAULT: "hsl(var(--destructive))",
38 |           foreground: "hsl(var(--destructive-foreground))",
39 |         },
40 |         muted: {
41 |           DEFAULT: "hsl(var(--muted))",
42 |           foreground: "hsl(var(--muted-foreground))",
43 |         },
44 |         accent: {
45 |           DEFAULT: "hsl(var(--accent))",
46 |           foreground: "hsl(var(--accent-foreground))",
47 |         },
48 |         card: {
49 |           DEFAULT: "hsl(var(--card))",
50 |           foreground: "hsl(var(--card-foreground))",
51 |         },
52 |         popover: {
53 |           DEFAULT: "hsl(var(--popover))",
54 |           foreground: "hsl(var(--popover-foreground))",
55 |         },
56 |       },
57 |       borderRadius: {
58 |         lg: "var(--radius)",
59 |         md: "calc(var(--radius) - 2px)",
60 |         sm: "calc(var(--radius) - 4px)",
61 |       },
62 |       keyframes: {
63 |         "accordion-down": {
64 |           from: { height: "0" },
65 |           to: { height: "var(--radix-accordion-content-height)" },
66 |         },
67 |         "accordion-up": {
68 |           from: { height: "var(--radix-accordion-content-height)" },
69 |           to: { height: "0" },
70 |         },
71 |       },
72 |       animation: {
73 |         "accordion-down": "accordion-down 0.2s ease-out",
74 |         "accordion-up": "accordion-up 0.2s ease-out",
75 |       },
76 |     },
77 |   },
78 |   plugins: [require("tailwindcss-animate")],
79 | } satisfies Config;
```

tsconfig.app.json
```
1 | {
2 |   "compilerOptions": {
3 |     "target": "ES2020",
4 |     "useDefineForClassFields": true,
5 |     "lib": ["ES2020", "DOM", "DOM.Iterable"],
6 |     "module": "ESNext",
7 |     "skipLibCheck": true,
8 | 
9 |     /* Bundler mode */
10 |     "moduleResolution": "bundler",
11 |     "allowImportingTsExtensions": true,
12 |     "isolatedModules": true,
13 |     "moduleDetection": "force",
14 |     "noEmit": true,
15 |     "jsx": "react-jsx",
16 | 
17 |     /* Linting */
18 |     "strict": false,
19 |     "noUnusedLocals": false,
20 |     "noUnusedParameters": false,
21 |     "noImplicitAny": false,
22 |     "noFallthroughCasesInSwitch": false,
23 | 
24 |     "baseUrl": ".",
25 |     "paths": {
26 |       "@/*": ["./src/*"]
27 |     }
28 |   },
29 |   "include": ["src"]
30 | }
```

tsconfig.json
```
1 | {
2 |   "files": [],
3 |   "references": [
4 |     { "path": "./tsconfig.app.json" },
5 |     { "path": "./tsconfig.node.json" }
6 |   ],
7 |   "compilerOptions": {
8 |     "baseUrl": ".",
9 |     "paths": {
10 |       "@/*": ["./src/*"]
11 |     },
12 |     "noImplicitAny": false,
13 |     "noUnusedParameters": false,
14 |     "skipLibCheck": true,
15 |     "allowJs": true,
16 |     "noUnusedLocals": false,
17 |     "strictNullChecks": false
18 |   }
19 | }
```

tsconfig.node.json
```
1 | {
2 |   "compilerOptions": {
3 |     "target": "ES2022",
4 |     "lib": ["ES2023"],
5 |     "module": "ESNext",
6 |     "skipLibCheck": true,
7 | 
8 |     /* Bundler mode */
9 |     "moduleResolution": "bundler",
10 |     "allowImportingTsExtensions": true,
11 |     "isolatedModules": true,
12 |     "moduleDetection": "force",
13 |     "noEmit": true,
14 | 
15 |     /* Linting */
16 |     "strict": true,
17 |     "noUnusedLocals": false,
18 |     "noUnusedParameters": false,
19 |     "noFallthroughCasesInSwitch": true
20 |   },
21 |   "include": ["vite.config.ts"]
22 | }
```

vite.config.ts
```
1 | import { defineConfig } from "vite";
2 | import react from "@vitejs/plugin-react-swc";
3 | import path from "path";
4 | import { componentTagger } from "lovable-tagger";
5 | 
6 | // https://vitejs.dev/config/
7 | export default defineConfig(({ mode }) => ({
8 |   server: {
9 |     host: "::",
10 |     port: 8080,
11 |   },
12 |   plugins: [
13 |     react(),
14 |     mode === 'development' &&
15 |     componentTagger(),
16 |   ].filter(Boolean),
17 |   resolve: {
18 |     alias: {
19 |       "@": path.resolve(__dirname, "./src"),
20 |     },
21 |   },
22 | }));
```

