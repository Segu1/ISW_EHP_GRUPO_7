import { Route, Routes } from "react-router"
import Home from "./Views/Home"
import Actividades from "./Components/Actividades"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path ="/actividades" element={<Actividades></Actividades>}></Route>
      </Routes>
    </>
  )
}

export default App
