import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  width: 100px;
  height: 40px;
  color: teal;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: blue;
  border: 1px solid;
  border-radius: 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: lightblue;
    background: teal;
  }
`;