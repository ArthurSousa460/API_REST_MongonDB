import mongoose from "mongoose"
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo : {type: String},
    editora :  {type: String},
    autor: autorSchema,
    paginas: {type: Number},
    preco :  {type: Number},


}, {versionKey: false});

const livro = mongoose.model("livro", livroSchema);


export default livro;