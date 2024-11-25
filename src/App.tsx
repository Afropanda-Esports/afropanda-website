import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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

  // Once loaded, show the main content
  return (
    <div className="min-h-screen flex flex-col ">
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
