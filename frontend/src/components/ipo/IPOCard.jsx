import Badge from "../common/Badge";
import Button from "../common/Button";

export default function IPOCard({ ipo, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-5 rounded-xl border border-border shadow-sm cursor-pointer hover:shadow-md transition"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{ipo.company}</h3>
        <Badge status={ipo.status} />
      </div>

      <div className="text-sm text-muted mt-3 space-y-1">
        <p>Open: {ipo.open}</p>
        <p>Close: {ipo.close}</p>
        <p>Price Band: {ipo.priceBand}</p>
        <p>Lot Size: {ipo.lotSize}</p>
      </div>

      <Button className="w-full mt-4">
        View Dashboard
      </Button>
    </div>
  );
}
