import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from 'antd';

function People(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm();

  const [responseStatus, setResponseStatus] = useState(null);

  useEffect(() => {
    reset();
  }, [props.peopleNumber, reset]);

  const onSubmit = async (data) =>  {
    console.log(data);
    console.log(props.id);
    try {

        const payload = {
          id: props.id,          // o simplemente: id: 1
          personas: data.personas
        };
        
        console.log(payload);
        const response = await axios.post("http://localhost:5050/inscripciones", payload);
        reset();
        console.log(response.status);
        setResponseStatus(response.status);
            } catch (error) {
        if (error.response) {
          console.log("Código de error:", error.response.status);
          console.log("Mensaje del servidor:", error.response.data);
          setResponseStatus(error.response.status);
          // ejemplo de manejo por código
    
        } else if (error.request) {
          console.log("No hubo respuesta del servidor");
          alert("El servidor no respondió.");
        } else {
          console.log("Error en la configuración:", error.message);
        }
      }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl border-1 border-indigo-100 p-6 bg-white rounded-xl shadow-lg"
      >
        <h1 className="mb-6 text-xl font-semibold text-center bg-indigo-500 rounded-md text-white shadow-md py-3">
          Datos Personales
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[...Array(props.peopleNumber)].map((_, i) => (
            <div
              key={i}
              className="border hover:p-3 border-gray-300 rounded-lg p-4 shadow-sm bg-gray-50"
            >
              <h2 className="font-semibold text-lg mb-4 text-indigo-700">
                Persona {i + 1}
              </h2>

              {/* Nombre */}
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  {...register(`personas.${i}.nombre`, {
                    required: "Este campo es obligatorio",
                    pattern: {
                        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,  // Solo letras y espacios
                        message: "Solo se permiten letras"
                      }
                  })}
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.personas?.[i]?.nombre && (
                  <span className="text-red-500 text-sm">
                    {errors.personas[i].nombre.message}
                  </span>
                )}
              </div>

              {/* DNI */}
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">DNI</label>
                <input
                  type="number"
                  {...register(`personas.${i}.dni`, {
                    required: "Este campo es obligatorio",
                    valueAsNumber: true,
                    min: {
                        value: 10000000,
                        message: "El DNI no debe tener al menos 8 digitos"
                      },
                    max: {
                        value: 99999999,
                        message: "El DNI no debe tener más de 8 digitos"
                    }  
                  })}
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.personas?.[i]?.dni && (
                  <span className="text-red-500 text-sm">
                    {errors.personas[i].dni.message}
                  </span>
                )}
              </div>

              {/* Edad */}
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Edad</label>
                <input
                  type="number"
                  {...register(`personas.${i}.edad`, {
                    required: "Este campo es obligatorio",
                    valueAsNumber: true,
                    min: {
                        value: 1,
                        message: "La edad debe ser mayor o igual a 1"
                      },
                    max: {
                        value: 100,
                        message: "La edad no debe ser mayor a 100"
                    }  
                  })}
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.personas?.[i]?.edad && (
                  <span className="text-red-500 text-sm">
                    {errors.personas[i].edad.message}
                  </span>
                )}
              </div>

              {/* Talla */}
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  Talla de vestimenta
                </label>
                <input
                  type="text"
                  {...register(`personas.${i}.talla`)} // No hay 'required', por lo que no es obligatorio
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-indigo-400"
                />
                {errors.personas?.[i]?.talla && (
                  <span className="text-red-500 text-sm">
                    {errors.personas[i].talla.message}
                  </span>
                )}
              </div>

            
            </div>
          ))}
        </div>

        <div className="mt-8  justify-center">
              {/* Terminos y condiciones */}
              <div className="mb-3">
                <label className="text-sm font-medium mb-1">He ledio y acepto los terminos y condiciones</label>
                <input
                  type="checkbox"
                  className="m-1 mt-2 border rounded-md lg:p-2 focus:outline-none focus:ring-indigo-400"
                  {...register("terminos", { required: "Debes aceptar los términos y condiciones",
                    setValueAs: () => false,
                   })}
                />
              </div>

          <button
            type="submit" 
            disabled={!isValid}
            className={`px-4 py-2 rounded text-white font-bold mb-3 transition-all duration-200 ${
                isValid ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400 cursor-not-allowed"
              }`}
                      >
            Enviar
          </button>

          {responseStatus == 201 ? <Alert message="Inscripción exitosa" type="success" showIcon /> : ""}
          {responseStatus == 409 ? <Alert message="Error" description="Los cupos de esa actividad estan llenos." type="error" showIcon/> : ""}
          {responseStatus == 400 ? <Alert message="Error" description="La actividad requiere talle de vestimenta." type="error" showIcon/> : ""}
        </div>
      </form>
    </div>
  );
}

export default People;
