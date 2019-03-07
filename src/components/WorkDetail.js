import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from '../styles/buttons';

const DescTitle = styled.h2`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 768px){
    font-size: 28px;
  }
`
const DescText = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  color: #888;
`
const DescStacks = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #aaa;
`
const DescButtons = styled.div`
  display: flex;
  &>a{
    margin-right: 10px;
  }
`

const ImageWrap = styled.div`
  width: calc(60vw - 10vh);
  height: 75vh;
  position: absolute;
  top: 20vh;
  left: 10vh; 
  overflow: auto;
  &>img{
    display: block;
    width: 100%;
  }
  @media (max-width: 768px){
    position: static;
    width: 100%;
    height: auto;
  }
`
const DescWrap = styled.div`
  width: calc(40vw - 10vh);
  position: absolute;
  top: 20vh;
  right: 10vh;
  padding-left: 30px;
  box-sizing: border-box;
  @media (max-width: 768px){
    position: static;
    width: 100%;
    padding-left: 0;
    padding-top: 20px;
    padding-bottom: 30px;
  }
`

class WorkDetail extends Component {

  setItemById = (itemArr) => {
    for(let i = 0; i<itemArr.length; i++) {
      if (itemArr[i].id === this.props.match.params.id) {
        return itemArr[i];
      }
    }
  }
  render() {

    const work = this.setItemById(this.props.workList);

    return (
      <div>
        <DescWrap>
          <DescTitle>{work.title}</DescTitle>
          <DescText>{work.description}</DescText>
          <DescStacks>
            <p style={{marginBottom:'4px', fontWeight:'600', color:'#000'}}>Tech Stacks</p>
            <p>{work.stacks}</p>
          </DescStacks>
          <DescButtons>
            {work.pageLink !== '' ? <a href={work.pageLink} target="_blank" rel="noopener noreferrer"><Button>보러가기</Button></a> : ''}
            {work.githubLink !== '' ? <a href={work.githubLink} target="_blank" rel="noopener noreferrer"><Button>Github</Button></a> : ''}
          </DescButtons>
        </DescWrap>
        <ImageWrap>
          <img src={`/images/preview-${work.id}.png`} alt={work.id}></img>
        </ImageWrap>
      </div>
    );
  }
}

export default WorkDetail;