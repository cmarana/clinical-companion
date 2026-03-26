import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import ScrollToTop from "./ScrollToTop";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <Outlet />
      <ScrollToTop />
      <BottomNav />
    </div>
  );
}
