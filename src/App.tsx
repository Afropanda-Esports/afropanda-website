import About from "./components/About/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MerchShopSection from "./components/Merch/Merch";
import Services from "./components/OurServices/Services";
import Events from "./components/Upcoming/Events";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#191825]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Events />
        <MerchShopSection />
        {/* Additional sections will go here */}
        {/* <div className="h-screen" id="about"></div> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
