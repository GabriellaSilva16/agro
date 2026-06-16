const btnMensagem = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

btnMensagem.addEventListener("click", () => {
    mensagem.innerHTML =
    "🌱 Cada escolha sustentável feita hoje ajuda a garantir alimento, água e qualidade de vida para as próximas gerações.";
});

const saibaMais = document.getElementById("saibaMais");

saibaMais.addEventListener("click", () => {
    document
    .getElementById("sobre")
    .scrollIntoView({
        behavior: "smooth"
    });
});

const acessibilidade = document.getElementById("acessibilidade");

let fonteGrande = false;

acessibilidade.addEventListener("click", () => {

    if(!fonteGrande){
        document.body.style.fontSize = "20px";
        fonteGrande = true;
    }else{
        document.body.style.fontSize = "16px";
        fonteGrande = false;
    }

});
