import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import { TitleBase, MainForm } from '../../../components/Form';
import FormField from '../../../components/FormField';
import useForm from '../../../components/Form/useForm';
import { URL_BACKEND } from '../../../config';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    link: '',
    descricao: '',
    cor: '#ff0000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const URL_TOP = `${URL_BACKEND}/categorias`;
    fetch(URL_TOP)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <TitleBase>Nova Categoria</TitleBase>
      <MainForm onSubmit={(event) => {
        event.preventDefault();
        categoriasRepository.create({
          titulo: values.titulo,
          url: values.url,
          cor: values.cor,
        }).then(() => {
          clearForm(initialValues);
        });
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="input"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Link"
          type="input"
          name="link"
          value={values.link}
          onChange={handleChange}
        />
        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
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
          <li key={`${categoria.id}`}>
            { categoria.titulo }
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
