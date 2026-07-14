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

let contatoAtual = "João";


const statusContatos = {
  Joao: "🟢 Online",
  Maria: "🟡 Ausente",
  Pedro: "🔴 Ocupado",
  Ana: "⚫ Offline"
};


// Abrir contato

contatos.forEach((contato) => {

  contato.addEventListener("click", () => {

    const nome = contato.dataset.nome;

    contatoAtual = nome;

    mensagens.innerHTML = "";

    nomeContato.innerHTML = "💬 " + contatoAtual;

    digitando.innerHTML = statusContatos[contatoAtual];

  });

});


// Status do usuário

status.addEventListener("change", () => {

  digitando.innerHTML = status.value;

});


// Digitando

texto.addEventListener("input", () => {

  if(texto.value.length > 0){

    digitando.innerHTML = "✍️ Digitando...";

  } else {

    digitando.innerHTML = statusContatos[contatoAtual];

  }

});


// Enviar mensagem

function enviarMensagem(){

  const mensagem = texto.value.trim();

  if(mensagem === "") return;


  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour:"2-digit",
    minute:"2-digit"
  });


  const novaMensagem = document.createElement("div");

  novaMensagem.className = "mensagem";


  novaMensagem.innerHTML = `
    <strong>${nomeUsuario}</strong><br>
    ${mensagem}
    <div class="hora">${hora}</div>
    <div class="visualizado">✔✔ Visualizado</div>
  `;


  mensagens.appendChild(novaMensagem);

  texto.value = "";

  digitando.innerHTML = statusContatos[contatoAtual];

  mensagens.scrollTop = mensagens.scrollHeight;

}


enviar.addEventListener("click", enviarMensagem);


texto.addEventListener("keypress", (e)=>{

  if(e.key === "Enter"){
    enviarMensagem();
  }

});


// Chamar atenção MSN

chamar.addEventListener("click", ()=>{

  chat.classList.remove("tremendo");

  void chat.offsetWidth;

  chat.classList.add("tremendo");

  alert("🔥 Ari chamou sua atenção!");

});


});
