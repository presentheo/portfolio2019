import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.ul`
  position: fixed;
  top: 10vh;
  left: 10vh;
  display: flex;
  font-size: 14px;
`
const NavLink = styled(Link)`
  margin-right: 30px;
  &:hover{
    color: coral;
  }
`

class Header extends Component {
  render() {
    return (
      <Nav>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/bio">biography</NavLink></li>
        <li><NavLink to="/tech">tech</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </Nav>
    );
  }
}

export default Header;
