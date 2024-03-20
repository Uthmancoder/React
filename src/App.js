import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import NonFound from "./Components/NonFound";

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/"  element={ <Home />}/>
       <Route path="/about"  element={ <About />}/>
       <Route path="/services"  element={ <Services />}/>
       <Route path="*"  element={ <NonFound />}/>
      </Routes>
    </div>
  );
}

export default App;
