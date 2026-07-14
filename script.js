document.addEventListener("DOMContentLoaded", () => {

const mensagens = document.getElementById("mensagens");
const texto = document.getElementById("texto");
const enviar = document.getElementById("enviar");
const chamar = document.getElementById("chamar");
const chat = document.getElementById("chat");

const digitando = document.getElementById("digitando");
const status = document.getElementById("status");
const contatos = document.querySelectorAll(".contato");
const nomeContato = document.getElementById("nomeContato");

const emojiBotao = document.getElementById("emoji");
const emojis = document.getElementById("emojis");


const nomeUsuario = "Ari";

let contatoAtual = "Joao";
let meuStatus = "online";


// Conversas salvas

let conversas = JSON.parse(
localStorage.getItem("AriChat_conversas")
) || {};



const statusContatos = {

"Joao":"🟢 Online",
"Maria":"🟡 Ausente",
"Pedro":"🔴 Ocupado",
"Ana":"⚫ Offline"

};



// horário

function horario(){

return new Date().toLocaleTimeString("pt-BR",{
hour:"2-digit",
minute:"2-digit"
});

}



// salvar

function salvar(){

localStorage.setItem(
"AriChat_conversas",
JSON.stringify(conversas)
);

}



// criar conversa

function criarConversa(nome){

if(!conversas[nome]){

conversas[nome]=[];

}

}



// mostrar conversa

function carregarConversa(){

mensagens.innerHTML="";

criarConversa(contatoAtual);


conversas[contatoAtual].forEach(msg=>{


const div=document.createElement("div");

div.className="mensagem";


div.innerHTML=`

<strong>${msg.usuario}</strong><br>

${msg.texto}

<div class="hora">${msg.hora}</div>

<div class="visualizado">
✔✔ Visualizado
</div>

`;


mensagens.appendChild(div);


});


mensagens.scrollTop =
mensagens.scrollHeight;

}



// aviso

function avisoSistema(textoAviso){

const div=document.createElement("div");

div.className="mensagem";


div.innerHTML=`

${textoAviso}

<div class="hora">${horario()}</div>

`;


mensagens.appendChild(div);

mensagens.scrollTop =
mensagens.scrollHeight;

}



// trocar contato

contatos.forEach(contato=>{


contato.addEventListener("click",()=>{


if(contatoAtual !== contato.dataset.nome){

avisoSistema(
"👋 "+contatoAtual+" saiu da conversa"
);

}


contatoAtual =
contato.dataset.nome;


nomeContato.innerHTML =
"💬 "+contato.innerText.trim();


avisoSistema(
"🔥 "+contatoAtual+" entrou no AriChat"
);


carregarConversa();


if(meuStatus==="invisivel"){

digitando.innerHTML="⚫ Offline";

}else{

digitando.innerHTML=
statusContatos[contatoAtual];

}


});


});



// status

status.addEventListener("change",()=>{


meuStatus=status.value;


if(meuStatus==="invisivel"){

digitando.innerHTML="⚪ Invisível";

}else{

digitando.innerHTML=
status.options[status.selectedIndex].text;

}


});



// digitando

texto.addEventListener("input",()=>{


if(texto.value.length>0){

digitando.innerHTML=
"✍️ Digitando...";

}


});



// enviar

function enviarMensagem(){


const mensagem=texto.value.trim();


if(mensagem==="") return;



criarConversa(contatoAtual);



conversas[contatoAtual].push({

usuario:nomeUsuario,

texto:mensagem,

hora:horario()

});


salvar();


texto.value="";


carregarConversa();


digitando.innerHTML=
statusContatos[contatoAtual];


}



enviar.addEventListener(
"click",
enviarMensagem
);



texto.addEventListener(
"keypress",
(e)=>{

if(e.key==="Enter"){

enviarMensagem();

}

});



// chamar atenção

chamar.addEventListener("click",()=>{


chat.classList.remove("tremendo");


void chat.offsetWidth;


chat.classList.add("tremendo");


});



// emojis

emojiBotao.addEventListener("click",()=>{


if(emojis.style.display==="block"){

emojis.style.display="none";

}else{

emojis.style.display="block";

}


});



emojis.querySelectorAll("span")
.forEach(emoji=>{


emoji.addEventListener("click",()=>{


texto.value += emoji.innerText;


});


});



// iniciar

carregarConversa();


});
