import { useState } from "react";
import { startOfDay, endOfDay, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";
import EventsGrid from "./EventsGrid";
import { ThemeEditor } from "@/components/theme/ThemeEditor";
import { useEvents } from "./useEvents";

const EventsList = () => {
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  
  const { data: events, isLoading, error } = useEvents();

  const getDateRange = (filter: string) => {
    const now = new Date();
    switch (filter) {
      case "Today":
        return {
          start: startOfDay(now),
          end: endOfDay(now),
        };
      case "Tomorrow":
        const tomorrow = addDays(now, 1);
        return {
          start: startOfDay(tomorrow),
          end: endOfDay(tomorrow),
        };
      case "This Week":
        return {
          start: startOfWeek(now),
          end: endOfWeek(now),
        };
      case "This Month":
        return {
          start: startOfMonth(now),
          end: endOfMonth(now),
        };
      default:
        return null;
    }
  };

  const filteredEvents = events?.filter((event) => {
    if (!dateFilter) return true;

    const dateRange = getDateRange(dateFilter);
    if (!dateRange) return true;

    const eventDate = new Date(event.start_time);
    return (
      eventDate >= dateRange.start &&
      eventDate <= dateRange.end
    );
  });

  return (
    <div className="events-container container mx-auto px-4 py-8">
      <div className="events-header flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
      </div>

      <div className="theme-editor-section mb-8">
        <h2 className="text-2xl font-bold mb-4">Customize Theme</h2>
        <ThemeEditor className="max-w-2xl" />
      </div>

      

      <EventsGrid
        events={filteredEvents}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default EventsList;