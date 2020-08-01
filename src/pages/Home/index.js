import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

const AppWrapper = styled.div`
  background: var(--black);  
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <AppWrapper>
      {dadosIniciais.length === 0
        ? (<div>Loading...</div>)
        : (
          <>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription="Este é um dos vídeos mais importantes do canal Manual do Mundo em 2020! O mundo está em uma corrida para conseguir o quanto antes uma vacina contra a COVID-19 e isso tem gerado muitas dúvidas. Então, nós fomos atrás de respostas! Por que demora tanto para desenvolver uma vacina? A vacina é feita com o próprio vírus?? Por que é tão difícil conseguir uma vacina??? Confira agora as respostas para estas e outras perguntas!!!"
            />
            <PageDefault>
              {dadosIniciais.map((cat) => (
                <Carousel
                  key={cat.id}
                  ignoreFirstVideo
                  titulo={cat.titulo}
                  cor={cat.cor}
                  linkExtra={cat.link_extra}
                  videos={cat.videos}
                  category={cat}
                />
              ))}
            </PageDefault>
          </>
        )}
    </AppWrapper>
  );
}

export default Home;
