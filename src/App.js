import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import MainContainer from './containers/MainContainer';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400');
  body{font-family: 'Noto Sans KR', sans-serif;}
  a{
    color: inherit;
    text-decoration: none;
    &:hover{
      color: inherit;
      text-decoration: none;
    }
  }
  p{
    line-height: 1.4;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalStyle/>
          <MainContainer/>
        </div>
      </Router>
    );
  }
}

export default App;
