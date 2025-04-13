import {Visitantes} from "../database/visitantes.js";

export class GestorVisitantes {
    async obtener_visitantes(){
        return await Visitantes.findAll();
    }

    async buscar_visitante(id){
        return await Visitantes.findByPk(id)
    }

    async buscar_visitanteSinPk(dni){
        return await Visitantes.findOne({ where: { dni: dni } })
    }
    async crear_visitante(persona){
        return await Visitantes.create( {
            nombre: persona.nombre,
            dni: persona.dni,
            edad: persona.edad,
            talla_vestimenta: persona.talla_vestimenta || null 
        })
    }
}
