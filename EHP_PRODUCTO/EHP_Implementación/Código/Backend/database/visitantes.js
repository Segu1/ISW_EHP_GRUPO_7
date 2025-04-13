import { sequelize } from "./database.js";
import { DataTypes } from "sequelize";


export const Visitantes = sequelize.define('Visitantes', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    dni: {type:DataTypes.INTEGER},
    edad: { type: DataTypes.INTEGER },
    talla_vestimenta: {type: DataTypes.STRING}
},{
    tableName: 'Visitantes',
    timestamps: false
});

// Establecer la relación un visitante a muchas incripciones
//Visitantes.hasMany(Inscripcion, { foreignKey: 'id' });
//Inscripcion.belongsTo(Visitantes, { foreignKey: 'id' });



// Inicializar los datos del visitante
export async function inicializarDatosVisitante() {
    await sequelize.sync()
    await Visitantes.truncate()
    await Visitantes.bulkCreate([
        {id: 1, nombre: "Gonza", dni: 41798767, edad: 23, talla_vestimenta:"S"},
        {id: 2, nombre: "Lucía", dni: 40123456, edad: 27, talla_vestimenta: "M"},
        {id: 3, nombre: "Pedro", dni: 40234567, edad: 35, talla_vestimenta: "L"},
        {id: 4, nombre: "María", dni: 40345678, edad: 22, talla_vestimenta: "S"},
        {id: 5, nombre: "Juan", dni: 40456789, edad: 30, talla_vestimenta: "M"},
        {id: 6, nombre: "Ana", dni: 40567890, edad: 26, talla_vestimenta: "S"},
        {id: 7, nombre: "Roberto", dni: 40678901, edad: 4, talla_vestimenta: "XL"},
        {id: 8, nombre: "Elena", dni: 40789012, edad: 3, talla_vestimenta: "M"},
        {id: 9, nombre: "Carlos", dni: 40890123, edad: 5, talla_vestimenta: "S"},
        {id: 10, nombre: "Sofía", dni: 40901234, edad: 10, talla_vestimenta: "M"},
        {id: 11, nombre: "Luis", dni: 41012345, edad: 45, talla_vestimenta: "L"},
        {id: 12, nombre: "Valeria", dni: 41123456, edad: 31, talla_vestimenta: "M"},
        {id: 13, nombre: "Nicolás", dni: 41234567, edad: 18, talla_vestimenta: "S"},
        {id: 14, nombre: "Cecilia", dni: 41345678, edad: 29, talla_vestimenta: "M"},
        {id: 15, nombre: "Esteban", dni: 41456789, edad: 34, talla_vestimenta: "L"},
        {id: 16, nombre: "Martina", dni: 41567890, edad: 25, talla_vestimenta: "S"},
        {id: 17, nombre: "Ángel", dni: 41678901, edad: 38, talla_vestimenta: "M"},
        {id: 18, nombre: "Camila", dni: 41789012, edad: 20, talla_vestimenta: "XS"},
        {id: 19, nombre: "Ramiro", dni: 41890123, edad: 32, talla_vestimenta: "L"},
        {id: 20, nombre: "Florencia", dni: 41901234, edad: 24, talla_vestimenta: "S"},
        {id: 21, nombre: "Diego", dni: 42012345, edad: 36, talla_vestimenta: "XL"}
        ]
    )
};