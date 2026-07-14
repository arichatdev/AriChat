document.addEventListener("DOMContentLoaded", () => {

  const mensagens = document.getElementById("mensagens");
  const texto = document.getElementById("texto");
  const enviar = document.getElementById("enviar");

  const nome = "Ari";

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
    `;

    mensagens.appendChild(novaMensagem);

    texto.value = "";

    mensagens.scrollTop = mensagens.scrollHeight;
  }

  enviar.addEventListener("click", enviarMensagem);

  texto.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      enviarMensagem();
    }
  });

});
