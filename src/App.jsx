import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quality from "./components/Quality";
import Menu from "./components/Menu";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth/>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Quality />
        <Menu />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
