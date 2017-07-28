var server = require("./config-server")

require("./routes/produtos")
//levanto o servidor
server.listen(3000, "localhost", function(){
    console.log("Foiiiiii");
})


