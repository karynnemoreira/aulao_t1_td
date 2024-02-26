import React from "react"
import Header from "./components/Header/Header.jsx" //importando o componente header, ela vai ser responsável por toda a pare de cima da página, todo o cabeçalho. 
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App(){
  return(
    <>
    {/* <h1>Olá, sou o componente principal que faz as coisas aparecerem na tela</h1> */}
    <Header/>   
    <Main />
    <Footer />
    </>
  )
}

export default App