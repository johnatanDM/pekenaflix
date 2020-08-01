import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import { TitleBase, MainForm } from '../../../components/Form';
import FormField from '../../../components/FormField';
import useForm from '../../../components/Form/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'video padrao',
    url: 'https://www.youtube.com/watch?v=78WkQObqp3U',
    categoria: 'teste',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);
  return (
    <PageDefault>
      <TitleBase>Página de cadastro de Vídeo</TitleBase>

      <MainForm onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('cadastrou');
            history.push('/');
          });
        // postCategoria(values);
        // setCategorias([...categorias, values.titulo]);
        // clearForm(initialValues);
      }}
      >
        <FormField
          label="Nome do Vídeo"
          type="input"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="input"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="input"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <Button as="button" className="ButtonLink" type="submit">Salvar</Button>
      </MainForm>

      <Link to="/cadastro/categoria">
        Cadatrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
