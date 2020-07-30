import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components'

const AppWrapper = styled.div`
  background: var(--black);  
`
function Home() {
  return (
    <AppWrapper >
        <BannerMain 
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription={"Este é um dos vídeos mais importantes do canal Manual do Mundo em 2020! O mundo está em uma corrida para conseguir o quanto antes uma vacina contra a COVID-19 e isso tem gerado muitas dúvidas. Então, nós fomos atrás de respostas! Por que demora tanto para desenvolver uma vacina? A vacina é feita com o próprio vírus?? Por que é tão difícil conseguir uma vacina??? Confira agora as respostas para estas e outras perguntas!!!"}
          />
      <PageDefault>

          
          {dadosIniciais.categorias.map((cat, i) => {
            return(<Carousel key={i}
              ignoreFirstVideo
              category={cat}
            /> )
          })}


        </PageDefault>
    </AppWrapper>
  );
}

export default Home;
