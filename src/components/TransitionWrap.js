import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin: -15px;
  transition: all 0.5s cubic-bezier(0,.69,0,1.47);
  transform: ${props => props.active ? 'translateX(0)' : 'translateX(10%)'};
  opacity: ${props => props.active ? '1' : '0'};
  @media (max-width: 768px){
    width: auto;
    height: auto;
    margin: 0;
  }
`

class TransitionWrap extends Component {

  constructor(props){
    super(props);
    this.state = {
      active : false
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({active: true})
    }, 100)
  }
  componentWillUnmount(){
    setTimeout(()=>{
      this.setState({active: false})
    }, 100)
  }

  render() {
    return (
      <Wrap active={this.state.active}>
        {this.props.children}
      </Wrap>
    );
  }
}

export default TransitionWrap;
