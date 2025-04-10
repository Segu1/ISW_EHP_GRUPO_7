import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home"

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path ="/actividades" element={<Home></Home>}></Route>
      </Routes>
   
     );
  
}

export default App;
