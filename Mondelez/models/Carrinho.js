const mongoose = require("mongoose")
const Schema = mongoose.Schema

//MODEL
const Carrinho = new Schema ({
	produto:{
		type: Schema.Types.ObjectId,
		ref: "produtos",
		required: true
	},
	cadastro:{
		type: Schema.Types.ObjectId,
		ref: "cadastros",
		required: true
	},
	quantidade:{
		type: Number,
		require: true
		
	},
	vtotal:{
		type:Number,
		require: true
		
	},
	data:{
		type: Date,
		default: Date.now()
	}
})

mongoose.model("carrinhos", Carrinho)



