const express = require("express")
const router = express.Router()
const mongoose = require('mongoose') //carrega o Mongoose
require("../models/Cadastro") //Entra na pasta de Funcionarios Cadastrados do banco
const Cadastro = mongoose.model("cadastros")
require("../models/Usuario") //****Entra na pasta ADMIN LOGIN SENHA
const Usuario = mongoose.model("usuarios")
require("../models/Carrinho") //****CART
const Carrinho = mongoose.model("carrinhos")

//CARREGAR ROTAS
router.get('/',(req,res)=>{
	res.render("admin/login")
})

router.post('/',(req,res)=>{      
				res.render("admin/consultas")
			
})

router.get('/consultas',(req,res)=>{
	Produto.find().lean().then((produtos)=>{
		res.render("admin/consultas", {produtos: produtos})
	})
	
})


router.get('/pedidos', (req,res)=>{
	Produto.find().lean().then((produtos)=>{
		res.render("admin/pedidos", {produtos: produtos})
	})
	
})


router.get('/funcionarios', (req,res)=>{
	Cadastro.find().lean().then((cadastros)=>{
		res.render("admin/funcionarios", {cadastros: cadastros})
	}).catch((err)=>{
		req.flash("error_msg", "Houve um erro!")
		res.redirect("admin/consultas")
	})
})



module.exports = router
