
function pesquisar(){
	var texto= document.getElementById('texto').value
	var lista= document.getElementById('historico')
	var adicionar= true

	var opt= document.createElement('option')  //responsavel criar elementos do tipo option

	for (i=0; i<lista.options.length; i++) {
		if (texto==lista.options[i].value) {
			adicionar = false                  //Se ja existir nao vai adicionar!
		}
	}
	if (adicionar == true) {
		opt.value= texto 
		lista.appendChild(opt)
	}

	texto.value=''
}

function carrinho(){
	var produto = document.getElementById('produto')
	var qtd = document.getElementById('qtd')
	var btn = document.getElementById('btn')
	var adicionar = true

	if (btn == adicionar) {
		adicionar=true
		qtd++
	}
}