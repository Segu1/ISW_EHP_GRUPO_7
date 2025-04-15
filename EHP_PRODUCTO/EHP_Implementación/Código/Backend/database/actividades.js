import { sequelize } from "./database.js";
import { DataTypes } from "sequelize";
import { Inscripcion } from "./inscripciones.js";

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


Actividades.hasMany(Inscripcion, { foreignKey: 'id_actividad' });
Inscripcion.belongsTo(Actividades, { foreignKey: 'id_actividad' });


export async function inicializarDatosActividades() {
    await sequelize.sync();
    await Actividades.truncate();
    await Actividades.bulkCreate([
        { id: 1, nombre: "Tirolesa", cupos: 10, requiere_talla: false, fecha_inicio: "2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0 },
        { id: 2, nombre: "Safari", cupos: 10, requiere_talla: false, fecha_inicio: "2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0 },
        { id: 3, nombre: "Palestra", cupos: 10, requiere_talla: false, fecha_inicio: "2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0 },
        { id: 4, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-03-21", fecha_fin: "2025-03-22", inscriptos: 0 },
        { id: 5, nombre: "Safari", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-15T08:00", fecha_fin: "2025-04-15T12:00", inscriptos: 0 },
        { id: 6, nombre: "Jardinería", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-12T09:00", fecha_fin: "2025-04-12T12:30", inscriptos: 0 },
        { id: 7, nombre: "Palestra", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-20T10:45", fecha_fin: "2025-04-20T13:00", inscriptos: 0 },
        { id: 8, nombre: "Tirolesa", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-08T13:15", fecha_fin: "2025-04-08T15:15", inscriptos: 0 },
        { id: 9, nombre: "Safari", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-18T12:30", fecha_fin: "2025-04-18T17:00", inscriptos: 0 },
        { id: 10, nombre: "Palestra", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-25T15:00", fecha_fin: "2025-04-25T18:00", inscriptos: 0 },
        { id: 11, nombre: "Jardinería", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-06T08:30", fecha_fin: "2025-04-06T09:45", inscriptos: 0 },
        { id: 12, nombre: "Safari", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-13T11:45", fecha_fin: "2025-04-13T16:15", inscriptos: 0 },
        { id: 13, nombre: "Tirolesa", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-11T10:00", fecha_fin: "2025-04-11T13:30", inscriptos: 0 },
        { id: 14, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-17T08:45", fecha_fin: "2025-04-17T12:00", inscriptos: 0 },
        { id: 15, nombre: "Palestra", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-09T14:00", fecha_fin: "2025-04-09T18:30", inscriptos: 0 },
        { id: 16, nombre: "Safari", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-14T09:30", fecha_fin: "2025-04-14T12:00", inscriptos: 0 },
        { id: 17, nombre: "Tirolesa", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-21T16:00", fecha_fin: "2025-04-21T19:30", inscriptos: 0 },
        { id: 18, nombre: "Jardinería", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-26T13:30", fecha_fin: "2025-04-26T18:00", inscriptos: 0 },
        { id: 19, nombre: "Palestra", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-27T11:00", fecha_fin: "2025-04-27T13:30", inscriptos: 0 },
        { id: 20, nombre: "Tirolesa", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-22T09:00", fecha_fin: "2025-04-22T12:30", inscriptos: 0 },
        { id: 21, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-28T08:30", fecha_fin: "2025-04-28T10:30", inscriptos: 0 },
        { id: 22, nombre: "Safari", cupos: 10, requiere_talla: true, fecha_inicio: "2025-05-02T11:00", fecha_fin: "2025-05-02T14:30", inscriptos: 0 },
        { id: 23, nombre: "Tirolesa", cupos: 10, requiere_talla: false, fecha_inicio: "2025-05-05T15:00", fecha_fin: "2025-05-05T18:00", inscriptos: 0 },
        { id: 24, nombre: "Palestra", cupos: 10, requiere_talla: true, fecha_inicio: "2025-05-09T09:00", fecha_fin: "2025-05-09T12:30", inscriptos: 0 },
        { id: 25, nombre: "Jardinería", cupos: 10, requiere_talla: true, fecha_inicio: "2025-05-12T10:30", fecha_fin: "2025-05-12T13:30", inscriptos: 0 },
        { id: 26, nombre: "Safari", cupos: 10, requiere_talla: false, fecha_inicio: "2025-05-15T14:00", fecha_fin: "2025-05-15T17:00", inscriptos: 0 },
        { id: 27, nombre: "Tirolesa", cupos: 10, requiere_talla: true, fecha_inicio: "2025-05-17T08:30", fecha_fin: "2025-05-17T11:30", inscriptos: 0 },
        { id: 28, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-05-20T09:00", fecha_fin: "2025-05-20T11:30", inscriptos: 0 },
        { id: 29, nombre: "Palestra", cupos: 10, requiere_talla: true, fecha_inicio: "2025-05-23T14:30", fecha_fin: "2025-05-23T18:00", inscriptos: 0 },
        { id: 30, nombre: "Safari", cupos: 10, requiere_talla: false, fecha_inicio: "2025-05-26T13:15", fecha_fin: "2025-05-26T16:45", inscriptos: 0 },
        { id: 31, nombre: "Tirolesa", cupos: 10, requiere_talla: true, fecha_inicio: "2025-05-29T11:00", fecha_fin: "2025-05-29T13:30", inscriptos: 0 },
        { id: 32, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-06-02T08:00", fecha_fin: "2025-06-02T10:00", inscriptos: 0 },
        { id: 33, nombre: "Safari", cupos: 10, requiere_talla: true, fecha_inicio: "2025-06-05T12:00", fecha_fin: "2025-06-05T14:30", inscriptos: 0 },
        { id: 34, nombre: "Palestra", cupos: 10, requiere_talla: false, fecha_inicio: "2025-06-08T14:30", fecha_fin: "2025-06-08T17:30", inscriptos: 0 },
        { id: 35, nombre: "Tirolesa", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-07T09:00:00Z", fecha_fin: "2025-04-07T11:00:00Z", inscriptos: 0 },
    { id: 36, nombre: "Safari", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-10T10:00:00Z", fecha_fin: "2025-04-10T13:00:00Z", inscriptos: 0 },
    { id: 37, nombre: "Palestra", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-11T14:00:00Z", fecha_fin: "2025-04-11T17:00:00Z", inscriptos: 0 },
    { id: 38, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-12T08:30:00Z", fecha_fin: "2025-04-12T10:30:00Z", inscriptos: 0 },
    { id: 39, nombre: "Safari", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-13T11:00:00Z", fecha_fin: "2025-04-13T14:30:00Z", inscriptos: 0 },
    { id: 40, nombre: "Tirolesa", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-14T15:00:00Z", fecha_fin: "2025-04-14T17:00:00Z", inscriptos: 0 },
    { id: 41, nombre: "Palestra", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-15T09:00:00Z", fecha_fin: "2025-04-15T11:30:00Z", inscriptos: 0 },
    { id: 42, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-16T10:30:00Z", fecha_fin: "2025-04-16T12:00:00Z", inscriptos: 0 },
    { id: 43, nombre: "Safari", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-17T13:00:00Z", fecha_fin: "2025-04-17T16:00:00Z", inscriptos: 0 },
    { id: 44, nombre: "Tirolesa", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-18T08:00:00Z", fecha_fin: "2025-04-18T09:30:00Z", inscriptos: 0 },
    { id: 45, nombre: "Jardinería", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-19T14:00:00Z", fecha_fin: "2025-04-19T17:00:00Z", inscriptos: 0 },
    { id: 46, nombre: "Palestra", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-20T16:00:00Z", fecha_fin: "2025-04-20T18:00:00Z", inscriptos: 0 },
    { id: 47, nombre: "Safari", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-21T12:00:00Z", fecha_fin: "2025-04-21T15:00:00Z", inscriptos: 0 },
    { id: 48, nombre: "Tirolesa", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-22T09:30:00Z", fecha_fin: "2025-04-22T12:00:00Z", inscriptos: 0 },
    { id: 49, nombre: "Jardinería", cupos: 10, requiere_talla: false, fecha_inicio: "2025-04-23T15:00:00Z", fecha_fin: "2025-04-23T17:30:00Z", inscriptos: 0 },
    { id: 50, nombre: "Palestra", cupos: 10, requiere_talla: true, fecha_inicio: "2025-04-24T13:30:00Z", fecha_fin: "2025-04-24T16:00:00Z", inscriptos: 0 }
    ]);
};


// inicializarDatosActividades();



 /* export async function vaciarTablaActividades() {
    try {
      await sequelize.sync();
      await Actividades.truncate();
      console.log('La tabla Actividades fue vaciada correctamente.');
    } catch (error) {
      console.error('Error al vaciar la tabla Actividades:', error);
    }
  }
vaciarTablaActividades() */