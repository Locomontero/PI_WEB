const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Cadastro")
const Cadastro = mongoose.model("cadastros")
require("../models/Produto")
const Produto = mongoose.model("produtos")
require("../models/Carrinho")
const Carrinho = mongoose.model("carrinhos")


//LOGIN_USER
router.get('/',(req,res)=>{
	res.render('usuario/loginUsuario')
	
})

//STORE LOJA PRINCIPAL:::
router.get('/store',(req,res)=>{
	Produto.find().sort({product: 'desc'}).lean().then((produtos)=>{
		res.render('usuario/store2', {produtos: produtos})
	}).catch((err)=>{
		console.log("erro!")
	})

})

//CARRRINHO DE COMPRAS
router.get('/store/cart/:id', (req,res)=>{
	Produto.findOne({_id:req.params.id}).then((produtos)=>{
		res.render('usuario/cart', {produtos: produtos})
	}).catch((err)=>{
		alert("Erro ao achar produto!")
		res.redirect("/usuario/store2")
	}) 

})
//PERFIL
router.get('/store/profile',(req,res)=>{
	Cadastro.find().populate("produtos").lean().then((cadastros)=>{
		res.render('usuario/profile', {cadastros: cadastros})
	}).catch((err)=>{
		alert("Erro ao puxar usuario!")
	})

})
//PAGINA SUCESSO
router.post('/store/cart/efetuado', (req, res)=>{
	res.render("usuario/efetuado")
})

//SAIR
router.get('/store/logout',(req,res)=>{
	res.redirect('/usuario')
})




module.exports =router