import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/actividades" element={<Home/>}></Route>
      </Routes>
  );
  
}

export default App;
