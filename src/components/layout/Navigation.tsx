import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Users, PlusCircle } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const tabs = [
    { icon: MapPin, label: "Map", path: "/map" },
    { icon: Users, label: "Communities", path: "/communities" },
    { icon: PlusCircle, label: "Create", path: "/create-event" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe-area-inset-bottom z-50 btm-navigation-bg-background">
      <div className="flex justify-around items-center h-16">
        {tabs.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
              activeTab === path
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
            } btm-navigation-icon`}
            onClick={() => setActiveTab(path)}
          >
            <Icon className="w-6 h-6 btm-navigation-icon-svg" />
            <span className="text-xs btm-navigation-icon-text">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;