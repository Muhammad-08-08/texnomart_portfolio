import { Route, Routes } from "react-router";
import ProductPage from "./components/component_home_page/product_page";
import TopCategory from "./components/componentlar/header_bottom";
import HomePage from "./components/home_page";
import Navbar from "./components/navbar";
import KategoryFilter from "./components/qoshimcha_componentlar/Kategory-filter";
import TopCategoriesPage from "./components/qoshimcha_componentlar/top_category";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/top-category/:slug" element={<TopCategoriesPage />} />
        <Route path="/top-categoriec/:id" element={<ProductPage />} />
        <Route path="/acsessuar/:id" element={<ProductPage />} />
        <Route path="/yaqinda-korilganlar/:id" element={<ProductPage />} />
        <Route
          path="/kategory-bottom-filter/:slug"
          element={<KategoryFilter />}
        />
      </Routes>
    </div>
  );
}

export default App;
