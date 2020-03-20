import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(to right, #e67e22, #e74c3c);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  height: 80vh;
  background: #fff;
  box-shadow: 0px 13px 40px -13px rgba(0, 0, 0, 0.75);
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  background: url('/images/bg.jpg') center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  width: 40%;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  background-color: #2c3e50;
  padding-top: 100px;
  padding-left: 50px;
  width: 60%;
  overflow: auto;
`;
