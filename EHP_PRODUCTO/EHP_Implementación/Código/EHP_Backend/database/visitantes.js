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
      {id: 50, nombre: "Antonio", dni: 50729451, edad: 26, talla_vestimenta: "M"},
      { id: 51, nombre: "Javier", dni: 52345678, edad: 18, talla_vestimenta: "L" },
      { id: 52, nombre: "Daniela", dni: 35678901, edad: 42, talla_vestimenta: "S" },
      { id: 53, nombre: "Martín", dni: 48901234, edad: 25, talla_vestimenta: "M" },
      { id: 54, nombre: "Carolina", dni: 31234567, edad: 48, talla_vestimenta: "XS" },
      { id: 55, nombre: "Esteban", dni: 55678901, edad: 15, talla_vestimenta: "XL" },
      { id: 56, nombre: "Florencia", dni: 42345678, edad: 29, talla_vestimenta: "S" },
      { id: 57, nombre: "Ignacio", dni: 38901234, edad: 37, talla_vestimenta: "M" },
      { id: 58, nombre: "Valentina", dni: 51234567, edad: 20, talla_vestimenta: "L" },
      { id: 59, nombre: "Alejandro", dni: 36789012, edad: 40, talla_vestimenta: "S" },
      { id: 60, nombre: "Camila", dni: 45678901, edad: 27, talla_vestimenta: "M" },
      { id: 61, nombre: "Federico", dni: 32345678, edad: 46, talla_vestimenta: "L" },
      { id: 62, nombre: "Agustina", dni: 58901234, edad: 12, talla_vestimenta: "XS" },
      { id: 63, nombre: "Nicolás", dni: 41234567, edad: 31, talla_vestimenta: "M" },
      { id: 64, nombre: "Brenda", dni: 37890123, edad: 39, talla_vestimenta: "S" },
      { id: 65, nombre: "Joaquín", dni: 54567890, edad: 16, talla_vestimenta: "XL" },
      { id: 66, nombre: "Luciana", dni: 43456789, edad: 28, talla_vestimenta: "S" },
      { id: 67, nombre: "Sebastián", dni: 39012345, edad: 36, talla_vestimenta: "M" },
      { id: 68, nombre: "Micaela", dni: 50123456, edad: 21, talla_vestimenta: "L" },
      { id: 69, nombre: "Thiago", dni: 35678901, edad: 42, talla_vestimenta: "S" },
      { id: 70, nombre: "Antonella", dni: 47890123, edad: 26, talla_vestimenta: "M" },
      { id: 71, nombre: "Ramiro", dni: 33456789, edad: 44, talla_vestimenta: "L" },
      { id: 72, nombre: "Sofía", dni: 59012345, edad: 11, talla_vestimenta: "XXL" },
      { id: 73, nombre: "Mateo", dni: 40123456, edad: 32, talla_vestimenta: "S" },
      { id: 74, nombre: "Julieta", dni: 36789012, edad: 40, talla_vestimenta: "M" },
      { id: 75, nombre: "Benjamín", dni: 53456789, edad: 17, talla_vestimenta: "XL" },
      { id: 76, nombre: "Martina", dni: 44567890, edad: 27, talla_vestimenta: "S" },
      { id: 77, nombre: "Lucas", dni: 38901234, edad: 37, talla_vestimenta: "M" },
      { id: 78, nombre: "Emilia", dni: 52345678, edad: 19, talla_vestimenta: "L" },
      { id: 79, nombre: "Agustín", dni: 34567890, edad: 43, talla_vestimenta: "S" },
      { id: 80, nombre: "Catalina", dni: 49012345, edad: 24, talla_vestimenta: "M" },
      { id: 81, nombre: "Manuel", dni: 31234567, edad: 48, talla_vestimenta: "L" },
      { id: 82, nombre: "Olivia", dni: 60000000, edad: 10, talla_vestimenta: "XS" },
      { id: 83, nombre: "Santino", dni: 42345678, edad: 29, talla_vestimenta: "M" },
      { id: 84, nombre: "Victoria", dni: 37890123, edad: 39, talla_vestimenta: "S" },
      { id: 85, nombre: "Lautaro", dni: 55678901, edad: 15, talla_vestimenta: "XL" },
      { id: 86, nombre: "Guadalupe", dni: 43456789, edad: 28, talla_vestimenta: "S" },
      { id: 87, nombre: "Felipe", dni: 39012345, edad: 36, talla_vestimenta: "M" },
      { id: 88, nombre: "Abril", dni: 51234567, edad: 20, talla_vestimenta: "L" },
      { id: 89, nombre: "Joaquín", dni: 36789012, edad: 40, talla_vestimenta: "S" },
      { id: 90, nombre: "Alma", dni: 46789012, edad: 26, talla_vestimenta: "M" },
      { id: 91, nombre: "Bautista", dni: 32345678, edad: 46, talla_vestimenta: "L" },
      { id: 92, nombre: "Emma", dni: 58901234, edad: 12, talla_vestimenta: "XXL" },
      { id: 93, nombre: "Vicente", dni: 41234567, edad: 31, talla_vestimenta: "S" },
      { id: 94, nombre: "Josefina", dni: 38901234, edad: 37, talla_vestimenta: "M" },
      { id: 95, nombre: "Simón", dni: 54567890, edad: 16, talla_vestimenta: "XL" },
      { id: 96, nombre: "Elena", dni: 44567890, edad: 27, talla_vestimenta: "S" },
      { id: 97, nombre: "Tomás", dni: 39012345, edad: 36, talla_vestimenta: "M" },
      { id: 98, nombre: "Francesca", dni: 50123456, edad: 21, talla_vestimenta: "L" },
      { id: 99, nombre: "Benicio", dni: 35678901, edad: 42, talla_vestimenta: "S" },
      { id: 100, nombre: "Guadalupe", dni: 47890123, edad: 25, talla_vestimenta: "M" }
    ])
};




// inicializarDatosVisitante()


/* export async function inicializarTablaVisitanteVacia() {
    try {
      await sequelize.sync();
      await Visitantes.truncate();
      console.log('La tabla Visitantes fue vaciada correctamente.');
    } catch (error) {
      console.error('Error al vaciar la tabla Visitantes:', error);
    }
  }
inicializarTablaVisitanteVacia() */