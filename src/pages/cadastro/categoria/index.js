import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['teste']);

  const initialValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [values, setValues] = useState([initialValues]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categorias:
          {' '}
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();

          setValues([
            ...categorias,
            values.name,
          ]);
        }}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="FormGridCategory">
              <Form.Label>Categoria:</Form.Label>
              <Form.Control name="nome" placeholder="Categoria" value={values.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="FormGridColor">
              <Form.Label>Cor:</Form.Label>
              <Form.Control name="cor" placeholder="Cor" type="color" value={values.color} onChange={handleChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="FormGridDescription">
              <Form.Label>Descrição:</Form.Label>
              <Form.Control name="descricao" as="textarea" placeholder="Descrição" rows="5" value={values.description} onChange={handleChange} />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="Submit">Cadastrar</Button>
        </form>

        <ul>
          {categorias.map((categoria, index) => (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>

        <Link to="/">Voltar</Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
