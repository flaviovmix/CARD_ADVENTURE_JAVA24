const tituloTexto = document.getElementById('area-titulo-da-fase');
const nomePadrao = 'VIDEL SATAN';
let timeoutVoltarPadrao = null;

function trocarTextoComFade(novoTexto) {
    tituloTexto.classList.add('texto-fade');
    tituloTexto.style.transform = 'translateX(-300px)';
    tituloTexto.style.transition = 'transform 0.3s ease';

    setTimeout(() => {
        tituloTexto.textContent = novoTexto;
        tituloTexto.classList.remove('texto-fade');
        tituloTexto.style.transform = 'translateX(0px)';
        tituloTexto.style.transition = 'transform 0.3s ease';
    }, 300);
}

document.querySelectorAll('.area-link-fases a').forEach(function (item) {
    const icon = item.querySelector('.icone');

    item.addEventListener('mouseenter', function () {
        clearTimeout(timeoutVoltarPadrao);
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'translateY(-8px)';

        const titulo = item.getAttribute('data-titulo');
        trocarTextoComFade(titulo);
    });

    item.addEventListener('mouseleave', function () {
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'translateY(0)';

        timeoutVoltarPadrao = setTimeout(() => {
            trocarTextoComFade(nomePadrao);
        }, 1000);
    });
});