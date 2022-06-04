import * as express from 'express';
import { exampleRoutes } from "./routes/example.routes";
// Instanciando o Express
const app = express();


// Adicionando suporte ao application/json post data
app.use(express.json());
// Adicionando suporte ao application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: false }));


// Routes
app.use("/welcome", exampleRoutes);

// Porta que o node irá escutar
app.listen(3333, () => console.log("Server is running"));