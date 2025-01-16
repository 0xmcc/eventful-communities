import { Link, useLocation } from "react-router-dom";
import { MapPin, Calendar, Users, PlusCircle } from "lucide-react";

const TopNavigation = () => {
  const location = useLocation();

  const tabs = [
    { icon: MapPin, label: "Map", path: "/map" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Users, label: "Communities", path: "/communities" },
    { icon: PlusCircle, label: "Create", path: "/create-event" },
  ];

  return (
    <nav className="flex items-center space-x-6">
      {tabs.map(({ icon: Icon, label, path }) => (
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
      ))}
    </nav>
  );
};

export default TopNavigation; 