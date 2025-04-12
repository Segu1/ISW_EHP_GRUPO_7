import pkg from "express";
import { Router } from "express";
import { gestorInscripciones } from "../index.js";
import { GestorInscripciones } from "../controllers/inscripciones_controller.js";
import { Visitantes } from "../database/visitantes.js";
import { Actividades } from "../database/actividades.js";
import { GestorVisitantes } from "../controllers/visitantes_controller.js";
import { GestorActividades } from "../controllers/actividades_controller.js";
import { Inscripcion } from "../database/inscripciones.js";

export const routerInscripciones = Router();


routerInscripciones.post('/', async (req, res) => {
  const actividadId = parseInt(req.body.id.id);
  const personas = req.body.personas;

  const gestorVisitantes = new GestorVisitantes();
  const gestorActividades = new GestorActividades();
  const gestorInscripciones = new GestorInscripciones();

  const errores = [];

  // actividad existe?
  const actividadExiste = await gestorActividades.buscar_actividad(actividadId);
  if (!actividadExiste) {
    return res.status(400).json({ error: "Actividad no válida" });
  }

  for (const persona of personas) {
    try {
      const talla = persona.talla || null;
      let visitante = await gestorVisitantes.buscar_visitanteSinPk(persona.dni);

      if (!visitante) {
        // Crear visitante
        visitante = await gestorVisitantes.crear_visitante({
          nombre: persona.nombre,
          dni: persona.dni,
          edad: persona.edad,
          talla_vestimenta: talla  
        });
      }

      // Validar si esta inscripto (no hace TANTA falta.)
      const yaInscripto = await gestorInscripciones.buscar_inscripcionSinPk(visitante.id, actividadId)
     

      if (!yaInscripto) {
        // Crear inscripcin
        const hoy = new Date();
        await gestorInscripciones.crear_inscripcion(
          visitante.id,
          actividadId,
          true,
          hoy.toISOString().split("T")[0] // formato YYYY-MM-DD
        );
      }

    } catch (error) {
      console.error("Error procesando persona:", persona, error);
      errores.push(`Error con el visitante DNI ${persona.dni}`);
    }
  }

  if (errores.length > 0) {
    return res.status(207).json({ mensaje: "Algunos visitantes no se pudieron procesar", errores });
  } else {
    return res.status(201).json({ mensaje: "Inscripciones completadas con éxito" });
  }
});






// const gestorVisitantes = new GestorVisitantes();
// const gestorActividades = new GestorActividades();



// routerInscripciones.post('/', async (req, res) => {

 
//     const { id_inscripcion, id_visitante, id_actividad, terminos_condicion, fecha_inscripcion } = req.body;
//   //color fecha yo al momento del post
//     const errores = [];

//     const visitanteExiste = await gestorVisitantes.buscar_visitante(id_visitante);
//     if (!visitanteExiste) {
//       errores.push("ID de visitante no valido");
//     }
    
  
//     // Validacion de id_actividad
//     const actividadExiste = await gestorActividades.buscar_actividad(id_actividad);
//     if (!actividadExiste) {
//       errores.push("ID de actividad no valido");
//     }
  
//     // validacion de terminos
//     if (terminos_condicion !== true) {
//       errores.push("Debes aceptar los terminos y condiciones para inscribirte");
//     }
  
//     // Validacon de fecha_inscripcion
//     const fecha = new Date(fecha_inscripcion);
//     const hoy = new Date();
  
//     if (isNaN(fecha.getTime())) {
//       errores.push("Fecha de inscripcion invalida");
//     } else if (fecha > hoy) {
//       errores.push("La fecha de inscripción no puede estar en el futuro");
//     }
  
//     // Si hay errores 
//     if (errores.length > 0) {
//       return res.status(400).json({ errores });
//     }
  
   

//     try {
//         const nuevaInscripcion = await gestorInscripciones.crear_inscripcion(
//             id_visitante, id_actividad, terminos_condicion, fecha_inscripcion
//         );
//         res.status(201).json(nuevaInscripcion); // Enviar la inscripción creada como respuesta
//     } catch (error) {
//         res.status(500).json({ error: error.message || "Error al guardar la inscripción" });
//     }
//   });
  