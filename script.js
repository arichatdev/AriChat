document.addEventListener("DOMContentLoaded", () => {

  const mensagens = document.getElementById("mensagens");
  const texto = document.getElementById("texto");
  const enviar = document.getElementById("enviar");
  const digitando = document.getElementById("digitando");
  const status = document.getElementById("status");

  const nome = "Ari";

  // Mostrar status escolhido
  status.addEventListener("change", () => {

    const escolha = status.value;

    if (escolha === "online") {
      digitando.innerHTML = "🟢 Online";
    }

    if (escolha === "ocupado") {
      digitando.innerHTML = "🔴 Ocupado";
    }

    if (escolha === "ausente") {
      digitando.innerHTML = "🟡 Ausente";
    }

    if (escolha === "offline") {
      digitando.innerHTML = "⚫ Offline";
    }

  });


  // Aparece "digitando..."
  texto.addEventListener("input", () => {

    if (texto.value.length > 0) {
      digitando.innerHTML = "✍️ Digitando...";
    } else {
      digitando.innerHTML = "🟢 Online";
    }

  });


  function enviarMensagem() {

    const mensagem = texto.value.trim();

    if (mensagem === "") return;


    const agora = new Date();

    const hora = agora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });


    const novaMensagem = document.createElement("div");

    novaMensagem.className = "mensagem";


    novaMensagem.innerHTML = `
      <strong>${nome}</strong><br>
      ${mensagem}
      <div class="hora">${hora}</div>
      <div class="visualizado">✔✔ Visualizado</div>
    `;


    mensagens.appendChild(novaMensagem);

    texto.value = "";

    digitando.innerHTML = "🟢 Online";

    mensagens.scrollTop = mensagens.scrollHeight;

  }


  enviar.addEventListener("click", enviarMensagem);


  texto.addEventListener("keypress", (e)=>{

    if(e.key === "Enter"){
      enviarMensagem();
    }

  });


});
