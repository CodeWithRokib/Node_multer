import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import userRoutes from "./src/routes/userRoute.js";
import productRouters from "./src/routes/productRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));



app.use('/api/v1',userRoutes);
app.use('/api/v1',productRouters);


export default app;