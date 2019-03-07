import React, { Component } from 'react';
import styled from 'styled-components';
import { Strong, Weak } from '../styles/helper';
import { PageTitle, PageContent } from '../styles/layout';
import {Col, Row} from 'react-styled-flexboxgrid';

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  &:after{
    content:'';
    display: block;
    width: 60px;
    height: 3px;
    background-color: coral;
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`

const TimelineWrap = styled.div`
  height: calc(70vh - 50px);
  position: relative;
  padding-left: 40px;
  padding-right: 10px;
  overflow: auto;
`
const TimelineCard = styled.div`
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  position: relative;
  margin-bottom: 10px;
  /* 선 */
  &:before{
    content: "";
    display: block;
    width: 4px;
    height: calc(100% + 10px);
    background-color: coral;
    position: absolute;
    top: 10px;
    left: -31px;
  }
  /* 점 */
  &:after{
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 4px solid coral;
    background-color: white;
    position: absolute;
    top: 8px;
    left: -39px;
  }
  &:last-of-type{
    &:before{
      height: 100%;
    }
  }
`
const TimelineTitleWrap = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`
const TimelineDate = styled.p`
  color: #888;
  font-size: 14px;
`
const TimelinePosition = styled.h3`
  font-size: 22px;
  font-weight: 600;
  padding: 6px 0;
`
const TimelineTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #888;
`

const TimelineContentWrap = styled.div`
  padding-top: 10px;
  & p{
    color: #444;
    font-size: 14px;
    margin-bottom: 6px;
    position: relative;
    padding-left: 12px;
    &:before{
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      background-color: coral;
      left: 0;
      top: 7px;
    }
  }
`

class Experience extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          <Weak>저는 </Weak><Strong>이런 경험</Strong><Weak>이 있습니다.</Weak>
        </PageTitle>
        <PageContent>
            <Row>
              <Col md={6} xs={12}>
                <Title>Career</Title>
                <TimelineWrap>
                  <TimelineCard>
                    <TimelineTitleWrap>
                      <TimelineDate>2018.9</TimelineDate>
                      <TimelinePosition>웹 디자인, 웹 퍼블리싱(외주)</TimelinePosition>
                      <TimelineTitle>(주)누보리치</TimelineTitle>
                    </TimelineTitleWrap>
                    <TimelineContentWrap>
                        <p>디자인 시안을 바탕으로 전체적인 웹 페이지의 퍼블리싱 작업을 수행했습니다.</p>
                        <p>메인 페이지, 회사 소개 페이지 등의 디자인 리뉴얼 작업을 수행했습니다.</p>
                    </TimelineContentWrap>
                  </TimelineCard>
                  <TimelineCard>
                    <TimelineTitleWrap>
                      <TimelineDate>2017.4 ~ 2018.5</TimelineDate>
                      <TimelinePosition>웹 디자인, 웹 퍼블리싱</TimelinePosition>
                      <TimelineTitle>(주)플러시</TimelineTitle>
                    </TimelineTitleWrap>
                    <TimelineContentWrap>
                        <p>서비스 기획 단계부터 런칭, 운영까지 모든 과정에 참여하여 전체적인 디자인의 방향성을 주도했습니다.</p>
                        <p>사용자 페이지, 관리자 페이지, 개발자용 페이지 등 서비스에 필요한 모든 웹 페이지의 디자인과 퍼블리싱 작업을 담당했습니다.</p>
                        <p>Amazon S3, Cloudfront 서비스를 이용해 웹 서비스의 리소스(이미지, 영상 등)를 관리했습니다.</p>
                    </TimelineContentWrap>
                  </TimelineCard>
                </TimelineWrap>
              </Col>
              <Col md={6} xs={12}>
                <Title>Education</Title>
                <TimelineWrap>
                  <TimelineCard>
                    <TimelineTitleWrap>
                      <TimelineDate>2018.10</TimelineDate>
                      <TimelinePosition>React & Express 를 이용한 웹 어플리케이션 개발하기</TimelinePosition>
                      <TimelineTitle>인프런</TimelineTitle>
                    </TimelineTitleWrap>
                    <TimelineContentWrap>
                        <p>React와 Redux를 이용한 SPA 개발을 배우고 실습했습니다.</p>
                        <p>node.js와 express를 이용해 백엔드 서버를 구축하는 방법을 배우고 실습했습니다.</p>
                    </TimelineContentWrap>
                  </TimelineCard>
                  <TimelineCard>
                    <TimelineTitleWrap>
                      <TimelineDate>2018.9 ~ 2018.10</TimelineDate>
                      <TimelinePosition>자바스크립트 정복 캠프</TimelinePosition>
                      <TimelineTitle>패스트캠퍼스</TimelineTitle>
                    </TimelineTitleWrap>
                    <TimelineContentWrap>
                        <p>자바스크립트의 언어적 특성과 작동 원리를 학습했습니다.</p>
                        <p>ES6의 도입 배경과 새로운 문법 요소들을 학습했습니다.</p>
                        <p>React, Angular 라이브러리의 설계 구조와 사용법을 배우고 실습했습니다.</p>
                    </TimelineContentWrap>
                  </TimelineCard>
                  <TimelineCard>
                    <TimelineTitleWrap>
                      <TimelineDate>2016.9 ~ 2017.3</TimelineDate>
                      <TimelinePosition>NCS 기반 웹디자인, 웹퍼블리싱 교육</TimelinePosition>
                      <TimelineTitle>더조은컴퓨터아트학원</TimelineTitle>
                    </TimelineTitleWrap>
                    <TimelineContentWrap>
                        <p>웹 디자인의 기초와 다양한 기기에 대응하는 반응형 웹 디자인을 배웠습니다.</p>
                        <p>HTML, CSS를 이용한 웹 퍼블리싱과 jQuery를 이용한 기초적인 DOM 조작을 배웠습니다.</p>
                    </TimelineContentWrap>
                  </TimelineCard>
                </TimelineWrap>
              </Col>
            </Row>
          
        </PageContent>
      </div>
    );
  }
}

export default Experience;