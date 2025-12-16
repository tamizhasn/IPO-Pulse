import Input from "../common/Input";
import Button from "../common/Button";

export default function IPOForm() {
  return (
    <div className="bg-white p-6 rounded-xl border border-border">
      <h2 className="font-semibold mb-4">IPO Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <Input label="Company Name" />
        <Input label="Price Band" />
        <Input label="Open Date" type="date" />
        <Input label="Close Date" type="date" />
        <Input label="Issue Size" />
        <Input label="Lot Size" />
      </div>

      <div className="mt-6">
        <Button>Add IPO</Button>
      </div>
    </div>
  );
}
