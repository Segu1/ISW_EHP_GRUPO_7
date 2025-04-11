import Navbar from "./Navbar";

function Actividades(){
    const datos = [
        "act1" , "act2", "act3"]
    return(
        <>
        <Navbar site="Actividades" />
        <div className="grid grid-flow-col grid-rows-1 gap-4 w-1/4 ml-10">
          {datos.map((item, index) => (
            <div
              key={index}
              className="bg-green-200 rounded-md font-semibold text-center p-2"
            >
              {item}
            </div>
          ))}
        </div>
      </>
      
    )
}

export default Actividades;