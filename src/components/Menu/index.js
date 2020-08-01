import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className='Logo' src={Logo} alt=""/>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu