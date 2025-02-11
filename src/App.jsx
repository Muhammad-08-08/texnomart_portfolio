import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import HomePage from "./components/home_page";
import ProductPage from "./components/component_home_page/product_page";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
