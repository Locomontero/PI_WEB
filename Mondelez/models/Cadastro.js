const mongoose = require("mongoose")
const Schema = mongoose.Schema
//MODEL
const Cadastro = new Schema({
	nome:{
		type: String,
		require: true
	},
	sobrenome:{
		type: String,
		require: true
	},
	telefone:{
		type: Number,
		require: true
	},
	email:{
		type: String,
		require: true
	},
	salario:{
		type: Number,
		require: true
	},
	turno:{
		type: String,
		require: true

	},
	matricula:{
		type: String,
		require: true
	},
	produto:{
		type: Schema.Types.ObjectId,
		ref: "produtos"
	}

})

mongoose.model("cadastros", Cadastro)

//CRIANDO NOVO Funcionario
const novo = mongoose.model("cadastros")
/*
	new novo ({
		nome: "John",
		sobrenome:"Doe",
		telefone:99999999,
		email:"johndoe@hotmail.com",
		salario:5000,
		turno:"Noite",
		matricula:"0001"
	}).save().then(()=>{
		console.log("Usuario criado com sucesso!")
	}).catch((err)=>{
		console.log("Houve um erro ao registrar o usuario!")
	})*/

