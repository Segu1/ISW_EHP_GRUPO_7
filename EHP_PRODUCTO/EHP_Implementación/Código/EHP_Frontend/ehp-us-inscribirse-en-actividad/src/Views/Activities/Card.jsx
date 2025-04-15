import { S } from "../../assets/css/Card.css";

//"id":1,"nombre":"Tirolesa","cupos":10,"requiere_talla":false,"fecha_inicio":"2025-03-21T00:00:00.000Z"
//{"id":1,"nombre":"Tirolesa","cupos":10,"requiere_talla":false,"fecha_inicio":"2025-03-21T00:00:00.000Z","fecha_fin":"2025-03-22T00:00:00.000Z","inscriptos":0}
export default function Card({
    cupos,
    nombre,
    fecha_inicio,
    fecha_fin,
    inscriptos,
}) {
    const fechaDesde = new Date(fecha_inicio);
    const fechaFin = new Date(fecha_fin);

    const { getHoraInicio, getMinInicio, getHoraFin, getMinFin } = {
        getHoraInicio: ("0" + fechaDesde.getHours()).slice(-2),
        getMinInicio: ("0" + fechaDesde.getMinutes()).slice(-2),
        getHoraFin: ("0" + fechaFin.getHours()).slice(-2),
        getMinFin: ("0" + fechaFin.getMinutes()).slice(-2),
    };

    return (
        <>
            <S.Box>
                <p>{nombre}</p>
                <p>{cupos}</p>
                <p>{fecha_inicio}</p>
                <p>{fecha_fin}</p>
                <p>{inscriptos}</p>
            </S.Box>
        </>
    );
}

{
    /* 

    <div className="font-mono relative bg-[#384252] shadow-2xl mb-4 rounded-md font-semibold w-full text-center p-1 hover:bg-[#8cd19d] hover:p-3">
        <div className="text-[#ffffdd] group text-shadow-lg/20">
            <p className="inline-block relative mr-50 bg-[#c0efd2] w-full rounded-2xl">
                {nombre}
            </p>
            <p
                className={`inline-block m-5 ${
                    inscriptos <= cupos * 0.7
                        ? "bg-[#d4f1db]"
                        : "bg-red-300"
                } rounded-xl p-2`}
            >
                Cupos: {inscriptos}/{cupos}
            </p>
            <p className="inline-block bg-[#d4f1db] rounded-xl p-2">
                {getHoraInicio}:{getMinInicio} - {getHoraFin}:
                {getMinFin}
            </p>
            {inscriptos <= cupos * 0.7 ? (
                <p></p>
            ) : (
                <p className="p-1 group-hover:bg-[#384252] rounded-2xl m-2">
                    Últimos lugares
                </p>
            )}
        </div>
    </div>

    <S.Box>
        <p>{nombre}</p>
        <p>{cupos}</p>
        <p>{fecha_inicio}</p>
        <p>{fecha_fin}</p>
        <p>{inscriptos}</p>
    </S.Box>
    */
}
