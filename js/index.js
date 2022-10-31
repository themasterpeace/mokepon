function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputhipodoge = document.getElementById('hipodoge')
    let inputcapipepo = document.getElementById('capipepo')
    let inputratigueya = document.getElementById('ratigueya')
    let inputlangostelvis = document.getElementById('langostelvis')
    let inputtucapalma = document.getElementById('tucapalma')
    let inputpydos = document.getElementById('pydos')

    if(inputhipodoge.checked){
        alert("Seleccionaste a Hipodoge")
    }else if (inputcapipepo.checked){
        alert("Seleccionaste a Capipepo")
    }else if (inputratigueya.checked){
        alert("Seleccionaste a Ratigueya")
    }else if (inputlangostelvis.checked){
        alert("Seleccionaste a Langostelvis")
    }else if (inputtucapalma.checked){
        alert("Seleccionaste a Tucapalma")
    }else if (inputpydos.checked){
        alert("Seleccionaste a Pydos")
    }else {
        alert("No has seleccionado una mascota para empezar a jugar")
    }
        
}

window.addEventListener('load', iniciarJuego)