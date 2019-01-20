import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WorkWrap = styled.li`
  padding: 30px;
  border-bottom: 1px solid rgba(120,120,120, 0.2);
  &:hover {
    opacity: 0.8;
  }
`
const WorkAnchor = styled(Link)`
  display: flex;
  position: relative;
`
const WorkImage = styled.img`
  margin-right: 20px;
`
const WorkTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 12px;
`
const WorkDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #888;
`
const WorkStacksWrap = styled.div`
  position: absolute;
  bottom: 3px;
  font-size: 13px;
  font-weight: 600;
`
const WorkStacks = styled.p`
  margin-top: 5px;
  color: #aaa;
  font-weight: 400;
`

class Work extends Component {
  render() {
    const work = this.props.work;

    return (
      <WorkWrap>
        <WorkAnchor to="/detail">
          <WorkImage src={`/images/cover-${work.id}.png`} alt="placeholder"></WorkImage>
          <div>
            <WorkTitle>{work.title}</WorkTitle>
            <WorkDescription>{work.description}</WorkDescription>
            <WorkStacksWrap>
              <p>Tech Stacks</p>
              <WorkStacks>{work.stacks}</WorkStacks>
            </WorkStacksWrap>
          </div>
        </WorkAnchor>
      </WorkWrap>
    );
  }
}

export default Work;