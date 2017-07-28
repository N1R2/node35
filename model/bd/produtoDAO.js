function ProdutoDAO(conexao){
   return {
    pegaLivros: function pegaLivros(callback){ 
    conexao.query("SELECT * FROM livros", callback)
    }
        ,salvaLivro: function(livro, cb){
            // EXECUTA O CALLBACK PARA TESTE ANTES DE SALVAR NO BANCO cb()
            conexao.query(
                "INSERT INTO livros SET ?", livro, cb
            )
        }
    }
}
 
module.exports = ProdutoDAO

// outra forma de fazer

// class criaProdutoDAO {
//     constructor(conexao){
//         //fazer alguma coisa com a conexao
//     }
//     pegaLivros(callback){
//         this.conexao.query("SELECT * FROM livros", callback)
//     }
// }
