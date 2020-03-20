import styled from 'styled-components';

export const WeatherInfo = styled.div`
  width: 60%;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 2px;
`;

export const WeatherKey = styled.p`
  color: #f16051;
  border-bottom: solid 2px rgba(255, 255, 255, 0.06);
  padding: 20px 0 20px 0;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const WeatherValue = styled.span`
  color: #fff;
  font-weight: 200;
`;
export const WeatherError = styled.span`
  color: #f16051;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 200;
`;
export const Icon = styled.i`
  margin-left: 10px;
`;
