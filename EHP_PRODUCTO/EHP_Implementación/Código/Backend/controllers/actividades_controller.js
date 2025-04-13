import { Actividades } from "../database/actividades.js";

export class GestorActividades {
    async obtener_actividades(){
        return await Actividades.findAll();
    }
}