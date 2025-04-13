import { sequelize } from "./database.js";
import { DataTypes } from "sequelize";



export const Inscripcion = sequelize.define('Inscripcion', {
    id_inscripcion: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_visitante: { type: DataTypes.INTEGER },
    id_actividad: { type: DataTypes.INTEGER },
    terminos_condicion: { type: DataTypes.BOOLEAN },
    fecha_inscripcion: {type: DataTypes.DATE} 
    
},{
    tableName: 'Inscripcion',
    timestamps: false
});



export async function inicializarDatosInscripciones() {
    await sequelize.sync()
    await Inscripcion.truncate()
    await Inscripcion.bulkCreate([
        { id_inscripcion: 1, id_visitante: 1, id_actividad: 1, terminos_condicion: true, fecha_inscripcion: "2025-03-21" },
        { id_inscripcion: 2, id_visitante: 2, id_actividad: 2, terminos_condicion: false, fecha_inscripcion: "2025-03-22" },
        { id_inscripcion: 3, id_visitante: 3, id_actividad: 3, terminos_condicion: true, fecha_inscripcion: "2025-03-23" },
        { id_inscripcion: 4, id_visitante: 4, id_actividad: 4, terminos_condicion: true, fecha_inscripcion: "2025-03-24" },
        { id_inscripcion: 5, id_visitante: 5, id_actividad: 1, terminos_condicion: false, fecha_inscripcion: "2025-03-25" },
        { id_inscripcion: 6, id_visitante: 6, id_actividad: 2, terminos_condicion: true, fecha_inscripcion: "2025-03-26" },
        { id_inscripcion: 7, id_visitante: 7, id_actividad: 3, terminos_condicion: true, fecha_inscripcion: "2025-03-27" },
        { id_inscripcion: 8, id_visitante: 8, id_actividad: 4, terminos_condicion: false, fecha_inscripcion: "2025-03-28" },
        { id_inscripcion: 9, id_visitante: 9, id_actividad: 1, terminos_condicion: true, fecha_inscripcion: "2025-03-29" },
        { id_inscripcion: 10, id_visitante: 10, id_actividad: 2, terminos_condicion: false, fecha_inscripcion: "2025-03-30" },
        { id_inscripcion: 11, id_visitante: 11, id_actividad: 3, terminos_condicion: true, fecha_inscripcion: "2025-03-31" },
        { id_inscripcion: 12, id_visitante: 12, id_actividad: 4, terminos_condicion: false, fecha_inscripcion: "2025-04-01" },
        { id_inscripcion: 13, id_visitante: 13, id_actividad: 1, terminos_condicion: true, fecha_inscripcion: "2025-04-02" },
        { id_inscripcion: 14, id_visitante: 14, id_actividad: 2, terminos_condicion: false, fecha_inscripcion: "2025-04-03" },
        { id_inscripcion: 15, id_visitante: 15, id_actividad: 3, terminos_condicion: true, fecha_inscripcion: "2025-04-04" },
        { id_inscripcion: 16, id_visitante: 16, id_actividad: 4, terminos_condicion: false, fecha_inscripcion: "2025-04-05" },
        { id_inscripcion: 17, id_visitante: 17, id_actividad: 1, terminos_condicion: true, fecha_inscripcion: "2025-04-06" },
        { id_inscripcion: 18, id_visitante: 18, id_actividad: 2, terminos_condicion: false, fecha_inscripcion: "2025-04-07" },
        { id_inscripcion: 19, id_visitante: 19, id_actividad: 3, terminos_condicion: true, fecha_inscripcion: "2025-04-08" },
        { id_inscripcion: 20, id_visitante: 20, id_actividad: 4, terminos_condicion: true, fecha_inscripcion: "2025-04-09" },
        { id_inscripcion: 21, id_visitante: 21, id_actividad: 1, terminos_condicion: false, fecha_inscripcion: "2025-04-10" },
        { id_inscripcion: 22, id_visitante: 2, id_actividad: 2, terminos_condicion: true, fecha_inscripcion: "2025-04-11" },
        { id_inscripcion: 23, id_visitante: 5, id_actividad: 3, terminos_condicion: true, fecha_inscripcion: "2025-04-12" },
        { id_inscripcion: 24, id_visitante: 7, id_actividad: 4, terminos_condicion: false, fecha_inscripcion: "2025-04-13" },
        { id_inscripcion: 25, id_visitante: 10, id_actividad: 1, terminos_condicion: true, fecha_inscripcion: "2025-04-14" }
     ])
    }; 




// inicializarDatosInscripciones()