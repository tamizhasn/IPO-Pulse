export default function IPOFilter({
  search,
  sector,
  status,
  onSearch,
  onSectorChange,
  onStatusChange,
  onClear,
}) {
  return (
    <div className="bg-white p-4 rounded-xl border border-border mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="text-xs font-medium text-muted">
            Search Company
          </label>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Enter company name"
            className="h-10 w-full px-3 border border-border rounded-lg text-sm"
          />
        </div>

        {/* Sector */}
        <div>
          <label className="text-xs font-medium text-muted">
            Sector
          </label>
          <select
            value={sector}
            onChange={(e) => onSectorChange(e.target.value)}
            className="h-10 w-full px-3 border border-border rounded-lg text-sm"
          >
            <option value="">All</option>
            <option>Fintech</option>
            <option>IT Services</option>
            <option>EV / Automobile</option>
            <option>E-Commerce</option>
            <option>Healthcare</option>
            <option>Telecom</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="text-xs font-medium text-muted">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="h-10 w-full px-3 border border-border rounded-lg text-sm"
          >
            <option value="">All</option>
            <option>Upcoming</option>
            <option>Ongoing</option>
            <option>Closed</option>
            <option>Listed</option>
          </select>
        </div>

        {/* Clear */}
        <div className="flex items-end">
          <button
            onClick={onClear}
            className="h-10 w-full border border-border rounded-lg text-sm hover:bg-gray-50"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}
