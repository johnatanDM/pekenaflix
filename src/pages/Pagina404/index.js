import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components'
const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

function Pagina404() {
  return (
    <div style={{background: '#141414'}}>
        <PageDefault>
            <div>
                <ResponsiveIframe 
                title="jogo404" 
                src="https://mariosouto.com/flappy-bird-devsoutinho/" 
                width="340" 
                height="600" />
            </div>
        </PageDefault>
    </div>
  );
}

export default Pagina404;
