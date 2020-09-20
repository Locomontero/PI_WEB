const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs")
//MODEL

const Usuario = new Schema ({
	login:{
		type: String,
		required: true
	},
	password:{
		type: Number,
		required: true
	}
})
mongoose.model("usuarios", Usuario)
/*
//CRIANDO NOVO Usuario ADMIN
const novoUsuario = mongoose.model("usuarios")
	new novoUsuario ({
		login: "cliffjames",
		password:123456
	
	})
//HASHEANDO
	bcrypt.genSalt(10, (erro, salt)=>{
		bcrypt.hash(novoUsuario.password, salt,(erro, hash)=>{
			if () {

			}
		.save().then(()=>{
			console.log("Usuario salvo com sucesso!")

			}).catch((err)=>{
				console.log("Erro 404!")
			})
		})
	})
*/

