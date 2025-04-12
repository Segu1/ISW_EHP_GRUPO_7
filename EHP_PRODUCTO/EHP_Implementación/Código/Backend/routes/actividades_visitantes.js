import pkg from "express";
import { Router } from "express";
import { gestorVisitantes } from "../index.js";

export const routerVisitantes = Router();

routerVisitantes.get("/", async (req, res) => {
    const datosVisitantes = await gestorVisitantes.obtener_visitantes();
    if (datosVisitantes){
        res.status(200).json(datosVisitantes);
    } else {
        res.status(500).send("Error!")
    }
});