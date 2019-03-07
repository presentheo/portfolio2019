import React, { Component } from 'react';
import styled from 'styled-components';
import { Strong, Weak } from '../styles/helper';
import { PageTitle, PageContent } from '../styles/layout';
import {Col, Row} from 'react-styled-flexboxgrid';
import {FaGithub, FaEnvelopeSquare} from 'react-icons/fa';

const ProfileInfo = styled.div`
  height: 70vh;
  overflow-y: auto;
  padding-right: 10px;
  @media (max-width: 768px){
    width: 100%;
    height: auto;
    padding-right: 0;
    padding-top: 20px;
  }
`
const ProfileInfoWrap = styled.div`
  margin-bottom: 24px;
  padding-right: 20px;
  @media (max-width: 768px){
    padding-right: 0;
  }
`
const ProfileInfoKey = styled.h4`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 12px;
  position: relative;
  &:after{
    content:'';
    display: block;
    width: 115px;
    height: 1.5px;
    background-color: coral;
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`
const ProfileInfoValue = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #888;
  word-break: keep-all;
`
const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-right: 20px;
  & img{
    width: 100%;
  }
  @media (max-width: 768px){
    height: auto;
    padding-right: 0;
  }
`
const ContactInfo = styled.span`
  display: inline-block;
  margin-top: 4px;
  margin-right: 20px;
  & svg{
    font-size: 20px;
    margin-right: 4px;
    vertical-align: middle;
  }
  & span{
    vertical-align: middle;
  }
`
const TechInfoListWrap = styled.div`
  position: relative;
`
const TechInfoWrap = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 12px 16px;
  margin-bottom: 12px;
`
const TechInfoKey = styled(ProfileInfoKey)`
  font-size: 16px;
  text-indent: 16px;
  &:before{
    content: '';
    display: block;
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    border: 3px solid coral;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:after{
    display: none;
  }
`
const TechInfoValue = styled(ProfileInfoValue)`
  margin-bottom: 5px;
`

class Profile extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          <Weak>저는 </Weak><Strong>이런 사람</Strong><Weak>입니다.</Weak>
        </PageTitle>
        <PageContent>
          <Row>
            <Col md={6} xs={12}>
              <ProfileImage>
                <img src="/images/profile-image.JPG" alt="profile"></img>
              </ProfileImage>
            </Col>
            <Col md={6} xs={12}>
              <ProfileInfo>
                <Row>
                  <Col md={3} xs={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Name</ProfileInfoKey>
                      <ProfileInfoValue>허현재</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                  <Col md={3} xs={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Birth</ProfileInfoKey>
                      <ProfileInfoValue>1990. 12. 09</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                  <Col md={3} xs={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Educated</ProfileInfoKey>
                      <ProfileInfoValue>경희대학교 언론정보학과</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                  <Col md={3} xs={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Language</ProfileInfoKey>
                      <ProfileInfoValue>영어(TOEIC/865), 일본어(JLPT/N2)</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} xs={12}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Like</ProfileInfoKey>
                      <ProfileInfoValue>머릿속에 있던 아이디어가 코드를 통해 화면에 구현되는 순간을 좋아합니다. 새로운 것을 배울 때의 긴장감과 설렘을 좋아합니다. React와 Redux를 활용한 프론트엔드 웹 개발에 관심이 많습니다. 최근에는 Vue와 node.js 백엔드를 공부하고 있습니다.</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                  <Col md={12} xs={12}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Vision</ProfileInfoKey>
                      <ProfileInfoValue>웹 퍼블리셔로 1년간 근무하면서, 개발에 대한 흥미와 열정을 느껴 개발자로 성장하겠다는 목표를 세웠습니다. 이처럼 지금 알고 있는 기술에 만족하지 않고 끊임없이 새로운 것을 배우고 성장하는 개발자가 되고 싶습니다. 나아가, 프론트엔드뿐 아니라 웹 개발 전반을 아우르고 리딩할 수 있는 개발자로 성장하는 것이 저의 목표입니다.</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                </Row>
                <Row>
                </Row>
                <ProfileInfoWrap>
                  <ProfileInfoKey>Contact</ProfileInfoKey>
                  <ProfileInfoValue>
                    <ContactInfo>
                      <a href="https://github.com/presentheo" target="_blank" rel="noopener noreferrer">
                        <FaGithub/><span>https://github.com/presentheo</span>
                      </a>
                    </ContactInfo>
                    <ContactInfo>
                      <a href="mailto:presentheo@gmail.com">
                        <FaEnvelopeSquare/><span>presentheo@gmail.com</span>
                      </a>
                    </ContactInfo>
                  </ProfileInfoValue>
                </ProfileInfoWrap>
                <ProfileInfoWrap>
                  <ProfileInfoKey>Tech</ProfileInfoKey>
                </ProfileInfoWrap>
                <TechInfoListWrap>
                  <ul>
                    <TechInfoWrap>
                      <TechInfoKey>Web</TechInfoKey>
                      <TechInfoValue>웹 브라우저가 서비스를 구현하기 위해 거치는 과정(Critical rendering path)을 이해하고 설명할 수 있습니다. 또한 각 과정에서 발생할 수 있는 문제들을 예측하고 분석할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>API 명세를 읽고 이해할 수 있으며, REST 방식으로 데이터에 접근하여 브라우저에 렌더링할 수 있습니다.</TechInfoValue>
                    </TechInfoWrap>
                    <TechInfoWrap>
                      <TechInfoKey>Javascript</TechInfoKey>
                      <TechInfoValue>웹 브라우저 환경에서 자바스크립트의 동작 방식을 이해하고, 순수한 자바스크립트로 기능 구현이 가능합니다.</TechInfoValue>
                      <TechInfoValue>ECMA Script 6 스펙에서 추가된 문법 요소들(let, const, class, 화살표 함수, 템플릿 문법…)의 도입 배경과 사용법을 이해하고 프로젝트에 적용할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>Node.js와 express를 이용해 간단한 백엔드 서버를 구현할 수 있습니다.</TechInfoValue>
                    </TechInfoWrap>
                    <TechInfoWrap>
                      <TechInfoKey>React.js</TechInfoKey>
                      <TechInfoValue>React.js의 설계 이념과 작동 방식을 이해하고 React 컴포넌트들로 이루어진 서비스를 구현할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>state 관리 도구인 Redux의 작동 방식을 이해하고 프로젝트에 적용할 수 있습니다.</TechInfoValue>
                    </TechInfoWrap>
                    <TechInfoWrap>
                      <TechInfoKey>HTML</TechInfoKey>
                      <TechInfoValue>웹 표준과 웹 접근성을 고려하여 마크업을 작성할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>HTML5에 추가된 시맨틱 태그(header, footer, article…)들의 쓰임새를 이해하고 활용할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>가독성 향상을 위해 각 태그의 쓰임새에 맞는 속성(class, id) 작명 규칙을 만들고 적용할 수 있습니다.</TechInfoValue>
                    </TechInfoWrap>
                    <TechInfoWrap>
                      <TechInfoKey>CSS</TechInfoKey>
                      <TechInfoValue>디자인 시안을 바탕으로 원하는 페이지 디자인을 구현할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>미디어쿼리를 이용해 반응형 웹을 구현할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>CSS 스타일이 브라우저별로 구현되는 범위와 형태를 알고, 크로스브라우징에서 발생하는 문제들을 해결할 수 있습니다.</TechInfoValue>
                    </TechInfoWrap>
                    <TechInfoWrap>
                      <TechInfoKey>Design</TechInfoKey>
                      <TechInfoValue>PC, 태블릿, 모바일 등 다양한 디바이스에 대응하는 디자인 시안을 직접 제작할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>디자인 요소들을 컴포넌트, 모듈 단위로 분리하여 개발 생산성을 향상시킬 수 있습니다.</TechInfoValue>
                    </TechInfoWrap>
                    <TechInfoWrap>
                      <TechInfoKey>etc.</TechInfoKey>
                      <TechInfoValue>Git을 통해 팀원들과 협업한 경험이 있습니다. Git의 구조를 이해하고 있으며 명령어를 사용해 commit, push, pull, merge 등 동작을 수행할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>업무 관리 도구로 Jira를 사용한 경험이 있습니다. 스스로 업무 스케줄을 등록하고 관리할 수 있으며, 업무 진행 상황을 팀원들과 공유할 수 있습니다.</TechInfoValue>
                    </TechInfoWrap>
                  </ul>
                </TechInfoListWrap>
              </ProfileInfo>
            </Col>
          </Row>
          
        </PageContent>
      </div>
    );
  }
}

export default Profile;