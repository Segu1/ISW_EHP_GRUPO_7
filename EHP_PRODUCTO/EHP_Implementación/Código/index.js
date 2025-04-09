import cors from "cors";
import express from "express";
import { config } from "dotenv";

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Testing!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});