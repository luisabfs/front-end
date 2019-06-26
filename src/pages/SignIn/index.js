import React, { Component } from 'react';

import { Container, FormWrapper } from './styles';

import background from '../../assets/background.jpg';
import logo from '../../assets/logo.png';

export default class SignIn extends Component {
  render() {
    return (
      <Container img={background}>
        <FormWrapper>
          <img src={logo} alt="logo" />
        </FormWrapper>
      </Container>
    );
  }
}
