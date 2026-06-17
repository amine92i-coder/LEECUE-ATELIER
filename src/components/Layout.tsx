import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import ScrollManager from "./ScrollManager";

export default function Layout() {
  return (
    <div className="grain-overlay relative">
      <ScrollManager />
      <Nav />
      <Outlet />
      <Footer />
      <CookieBanner />
    </div>
  );
}
