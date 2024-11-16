import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#191825]">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* Additional sections will go here */}
        <div className="h-screen" id="about"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
