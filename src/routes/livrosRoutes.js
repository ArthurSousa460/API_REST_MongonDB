import express from "express";
import LivroController from "../controller/LivroController.js";


const router = express.Router();


router.get("/livros", LivroController.listarLivros);
router.get("/livros/:id", LivroController.buscarLivro);
router.post("/livros", LivroController.cadastrarLivro);
router.put("/livros/:id", LivroController.editarLivro);
router.delete("/livros/:id", LivroController.deletarLivro);



export default router;

