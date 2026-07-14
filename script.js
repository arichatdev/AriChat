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
// Memória das conversas

let conversas = JSON.parse(
localStorage.getItem("AriChat_conversas")
) || {};


function salvarConversas(){

localStorage.setItem(
"AriChat_conversas",
JSON.stringify(conversas)
);

}


function guardarMensagem(contato, mensagem){

if(!conversas[contato]){

conversas[contato] = [];

}

conversas[contato].push(mensagem);

salvarConversas();

}


function carregarMensagens(contato){

mensagens.innerHTML="";


if(!conversas[contato]) return;


conversas[contato].forEach(msg=>{

const div=document.createElement("div");

div.className="mensagem";

div.innerHTML=`

<strong>${msg.usuario}</strong><br>

${msg.texto}

<div class="hora">
${msg.hora}
</div>

<div class="visualizado">
✔✔ Visualizado
</div>

`;

mensagens.appendChild(div);

});


}
let ultimaAtividade = {};



const statusContatos = {
  "Joao": "🟢 Online",
  "Maria": "🟡 Ausente",
  "Pedro": "🔴 Ocupado",
  "Ana": "⚫ Offline"
};



// função horário

function horario(){

return new Date().toLocaleTimeString("pt-BR",{
hour:"2-digit",
minute:"2-digit"
});

}



// mensagem do sistema

function avisoSistema(textoAviso){

const aviso = document.createElement("div");

aviso.className="mensagem";

aviso.innerHTML = `
${textoAviso}
<div class="hora">${horario()}</div>
`;

mensagens.appendChild(aviso);

mensagens.scrollTop = mensagens.scrollHeight;

}



// entrar no contato

contatos.forEach((contato)=>{

contato.addEventListener("click",()=>{


if(contatoAtual !== contato.dataset.nome){

ultimaAtividade[contatoAtual] = horario();

avisoSistema(
"👋 " + contatoAtual + " saiu da conversa"
);

}


contatoAtual = contato.dataset.nome;


nomeContato.innerHTML =
"💬 " + contato.innerText.trim();


avisoSistema(
"🔥 " + contatoAtual + " entrou no AriChat"
);



digitando.innerHTML =
statusContatos[contatoAtual];

});

});



// status

status.addEventListener("change",()=>{

meuStatus = status.value;


if(meuStatus === "invisivel"){

digitando.innerHTML =
"⚪ Invisível";

}else{

digitando.innerHTML =
status.options[status.selectedIndex].text;

}

});



// digitando

texto.addEventListener("input",()=>{

if(texto.value.length > 0){

digitando.innerHTML =
"✍️ Digitando...";

}

});




// enviar mensagem

function enviarMensagem(){

const mensagem = texto.value.trim();

if(mensagem==="") return;


const nova = document.createElement("div");

nova.className="mensagem";


nova.innerHTML = `

<strong>${nomeUsuario}</strong><br>

${mensagem}

<div class="hora">
${horario()}
</div>

<div class="visualizado">
✔✔ Visualizado
</div>

`;


mensagens.appendChild(nova);

texto.value="";

digitando.innerHTML =
statusContatos[contatoAtual];

mensagens.scrollTop =
mensagens.scrollHeight;


}



enviar.addEventListener("click", enviarMensagem);


texto.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

enviarMensagem();

}

});




// chamar atenção

chamar.addEventListener("click",()=>{

chat.classList.remove("tremendo");

void chat.offsetWidth;

chat.classList.add("tremendo");

alert("🔥 Ari chamou sua atenção!");

});




// emojis

emojiBotao.addEventListener("click",()=>{

emojis.style.display =
emojis.style.display === "block"
? "none"
: "block";

});


emojis.querySelectorAll("span").forEach((emoji)=>{

emoji.addEventListener("click",()=>{

texto.value += emoji.innerText;

});

});


});
