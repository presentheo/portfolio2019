// 기본 import
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

// 스타일 import
import styled from 'styled-components';
import { Strong, Weak } from '../styles/helper';

// 컴포넌트 import
import Navigation from '../components/Navigation';
import WorkList from '../components/WorkList';
import WorkDetail from '../components/WorkDetail';
import Bio from '../components/Bio';

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  border: 15px solid coral;
  box-sizing: border-box;
`
const MainTitle = styled.h1`
  font-size: 13vh;
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
        <Navigation/>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper">
          <Route exact path="/" render={() => {
            return (
              <div>
                <MainTitle>
                  <p><Strong>안녕하세요!</Strong></p>
                  <p><Weak>프론트엔드</Weak></p>
                  <p><Weak>웹 개발자</Weak></p>
                  <p><Strong>허현재</Strong><Weak>입니다.</Weak></p>
                </MainTitle>
                <WorkList></WorkList>
              </div>
            )
          }}></Route>
          <Route path="/bio" component={Bio}></Route>
          <Route path="/detail" component={WorkDetail}></Route>
        </AnimatedSwitch>
      </MainWrap>
    )
  }
}

export default MainContainer;
