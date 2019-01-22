import React, { Component } from 'react';
import styled from 'styled-components';
import { Strong, Weak } from '../styles/helper';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import {FaGithub, FaEnvelopeSquare, FaPhoneSquare} from 'react-icons/fa';

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
  font-size: 3.5vh;
  font-weight: 800;
  margin-bottom: 16px;
  position: relative;
  &:after{
    content:'';
    display: block;
    width: 20vh;
    height: 2px;
    background-color: coral;
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`
const ProfileInfoValue = styled.p`
  font-size: 2.4vh;
  font-weight: 400;
  color: #888;
`
const ProfileImage = styled.div`
  height: 65vh;
  background-image: url("/images/profile-image.JPG");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
`
const ContactInfo = styled.p`
  margin-bottom: 10px;
  & svg{
    font-size: 20px;
    margin-right: 4px;
    vertical-align: middle;
  }
  & span{
    vertical-align: middle;
  }
`

class Profile extends Component {
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
                <ProfileImage>
                </ProfileImage>
              </Col>
              <Col md={5}>
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
                      <ProfileInfoKey>Location</ProfileInfoKey>
                      <ProfileInfoValue>서울, 중랑구</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                  <Col md={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Educated</ProfileInfoKey>
                      <ProfileInfoValue>경희대학교 언론정보학과(졸업)</ProfileInfoValue>
                    </ProfileInfoWrap>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <ProfileInfoWrap>
                      <ProfileInfoKey>Licences</ProfileInfoKey>
                      <ProfileInfoValue>컴퓨터그래픽스운용기능사</ProfileInfoValue>
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
                    <ContactInfo>
                      <a href="tel:010-4127-1462">
                        <FaPhoneSquare/><span>010-4127-1472</span>
                      </a>
                    </ContactInfo>
                  </ProfileInfoValue>
                </ProfileInfoWrap>
              </Col>
            </Row>
          </Grid>
          
        </PageContent>
      </div>
    );
  }
}

export default Profile;