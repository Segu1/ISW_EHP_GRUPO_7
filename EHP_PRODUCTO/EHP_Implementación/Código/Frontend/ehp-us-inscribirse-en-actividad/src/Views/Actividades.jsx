import Navbar from "../Components/Navbar";
import Filter from "../Components/Filter"

function Actividades() {
    const datos = [
        {
            id: 1,
            nombre: "Jardineria",
            cupos: 10,
            desde: "2025-05-11T10:48",
            hasta: "2025-05-11T11:30",
            inscriptos: 6,
        },
        {
            id: 2,
            nombre: "Jardineria",
            cupos: 10,
            desde: "2025-05-11T12:00",
            hasta: "2025-05-11T12:30",
            inscriptos: 4,
        },
        {
            id: 3,
            nombre: "Jardineria",
            cupos: 10,
            desde: "2025-05-11T13:00",
            hasta: "2025-05-11T13:45",
            inscriptos: 7,
        },
        {
            id: 4,
            nombre: "Jardineria",
            cupos: 10,
            desde: "2025-05-11T14:00",
            hasta: "2025-05-11T14:30",
            inscriptos: 3,
        },
        {
            id: 5,
            nombre: "Jardineria",
            cupos: 10,
            desde: "2025-05-11T15:00",
            hasta: "2025-05-11T15:30",
            inscriptos: 9,
        },
        {
            id: 6,
            nombre: "Jardineria",
            cupos: 10,
            desde: "2025-05-11T15:00",
            hasta: "2025-05-11T15:30",
            inscriptos: 9,
        },
        {
            id: 7,
            nombre: "Tirolesa",
            cupos: 10,
            desde: "2025-05-11T10:48",
            hasta: "2025-05-11T11:30",
            inscriptos: 6,
        },
        {
            id: 8,
            nombre: "Tirolesa",
            cupos: 10,
            desde: "2025-05-11T12:00",
            hasta: "2025-05-11T12:30",
            inscriptos: 4,
        },
        {
            id: 9,
            nombre: "Tirolesa",
            cupos: 10,
            desde: "2025-05-11T13:00",
            hasta: "2025-05-11T13:45",
            inscriptos: 7,
        },
        {
            id: 10,
            nombre: "Tirolesa",
            cupos: 10,
            desde: "2025-05-11T14:00",
            hasta: "2025-05-11T14:30",
            inscriptos: 3,
        },
        {
            id: 11,
            nombre: "Tirolesa",
            cupos: 10,
            desde: "2025-05-11T15:00",
            hasta: "2025-05-11T15:30",
            inscriptos: 9,
        },
        {
            id: 12,
            nombre: "Tirolesa",
            cupos: 10,
            desde: "2025-05-11T15:00",
            hasta: "2025-05-11T15:30",
            inscriptos: 9,
        },
    ];

    const transformData = (array, kind) => {
        const filteredArray = array.filter(
            (activity) => activity.nombre === kind
        );

        filteredArray.forEach((activity) => {
            activity.desde = new Date(activity.desde);
            activity.hasta = new Date(activity.hasta);
        });

        filteredArray.sort((a, b) => a.desde - b.desde);

        return filteredArray;
    };

    const getFormatedDate = (fecha) => {
        return fecha.toLocaleString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    };

    return (
        <>
            <Navbar site="Actividades" />
            <Filter/>
            {/* Jardinería */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 sm:h-1/8">
                {transformData(datos, "Jardineria").map((jardineria) => (
                    <div
                        key={jardineria.id}
                        className="font-mono relative bg-[#384252] shadow-2xl mb-4 rounded-md font-semibold w-full text-center p-1 hover:bg-[#8cd19d] hover:p-3"
                    >
                        <div className="text-[#ffffdd] group text-shadow-lg/20">
                            <p className="inline-block relative mr-50 bg-[#c0efd2] w-full rounded-2xl">
                                {jardineria.nombre}
                            </p>
                            <p
                                className={`inline-block m-5 ${
                                    jardineria.inscriptos <=
                                    jardineria.cupos * 0.6
                                        ? "bg-[#d4f1db]"
                                        : "bg-red-300"
                                } rounded-xl p-2`}
                            >
                                Cupos: {jardineria.inscriptos} /{" "}
                                {jardineria.cupos}
                            </p>
                            <p className="inline-block bg-[#d4f1db] rounded-xl p-2">
                                {getFormatedDate(jardineria.desde)} -{" "}
                                {getFormatedDate(jardineria.hasta)}
                            </p>
                            {jardineria.inscriptos <= jardineria.cupos * 0.6 ? (
                                <p></p>
                            ) : (
                                <p className="p-1 group-hover:bg-[#384252] rounded-2xl m-2">
                                    Últimos lugares
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Tirolesa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto px-4 ">
                {transformData(datos, "Tirolesa").map((tirolesa) => (
                    <div
                        key={tirolesa.id}
                        className="font-mono relative bg-[#1A1B41] shadow-2xl mb-4 rounded-md font-semibold w-full text-center p-1 hover:bg-[#8cd19d] hover:p-3"
                    >
                        <div className="text-[#ffffdd] group text-shadow-lg/20">
                            <p className="inline-block relative mr-50 bg-[#6290C3] w-full rounded-2xl">
                                {tirolesa.nombre}
                            </p>
                            <p
                                className={`inline-block m-5 ${
                                    tirolesa.inscriptos <= tirolesa.cupos * 0.6
                                        ? "bg-[#d4f1db]"
                                        : "bg-red-300"
                                } rounded-xl p-2`}
                            >
                                Cupos: {tirolesa.inscriptos} / {tirolesa.cupos}
                            </p>
                            <p className="inline-block bg-[#d4f1db] rounded-xl p-2">
                                {getFormatedDate(tirolesa.desde)} -{" "}
                                {getFormatedDate(tirolesa.hasta)}
                            </p>
                            {tirolesa.inscriptos <= tirolesa.cupos * 0.6 ? (
                                <p></p>
                            ) : (
                                <p className="p-1 group-hover:bg-[#384252] rounded-2xl m-2">
                                    Últimos lugares
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Actividades;
