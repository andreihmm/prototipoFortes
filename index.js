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

function grupos() {
    var grupos = document.querySelector('#grupos.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var principaisAtivos = document.querySelectorAll('.principais.active');
    var gruposdiv = document.querySelector('#gruposdiv')

    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }
    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    gruposdiv.classList.add('active')
    grupos.classList.add('active')
}

function eventos() {
    var eventos = document.querySelector('#eventos.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var principaisAtivos = document.querySelectorAll('.principais.active')
    var eventosdiv = document.querySelector('#eventosdiv')

    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }

    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    eventosdiv.classList.add('active')
    eventos.classList.add('active')
}
function notificacoes() {
    var notificacoes = document.querySelector('#notificacoes.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var principaisAtivos = document.querySelectorAll('.principais.active')
    var notificacoesdiv = document.querySelector('#notificacoesdiv')


    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }

    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    notificacoesdiv.classList.add('active')
    notificacoes.classList.add('active')
}
function buscarPorTalentos() {
    var buscarPorTalentos = document.querySelector('#buscarPorTalentos.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var buscarTalentos = document.querySelector("#buscarTalentos")
    var principaisAtivos = document.querySelectorAll('.principais.active')

    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }

    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    buscarPorTalentos.classList.add('active')
    buscarTalentos.classList.add('active')
}
function enviarMensagem() {
    var texto = document.querySelector("#input-texto").value
    var regexp = texto.replace(/\s/g, '')

    if (regexp == '') {
        alert('Insira uma mensagem')
        return
    }

    const conversa = document.querySelector("#conversa")
    var section = document.createElement('section')
    section.classList.add('mensagem-sua')
    conversa.appendChild(section)
    var p = document.createElement('p')
    p.classList.add('mensagem')

    section.appendChild(p)


    p.append(texto)

    conversa.scrollTop = conversa.scrollHeight
    document.querySelector("#input-texto").value = ''
}


// Função para alternar entre modo claro e modo escuro
function toggleModoEscuro() {
    const fundo = document.getElementById('fundo');
    const main = document.querySelector('main');
  
    fundo.classList.toggle('modo-escuro');
    main.classList.toggle('modo-escuro');
  
    // Armazena o estado do modo escuro no localStorage
    const modoEscuroAtivado = fundo.classList.contains('modo-escuro');
    localStorage.setItem('modoEscuroAtivado', modoEscuroAtivado);
  }
  
  // Verifica o estado do modo escuro no localStorage e aplica as classes apropriadas
  function verificarModoEscuro() {
    const modoEscuroAtivado = localStorage.getItem('modoEscuroAtivado') === 'true';
    const fundo = document.getElementById('fundo');
    const main = document.querySelector('main');
  
    if (modoEscuroAtivado) {
      fundo.classList.add('modo-escuro');
      main.classList.add('modo-escuro');
    }
  }
  
  // Verifica o estado do modo escuro ao carregar a página
  document.addEventListener('DOMContentLoaded', verificarModoEscuro);  

// Função para alternar entre modo normal e modo daltonico
function toggleModoDaltonico() {
    const fundo = document.getElementById('fundo');
    const main = document.querySelector('main');
  
    fundo.classList.toggle('modo-daltonico');
    main.classList.toggle('modo-daltonico');
  
    // Armazena o estado do modo daltonico no localStorage
    const modoDaltonicoAtivado = fundo.classList.contains('modo-daltonico');
    localStorage.setItem('modoDaltonicoAtivado', modoDaltonicoAtivado);
  }
  
  // Verifica o estado do modo daltonico no localStorage e aplica as classes apropriadas
  function verificarModoDaltonico() {
    const modoDaltonicoAtivado = localStorage.getItem('modoDaltonicoAtivado') === 'true';
    const fundo = document.getElementById('fundo');
    const main = document.querySelector('main');
  
    if (modoDaltonicoAtivado) {
      fundo.classList.add('modo-daltonico');
      main.classList.add('modo-daltonico');
    }
  }
  
  // Verifica o estado do modo daltonico ao carregar a página
  document.addEventListener('DOMContentLoaded', verificarModoDaltonico);
  
