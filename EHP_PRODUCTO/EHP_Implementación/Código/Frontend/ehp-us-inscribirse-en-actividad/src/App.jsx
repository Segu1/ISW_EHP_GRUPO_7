import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home"
import Activities from "./Views/Activities";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Activities />} />
      </Routes>
  );
  
}

export default App;
