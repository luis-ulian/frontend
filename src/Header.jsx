import React, { useState } from 'react' 
import './Header.scss'
import logoBranca from './public/static/images/logo-branco.png'
import logoPreta from './public/static/images/logo-preto.png'
function Header(){
    
    const [color,setColor] = useState(false)
    const changeColor = () =>{
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    //Para alterar cor do header, ao usuário scrollar a página, dispara a função ->
    //changeColor que verifica o quanto usuário ja scrollou
    window.addEventListener('scroll', changeColor)

    return(
        <header className={color ? 'header header-bg' : 'header' } >
            <img className="bebece" src={color ? logoPreta : logoBranca} alt="bebecê-logo"/>
        </header>
    );
}

export default Header