import { Box } from "../../assets/css/Card.css";

export default function Card({
    cupos,
    nombre,
    fechaDesde,
    fechaHasta,
    inscriptos,
}) {
    return (
        <>
            <Box>
                <p>{cupos}</p>
                <p>{nombre}</p>
                <p>{fechaDesde}</p>
                <p>{fechaHasta}</p>
                <p>{inscriptos}</p>
            </Box>
        </>
    );
}
