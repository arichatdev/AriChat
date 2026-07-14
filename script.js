document.addEventListener("DOMContentLoaded", () => {

const mensagens = document.getElementById("mensagens");
const texto = document.getElementById("texto");
const enviar = document.getElementById("enviar");
const chamar = document.getElementById("chamar");
const digitando = document.getElementById("digitando");
const status = document.getElementById("status");
const chat = document.getElementById("chat");
const nomeContato = document.getElementById("nomeContato");

const contatos = document.querySelectorAll(".contato");

const nomeUsuario = "Ari";

let contatoAtual = "Joao";


const statusContatos = {
  "Joao": "🟢 Online",
  "Maria": "🟡 Ausente",
  "Pedro": "🔴 Ocupado",
  "Ana": "⚫ Offline"
};


// Abrir contato

contatos.forEach((contato)=>{

  contato.addEventListener("click",()=>{

    contatoAtual = contato.dataset.nome;

    mensagens.innerHTML = "";

    nomeContato.innerHTML = "💬 " + contatoAtual;

    digitando.innerHTML =
    statusContatos[contatoAtual];

  });

});



// Trocar seu status

status.addEventListener("change",()=>{

let escolha = status.value;


if(escolha === "invisivel"){

 digitando.innerHTML = "⚪ Invisível";

}else{

 digitando.innerHTML = escolha;

}


});



// Digitação

texto.addEventListener("input",()=>{


if(texto.value.length > 0){

 digitando.innerHTML = "✍️ Digitando...";

}else{

 digitando.innerHTML =
 statusContatos[contatoAtual];

}


});



// Enviar mensagem

function enviarMensagem(){

const msg = texto.value.trim();

if(msg === "") return;


const hora = new Date().toLocaleTimeString("pt-BR",{
hour:"2-digit",
minute:"2-digit"
});


const nova = document.createElement("div");

nova.className="mensagem";


nova.innerHTML=`

<strong>${nomeUsuario}</strong><br>

${msg}

<div class="hora">${hora}</div>

<div class="visualizado">
✔✔ Visualizado
</div>

`;


mensagens.appendChild(nova);

texto.value="";


mensagens.scrollTop =
mensagens.scrollHeight;


}



enviar.addEventListener("click", enviarMensagem);



texto.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

enviarMensagem();

}

});



// Chamar atenção

chamar.addEventListener("click",()=>{


chat.classList.remove("tremendo");

void chat.offsetWidth;

chat.classList.add("tremendo");


alert("🔥 Ari chamou sua atenção!");

});


});
