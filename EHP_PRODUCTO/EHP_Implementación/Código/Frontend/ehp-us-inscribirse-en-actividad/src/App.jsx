import { Route, Routes } from "react-router";
import Home from "./Views/Home";
//import Actividades from "./Views/Actividades";
import Cards from "./Views/Activities/Cards";
import Footer from "./Components/Footer";
import Activities from "./Views/Activities"
import Inscription from "./Views/Inscription"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path ="/actividades" element={<Activities></Activities>}></Route>
                <Route path="/actividadesv2" element={<Cards />} />
                <Route path = "/actividades/:id" element={<Inscription></Inscription>}></Route>
            </Routes>
           {/*<Footer />*/}
        </>
    );
}

export default App;
