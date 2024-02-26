import React from "react" //importando a biblioteca react
import "./Header.css" //importando um componente só para a estilização da header
import Logo from "../../assets/logo.png"


function Header() {
    return ( //retorna o código jsx
        <header>

            <h2>Petshop</h2>

            <img src={Logo} alt="" />

            <nav>
                <ul>
                    <li>Galeria</li>
                    <li>Projetos</li>
                </ul>
            </nav>

            <form>
                <label>Usuário: </label>
                <input type="text" placeholder="Digite seu nome" />

                <label> Senha: </label>
                <input type="password" placeholder="Digite sua senha" />

            </form>


        </header>
    )
}

export default Header  //exporta o componente header para ser exibido no navegador/tela.
