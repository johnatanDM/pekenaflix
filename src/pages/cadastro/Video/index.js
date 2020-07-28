import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo() {
    return(
        <PageDefault>
            <h1>Página de cadastro de Vídeo</h1>
            <Link to="/cadastro/categoria">
                Cadatrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo