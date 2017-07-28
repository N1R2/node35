//rotas do servidor
var server = require("../config-server")
var getConnection = require("../model/bd/connectionFactory")
var ProdutoDAO = require("../model/bd/produtoDAO")
server.get("/produtos/lista", function(req,res){
    var conexao = getConnection()
    var produtoDAO = ProdutoDAO(conexao)
    produtoDAO.pegaLivros(function(error, lista){   
        if(!error){
            res.format({
            html: function(){
               res.render("produtos/lista", {
                    livros : lista,
                    msgErro : ""
               })
            }
            ,json: function(){
                res.send(lista)    
            }
            })
            }else{
               res.render("produtos/lista", {
                    livros : [],
                    msgErro : "DEU RUIM!"
               })
            }
        })     
    })

    server.get("/produtos/form", function(req,res){
        res.render("produtos/form", {
            validationErrors:[]
        })
    })

    server.post("/produtos", function(req, res){
        var conexao = getConnection()
        var produtoDAO = ProdutoDAO(conexao)
        console.log(req.body)
        var livro = req.body
        produtoDAO.salvaLivro(livro, function(error, resultado){
            
            if(!error){
                res.send("FOI")
            }else{
                res.send(error)
                }
            })           
        })
    
