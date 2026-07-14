document.addEventListener("DOMContentLoaded", () => {
  const mensagens = document.getElementById("mensagens");
  const texto = document.getElementById("texto");
  const enviar = document.getElementById("enviar");

  enviar.addEventListener("click", () => {
    const mensagem = texto.value.trim();

    if (mensagem === "") return;

    const novaMensagem = document.createElement("p");
    novaMensagem.textContent = mensagem;

    mensagens.appendChild(novaMensagem);
    texto.value = "";
    texto.focus();
  });
});
