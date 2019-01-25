import React, { Component } from 'react';
import styled from 'styled-components';
import { Strong, Weak } from '../styles/helper';
import {Col, Row} from 'react-styled-flexboxgrid';
import {FaGithub, FaEnvelopeSquare} from 'react-icons/fa';

const PageTitle = styled.h2`
  font-size: 8vh;
  position: absolute;
  top: 10vh;
  right: 10vh;
`
const PageContent = styled.div`
  width: calc(100vw - 20vh);
  height: 65vh;
  position: absolute;
  left: 10vh;
  bottom: 10vh;
`
const ProfileInfoWrap = styled.div`
  margin-bottom: 24px;
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
`
const ProfileImage = styled.div`
  width: 100%;
  height: 65vh;
  background-image: url("/images/profile-image.JPG");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
`
const ContactInfo = styled.div`
  margin-bottom: 6px;
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
  height: 65vh;
  position: relative;
  overflow: auto;
`
const TechInfoWrap = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 14px 20px;
  margin-bottom: 20px;
  margin-right: 10px;
`
const TechInfoKey = styled(ProfileInfoKey)`
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
// const TimelineLine = styled.div`
//   width: 1px;
//   height: 100%;
//   background-color: coral;
//   position: absolute;
//   left: 0;
// `

class Profile extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          <Weak>저는 </Weak><Strong>이런 사람</Strong><Weak>입니다.</Weak>
        </PageTitle>
        <PageContent>
            <Row>
              <Col md={3}>
                <ProfileImage>
                </ProfileImage>
              </Col>
              <Col md={3}>
                <Row>
                  <Col md={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Name</ProfileInfoKey>
                      <ProfileInfoValue>허현재</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                  <Col md={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Birth</ProfileInfoKey>
                      <ProfileInfoValue>1990. 12. 09</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Educated</ProfileInfoKey>
                      <ProfileInfoValue>경희대학교 언론정보학과(졸업)</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                  <Col md={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Language</ProfileInfoKey>
                      <ProfileInfoValue>영어(TOEIC/865), 일본어(JLPT/N2)</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
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
              </Col>
              <Col md={6}>
                <TechInfoListWrap>
                  <ul>
                    <TechInfoWrap>
                      <TechInfoKey>Javascript</TechInfoKey>
                      <TechInfoValue>웹 환경에서 자바스크립트의 동작 방식을 이해하고, 순수한 자바스크립트로 기능 구현이 가능합니다.</TechInfoValue>
                      <TechInfoValue>ECMA Script 6 스펙에서 추가된 문법 요소들(let, const, class, 화살표 함수, 템플릿 문법…)의 도입 배경과 사용법을 이해하고 프로젝트에 적용할 수 있습니다.</TechInfoValue>
                      <TechInfoValue>Node.js 환경에서 프로젝트를 구축해본 경험이 있으며, npm을 이용해 Node.js 패키지를 관리할 수 있습니다. Webpack을 이용한 프로젝트 모듈화와 코드 번들링 경험이 있습니다.</TechInfoValue>
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
                  </ul>
                </TechInfoListWrap>

              </Col>
            </Row>
          
        </PageContent>
      </div>
    );
  }
}

export default Profile;