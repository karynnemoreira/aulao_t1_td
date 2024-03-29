import React, { useState } from "react"
import "./Footer.css"

function Footer() {

    const [numero, setNumero] = useState(0)

    //Contador utilizando função externa

    // const Adicionar = () => {
    //     setNumero(numero + 1)
    // }

    // const Remover = () => {
    //     setNumero(numero - 1)
    // }

    //SETIMEOUT - EXECUTA UM BLOCO DE CÓDIGO OU UMA FUNÇÃO ESPECÍFICA APÓS UM DETERMINADO TEMPO.

    // setTimeout(()=>{
    //     alert("Usando o setTimeout")
    // }, 2000)


    //SETINTERVAL - PERMITE EXECUTAR REPETIDADE UM BLOCO DE CÓDIGO OU UMA FUNÇÃO ESPECÍFICA EM INTERVALOS DE TEMPO.


    // setInterval(()=>{
    //     console.log("Usando o setInterval")
    // }, 3000)


    //CLEATINTERVAL = INTERROMPOE A EXECUÇÃO QUE ESTÁ SE REPETINDO PELO SETINTERVAL.

    // clearInterval(setInterval)


    //--------------------------------------

    const [cronometro, setCronometro] = useState(0)
    const [guardarIntervalo, setGuardarIntervalo] = useState()

    const Iniciar = () => {

        // setTimeout(()=> {
        //     setCronometro(cronometro + 1)
        // }, 2000) 
        //Daqui a 2 segundos, acrescente um valor ao meu estado

        const guardando = setInterval(() => {
            setCronometro((cronometro) => cronometro + 1)
        }, 1000)
        //de 2 em 2 segundos acrescente um valor ao meu estado

        setGuardarIntervalo(guardando)
    }

    const PararTempo = () => clearInterval(guardarIntervalo)



    return (
        <footer>
            <section className="contador">
                <h3>CONTADOR</h3>
                <h2>{numero}</h2>
                <button onClick={() => setNumero((numero) => numero + 1)}>ADD</button>

                <button onClick={() => setNumero((numero) => numero - 1)}>REMOVER</button>

                <button onClick={() => setNumero(0)}>LIMPAR</button>
            </section>


            <section className="cronometro">
                <h3>CRONÔMETRO</h3>
                <h2>{cronometro}</h2>
                <button onClick={Iniciar}>INICIAR</button>
                <button onClick={PararTempo}>PAUSAR</button>
                <button>LIMPAR</button>
            </section>


        </footer>
    )

}

export default Footer
