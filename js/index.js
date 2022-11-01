//Variable Global para ataque judagores
let ataqueJugador
let ataqueEnemigo

//Funcion que inicia al momentod e cargar todo el DOM y poder iniciar a jugar 
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)


}

//Funcion para poder elegir mascota del jugador 
function seleccionarMascotaJugador(){
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
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

//Funciond e ataques aleatorios del enemigo y/o contrincante
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    }
   
}

 function combate(){
     if (ataqueEnemigo == ataqueJugador) {
         crearMensaje("EMPATE")
     } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
         crearMensaje("GANASTE")
     } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
         crearMensaje("GANASTE")
     } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
         crearMensaje("GANASTE")
     } else {
         crearMensaje("PERDISTE")
     }
 }
//Funcion imprimir ataque 
 function crearMensaje(resultado){
     let sectionMensajes = document.getElementById('mensajes')

     let parrafo = document.createElement('p')
     parrafo.innerHTML = 'Tu mascota ataco con' + ataqueJugador + ', la mascota del enemigo ataco con' + ataqueEnemigo + '-' + resultado
     sectionMensajes.appendChild(parrafo)
 }

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//



window.addEventListener('load', iniciarJuego)