window.onload = function () {
    const hamburguer = document.querySelector('.hamburguer')
    const navMenu = document.querySelector('.nav-menu')
    const fundo = document.querySelector('#fundo')

    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
        fundo.classList.toggle('active');
    })

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    }))
}