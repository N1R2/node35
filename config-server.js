//configuracao do servidor
console.log("Configurando o Servidor");
var express = require("express")
var server = express()
server.set("view engine", "ejs")
server.use(express.static("./public"))
var bodyParser = require("body-parser")
server.use(bodyParser.urlencoded())

module.exports = server


//server.use(bodyParser.json())

// cod do bodyparser

// Middleware ou interceptor ou filter

// var querystring = require("querystring")
// server.use(function(req, res, next){
//     req.body = ""
//     req.on("data", function(chunk){
//         console.log("Chegou " + chunk)
//         req.body = req.body + chunk
//     })
//     req.on("end", function(){  
//     req.body = querystring.parse(req.body)
//     next()
//     })
// })
