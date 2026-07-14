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


const statusContatos = {
  "Joao": "🟢 Online",
  "Maria": "🟡 Ausente",
  "Pedro": "🔴 Ocupado",
  "Ana": "⚫ Offline"
};


// Trocar contato

contatos.forEach((contato)=>{

  contato.addEventListener("click",()=>{

    contatoAtual = contato.dataset.nome;

    nomeContato.innerHTML = "💬 " + contato.innerText.trim();


    if(meuStatus === "invisivel"){

      digitando.innerHTML = "⚫ Offline";

    } else {

      digitando.innerHTML = statusContatos[contatoAtual];

    }

  });

});


// Mudar status

status.addEventListener("change",()=>{

  meuStatus = status.value;


  if(meuStatus === "invisivel"){

    digitando.innerHTML = "⚪ Seu status: Invisível";

  } else {

    digitando.innerHTML =
    status.options[status.selectedIndex].text;

  }

});


// Digitando

texto.addEventListener("input",()=>{

  if(texto.value.length > 0){

    digitando.innerHTML = "✍️ Digitando...";

  }

});


// Enviar mensagem

function enviarMensagem(){

const mensagem = texto.value.trim();

if(mensagem === "") return;


const hora = new Date().toLocaleTimeString("pt-BR",{
hour:"2-digit",
minute:"2-digit"
});


const nova = document.createElement("div");

nova.className="mensagem";


nova.innerHTML = `

<strong>${nomeUsuario}</strong><br>

${mensagem}

<div class="hora">${hora}</div>

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

if(e.key === "Enter"){

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


// Abrir emojis

emojiBotao.addEventListener("click",()=>{

if(emojis.style.display === "block"){

  emojis.style.display = "none";

}else{

  emojis.style.display = "block";

}

});


// Escolher emoji individual

emojis.querySelectorAll("span").forEach((emoji)=>{

emoji.addEventListener("click",()=>{

texto.value += emoji.innerText;

});

});


});
