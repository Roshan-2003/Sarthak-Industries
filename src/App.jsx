import ScrollProgress from "./components/common/ScrollProgress";
import ScrollToTop from "./components/common/ScrollToTop";
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Scroll Reading Indicator Bar */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
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

      {/* Footer */}
      <Footer />

      {/* Floating Action Scroll-To-Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;