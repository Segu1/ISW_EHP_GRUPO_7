import {Visitantes} from "../database/visitantes.js";

export class GestorVisitantes {
    async obtener_visitantes(){
        return await Visitantes.findAll();
    }
}