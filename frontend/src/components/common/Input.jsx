export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-medium text-muted">
          {label}
        </label>
      )}
      <input
        className="h-10 px-3 rounded-lg border border-border text-sm focus:ring-2 focus:ring-blue-200 outline-none"
        {...props}
      />
    </div>
  );
}
