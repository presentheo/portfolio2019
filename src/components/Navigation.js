import React, { Component } from 'react';
import styled from 'styled-components';
import NavigationLink from './NavigationLink';

const Nav = styled.ul`
  position: absolute;
  top: 10vh;
  left: 10vh;
  display: flex;
  font-size: 14px;
  z-index: 1000;
  @media (max-width: 768px){
    position: static;
    margin-bottom: 20px;
  }
`

const initialState = {
  navLinks: [
    {linkTo: "/", text: "home", active: false},
    {linkTo: "/profile", text: "profile", active: false},
    {linkTo: "/experience", text: "experience", active: false}
  ]
}

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  onActive = (index) => {
    this.setState(initialState);
    this.setState({
      navLinks: [
        ...initialState.navLinks.slice(0, index),
        {...initialState.navLinks[index], active: true},
        ...initialState.navLinks.slice(index+1, initialState.navLinks.length)
      ]
    })
  }

  componentDidMount(){
    this.onActive(0)
  }

  render() {
    return (
      <Nav>
        {this.state.navLinks.map((e, i) => {
          return <li key={i}><NavigationLink 
            onActive={() => this.onActive(i)}
            linkTo={e.linkTo} 
            text={e.text} 
            active={e.active}></NavigationLink></li>
        })}
      </Nav>
    );
  }
}

export default Navigation;
