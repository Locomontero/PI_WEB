//Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
const app = express()
const admin = require("./routes/admin")
const usuario = require("./routes/usuario")
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

//CONFIG
 //Sessao
	app.use(session({
		secret: "projetoWebPi",
		resave: true,
		saveUninitialized: true
	}))
	app.use(flash())
 //Middleweare
	app.use((req,res,next)=>{
		res.locals.success_msg = req.flash("success_msg")
		res.locals.error_msg = req.flash("error_msg")
		next()
	})
 //Body Parser
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())
 //template engine
	app.engine('handlebars', handlebars({defaultLayout: 'main'}))
	app.set('view engine','handlebars')
 //mongoose
 	mongoose.Promise = global.Promise
 	mongoose.connect('mongodb://localhost/projetoweb').then(()=>{
 		console.log('Conectado ao mongo')
 	}).catch((err)=>{
 		console.log('Erro ao conectar'+err)
 	})
 //Routes
	app.use('/usuario', usuario)
	app.use('/admin', admin)
 //Public
	app.use(express.static(path.join(__dirname,"public")))


	

 //Outros
const PORT = 8081
 app.listen(PORT,()=> {
 	console.log("Servidor rodando na url")
 })