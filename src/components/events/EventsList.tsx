import { useState } from "react";
import { startOfDay, endOfDay, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";
import EventsGrid from "./EventsGrid";
import EventsFilters from "./EventsFilters";
import { useEvents } from "./useEvents";

const EventsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
    const matchesSearch = searchQuery
      ? event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    if (!dateFilter) return matchesSearch;

    const dateRange = getDateRange(dateFilter);
    if (!dateRange) return matchesSearch;

    const eventDate = new Date(event.start_time);
    return (
      matchesSearch &&
      eventDate >= dateRange.start &&
      eventDate <= dateRange.end
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
      </div>

      <EventsFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />

      <EventsGrid
        events={filteredEvents}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default EventsList;