import { Route, Routes } from "react-router"
import Home from "./Views/Home"
import Actividades from "./Views/Actividades"
import Cards from "./Views/Activities/Cards"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path ="/actividades" element={<Actividades></Actividades>}></Route>
        <Route path="/prueba" element={<Cards/>}/>
      </Routes>
    </>
  )
}

export default App
