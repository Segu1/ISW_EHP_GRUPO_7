import { Controller, useForm } from "react-hook-form";
import { InputNumber, Divider } from "antd";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router";
import People from "./People";

function Inscription() {
  const {
    control,
    //register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const id_url = useParams();
  const [showPeople, setShowPeople] = useState(false);
  const [peopleQuantity, setPeopleQuantity] = useState(0);

  const onSubmit = async (data) => {
    setPeopleQuantity(data.numeracion);
    setShowPeople(true);
  };

  const numeracion = watch("numeracion");

  useEffect(() => {
    if (numeracion && numeracion >= 1 && numeracion <= 10) {
      setPeopleQuantity(numeracion);
      setShowPeople(true);
    }
  }, [numeracion]);

  return (
    <>
      <Navbar site="Inscripción actividad" back={true}></Navbar>
      <div className="flex w-full font-serif items-center justify-center mb-10 mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md p-6 bg-white border-1 border-indigo-200 rounded-md shadow-md"
        >
          {/* Título */}
          <h1 className="mb-4 text-lg text-center bg-indigo-600 rounded-sm text-white shadow-2xl border py-2">
            Inscribirse a actividad
          </h1>

          <div className="mb-6 w-full">
            <label className="block text-center text-indigo-400 text-lg font-semibold mb-2">
              Número de personas
            </label>

            <div className="flex justify-center">
              <Controller
                name="numeracion"
                type="number"
                control={control}
                rules={{ required: "Debes ingresar el número de personas" }}
                render={({ field }) => (
                  <InputNumber
                    {...field}
                    step={1}
                    min={1}
                    max={10}
                    placeholder="1-10"
                    className="!w-full sm:!w-1/2 text-center py-2 px-4 border border-indigo-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                )}
              />
            </div>

            {errors.numeracion && (
              <div className="text-center mt-2">
                <span className="text-red-500 text-sm">
                  {errors.numeracion.message}
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
      {showPeople && <People id={id_url} peopleNumber={peopleQuantity} />}
    </>
  );
}

export default Inscription;
