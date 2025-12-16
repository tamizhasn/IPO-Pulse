import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import UpcomingIPO from "./pages/UpcomingIPO";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import IPODashboard from "./pages/IPODashboard";

export default function App() {
  const [route, setRoute] = useState("public");
  const [selectedIPO, setSelectedIPO] = useState(null); // ✅ MISSING LINE (NOW FIXED)

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {route !== "login" && <Sidebar onNavigate={setRoute} />}

      <div className="flex-1 flex flex-col">
        {route !== "login" && <Header />}

        {route === "public" && (
          <UpcomingIPO
            onSelectIPO={(ipo) => {
              setSelectedIPO(ipo);      // ✅ now defined
              setRoute("ipo-dashboard");
            }}
          />
        )}

        {route === "login" && (
          <AdminLogin onLogin={() => setRoute("admin")} />
        )}

        {route === "admin" && (
          <AdminDashboard
            onViewDashboard={() => setRoute("ipo-dashboard")}
          />
        )}

        {route === "ipo-dashboard" && selectedIPO && (
          <IPODashboard
            ipo={selectedIPO}
            onBack={() => setRoute("public")}
          />
        )}
      </div>
    </div>
  );
}
