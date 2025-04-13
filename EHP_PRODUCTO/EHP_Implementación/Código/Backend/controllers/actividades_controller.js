import { Actividades } from "../database/actividades.js";

export class GestorActividades {
    async obtener_actividades(){
        return await Actividades.findAll();
    }

    async buscar_actividad(id){
            return await Actividades.findByPk(id)
        }

    async actualizar_inscriptos(id_actividad, inscriptos){
        try {
            const actividad = await Actividades.findByPk(id_actividad);
            if (!actividad) {
                throw new Error("Actividad no encontrada");
            }
            actividad.inscriptos = inscriptos;
            await actividad.save();
            return actividad;
        } catch (error) {
            console.error("Error al actualizar inscriptos:", error);
            throw new Error("Error al actualizar inscriptos");
        }
    }
}