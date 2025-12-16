import { useState } from "react";
import data from "../data/ipoData.json";
import IPOCard from "../components/ipo/IPOCard";
import IPOFilter from "../components/ipo/IPOFilter";

export default function UpcomingIPO({ onSelectIPO }) {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("");
  const [status, setStatus] = useState("");

  const filtered = data.filter((ipo) => {
    return (
      ipo.company.toLowerCase().includes(search.toLowerCase()) &&
      (sector ? ipo.sector === sector : true) &&
      (status ? ipo.status === status : true)
    );
  });

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-1">
        Upcoming IPO Information
      </h1>
      <p className="text-sm text-muted mb-6">
        Explore and track upcoming IPOs
      </p>

      <IPOFilter
        search={search}
        sector={sector}
        status={status}
        onSearch={setSearch}
        onSectorChange={setSector}
        onStatusChange={setStatus}
        onClear={() => {
          setSearch("");
          setSector("");
          setStatus("");
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ipo) => (
          <IPOCard
            key={ipo.id}
            ipo={ipo}
            onClick={() => onSelectIPO(ipo)}
          />
        ))}
      </div>
    </main>
  );
}
