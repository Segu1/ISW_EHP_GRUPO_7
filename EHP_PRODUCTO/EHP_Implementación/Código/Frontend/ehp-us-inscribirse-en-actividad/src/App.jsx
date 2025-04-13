import { Route, Routes } from "react-router";
import Home from "./Views/Home";
import Actividades from "./Views/Actividades";
import Cards from "./Views/Activities/Cards";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/actividades" element={<Cards />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
