import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import WorkList from '../components/WorkList';
import Bio from '../components/Bio';


const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  border: 15px solid coral;
  box-sizing: border-box;
`

// const MainVisual = styled.div`
//   width: 50%;
//   height: 85%;
//   background-color: #000;
//   position: absolute;
//   left: 10%;
//   top: 10%;
//   background-image: url('/images/mainimage.JPG');
//   background-size: cover;
//   background-position: bottom right;
//   filter: grayscale(0.8);
// `
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
const Strong = styled.span`
  font-weight: 800;
`

class MainContainer extends Component {
  render(){
    return (
      <MainWrap>
        <Header/>
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
        {/* <MainVisual/> */}
      </MainWrap>
    )
  }
}

export default MainContainer;
