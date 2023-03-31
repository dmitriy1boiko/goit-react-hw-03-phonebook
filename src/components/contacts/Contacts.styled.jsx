import styled from 'styled-components';

export const Button = styled.button`
  width: 80px;
  height: 30px;
  color: teal;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: lightblue;
  border: 1px solid;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: lightblue;
    background: teal;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const Contact = styled.p`
  font-size: 15px;
  font-weight: 600;
`;