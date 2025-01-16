import { Link, useLocation } from "react-router-dom";
import { MapPin, Calendar, Users } from "lucide-react";

interface TopNavigationProps {
  isAuthenticated: boolean;
}

const TopNavigation = ({ isAuthenticated }: TopNavigationProps) => {
  const location = useLocation();

  const tabs = [
    { icon: MapPin, label: "Map", path: "/map" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Users, label: "Communities", path: "/communities" },
  ];

  return (
    <nav className="flex items-center space-x-6">
      {tabs.map(({ icon: Icon, label, path }) => {
        if (path === "/create-event" && !isAuthenticated) {
          return null;
        }
        return (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
              location.pathname === path
                ? "text-primary bg-primary/10"
                : "text-gray-600 hover:text-primary hover:bg-primary/5"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </Link>
        )
      })}
    </nav>
  );
};

export default TopNavigation;