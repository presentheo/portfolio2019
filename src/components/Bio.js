import React, { Component } from 'react';
import styled from 'styled-components';
import { Strong, Weak } from '../styles/helper';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

const PageTitle = styled.h2`
  font-size: 60px;
  position: absolute;
  top: 10vh;
  right: 10vh;
`
const PageContent = styled.div`
  width: calc(100vw - 20vh);
  height: 60vh;
  position: absolute;
  left: 10vh;
  bottom: 10vh;
`
const BioInfoWrap = styled.div`
  margin-bottom: 24px;
`
const BioInfoKey = styled.h4`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
  position: relative;
  &:after{
    content:'';
    display: block;
    width: 140px;
    height: 2px;
    background-color: coral;
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`
const BioInfoValue = styled.p`
  font-size: 20px;
  font-weight: 100;
`

class Bio extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          <Weak>저는 </Weak><Strong>이런 사람</Strong><Weak>입니다.</Weak>
        </PageTitle>
        <PageContent>
          <Grid fluid={true}>
            <Row>
              <Col md={7}>
                <img src="/images/profile-image.JPG"></img>
              </Col>
              <Col md={5}>
                <Row>
                  <Col md={6}>
                    <BioInfoWrap>
                      <BioInfoKey>Name</BioInfoKey>
                      <BioInfoValue>허현재</BioInfoValue>
                    </BioInfoWrap>
                  </Col>
                  <Col md={6}>
                    <BioInfoWrap>
                      <BioInfoKey>Birth</BioInfoKey>
                      <BioInfoValue>1990. 12. 09</BioInfoValue>
                    </BioInfoWrap>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <BioInfoWrap>
                      <BioInfoKey>Location</BioInfoKey>
                      <BioInfoValue>서울, 중랑구</BioInfoValue>
                    </BioInfoWrap>
                  </Col>
                  <Col md={6}>
                    <BioInfoWrap>
                      <BioInfoKey>Educated</BioInfoKey>
                      <BioInfoValue>경희대학교 언론정보학과(졸업)</BioInfoValue>
                    </BioInfoWrap>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <BioInfoWrap>
                      <BioInfoKey>Licences</BioInfoKey>
                      <BioInfoValue>컴퓨터그래픽스운용기능사</BioInfoValue>
                    </BioInfoWrap>
                  </Col>
                  <Col md={6}>
                    <BioInfoWrap>
                      <BioInfoKey>Language</BioInfoKey>
                      <BioInfoValue>영어(TOEIC/865), 일본어(JLPT/N2)</BioInfoValue>
                    </BioInfoWrap>
                  </Col>
                </Row>
                <BioInfoWrap>
                  <BioInfoKey>Strength</BioInfoKey>
                  <BioInfoValue>무엇이든 배우고 공부하는 자세, 주어진 일은 끝까지 해내는 책임감</BioInfoValue>
                </BioInfoWrap>
                <BioInfoWrap>
                  <BioInfoKey>Like</BioInfoKey>
                  <BioInfoValue>소희가 세상에서 제일 좋아😘 😘 😘 😘 </BioInfoValue>
                </BioInfoWrap>
              </Col>
            </Row>
          </Grid>
          
        </PageContent>
      </div>
    );
  }
}

export default Bio;