import "./App.css";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Services />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
