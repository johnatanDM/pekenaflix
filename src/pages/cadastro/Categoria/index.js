import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import { TitleBase } from '../../../components/Form';
import FormField from '../../../components/FormField';

const MainForm = styled.form` 
    padding-right: 5%;
    padding-left: 5%;
`;
function CadastroCategoria() {
  const initialValues = {
    nomeCategoria: '',
    descricaoCategoria: '',
    corCategoria: '#ff0000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    const { value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    const URL = 'http://192.168.100.14:8080/categorias';
    fetch(URL)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta,
        ]);
      });
  },[]);

  return (
    <PageDefault>
      <TitleBase>Nova Categoria</TitleBase>
      <MainForm onSubmit={(event) => {
        event.preventDefault();
        setCategorias([...categorias, values.nomeCategoria]);
        setValues(initialValues);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="input"
          name="nomeCategoria"
          value={values.nomeCategoria}
          onChange={handleChange}
        />
        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="descricaoCategoria"
          value={values.descricaoCategoria}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="corCategoria"
          value={values.corCategoria}
          onChange={handleChange}
        />
        <Button as="button" className="ButtonLink" type="submit">Salvar</Button>
      </MainForm>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            { categoria.nome }
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
