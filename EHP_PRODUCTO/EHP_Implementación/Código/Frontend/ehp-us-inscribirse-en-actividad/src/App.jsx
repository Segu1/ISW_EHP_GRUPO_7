import { Route, Routes } from "react-router"
import Home from "./Views/Home"
import Activities from "./Views/Activities"
import Inscription from "./Views/Inscription"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path ="/actividades" element={<Activities></Activities>}></Route>
        <Route path = "/actividades/:id" element={<Inscription></Inscription>}></Route>
      </Routes>
    </>
  )
}

export default App
