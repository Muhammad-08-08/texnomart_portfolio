import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import HomePage from "./components/home_page";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
