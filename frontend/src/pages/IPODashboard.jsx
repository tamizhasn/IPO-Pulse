import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function IPODashboard({ ipo, onBack }) {
  const priceData = [
    { day: "Day 1", price: 380 },
    { day: "Day 2", price: 395 },
    { day: "Day 3", price: 420 },
    { day: "Day 4", price: 435 },
  ];

  return (
    <main className="p-6 space-y-6">
      {/* Back */}
      <button
        onClick={onBack}
        className="text-sm text-primary hover:underline"
      >
        ← Back to IPO List
      </button>

      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-border">
        <h1 className="text-2xl font-semibold">
          {ipo.company} IPO Dashboard
        </h1>
        <p className="text-sm text-muted mt-1">
          Sector: {ipo.sector}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <KPI title="Price Band" value={ipo.priceBand} />
        <KPI title="Issue Size" value={ipo.issueSize} />
        <KPI title="Lot Size" value={ipo.lotSize} />
        <KPI title="Status" value={ipo.status} />
      </div>

      {/* Chart + About */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-border">
          <h2 className="font-semibold mb-4">
            Price Movement (Simulated)
          </h2>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={priceData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#2563EB"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl border border-border">
          <h2 className="font-semibold mb-3">
            About {ipo.company}
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            {ipo.company} operates in the {ipo.sector} sector and
            is entering the public market to support growth,
            expansion, and innovation initiatives.
          </p>
        </div>
      </div>
    </main>
  );
}

function KPI({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-border">
      <p className="text-xs text-muted">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
