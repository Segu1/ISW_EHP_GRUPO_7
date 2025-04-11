import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Actividades from "./Components/Actividades";

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path ="/actividades" element={<Actividades></Actividades>}></Route>
      </Routes>
   
     );
  
}

export default App;
