document.addEventListener("DOMContentLoaded", () => {

const mensagens = document.getElementById("mensagens");
const texto = document.getElementById("texto");
const enviar = document.getElementById("enviar");

const contatos = document.querySelectorAll(".contato");
const nomeContato = document.getElementById("nomeContato");

let contatoAtual = "Joao";

const nomeUsuario = "Ari";


// Banco de conversas salvo no navegador

let conversas = JSON.parse(localStorage.getItem("AriChat_conversas")) || {};


// Criar conversa se não existir

function criarConversa(nome){

if(!conversas[nome]){
conversas[nome] = [];
}

}


// Mostrar conversa

function carregarConversa(){

mensagens.innerHTML = "";

criarConversa(contatoAtual);


conversas[contatoAtual].forEach(msg=>{

const div = document.createElement("div");

div.className = "mensagem";


div.innerHTML = `
<strong>${msg.usuario}</strong><br>
${msg.texto}
<div class="hora">${msg.hora}</div>
<div class="visualizado">✔✔ Visualizado</div>
`;


mensagens.appendChild(div);

});


mensagens.scrollTop = mensagens.scrollHeight;

}



// Trocar contato

contatos.forEach(contato=>{

contato.addEventListener("click",()=>{


contatoAtual = contato.dataset.nome;


nomeContato.innerHTML =
"💬 " + contato.innerText.trim();


carregarConversa();


});


});



// Enviar mensagem

function enviarMensagem(){

const textoDigitado = texto.value.trim();


if(textoDigitado === ""){
return;
}


const mensagem = {

usuario: nomeUsuario,

texto: textoDigitado,

hora: new Date().toLocaleTimeString("pt-BR",{
hour:"2-digit",
minute:"2-digit"
})

};


criarConversa(contatoAtual);


conversas[contatoAtual].push(mensagem);


localStorage.setItem(
"AriChat_conversas",
JSON.stringify(conversas)
);



texto.value = "";


carregarConversa();


}



enviar.addEventListener("click", enviarMensagem);


texto.addEventListener("keypress",(e)=>{

if(e.key === "Enter"){

enviarMensagem();

}

});


// Abrir primeira conversa

carregarConversa();


});
