import styled from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #f16051;
  width: 30%;
  padding-bottom: 4px;
  color: #fff !important;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-right: 20px;
  font-size: 20px;
  outline: none;
`;

export const Button = styled.button`
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 15px;
  cursor: pointer;
  background-color: #f16051;
  color: #fff;
  font-weight: 100;
  &:active {
    outline: none;
  }
`;
