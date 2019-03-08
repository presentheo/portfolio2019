import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  /* background-color: ${props => props.active ? 'black' : 'white'}; */
  transform: ${props => props.active ? 'translateX(0)' : 'translateX(10%)'};
  opacity: ${props => props.active ? '1' : '0'};
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
