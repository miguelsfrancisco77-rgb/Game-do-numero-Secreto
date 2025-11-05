let listaDoNumerosEscolhidos = [];
let NumeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
 let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste.");
 }
}
function mensagemInicial(){
exibirTextoNaTela('h1', 'Game do numero Secreto') ;
exibirTextoNaTela('p', `Escolha um numero de 1 a ${NumeroMaximo}`);
}
mensagemInicial();
function verificarChute(){
  let chute = document.querySelector('input').value;
  let palavratentativas = tentativas > 1? 'tentativas' : 'tentativa';
  let mensagemTentativas = `Você acertou o Numero Secreto com ${tentativas} ${palavratentativas} `;
   if(chute == numeroSecreto){
     exibirTextoNaTela('h1','Ah eee, Acertou!');
     exibirTextoNaTela('p',mensagemTentativas);
     document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
     if(chute > numeroSecreto){
     exibirTextoNaTela('p','O numero secreto é menor');
   } if(chute < numeroSecreto){
     exibirTextoNaTela('p','O numero secreto é maior!');
   }
   tentativas++;
   limparCampo();
  }
}
function gerarNumeroAleatorio(){
 numeroEscolhido = parseInt(Math.random() * NumeroMaximo + 1);
 let quantidadeDeElementisNaLista = listaDoNumerosEscolhidos.length;
 if(quantidadeDeElementisNaLista == NumeroMaximo){
   listaDoNumerosEscolhidos = [];
 }
 if(listaDoNumerosEscolhidos.includes(numeroEscolhido)){
   return gerarNumeroAleatorio();
 } else {listaDoNumerosEscolhidos.push(numeroEscolhido);
 console.log(listaDoNumerosEscolhidos);
 return numeroEscolhido;
 }
} 

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = ''
}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  mensagemInicial();
  limparCampo();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}