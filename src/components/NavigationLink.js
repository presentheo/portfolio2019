import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  margin-right: 30px;
  &:hover{
    color: coral;
  }
  &.active{
    color: coral;
  }
`
class NavigationLink extends Component {

  handleClick = () => {
    this.props.onActive();
  }

  render() {
    return (
      <NavLink
        onClick={this.handleClick}
        className={this.props.active? 'active' : ''}
        to={this.props.linkTo}>{this.props.text}</NavLink>
    );
  }
}
export default NavigationLink;