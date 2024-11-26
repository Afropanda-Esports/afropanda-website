import { useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GamingPreloader from "./components/GamePreloader";

// Import pages
import { About, AmbassadorPage, Home } from "./pages";

// Shared Components
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Header2 from "./components/Header";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual resources to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // const useScrollToTop = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);
  // };

  // useScrollToTop();

  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  // If still loading, show the preloader
  if (loading) {
    return (
      <GamingPreloader
        theme="retro"
        icon="dice"
        accentColor="#FF4500"
        backgroundColor="#000000"
        loadingTips={[
          "Sharpening your blade...",
          "Gathering your party...",
          "Rolling for initiative...",
        ]}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#191825]">
      {/* <Header /> */}
      <Header2 />
      <main className="flex-grow bg-[#191825]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ambassador" element={<AmbassadorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
