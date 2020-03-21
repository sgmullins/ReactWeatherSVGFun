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
  max-height: 557px;
  box-shadow: 0px 13px 40px -13px rgba(0, 0, 0, 0.75);
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 788px) {
    flex-direction: column;
    height: 95vh;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  width: 28%;
  overflow: hidden;
  @media (max-width: 914px) {
    width: 50%;
  }
  @media (max-width: 788px) {
    width: auto;
    height: 54%;
  }
`;

export const FormContainer = styled.div`
  background-color: #2c3e50;
  padding-top: 100px;
  padding-left: 50px;
  width: 69%;
  overflow: auto;
  @media (max-width: 914px) {
    width: 50%;
  }
  @media (max-width: 788px) {
    width: auto;
    height: 44%;
    padding-top: 15px;
  }
`;
