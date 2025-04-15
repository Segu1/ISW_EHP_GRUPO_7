import { sequelize } from "./database.js";
import { DataTypes } from "sequelize";
import { Inscripcion } from "./inscripciones.js";


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
Visitantes.hasMany(Inscripcion, { foreignKey: 'id_visitante' });
Inscripcion.belongsTo(Visitantes, { foreignKey: 'id_visitante' });



export async function inicializarDatosVisitante() {
  await sequelize.sync()
  await Visitantes.truncate()
  await Visitantes.bulkCreate([
      {id: 1, nombre: "Gonzalo", dni: 41798767, edad: 23, talla_vestimenta: "S"},
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
      {id: 21, nombre: "Diego", dni: 42012345, edad: 36, talla_vestimenta: "XL"},
      {id: 22, nombre: "Martín", dni: 55891953, edad: 30, talla_vestimenta: "XL"},
      {id: 23, nombre: "Marta", dni: 42811314, edad: 17, talla_vestimenta: "XL"},
      {id: 24, nombre: "Andrés", dni: 59382148, edad: 34, talla_vestimenta: "S"},
      {id: 25, nombre: "Teresa", dni: 40317938, edad: 15, talla_vestimenta: "M"},
      {id: 26, nombre: "Felipe", dni: 44367316, edad: 19, talla_vestimenta: "M"},
      {id: 27, nombre: "Victoria", dni: 29827952, edad: 4, talla_vestimenta: "M"},
      {id: 28, nombre: "Juliana", dni: 38260352, edad: 13, talla_vestimenta: "XS"},
      {id: 29, nombre: "Juan Carlos", dni: 59684397, edad: 34, talla_vestimenta: "XL"},
      {id: 30, nombre: "Martina", dni: 42859022, edad: 17, talla_vestimenta: "XL"},
      {id: 31, nombre: "Simona", dni: 48721291, edad: 25, talla_vestimenta: "M"},
      {id: 32, nombre: "Luciana", dni: 55763427, edad: 30, talla_vestimenta: "S"},
      {id: 33, nombre: "Ricardo", dni: 46015378, edad: 28, talla_vestimenta: "L"},
      {id: 34, nombre: "Julio", dni: 53581247, edad: 32, talla_vestimenta: "M"},
      {id: 35, nombre: "Gabriela", dni: 59318921, edad: 40, talla_vestimenta: "S"},
      {id: 36, nombre: "Federico", dni: 50761962, edad: 35, talla_vestimenta: "XL"},
      {id: 37, nombre: "Joaquín", dni: 41257860, edad: 27, talla_vestimenta: "M"},
      {id: 38, nombre: "Santiago", dni: 48967132, edad: 30, talla_vestimenta: "M"},
      {id: 39, nombre: "Claudia", dni: 57283459, edad: 35, talla_vestimenta: "L"},
      {id: 40, nombre: "Paula", dni: 55291774, edad: 31, talla_vestimenta: "M"},
      {id: 41, nombre: "Emilio", dni: 57128396, edad: 34, talla_vestimenta: "XL"},
      {id: 42, nombre: "Inés", dni: 51028395, edad: 30, talla_vestimenta: "S"},
      {id: 43, nombre: "Javier", dni: 54781236, edad: 27, talla_vestimenta: "M"},
      {id: 44, nombre: "Diego", dni: 50382915, edad: 22, talla_vestimenta: "L"},
      {id: 45, nombre: "Laura", dni: 56348217, edad: 33, talla_vestimenta: "M"},
      {id: 46, nombre: "Ana María", dni: 58026371, edad: 38, talla_vestimenta: "XL"},
      {id: 47, nombre: "Martín", dni: 49573620, edad: 32, talla_vestimenta: "M"},
      {id: 48, nombre: "Beatriz", dni: 56329546, edad: 29, talla_vestimenta: "L"},
      {id: 49, nombre: "Sofía", dni: 54173211, edad: 28, talla_vestimenta: "S"},
      {id: 50, nombre: "Antonio", dni: 50729451, edad: 26, talla_vestimenta: "M"}
  ])
};




// inicializarDatosVisitante()


/*export async function inicializarTablaVisitanteVacia() {
    try {
      await sequelize.sync();
      await Visitantes.truncate();
      console.log('La tabla Visitantes fue vaciada correctamente.');
    } catch (error) {
      console.error('Error al vaciar la tabla Visitantes:', error);
    }
  }
inicializarTablaVisitanteVacia()  */ 