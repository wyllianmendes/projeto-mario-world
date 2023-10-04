console.log('Mostrar o document', document);


console.log("Mostrar elemento botão-trailer", document.querySelector(".botao-trailer"));

//Pegando o elemento que representa o botão-trailer usando o js
const botaoTrailer = document.querySelector(".botao-trailer");

//Pegando o elemento modal usando o js
const modal = document.querySelector(".modal");
console.log("Mostrar elemento modal", modal);

//Pegando o elemento fechar-modal usando o js
const fecharModal = document.querySelector(".fechar-modal");
console.log("Mostrar elemento fechar-modal", fecharModal);

//Pegando o id do vídeo usando o js
const video = document.getElementById("video");
console.log("Mostrar elemento video", video);

//Pegando o link do vídeo no atributo src usando o js
const linkVideo = video.src;

function alternarModal(){
    modal.classList.toggle('aberto');
}
//Identificando o click no botão-trailer
botaoTrailer.addEventListener("click", () => {
    //Abrir modal na tela
    alternarModal();
    if (video.src != linkVideo) {
        video.setAttribute("src", linkVideo);
    }
    //console.log("Clicou no botão VEJA O TRAILER"); - Emite a mensagem no console ao clicar no botão-trailer
});

fecharModal.addEventListener("click", () => {
    //Fechar modal na tela
    alternarModal();
    video.setAttribute("src", "");
});




