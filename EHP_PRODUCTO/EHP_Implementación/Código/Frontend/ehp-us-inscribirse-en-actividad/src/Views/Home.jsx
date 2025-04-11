//import { useState, useEffect } from "react";

function Home() {

    const handleHover = () => {
      const btnActividades = document.getElementById('btnActividades');
      btnActividades.textContent = "Inscribirme!"
    };
  
    const handleLeave = () => {
      const btnActividades = document.getElementById('btnActividades');
      btnActividades.textContent = "Actividades"
    };

  return (
    <>
      <div className="mx-auto justify-center items-center pt-20">
        <img src="./homeTreeImg.png" alt="Home tree img" className="text-center shadow-2xl p-10 rounded-2xl h-120 mx-auto bg-[#042A2B]"  />
      <button    
      id="btnActividades"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="mx-auto block bg-green-800 text-white px-10 py-2 mt-10 rounded hover:shadow-4xl hover:bg-green-500">Actividades</button>

      </div>
    </>
  );
}

export default Home