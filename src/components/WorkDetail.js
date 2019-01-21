import React, { Component } from 'react';
import styled from 'styled-components';

const WorkTitle = styled.h2`
  font-size: 42px;
`

class WorkDetail extends Component {
  render() {
    return (
      <div>
        <WorkTitle>갈피</WorkTitle>
      </div>
    );
  }
}

export default WorkDetail;