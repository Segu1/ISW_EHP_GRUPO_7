import { RightCircleOutlined } from "@ant-design/icons";
import { S } from "../../assets/css/Card.css";

export default function Card({
    cupos,
    nombre,
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

    return (
        <>
            <div className="flex justify-between items-center group bg-gray-200 p-3 cursor-pointer rounded-lg transition-all hover:scale-105" onClick={onClick}>
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
                <div className="flex-none p-3 transition-all group-hover:scale-120">
                    <RightCircleOutlined />
                </div>
            </div>
        </>
    );
}

/*
   <S.Box onClick={onClick}>
        <S.TitleActivity>
            <h1 className="font-oswald">{nombre}</h1>
        </S.TitleActivity>
        <S.InfoActivity>
            <div>
                Cupos: {inscriptos}/{cupos}
            </div>
            <div>
                {getHoraInicio}:{getMinInicio} - {getHoraFin}:{getMinFin}
            </div>
        </S.InfoActivity>
    </S.Box>  */
