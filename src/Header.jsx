import React, { useState } from 'react' 
import './Header.scss'
import logoBranca from './public/static/images/logo-branco.png'
import logoPreta from './public/static/images/logo-preto.png'
import pesquisarBranco from './public/static/images/pesquisar-header-branco.png'
import perfilBranco from './public/static/images/perfil-header-branco.png'
import shoppingBagBranco from './public/static/images/shopping-bag-header-branco.png'
import pesquisarPreto from './public/static/images/pesquisar-header-preto.png'
import perfilPreto from './public/static/images/perfil-header-preto.png'
import shoppingBagPreto from './public/static/images/shopping-bag-header-preto.png'


function Header(){
    
    const [color,setColor] = useState(false)
    const changeColor = () =>{
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    /* Para alterar cor do header, ao usuário scrollar a página, dispara a função ->
    changeColor que verifica o quanto usuário ja scrollou e altera as cores do header */
    window.addEventListener('scroll', changeColor)

    return(
        <header className={color ? 'header header-bg' : 'header' } >
            <div className="header-content">
                <a href="#" className="logo">
                    <img className="logo-image" src={color ? logoPreta : logoBranca} alt="bebecê-logo"/>
                </a>            

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="btn"><img src={color ? pesquisarPreto : pesquisarBranco} alt="search-logo" /></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn"><img src={color ? perfilPreto : perfilBranco} alt="profile-logo" /></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn"><img src={color ? shoppingBagPreto : shoppingBagBranco} alt="shopping-bag-logo" /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header