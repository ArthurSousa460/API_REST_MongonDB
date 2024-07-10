import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";


class LivroController{
    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch(err){
            res.status(500).json({message: `erro - ${err.message}`});
        }
        
    }

    static async buscarLivro(req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch(err){
            res.status(500).json({message: `erro - ${err.message}`});
        }
        
    }

    static async cadastrarLivro(req, res){
        const novoLivro = req.body;
        try{
            const autorEncontrado =  await autor.findById(novoLivro.autor);
            if(!autorEncontrado){
                res.status(404).json({menssge: "Not found"})
            }
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Objeto criado com sucesso", livro: livroCompleto});
        }catch(err){
            res.status(500).json({message: `erro: ${err.message}`});
        }
    }

    static async editarLivro(req, res){
        try{
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Objeto atualizado com sucesso", livro: livroAtualizado})
        }catch(err){
            res.status(500).json({message: `erro: ${err.message}`})
        }
    }

    static async deletarLivro(req, res){
        try{
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Objeto deletado com sucesso", livro: livroAtualizado})
        }catch(err){
            res.status(500).json({message: `erro: ${err.message}`})
        }
    }
}

export default LivroController;