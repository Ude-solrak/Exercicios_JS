function mudar_texto()
{
    const texto = document.getElementById("paragrafo");

    texto.textContent = "O que você fez!!?";
};

const entrada = document.getElementById("entrada");
const espelho = document.getElementById("espelho_input");

entrada.addEventListener("input", (evento) => {
    const textoespelho = evento.target.value;
    espelho.textContent = textoespelho;
});

const borda = document.getElementById("imagem")
borda.addEventListener("mouseenter", () => {
    borda.classList.add("imagemstyle")
})