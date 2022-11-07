const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputhipodoge = document.getElementById('hipodoge')
const inputcapipepo = document.getElementById('capipepo')
const inputratigueya = document.getElementById('ratigueya')
//Variable para definar en span el nombre de la mascota elegida
const spanMascotaJugador = document.getElementById('mascota-jugador')

//seleccionar mascota enemigo
const enemigoAleatorio = aleatorio(1,6)
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

//Ataque aleatorio
const ataqueAleatorio = aleatorio(1,3)

//Combate
const spanvidasJugador = document.getElementById('vidas-jugador')
const spanvidasEnemigo = document.getElementById('vidas-enemigo')

//Crear Mensaje
const notificacion = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const nuevoAtaqueDelJugador = document.createElement('p')
const nuevoAtaqueDelEnemigo = document.createElement('p')

//Crear mensaje final
const sectionMensajes = document.getElementById('resultado')

//Variable Global para ataque judagores
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Funcion que inicia al momentod e cargar todo el DOM y poder iniciar a jugar 
function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Funcion para poder elegir mascota del jugador 
function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex '
    //Variables para seleccionar boton radio de mascotas
    if(inputhipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if (inputcapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (inputratigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert('Selecciona una mascota')
    } 
    
    seleccionarMascotaEnemigo()
}

//Funcion seleccionar mascota del enemigo de forma aleatoria 
function seleccionarMascotaEnemigo(){
   if(enemigoAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
   }else if(enemigoAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
   }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
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
    notificacion.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
 }

 function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true    
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
    //sectionMensajes.appendChild(parrafo)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener('load', iniciarJuego)