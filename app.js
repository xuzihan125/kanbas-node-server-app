import express from 'express';
import "dotenv/config";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
const app = express()
app.use(cors());
CourseRoutes(app);
ModuleRoutes(app);
app.use(express.json());
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
Hello(app);
Lab5(app);
app.listen(4000)