import Header from "./AppHeader";
import Footer from "./AppFooter";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}