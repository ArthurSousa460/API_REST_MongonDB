import express from "express"
import connectOnDatabase from "./config/dbConnect.js";
import livroRouter from "./routes/livrosRoutes.js";
import autorRouter from "./routes/autorRoutes.js";


const conn = await connectOnDatabase();
conn.on("error", (err) =>{
    console.error("erro de conexão: ", err);
})


const app = express();
const port = 3000;
app.use(express.json());
app.use(livroRouter);
app.use(autorRouter)



app.listen(port, (err) =>{
    if(err){
        console.log(err);
    }
    console.log("Server running on address 127.0.0.1:3000")
})

