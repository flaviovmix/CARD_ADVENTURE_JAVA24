const btnMenuBolinhaCard = document.getElementById('btnMenuBolinhaCard');
const areaInfoPersonagem = document.getElementById('areaInfoPersonagem');
const imagemPrincipal = document.getElementById('imagemPrincipal');

btnMenuBolinhaCard.addEventListener('click', () => {
    areaInfoPersonagem.classList.toggle('mostrar');
    imagemPrincipal.classList.toggle('mostrar');
});