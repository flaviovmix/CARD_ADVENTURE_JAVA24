const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const menuLateral = card.querySelector('.menu-lateral-card');

    card.addEventListener('mouseenter', () => {
        menuLateral.classList.add('mover-card');
    });

    card.addEventListener('mouseleave', () => {
        menuLateral.classList.remove('mover-card');
    });
});