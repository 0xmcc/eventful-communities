import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EventsFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  dateFilter: string | null;
  setDateFilter: (filter: string | null) => void;
}

const EventsFilters = ({
  searchQuery,
  setSearchQuery,
  dateFilter,
  setDateFilter,
}: EventsFiltersProps) => {
  const dateFilters = ["Today", "Tomorrow", "This Week", "This Month"];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <Input
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-sm"
      />
      <div className="flex gap-2 flex-wrap">
        {dateFilters.map((filter) => (
          <Button
            key={filter}
            variant={dateFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setDateFilter(dateFilter === filter ? null : filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EventsFilters;