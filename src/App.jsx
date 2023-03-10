import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quality from "./components/Quality";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Quality />
        <Menu />
      </main>
    </>
  );
}

export default App;
