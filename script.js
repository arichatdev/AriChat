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

const nome = "Ari";

let contatoAtual = "João";


const statusContatos = {
  "João": "🟢 Online",
  "Maria": "🟡 Ausente",
  "Pedro": "🔴 Ocupado",
  "Ana": "⚫ Offline"
};


// Trocar contato

contatos.forEach(contato => {

  contato.addEventListener("click", () => {

    contatoAtual = contato.innerText.replace(/🟢|🟡|🔴|⚫/g, "").trim();

    mensagens.innerHTML = "";

    nomeContato.innerHTML = "💬 " + contatoAtual;

    digitando.innerHTML =
      statusContatos[contatoAtual] || "🟢 Online";

  });

});


// Seu status

status.addEventListener("change", () => {

  digitando.innerHTML = status.value;

});


// Digitando

texto.addEventListener("input", () => {

  if(texto.value.length > 0){

    digitando.innerHTML = "✍️ Digitando...";

  } else {

    digitando.innerHTML =
    statusContatos[contatoAtual];

  }

});


// Enviar

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
<strong>${nome}</strong><br>
${mensagem}
<div class="hora">${hora}</div>
<div class="visualizado">✔✔ Visualizado</div>
`;


mensagens.appendChild(nova);

texto.value="";

digitando.innerHTML =
statusContatos[contatoAtual];

mensagens.scrollTop = mensagens.scrollHeight;

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
