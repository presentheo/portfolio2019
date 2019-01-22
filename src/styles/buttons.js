import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  min-height: 36px;
  padding: 8px 16px;
  font-size: 14px;
  outline: none;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  background-color: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover{
    cursor: pointer;
    color: coral;
    border-color: coral;
  }
`