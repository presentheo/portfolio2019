// 기본 import
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

// 스타일 import
import styled from 'styled-components';
import { Strong } from '../styles/helper';

// 컴포넌트 import
import Header from '../components/Header';
import WorkList from '../components/WorkList';
import Bio from '../components/Bio';

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  border: 15px solid coral;
  box-sizing: border-box;
`
const MainTitle = styled.h1`
  font-size: 13vh;
  font-weight: 100;
  line-height: 1.1;
  letter-spacing: -1vh;
  position: absolute;
  top: 50vh;
  left: 10vh;
  transform: translateY(-50%);
`

class MainContainer extends Component {
  render(){
    return (
      <MainWrap>
        <Header/>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper">
          <Route exact path="/" render={() => {
            return (
              <div>
                <MainTitle><p><Strong>안녕하세요</Strong></p>
                  <p>프론트엔드</p>
                  <p>웹 개발자</p>
                  <p><Strong>허현재</Strong>입니다</p>
                </MainTitle>
                <WorkList></WorkList>
              </div>
            )
          }}></Route>
          <Route path="/bio" component={Bio}></Route>
        </AnimatedSwitch>
      </MainWrap>
    )
  }
}

export default MainContainer;
