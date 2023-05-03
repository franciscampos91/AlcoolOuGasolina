const botao = document.querySelector('#btnCalcular');
const alcool = document.querySelector('#alcool');
const gasolina = document.querySelector('#gasolina');
const resultado = document.querySelector('#resultado');
const opcao = document.querySelector('#opcao');


botao.addEventListener("click", function () {

	let vAlcool= alcool.value;
    let vGasolina = gasolina.value;

    if (vAlcool == ""){
    	alert("Digite o valor do álcool");
    	return false;
    } else if (vGasolina == ""){
    	alert("Digite o valor da gasolina");
    	return false;
    }

    let media = vAlcool/vGasolina;

    media = media.toFixed(3);

    let melhor;
    if (media < 0.7){
    	melhor = "Álcool";
    } else {
    	melhor = "Gasolina"
    }

    resultado.innerText = "Resultado: " + media;
    opcao.innerText = "A melhor opção é " + melhor;

 });