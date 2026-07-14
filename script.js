document.addEventListener("DOMContentLoaded", () => {

  const mensagens = document.getElementById("mensagens");
  const texto = document.getElementById("texto");
  const enviar = document.getElementById("enviar");
  const chamar = document.getElementById("chamar");
  const digitando = document.getElementById("digitando");
  const status = document.getElementById("status");
  const chat = document.getElementById("chat");

  const nome = "Ari";


  status.addEventListener("change", () => {

    const escolha = status.value;

    digitando.innerHTML = escolha;

  });


  texto.addEventListener("input", () => {

    if (texto.value.length > 0) {
      digitando.innerHTML = "✍️ Digitando...";
    } else {
      digitando.innerHTML = status.value;
    }

  });



  function enviarMensagem(){

    const mensagem = texto.value.trim();

    if(mensagem === "") return;


    const agora = new Date();

    const hora = agora.toLocaleTimeString("pt-BR", {
      hour:"2-digit",
      minute:"2-digit"
    });


    const nova = document.createElement("div");

    nova.className = "mensagem";


    nova.innerHTML = `
    <strong>${nome}</strong><br>
    ${mensagem}
    <div class="hora">${hora}</div>
    <div class="visualizado">✔✔ Visualizado</div>
    `;


    mensagens.appendChild(nova);

    texto.value = "";

    digitando.innerHTML = status.value;


    mensagens.scrollTop = mensagens.scrollHeight;

  }



  enviar.addEventListener("click", enviarMensagem);


  texto.addEventListener("keypress", (e)=>{

    if(e.key === "Enter"){
      enviarMensagem();
    }

  });



  chamar.addEventListener("click", ()=>{

    chat.classList.remove("tremendo");

    void chat.offsetWidth;

    chat.classList.add("tremendo");


    alert("🔥 Ari chamou sua atenção!");

  });


});
