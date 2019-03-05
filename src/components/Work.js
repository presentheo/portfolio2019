import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';

const WorkWrap = styled.li`
  padding: 30px;
  border-bottom: 1px solid rgba(120,120,120, 0.2);
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px){
    padding: 15px;
  }
`
const WorkAnchor = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
`
const WorkImage = styled.img`
  width: 100%;
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
  color: #aaa;
  font-weight: 400;
`

class Work extends Component {
  render() {
    const work = this.props.work;

    return (
      <WorkWrap>
        <WorkAnchor to={`/detail/${work.id}`}>
          <Row>
            <Col md={5}>
              <WorkImage src={`/images/cover-${work.id}.png`} alt="placeholder"></WorkImage>
            </Col>
            <Col md={7}>
              <WorkTitle>{work.title}</WorkTitle>
              <WorkDescription>{work.description}</WorkDescription>
              <WorkStacksWrap>
                <p>Tech Stacks</p>
                <WorkStacks>{work.stacks}</WorkStacks>
              </WorkStacksWrap>
            </Col>
          </Row>
        </WorkAnchor>
      </WorkWrap>
    );
  }
}

export default Work;