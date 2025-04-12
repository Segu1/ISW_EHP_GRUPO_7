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



const gestorVisitantes = new GestorVisitantes();
const gestorActividades = new GestorActividades();



routerInscripciones.post('/', async (req, res) => {
    const { id_inscripcion, id_visitante, id_actividad, terminos_condicion, fecha_inscripcion } = req.body;
  
    const errores = [];

    const visitanteExiste = await gestorVisitantes.buscar_visitante(id_visitante);
    if (!visitanteExiste) {
      errores.push("ID de visitante no valido");
    }
  
    // Validacion de id_actividad
    const actividadExiste = await gestorActividades.buscar_actividad(id_actividad);
    if (!actividadExiste) {
      errores.push("ID de actividad no valido");
    }
  
    // validacion de terminos
    if (terminos_condicion !== true) {
      errores.push("Debes aceptar los terminos y condiciones para inscribirte");
    }
  
    // Validacon de fecha_inscripcion
    const fecha = new Date(fecha_inscripcion);
    const hoy = new Date();
  
    if (isNaN(fecha.getTime())) {
      errores.push("Fecha de inscripcion invalida");
    } else if (fecha > hoy) {
      errores.push("La fecha de inscripción no puede estar en el futuro");
    }
  
    // Si hay errores 
    if (errores.length > 0) {
      return res.status(400).json({ errores });
    }
  
   

    try {
        const nuevaInscripcion = await gestorInscripciones.crear_inscripcion(
            id_visitante, id_actividad, terminos_condicion, fecha_inscripcion
        );
        res.status(201).json(nuevaInscripcion); // Enviar la inscripción creada como respuesta
    } catch (error) {
        res.status(500).json({ error: error.message || "Error al guardar la inscripción" });
    }
  });
  