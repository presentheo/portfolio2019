import React, { Component } from 'react';
import styled from 'styled-components';

const PageTitle = styled.p`
  font-size: 60px;
  position: absolute;
  top: 10vh;
  right: 10vh;
`

class Bio extends Component {
  render() {
    return (
      <div>
        <PageTitle>
          저는 이런 사람이에요.
        </PageTitle>
      </div>
    );
  }
}

export default Bio;