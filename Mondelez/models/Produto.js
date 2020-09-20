const mongoose = require("mongoose")
const Schema = mongoose.Schema
//MODEL
const Produto = new Schema({
	product:{
		type:String,
		require:true
	},
	description:{
		type:String,
		require:true
	},
	value:{
		type: Number,
		require:true
	},
	qtd:{
		type: Number
	}
})

//Collection
mongoose.model("produtos", Produto)
/*
const novoProduto = mongoose.model("produtos")

	new novoProduto ({
		product:"Barra de chocolate",
		description:"Lacta 90G",
		value: 3
	}).save().then(()=>{
		console.log("Produto criado com sucesso!")
	}).catch((err)=>{
		console.log("Houve um erro ao registrar o Produto!")
	})
*/