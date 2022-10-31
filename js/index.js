//Funcion que inicia al momentod e cargar todo el DOM y poder iniciar a jugar 
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
        spanMascotaEnemigo.innerHTML = 'Tucaplma'
   }else{
        spanMascotaEnemigo.innerHTML = 'Pydos'
   }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


window.addEventListener('load', iniciarJuego)