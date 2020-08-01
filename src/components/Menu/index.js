import React from 'react'
import Logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className='Logo' src={Logo} alt=""/>
            </a>
            <Button href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu