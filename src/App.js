import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  return (
    <div style={{background: '#141414'}}>
      <Menu />
      <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Este é um dos vídeos mais importantes do canal Manual do Mundo em 2020! O mundo está em uma corrida para conseguir o quanto antes uma vacina contra a COVID-19 e isso tem gerado muitas dúvidas. Então, nós fomos atrás de respostas! Por que demora tanto para desenvolver uma vacina? A vacina é feita com o próprio vírus?? Por que é tão difícil conseguir uma vacina??? Confira agora as respostas para estas e outras perguntas!!!"}
        />

        
        {dadosIniciais.categorias.map((cat, i) => {
          return(<Carousel key={i}
            ignoreFirstVideo
            category={cat}
          /> )
        })}


        <Footer />
    </div>
  );
}

export default App;
