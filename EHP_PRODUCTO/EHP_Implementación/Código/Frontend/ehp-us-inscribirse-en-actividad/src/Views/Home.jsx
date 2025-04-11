import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router";
//import pineTree from "../assets/pine-tree.png"
import homeTreeImg from "../assets/homeTreeImg.png"

function Home() {

    const [btnActividades, setBtnActividades] = useState("Actividades");
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/actividades');
    };

    const handleHover = () => {
      setBtnActividades("Inscribirme!")
    };
  
    const handleLeave = () => {
      setBtnActividades("Actividades")
    };



  return (
    <>
    <Navbar site="Inicio"></Navbar>
    <section>
      <div className="mx-auto justify-center items-center pt-20">
        <img src={homeTreeImg} alt="Home tree img" className="text-center shadow-2xl p-10 rounded-2xl h-120 mx-auto bg-[#042A2B]"  />
      <button    
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className="mx-auto block bg-green-800 text-white px-10 py-2 mt-10 rounded hover:shadow-4xl hover:bg-green-500">{btnActividades}</button>
      </div>
    </section>
    </>
  );
}

export default Home