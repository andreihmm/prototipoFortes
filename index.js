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

function buscarPorTalentos() {
    buscarPorTalentos = document.querySelector("#buscar-talentos")

    principais = document.querySelectorAll(".principais")
    while (principais.classList.length > 1) {
        if (principais.classList.item(0) !== '.principais')
            principais.classList.remove(principais.classList.item(0));
    }

    buscarPorTalentos.classList.add('active')

}