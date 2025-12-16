export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      <input
        type="search"
        placeholder="Search"
        className="h-9 w-80 px-3 border border-border rounded-lg text-sm"
      />

      <div className="text-sm font-medium">Hi, User</div>
    </header>
  );
}
