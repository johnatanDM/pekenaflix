import React, {useState} from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import {TitleBase} from '../../../components/Form';
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
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(initialValues)
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
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nomeCategoria}`}>
            {categoria}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
