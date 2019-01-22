import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from '../styles/buttons';

const DescTitle = styled.h2`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
`
const DescText = styled.p`
  margin-bottom: 40px;
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
  &>button{
    margin-right: 10px;
  }
`

const ImageWrap = styled.div`
  width: calc(60vw - 10vh);
  height: 75vh;
  position: fixed;
  top: 20vh;
  left: 10vh; 
  overflow: auto;
  &>img{
    display: block;
    width: 100%;
  }
`
const DescWrap = styled.div`
  width: calc(40vw - 10vh);
  position: absolute;
  top: 20vh;
  right: 10vh;
  padding-left: 30px;
  box-sizing: border-box;
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
        <ImageWrap>
          <img src={`/images/preview-${work.id}.png`} alt={work.id}></img>
        </ImageWrap>
        <DescWrap>
          <DescTitle>{work.title}</DescTitle>
          <DescText>{work.description}</DescText>
          <DescStacks>
            <p style={{'margin-bottom':'4px', 'font-weight':'600', 'color':'#000'}}>Tech Stacks</p>
            <p>{work.stacks}</p>
          </DescStacks>
          <DescButtons>
            {work.pageLink !== '' ? <Button><a href={work.pageLink} target="_blank" rel="noopener noreferrer">보러가기</a></Button> : ''}
            {work.githubLink !== '' ? <Button><a href={work.githubLink} target="_blank" rel="noopener noreferrer">Github</a></Button> : ''}
          </DescButtons>
        </DescWrap>
      </div>
    );
  }
}

export default WorkDetail;