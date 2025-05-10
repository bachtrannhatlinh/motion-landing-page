import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import FuelCard from "./pages/FuelCard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fuel-card" element={<FuelCard />} />
      </Routes>
    </div>
  );
}

export default App;
