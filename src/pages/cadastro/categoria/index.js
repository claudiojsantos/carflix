import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from  '../../../components/PageDefault';

function CadastroCategoria(){
    return(
        <>
            <PageDefault>
                <h1>Cadastro de Categorias</h1>

                <Link to='/'>Voltar</Link>
            </PageDefault>
        </>
    )
}

export default CadastroCategoria;