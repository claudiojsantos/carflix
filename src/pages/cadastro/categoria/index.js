import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from  '../../../components/PageDefault';

function CadastroCategoria(){
    return(
        <>
            <PageDefault>
                <h1>Cadastro de Categorias</h1>

                <form action="">
                    <label htmlFor="">Categoria:
                    <input type="text"/>
                    </label>

                    <button>Cadastrar</button>
                </form>

                <Link to='/'>Voltar</Link>
            </PageDefault>
        </>
    )
}

export default CadastroCategoria;