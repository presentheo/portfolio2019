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
import Profile from '../components/Profile';
import Career from '../components/Career';

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  border: 15px solid coral;
  box-sizing: border-box;
`
const MainTitle = styled.h1`
  font-size: 13vh;
  letter-spacing: -1vh;
  position: absolute;
  top: 50vh;
  left: 10vh;
  transform: translateY(-50%);
  &>p{
    line-height: 1.1;
  }
`

class MainContainer extends Component {
  render(){
    const workList = [
      {
        id: 'miseoneclick',
        title: '원클릭 미세먼지', 
        description: '전국 각 시도별 미세먼지 농도를 실시간/시간별/일별로 확인할 수 있는 개인 프로젝트입니다. 정부 공공데이터포털(www.data.go.kr)의 open API와 node.js를 활용했습니다.',
        stacks: 'React.js, node.js, REST API',
        pageLink: '/projects/mise-oneclick',
        githubLink: 'https://github.com/presentheo/mise-oneclick'
      },
      {
        id: 'galphi',
        title: '갈피', 
        description: '독서 일기장 컨셉의 개인 프로젝트를 제작했습니다. 책마다 날짜별로 코멘트를 남길 수 있습니다.',
        stacks: 'React.js',
        pageLink: '/projects/galphi',
        githubLink: 'https://github.com/presentheo/galphi'
      },
      {
        id: 'reduxrecord',
        title: 'Redux Record 🎧', 
        description: '음반 쇼핑몰 컨셉의 개인 프로젝트를 제작했습니다. 장바구니에 음반을 담고 주문할 수 있습니다.',
        stacks: 'React.js, Redux',
        pageLink: '/projects/redux-record',
        githubLink: 'https://github.com/presentheo/redux-commercial'
      },
      {
        id: 'jsboard',
        title: 'js-board', 
        description: '게시판 컨셉의 개인 프로젝트를 제작했습니다. 게시물과 댓글을 localStorage에 저장하고 불러올 수 있습니다.',
        stacks: 'jQuery',
        pageLink: '/projects/js-board',
        githubLink: 'https://github.com/presentheo/board'
      },
      {
        id: 'nouveauriche',
        title: 'Nouveauriche',
        description: `P2P금융 기업 <누보리치>의 웹 퍼블리싱(외주) 작업을 진행했습니다.`,
        stacks: 'HTML, CSS',
        pageLink: 'https://www.nouveauriche.kr/',
        githubLink: ''
      },
      {
        id: 'plusy',
        title: 'Plusy',
        description: `P2P금융 기업 '플러시'의 웹 디자인과 웹 퍼블리싱 업무를 수행했습니다. (현재 서비스가 종료되어 접속이 불가능합니다)`,
        stacks: 'HTML, CSS',
        pageLink: '',
        githubLink: ''
      },
      {
        id: 'mmca',
        title: '국립현대미술관 서울관',
        description: `국립현대미술관 서울관의 홈페이지를 리디자인한 개인 프로젝트입니다.`,
        stacks: 'HTML, CSS',
        pageLink: '/projects/mmca',
        githubLink: ''
      },
      {
        id: 'brompton',
        title: 'Brompton',
        description: `영국의 자전거 브랜드인 Brompton의 홈페이지를 리디자인한 개인 프로젝트입니다.`,
        stacks: 'HTML, CSS',
        pageLink: '/projects/brompton',
        githubLink: ''
      }
    ]

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
                <WorkList workList={workList}></WorkList>
              </div>
            )
          }}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/career" component={Career}></Route>
          <Route path="/detail/:id" render={(props) => {return <WorkDetail workList={workList} {...props}/>}}></Route>
        </AnimatedSwitch>
      </MainWrap>
    )
  }
}

export default MainContainer;
