import cors from "cors";
import express from "express";
import { config } from "dotenv";
import { sequelize } from "./database/database.js";
import { GestorActividades } from "./controllers/actividades_controller.js";
import { routerActividades } from "./routes/actividades_routes.js";

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

await sequelize.sync();

export const gestorActividades = new GestorActividades();

app.get('/', (req, res) => {
  res.send('¡Testing!');
});


app.use('/actividades', routerActividades);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});