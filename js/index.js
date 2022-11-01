//Variable Global para ataque judagores
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Funcion que inicia al momentod e cargar todo el DOM y poder iniciar a jugar 
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Funcion para poder elegir mascota del jugador 
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    //Variables para seleccionar boton radio de mascotas
    let inputhipodoge = document.getElementById('hipodoge')
    let inputcapipepo = document.getElementById('capipepo')
    let inputratigueya = document.getElementById('ratigueya')
    let inputlangostelvis = document.getElementById('langostelvis')
    let inputtucapalma = document.getElementById('tucapalma')
    let inputpydos = document.getElementById('pydos')

    //Variable para definar en span el nombre de la mascota elegida
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputhipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if (inputcapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (inputratigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else if (inputlangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    }else if (inputtucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
    }else if (inputpydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
    }else {
        alert("No has seleccionado una mascota para empezar a jugar")
    }  
    
    seleccionarMascotaEnemigo()
}

//Funcion seleccionar mascota del enemigo de forma aleatoria 
function seleccionarMascotaEnemigo(){
   let enemigoAleatorio = aleatorio(1,6)
   let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

   if(enemigoAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
   }else if(enemigoAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
   } else if(enemigoAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
   }else if(enemigoAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
   }else if(enemigoAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
   }else{
        spanMascotaEnemigo.innerHTML = 'Pydos'
   }
}
//Funciones de ataques 
function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA 💦'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA 🌻'
    ataqueAleatorioEnemigo()
}

//Funciond e ataques aleatorios del enemigo y/o contrincante
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO 🔥"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA 💦"
    }else{
        ataqueEnemigo = "TIERRA 🌻"
    }
    combate()
   
}
//Funcion que define el combate seleccionado
 function combate(){
 
    let spanvidasJugador = document.getElementById('vidas-jugador')
    let spanvidasEnemigo = document.getElementById('vidas-enemigo')

     if (ataqueJugador == ataqueEnemigo) {
         crearMensaje("EMPATE")
     } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌻') {
         crearMensaje("GANASTE")
         vidasEnemigo --
         spanvidasEnemigo.innerHTML = vidasEnemigo
     } else if (ataqueJugador == 'AGUA 💦' && ataqueEnemigo == 'FUEGO 🔥') {
         crearMensaje("GANASTE")
         vidasEnemigo --
         spanvidasEnemigo.innerHTML = vidasEnemigo
     } else if (ataqueJugador == 'TIERRA 🌻' && ataqueEnemigo == 'AGUA 💦') {
         crearMensaje("GANASTE")
         vidasEnemigo --
         spanvidasEnemigo.innerHTML = vidasEnemigo
     } else {
         crearMensaje("PERDISTE")
         vidasJugador --
         spanvidasJugador.innerHTML = vidasJugador
     }

     revisarVidas()
 }
//Funcion revisar vidas para ir restando conforme se realize un ataque se le reste al que pierda
function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("¡¡¡FELICIDADES GANASTE ESTA BATALLA 🥳🥳!!! ")
    }else if (vidasJugador == 0){
        crearMensajeFinal("¡¡¡LO SIENTO, PERDISTE ESTA BATALLA 😢😢!!!")
    }
}

//Funcion imprimir ataque 
 function crearMensaje(resultado){
     let sectionMensajes = document.getElementById('mensajes')

     let parrafo = document.createElement('p')
     parrafo.innerHTML = 'Tu mascota ataco con: ' + ataqueJugador + ', la mascota del enemigo ataco con: ' + ataqueEnemigo + ' - ' + resultado
     sectionMensajes.appendChild(parrafo)
 }

 function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = alert(resultadoFinal)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true    
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'


    //sectionMensajes.appendChild(parrafo)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//



window.addEventListener('load', iniciarJuego)