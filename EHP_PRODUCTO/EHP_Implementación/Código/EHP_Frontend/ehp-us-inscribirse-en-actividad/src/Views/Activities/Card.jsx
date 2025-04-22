import { RightCircleOutlined } from "@ant-design/icons";
import { S } from "../../assets/css/Card.css";

export default function Card({
    cupos,
    fecha_inicio,
    fecha_fin,
    inscriptos,
    onClick,
}) {
    const fechaDesde = new Date(fecha_inicio);
    const fechaFin = new Date(fecha_fin);

    const { getHoraInicio, getMinInicio, getHoraFin, getMinFin } = {
        getHoraInicio: ("0" + fechaDesde.getHours()).slice(-2),
        getMinInicio: ("0" + fechaDesde.getMinutes()).slice(-2),
        getHoraFin: ("0" + fechaFin.getHours()).slice(-2),
        getMinFin: ("0" + fechaFin.getMinutes()).slice(-2),
    };

    //Sin cupos o actividades culminadas
    const flag = fechaFin <= new Date() || cupos === inscriptos

    return (
        <>
            <div className={`flex justify-between items-center group bg-gray-200 p-3  rounded-lg transition-all ${flag ? "cursor-not-allowed" : "cursor-pointer hover:scale-105"}`} onClick={onClick}>
                <div className="flex flex-col gap-2">
                    <div >
                        <span className="bg-gray-300 p-1 text-sm rounded-lg">
                            {getHoraInicio}:{getMinInicio} - {getHoraFin}:{getMinFin}
                        </span>
                    </div>
                    <div>
                        <span className="bg-gray-300 p-1 text-sm rounded-lg">
                            {inscriptos}/{cupos}
                        </span>
                    </div>
                </div>
                <div className="mr-2 flex items-center gap-3">
                    { getWarning(fechaFin, cupos, inscriptos) }
                    <RightCircleOutlined className={`!text-gray-500 text-3xl transition-all ${!flag && "group-hover:scale-120"} `} />
                </div>
            </div>
        </>
    );
}

const getWarning = (fechaFin, cupos, inscriptos) => {
    if (fechaFin <= new Date()) return warningMessage("RED", "CULMINADA");
    if (cupos === inscriptos) return warningMessage("RED", "Sin cupos!");
    if (cupos - inscriptos <= 2) return warningMessage("YELLOW", "¡Últimos cupos!");
    return null;
}

const warningMessage = (color, message) => {
    const Colors = Object.freeze({
        RED: "bg-red-200/80 text-red-800",
        YELLOW: "bg-yellow-200/80 text-yellow-600"
    })
    return (
        <div>
            <span className={`${Colors[color]} p-2 rounded-xl`}>{message}</span>
        </div>
    )
}
