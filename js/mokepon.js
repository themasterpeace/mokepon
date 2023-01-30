const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
//Variable para definar en span el nombre de la mascota elegida
const spanMascotaJugador = document.getElementById('mascota-jugador')
//seleccionar mascota enemigo

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
//Ataque aleatorio
//Combate
const spanvidasJugador = document.getElementById('vidas-jugador')
const spanvidasEnemigo = document.getElementById('vidas-enemigo')

//Crear Mensaje
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

//Crear mensaje final
const sectionMensajes = document.getElementById('resultado')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
//Variable Global para ataque judagores
let mokepones = []
let ataqueJugador =[]
let ataquesMokeponEnemigo
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let mascotaJugadorObjetos
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20 
const anchoMaximoDelMapa = 350

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon{
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarmokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon('Hipodogue', './assets/hipodoge.webp', 5, './assets/hipodoge cabeza.webp')

let capipepo = new Mokepon('Capipepo', './assets/capipepo.webp', 5, './assets/capipepo cabeza.webp')

let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya.webp', 5, './assets/ratigueya cabeza.webp')

let hipodogeEnemigo = new Mokepon('Hipodogue', './assets/hipodoge.webp', 5, './assets/hipodoge cabeza.webp')

let capipepoEnemigo = new Mokepon('Capipepo', './assets/capipepo.webp', 5, './assets/capipepo cabeza.webp')

let ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/ratigueya.webp', 5, './assets/ratigueya cabeza.webp')

hipodoge.ataques.push(
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🌻', id: 'boton-tierra' },
)
hipodogeEnemigo.ataques.push(
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🌻', id: 'boton-tierra' },
)

capipepo.ataques.push(
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '🔥', id: 'boton-fuego' },
    
)
capipepoEnemigo.ataques.push(
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '💦', id: 'boton-agua' },
    {nombre : '🔥', id: 'boton-fuego' },
    
)
ratigueya.ataques.push(
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '💦', id: 'boton-agua' },
)
ratigueyaEnemigo.ataques.push(
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🔥', id: 'boton-fuego' },
    {nombre : '🌻', id: 'boton-tierra' },
    {nombre : '💦', id: 'boton-agua' },
)
mokepones.push(hipodoge,capipepo,ratigueya)



//Funcion que inicia al momento de cargar todo el DOM y poder iniciar a jugar 
function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon)=> {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p> 
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
     contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodogue')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')

    })

    //sectionReiniciar.style.display = 'none'
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                    })
            }
        })
}

//Funcion para poder elegir mascota del jugador 
function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    //sectionSeleccionarAtaque.style.display = 'flex'
   
        
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    
}
//Funccion para extraer ataques de mascota jugador
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i ++){
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    
    mostrarAtaques(ataques)
}

//Funcion para mostrar ataques 
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>    
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
    

}
//Funcion para secuencia de ataques 
function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) => {
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#E9E8E6'
                boton.disabled = true
            }else if (e.target.textContent === '💦'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#E9E8E6'
                boton.disabled = true
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#E9E8E6'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}
//Funcion seleccionar mascota del enemigo de forma aleatoria 
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

   spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
   ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
   secuenciaAtaque()
}

//Funciond e ataques aleatorios del enemigo y/o contrincante
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)

     if(ataqueAleatorio == 0 || ataqueAleatorio ==1 ){
        ataqueEnemigo.push("FUEGO")
     }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    }else{
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
   iniciarPelea()
}

//Funcion para iniciar batalla de mascotas
function iniciarPelea(){
    if(ataqueJugador.length===5){
        combate()
    }
}
function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
//Funcion que define el combate seleccionado
 function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanvidasJugador.innerHTML = victoriasJugador
        }else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanvidasJugador.innerHTML = victoriasJugador
        }else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanvidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanvidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }

     revisarVidas()
 }
//Funcion revisar vidas para ir restando conforme se realize un ataque se le reste al que pierda
function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("¡¡¡Esto fue un empate !!! ")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("¡¡¡Felicitaciontes, Ganaste ESTA BATALLA 🥳🥳!!!")
    }else{
        crearMensajeFinal('Lo siento, perdiste 😢😢')
    }
}

//Funcion imprimir ataque 
 function crearMensaje(resultado){
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
 }

 function crearMensajeFinal(resultadoFinal){

    sectionMensajes.innerHTML = resultadoFinal
   
    sectionReiniciar.style.display = 'block'
    //sectionMensajes.appendChild(parrafo)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function pintarCanvas() {

    mascotaJugadorObjetos.x = mascotaJugadorObjetos.x + mascotaJugadorObjetos.velocidadX
    mascotaJugadorObjetos.y = mascotaJugadorObjetos.y + mascotaJugadorObjetos.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjetos.pintarmokepon()
    hipodogeEnemigo.pintarmokepon()
    capipepoEnemigo.pintarmokepon()
    ratigueyaEnemigo.pintarmokepon()
    if (mascotaJugadorObjetos.velocidadX !== 0 || mascotaJugadorObjetos.velocidadY !== 0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
}
//Funciones para mover al mokepon 
function moverDerecha() {
    mascotaJugadorObjetos.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjetos.velocidadX = -5
}
function moverAbajo() {
    mascotaJugadorObjetos.velocidadY = + 5
}
function moverArriba() {
    mascotaJugadorObjetos.velocidadY = -5
}
function detenerMovimiento(){
    
    mascotaJugadorObjetos.velocidadX = 0
    mascotaJugadorObjetos.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}
//Iniciar mapa para la batalla 
function iniciarMapa(){
    mapa.width = 320
    mapa.height = 240
    mascotaJugadorObjetos = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i ++){
        if (mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjetos.y
    const abajoMascota = mascotaJugadorObjetos.y + enemigo.alto
    const derechaMascota = mascotaJugadorObjetos.x + enemigo.ancho
    const izquierdaMascota = mascotaJugadorObjetos.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return 
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
    
}
window.addEventListener('load', iniciarJuego)