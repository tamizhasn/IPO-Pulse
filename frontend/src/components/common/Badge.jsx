export default function Badge({ status }) {
  const map = {
    Upcoming: "bg-blue-100 text-blue-700",
    Ongoing: "bg-yellow-100 text-yellow-700",
    Closed: "bg-gray-200 text-gray-700",
    Listed: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded-full font-medium ${map[status]}`}
    >
      {status}
    </span>
  );
}
