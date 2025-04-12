import { sequelize } from "./database.js";
import { DataTypes } from "sequelize";

export const Actividades = sequelize.define('Actividades', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    cupos: {type:DataTypes.INTEGER},
    requiere_talla: { type: DataTypes.BOOLEAN }, // A revisar esta 
    fecha_inicio: {type: DataTypes.DATE},
    fecha_fin: {type: DataTypes.DATE},
    inscriptos: {type: DataTypes.INTEGER}
},{
    tableName: 'Actividades',
    timestamps: false
});

export async function inicializarDatosActividades() {
    await sequelize.sync()
    await Actividades.truncate()
    await Actividades.bulkCreate([
        {id: 1, nombre: "Tirolesa", cupos: 10, requiere_talla: false, fecha_inicio:"2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0},
        {id: 2, nombre: "Safari", cupos: 10, requiere_talla: false, fecha_inicio:"2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0},
        {id: 3, nombre: "Palestra", cupos: 10, requiere_talla: false, fecha_inicio:"2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0},
        {id: 4, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio:"2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0},]
        )
    };

// inicializarDatosActividades();
