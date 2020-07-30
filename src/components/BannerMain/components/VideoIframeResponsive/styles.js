import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  }
  &:after{
    bottom: 0px;
    background: linear-gradient(0deg, rgb(0, 0, 0) 0%, transparent 100%);
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;