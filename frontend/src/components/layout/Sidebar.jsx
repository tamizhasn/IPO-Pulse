export default function Sidebar({ onNavigate }) {
  return (
    <aside className="w-[260px] bg-sidebar border-r border-border hidden md:block">
      <div className="p-6 font-semibold text-lg">Bluestock Fintech</div>

      <nav className="px-4 space-y-2 text-sm">
        <button
          onClick={() => onNavigate("public")}
          className="w-full text-left px-3 py-2 rounded-lg bg-blue-50 text-primary"
        >
          Upcoming IPO
        </button>

        <button
          onClick={() => onNavigate("login")}
          className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          Admin Login
        </button>
      </nav>
    </aside>
  );
}
