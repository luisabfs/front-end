import React, { Component } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { Container, FormWrapper } from './styles';

import background from '../../assets/background.jpg';
import logo from '../../assets/logo.png';

export default class SignIn extends Component {
  handleSubmit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <Container img={background}>
        <FormWrapper>
          <img src={logo} alt="logo" />
          <Form onSubmit={this.handleSubmit}>
            <Input name="email" placeholder="Seu e-mail" />
            <Input name="password" type="password" placeholder="Sua senha secreta" />

            <button type="submit">Entrar</button>
          </Form>
        </FormWrapper>
      </Container>
    );
  }
}
