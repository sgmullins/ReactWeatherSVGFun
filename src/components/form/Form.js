import React from 'react';
import { Input, Button } from './form-style';

const Form = ({ getWeather }) => (
  <form onSubmit={e => getWeather(e)}>
    <Input type='text' name='city' placeholder='city or zip' />
    <Input type='text' name='country' placeholder='country' required />
    <Button>GetWeather</Button>
  </form>
);

export default Form;
