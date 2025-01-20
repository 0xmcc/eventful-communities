import { Link, useLocation } from "react-router-dom";
import { MapPin, Calendar, Users, ChevronDown, Compass, Map, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopNavigationProps {
  isAuthenticated: boolean;
}

const TopNavigation = ({ isAuthenticated }: TopNavigationProps) => {
  const location = useLocation();

  const tabs = [
    { icon: Compass, label: "Events", path: "/map" },
    { icon: Map, label: "Feed", path: "/feed" },
    { icon: Users, label: "Communities", path: "/communities" },
    { icon: Plus, label: "Create", path: "/create-event" },
  ];

  return (
    <div className="flex items-center justify-between w-full px-4 top-navigation-bg-background">
      {/* Left section with navigation */}
      <nav className="flex items-center space-x-1">
        {tabs.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
              location.pathname === path
                ? "text-primary bg-primary/10"
                : "text-gray-600 hover:text-primary hover:bg-primary/5"
            } top-navigation-link`}
          >
            <Icon className="w-5 h-5 top-navigation-link-icon" />
            <span className="font-medium top-navigation-link-text hidden sm:inline">{label}</span>
          </Link>
        ))}
      </nav>

      {/* Right section with Create Event and Location */}
      <div className="flex items-center space-x-4 hidden md:flex">
        <Button 
          variant="outline" 
          className="flex items-center space-x-2"
        >
          <MapPin className="w-4 h-4" />
          <span>SF Bay Area</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TopNavigation;