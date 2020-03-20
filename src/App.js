import React, { useState } from 'react';
import Titles from './components/title/Titles';
import Form from './components/form/Form';
import Weather from './components/weather/Weather';
import {
  Wrapper,
  Main,
  TitleContainer,
  FormContainer,
} from './components/styles/main-styles';

import { API_KEY } from './apiKeys';

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: '',
    city: '',
    country: '',
    conditions: '',
    description: '',
    wind: '',
    icon: '',
    error: '',
  });

  const getWeather = async e => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityData = city.value;
    const countryData = country.value;
    //initial api call using above fields
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityData},${countryData}&appid=${API_KEY}&units=imperial`,
    ).then(response => response.json());

    try {
      setWeatherInfo({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        conditions: data.weather[0].main,
        description: data.weather[0].description,
        wind: data.wind.speed,
        icon: data.weather[0].id,
        error: '',
      });
    } catch (err) {
      setWeatherInfo({
        error: 'Please enter valid City and Country',
      });
    }
  };

  return (
    <div>
      <Wrapper>
        <Main>
          <TitleContainer>
            <Titles />
          </TitleContainer>
          <FormContainer>
            <Form getWeather={getWeather} />
            <Weather weatherInfo={weatherInfo} />
          </FormContainer>
        </Main>
      </Wrapper>
    </div>
  );
};

export default App;
