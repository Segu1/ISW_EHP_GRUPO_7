import { S } from "../../assets/css/Card.css";

export default function Card({
    cupos,
    nombre,
    fechaDesde,
    fechaHasta,
    inscriptos,
}) {
    return (
        <>
            <S.Box>
                <p>{cupos}</p>
                <p>{nombre}</p>
                <p>{fechaDesde}</p>
                <p>{fechaHasta}</p>
                <p>{inscriptos}</p>
            </S.Box>
        </>
    );
}
