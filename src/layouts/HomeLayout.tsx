import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function HomeLayout() {
  return (
    <div className="flex flex-col bg-[#F5F5F5] min-h-screen">
      <Navbar variant="absolute" />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
