document.addEventListener("DOMContentLoaded", () => {
const nomeContato = document.getElementById("nomeContato");
const mensagens = document.getElementById("mensagens");
const texto = document.getElementById("texto");
const enviar = document.getElementById("enviar");
const chamar = document.getElementById("chamar");
const digitando = document.getElementById("digitando");
const status = document.getElementById("status");
const chat = document.getElementById("chat");

const contatos = document.querySelectorAll(".contato");

let contatoAtual = "João";
const statusContatos = {
  "João": "🟢 Online",
  "Maria": "🟡 Ausente",
  "Pedro": "🔴 Ocupado",
  "Ana": "⚫ Offline"
};
const nome = "Ari";


// Escolher contato

contatos.forEach(contato => {

  contato.addEventListener("click", () => {

    contatoAtual = contato.innerText.substring(2);

    mensagens.innerHTML = "";

    digitando.innerHTML =
statusContatos[contatoAtual] + " • " + contatoAtual;
nomeContato.innerHTML = "💬" + contatoAtual;
  });

});


// Status

status.addEventListener("change", () => {

 digitando.innerHTML = status.value;

});


// Digitando

texto.addEventListener("input", () => {

 if(texto.value.length > 0){

  digitando.innerHTML = "✍️ Digitando...";

 } else {

  digitando.innerHTML = "🟢 Online";

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


 nova.innerHTML = `
 <strong>${nome}</strong><br>
 ${msg}
 <div class="hora">${hora}</div>
 <div class="visualizado">✔✔ Visualizado</div>
 `;


 mensagens.appendChild(nova);

 texto.value="";

 digitando.innerHTML =
 "💬 Conversando com " + contatoAtual;


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
