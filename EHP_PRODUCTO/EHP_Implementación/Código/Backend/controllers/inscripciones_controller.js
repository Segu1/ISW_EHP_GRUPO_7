// import { Inscripciones } from "../database/inscripciones.js";

import { Inscripcion } from "../database/inscripciones.js";

export class GestorInscripciones{
    async crear_inscripcion(id_visitante, id_actividad, terminos_condicion, fecha_inscripcion) {
        try {
            const nuevaInscripcion = await Inscripcion.create({
                id_visitante,
                id_actividad,
                terminos_condicion,
                fecha_inscripcion
            });
            // Devolver la inscripción creada
            return nuevaInscripcion; 
        } catch (error) {
            console.error("Error al guardar la inscripción:", error);
            throw new Error("Error al guardar la inscripción");
        }
    }
}