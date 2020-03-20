import React from 'react';

import {
  WeatherError,
  WeatherInfo,
  WeatherKey,
  WeatherValue,
  Icon,
} from './weather-styles';
const Weather = ({
  weatherInfo: {
    temperature,
    city,
    country,
    conditions,
    description,
    wind,
    error,
    icon,
  },
}) => (
  <WeatherInfo>
    {city && country && (
      <WeatherKey>
        Location:
        <WeatherValue>
          {' '}
          {city}, {country}
        </WeatherValue>
      </WeatherKey>
    )}
    {temperature && (
      <WeatherKey>
        Temperature:
        <WeatherValue> {temperature}F</WeatherValue>
      </WeatherKey>
    )}
    {conditions && description && (
      <WeatherKey>
        Conditions:
        <WeatherValue>
          {' '}
          {conditions}: {description}{' '}
        </WeatherValue>
        <Icon className={`owf owf-${icon} owf-3x`} />
      </WeatherKey>
    )}
    {wind && (
      <WeatherKey>
        Wind Speed:
        <WeatherValue> {wind} mph</WeatherValue>
      </WeatherKey>
    )}
    {error && (
      <WeatherKey>
        <WeatherError> {error}</WeatherError>
      </WeatherKey>
    )}
  </WeatherInfo>
);

export default Weather;
