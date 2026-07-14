document.addEventListener("DOMContentLoaded", () => {

const digitando = document.getElementById("digitando");
const status = document.getElementById("status");
const contatos = document.querySelectorAll(".contato");

let meuStatus = "online";


const statusContatos = {
  "Joao": "🟢 Online",
  "Maria": "🟡 Ausente",
  "Pedro": "🔴 Ocupado",
  "Ana": "⚫ Offline"
};


// Seu status

status.addEventListener("change", () => {

meuStatus = status.value;


if(meuStatus === "invisivel"){

  digitando.innerHTML = "⚪ Seu status: Invisível";

}else{

  digitando.innerHTML = status.options[status.selectedIndex].text;

}

});


// Abrir contatos

contatos.forEach((contato)=>{

contato.addEventListener("click",()=>{

const nome = contato.dataset.nome;


// Se você estiver invisível,
// os outros enxergam offline

if(meuStatus === "invisivel"){

  digitando.innerHTML = "⚫ Offline";

}else{

  digitando.innerHTML = statusContatos[nome];

}


});

});


});
