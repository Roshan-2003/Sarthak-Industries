import About from "./components/home/About";
import Applications from "./components/home/Applications";
import Benefits from "./components/home/Benefits";
import Contact from "./components/home/Contact";
import Hero from "./components/home/Hero";
import Product from "./components/home/Product";
import Quality from "./components/home/Quality";
import TrustBar from "./components/home/TrustBar";
import Footer from "./components/layout/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar/>

      <main>
        <Hero />

        <TrustBar />

        <About />

        <Product />

        <Benefits />

        <Applications />

        <Quality />

        <Contact />
      </main>

      <Footer />

    </div>
  );
};

export default App;