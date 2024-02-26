import React from "react"
import "./Main.css"
import Passaros from "./fotosMain/passaros.jpg"
import Porco from "./fotosMain/porco.jpg"
import India from "./fotosMain/porquinhoindia.jpg"

function Main() {
    return (
        <main>
            <h2> Olá, sou a main</h2>
            <img src={Passaros} alt="" />
            <img src={Porco} alt="" />
            <img src={India} alt="" />
            <img src={Passaros} alt="" />
            <img src={Porco} alt="" />
            <img src={India} alt="" />
            <img src={Porco} alt="" />
            <img src={India} alt="" />
        </main>
    )
}

export default Main