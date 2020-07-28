import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
import {LogoImage, MenuWrapper} from './styles'


function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" src={Logo} alt="PekenaFlix"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    )
}


export default Menu