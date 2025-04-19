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

  // Validar cupos disponibles

  const cantidadInscriptos = await gestorInscripciones.contar_inscriptos(actividadId);
  const cuposDisponibles = actividadExiste.cupos - cantidadInscriptos;
  
  console.log("Cupos disponibles y actividad ID:", cuposDisponibles, actividadId);

  if (cuposDisponibles <= 0 || cantidadInscriptos >= actividadExiste.cupos) {
    return res.status(409).json({ error: "No hay más cupos disponibles para esta actividad" });
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

      // Validar si esta inscripto 
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

  // Actualizar la cantidad de inscriptos en la actividad
  const nuevosInscriptos = await gestorInscripciones.contar_inscriptos(actividadId);
  await gestorActividades.actualizar_inscriptos(actividadId, nuevosInscriptos);

  if (errores.length > 0) {
    return res.status(207).json({ mensaje: "Algunos visitantes no se pudieron procesar", errores });
  } else {
    return res.status(201).json({ mensaje: "Inscripciones completadas con éxito" });
  }
});


