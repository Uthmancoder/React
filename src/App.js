import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import NonFound from "./Components/NonFound";
import Layout from "./Container/Layout";
import Product from "./Components/Product";
import SingleProduct from "./Components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Child Routing  */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Route>
        {/* Catch All Route  */}
        <Route path="*" element={<NonFound />} />
      </Routes>
    </div>
  );
}

export default App;
