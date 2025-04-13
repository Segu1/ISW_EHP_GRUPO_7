import pkg from "express";
import { Router } from "express";
import { gestorActividades } from "../index.js";

export const routerActividades = Router();

routerActividades.get("/", async (req, res) => {
    const datosActividades = await gestorActividades.obtener_actividades();
    if (datosActividades){
        res.status(200).json(datosActividades);
    } else {
        res.status(500).send("Error!")
    }
});