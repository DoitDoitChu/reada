import React from 'react';
import {
  Wrapper,
  Title,
  HeaderWrapper,
  ButtonWrapper,
  Join,
  Login,
  SearchBar,
} from '../components/Style';

const HomePresenter = () => (
  <Wrapper>
    <HeaderWrapper>
      <Title>READA</Title>
      <ButtonWrapper>
        <Login>로그인</Login>
        <Join>회원가입</Join>
      </ButtonWrapper>
      <SearchBar />
    </HeaderWrapper>
    <div id="body"></div>
    <div id="footer"></div>
  </Wrapper>
);

export default HomePresenter;
