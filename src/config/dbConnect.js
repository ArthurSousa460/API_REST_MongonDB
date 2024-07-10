import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectOnDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Conexão com o banco bem sucedida");
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
    return mongoose.connection;
};


export default connectOnDatabase;

