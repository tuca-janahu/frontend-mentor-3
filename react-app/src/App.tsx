import { NavLink, Routes, Route, Navigate } from "react-router";
import AgePage from "./pages/AgePage";
import EventPage from "./pages/EventPage";

export default function App() {
  return (
    <main className="
    bg-white max-w-md m-4 mt-8 py-10 px-8 rounded-t-xl rounded-bl-xl  [border-end-end-radius:200px] shadow-lg
      md:max-w-4xl md:py-12 md:px-24 md:mx-auto md:mt-0.5 md:[border-end-end-radius:400px]">
      {/* Abas de navegação */}
      <nav className="mb-6 flex gap-4">
        <NavLink
          to="/idade"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "bg-purple-600 text-white" : "bg-gray-100"}`
          }
        >
          Idade
        </NavLink>
        <NavLink
          to="/evento"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "bg-purple-600 text-white" : "bg-gray-100"}`
          }
        >
          Evento futuro
        </NavLink>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Navigate to="/idade" replace />} />
        <Route path="/idade" element={<AgePage />} />
        <Route path="/evento" element={<EventPage />} />
      </Routes>
    </main>
  );
}
