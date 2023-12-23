import app from "./app.js";
import dotenv from 'dotenv';
import dbConnect from "./src/config/db.js";

//env file connected
dotenv.config({path:'../server/src/config/.env'});


//db connection
dbConnect();

//listen
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`.bgGray)
})


