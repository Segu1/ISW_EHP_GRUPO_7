import Navbar from "../Components/Navbar";
import Filter from "../Components/Filter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Actividades() {
  const navigate = useNavigate();
  const [datos, setDatos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5050/actividades");
        setDatos(res.data); // <-- res.data, no .data.data
        console.log(res.data);
      } catch (e) {
        console.log("Error al traer actividades:", e);
      }
    };
  
    fetchData();
  }, []); // <-- no te olvides de pasar [] para que solo se ejecute una vez

  const transformData = (array, kind) => {
    const realTime = new Date("2025-03-11T00:00:00"); // fecha base
  
    const filteredArray = array
      .filter((activity) => activity.nombre === kind)
      .map((activity) => ({
        ...activity,
        desde: new Date(activity.fecha_inicio),  // transformamos
        hasta: new Date(activity.fecha_fin),
      }))
      .filter((activity) => activity.desde > realTime); // comparamos
  
    filteredArray.sort((a, b) => a.desde - b.desde);
  
    return filteredArray;
  };


  const getFormatedDate = (fecha) => {
    return fecha.toLocaleString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  };

  const recibeDataFromFilters = (categoria, fecha) => {
    console.log(categoria);
    console.log(fecha)
  }

  return (
      <>
        <Navbar site="Actividades" />
        <Filter recibeData={recibeDataFromFilters} />
        {/* Jardinería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 sm:h-1/8">
          {datos && transformData(datos, "Jardinería").map((jardineria) => (
            <div
              key={jardineria.id}
              className="font-mono relative bg-[#384252] shadow-2xl mb-4 rounded-md font-semibold w-full text-center p-1 hover:bg-[#8cd19d] hover:p-3"
              onClick={() => {jardineria.cupos === jardineria.inscriptos ? alert("No hay cupos disponibles") : navigate("/actividades/" + jardineria.id)}}
            >
              <div className="text-[#ffffdd] group text-shadow-lg/20">
                <p className="inline-block relative mr-50 bg-[#c0efd2] w-full rounded-2xl">{jardineria.nombre}</p>
                <p className={`inline-block m-5 ${jardineria.inscriptos <= (jardineria.cupos * 0.7) ? 'bg-[#d4f1db]' : 'bg-red-300'} rounded-xl p-2`}>
                  Cupos: {jardineria.inscriptos}/{jardineria.cupos}
                </p>
                <p className="inline-block bg-[#d4f1db] rounded-xl p-2">{getFormatedDate(jardineria.desde)} - {getFormatedDate(jardineria.hasta)}</p>
                {jardineria.inscriptos <= (jardineria.cupos * 0.7) ? <p></p> : <p className="p-1 group-hover:bg-[#384252] rounded-2xl m-2">Últimos lugares</p>}
              </div>
            </div>
          ))}
        </div>
    
        {/* Tirolesa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 ">
          {datos && transformData(datos, "Tirolesa").map((tirolesa) => (
            <div
              key={tirolesa.id}
              className="font-mono relative bg-[#1A1B41] shadow-2xl mb-4 rounded-md font-semibold w-full text-center p-1 hover:bg-[#8cd19d] hover:p-3"
              onClick={() => navigate("/actividades/" + tirolesa.id)}
            >
              <div className="text-[#ffffdd] group text-shadow-lg/20">
                <p className="inline-block relative mr-50 bg-[#6290C3] w-full rounded-2xl">{tirolesa.nombre}</p>
                <p className={`inline-block m-5 ${tirolesa.inscriptos <= (tirolesa.cupos * 0.7) ? 'bg-[#d4f1db]' : 'bg-red-300'} rounded-xl p-2`}>
                  Cupos: {tirolesa.inscriptos}/{tirolesa.cupos}
                </p>
                <p className="inline-block bg-[#d4f1db] rounded-xl p-2">{getFormatedDate(tirolesa.desde)} - {getFormatedDate(tirolesa.hasta)}</p>
                {tirolesa.inscriptos <= (tirolesa.cupos * 0.7) ? <p></p> : <p className="p-1 group-hover:bg-[#384252] rounded-2xl m-2">Últimos lugares</p>}
              </div>
            </div>

            
          ))}
        </div>

              {/* Palestra */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 ">
          {datos && transformData(datos, "Palestra").map((palestra) => (
            <div
              key={palestra.id}
              className="font-mono relative bg-[#88366a] shadow-2xl mb-4 rounded-md font-semibold w-full text-center p-1 hover:bg-[#8cd19d] hover:p-3"
              onClick={() => navigate("/actividades/" + palestra.id)}
            >
              <div className="text-[#ffffdd] group text-shadow-lg/20">
                <p className="inline-block relative mr-50 bg-[#752559] w-full rounded-2xl">{palestra.nombre}</p>
                <p className={`inline-block m-5 ${palestra.inscriptos <= (palestra.cupos * 0.7) ? 'bg-[#d4f1db]' : 'bg-red-300'} rounded-xl p-2`}>
                  Cupos: {palestra.inscriptos}/{palestra.cupos}
                </p>
                <p className="inline-block bg-[#d4f1db] rounded-xl p-2">{getFormatedDate(palestra.desde)} - {getFormatedDate(palestra.hasta)}</p>
                {palestra.inscriptos <= (palestra.cupos * 0.7) ? <p></p> : <p className="p-1 group-hover:bg-[#384252] rounded-2xl m-2">Últimos lugares</p>}
              </div>
            </div>
          ))}
        </div>


          {/* Safari */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 ">
          {datos && transformData(datos, "Safari").map((safari) => (
            <div
              key={safari.id}
              className="font-mono relative bg-[#5B5750] shadow-2xl mb-4 rounded-md font-semibold w-full text-center p-1 hover:bg-[#8cd19d] hover:p-3"
              onClick={() => navigate("/actividades/" + safari.id)}
            >
              <div className="text-[#ffffdd] group text-shadow-lg/20">
                <p className="inline-block relative mr-50 bg-[#492C1D] w-full rounded-2xl">{safari.nombre}</p>
                <p className={`inline-block m-5 ${safari.inscriptos <= (safari.cupos * 0.7) ? 'bg-[#d4f1db]' : 'bg-red-300'} rounded-xl p-2`}>
                  Cupos: {safari.inscriptos}/{safari.cupos}
                </p>
                <p className="inline-block bg-[#d4f1db] rounded-xl p-2">{getFormatedDate(safari.desde)} - {getFormatedDate(safari.hasta)}</p>
                {safari.inscriptos <= (safari.cupos * 0.7) ? <p></p> : <p className="p-1 group-hover:bg-[#384252] rounded-2xl m-2">Últimos lugares</p>}
              </div>
            </div>

            
          ))}
        </div>
      </>
      
  );
  
}

export default Actividades;
