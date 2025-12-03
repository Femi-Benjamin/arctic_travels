import React from "react";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  showFilters = false,
  filters = [],
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <div className="relative flex-1">
        <input
          aria-label="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg bg-arctic-500/50 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-arctic-blue/30"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
          🔎
        </div>
      </div>

      {showFilters && filters.length > 0 && (
        <select
          aria-label="Filter"
          value={selectedFilter}
          onChange={(e) => onFilterChange && onFilterChange(e.target.value)}
          className="px-3 py-2 rounded-lg bg-arctic-500/40 text-text-primary border-2 border-arctic-blue/60 focus:border-arctic-blue/80 shadow-md"
        >
          <option value="all">All</option>
          {filters.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SearchBar;
