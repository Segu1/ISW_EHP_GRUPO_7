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
