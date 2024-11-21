// import About from "./components/About/About";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import MerchShopSection from "./components/Merch/Merch";
// import Services from "./components/OurServices/Services";
// import Events from "./components/Upcoming/Events";
// import Preloader from "./components/Preloader";


// function App() {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#191825]">
//       <Header />
//       <main className="flex-grow">
//         <Hero />
//         <About />
//         <Services />
//         <Events />
//         <MerchShopSection />
//         {/* Additional sections will go here */}
//         {/* <div className="h-screen" id="about"></div> */}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MerchShopSection from "./components/Merch/Merch";
// import Services from "./components/OurServices/Services";
import Events from "./components/Upcoming/Events";
import Preloader from "./components/Preloader";
import VideoTrailer from "./components/Trailer/VideoTrailer";
import Album from "./components/Album/Album";
import { Services } from "./components/OurServices/Services";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual resources to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // If still loading, show the preloader
  if (loading) {
    return <Preloader />;
  }

  // Once loaded, show the main content
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow bg-[#191825]">
        <Hero />
        <VideoTrailer />
        <About />
        <Services />
        <Events />
        <Album />
        
        <MerchShopSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;