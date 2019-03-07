import React, { Component } from 'react';
import styled from 'styled-components';
import Work from './Work';

const WorkListWrap = styled.div`
  max-height: calc(100vh - 30px);
  border-left: 1px solid rgba(120,120,120, 0.2);
  box-sizing: border-box;
  overflow: auto;
  @media (max-width: 768px){
    max-height: none;
    width: 100%;
    border: 0;
  }
`

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workList: this.props.workList
    };
  }
  render() {
    return (
      <WorkListWrap>
        <ul>
          {this.state.workList.map((work, i) => {
            return <Work work={work} key={i}/>
          })}
        </ul>
      </WorkListWrap>
    );
  }
}

export default WorkList;