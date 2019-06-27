import React from 'react';

import { Container, LeftWrapper, RightWrapper } from './styles';

import logo from '../../assets/logo@2x.png';

const Header = () => (
  <Container>
    <LeftWrapper>
      <img src={logo} alt="logo" />
      <h1>Pizzaria Don Juan</h1>
    </LeftWrapper>
    <RightWrapper>
      <h2>Administrador</h2>
      <span>Sair do app</span>
    </RightWrapper>
  </Container>
);

export default Header;
