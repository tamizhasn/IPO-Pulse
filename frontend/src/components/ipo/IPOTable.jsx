import Button from "../common/Button";
import Badge from "../common/Badge";

export default function IPOTable({ data }) {
  return (
    <table className="w-full text-sm border border-border mt-6">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-3 text-left">Company</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ipo) => (
          <tr key={ipo.id} className="border-t">
            <td className="p-3">{ipo.company}</td>
            <td>
              <Badge status={ipo.status} />
            </td>
            <td className="space-x-2">
              <Button variant="secondary">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
