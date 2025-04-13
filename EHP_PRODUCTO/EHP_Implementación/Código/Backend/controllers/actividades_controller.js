import { Actividades } from "../database/actividades.js";

export class GestorActividades {
    async obtener_actividades(){
        return await Actividades.findAll();
    }

    async buscar_actividad(id){
            return await Actividades.findByPk(id)
        }
}