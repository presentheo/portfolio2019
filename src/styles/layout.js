import styled from 'styled-components';

export const PageTitle = styled.h2`
  font-size: 7vh;
  position: absolute;
  top: 8vh;
  right: 10vh;
  @media(max-width: 768px){
    position: static;
    font-size: 7vw;
    margin-bottom: 12px;
  }
`
export const PageContent = styled.div`
  width: calc(100vw - 20vh);
  height: 70vh;
  position: absolute;
  left: 10vh;
  bottom: 10vh;
  @media(max-width: 768px){
    position: static;
    width: 100%;
    height: auto;
  }
`
