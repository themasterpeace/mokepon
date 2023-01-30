//importando express js
const express = require("express")

//asignando nuestra app 
const app = express()

const jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }
}

//devolver repuestas al cliente
app.get("/unirse", (req, res) =>{
    const id = `${Math.random()}`
    
    const jugador = new Jugador(id)

    res.setHeader("Acces-Control-Allow-Origin", "*")

    jugadores.push(jugador)

    res.send(id)
} )

//escuchar peticiones del cliente
app.listen(8080, () => {
    console.log("Servidor funcionando")
})