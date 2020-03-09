import React from 'react';
import {
  Wrapper,
  Title,
  HeaderWrapper,
  ButtonWrapper,
  Join,
  Login,
  SearchBar,
  HeaderContent,
  HeaderTopWrapper,
  HeaderBottomWrapper,
} from '../components/Style';

const HomePresenter = () => (
  <Wrapper>
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTopWrapper>
          <Title></Title>
          <ButtonWrapper>
            <Join>회원가입</Join>
            <Login>로그인</Login>
          </ButtonWrapper>
        </HeaderTopWrapper>
        <HeaderBottomWrapper>
          <SearchBar />
        </HeaderBottomWrapper>
      </HeaderContent>
    </HeaderWrapper>
    <div id="body"></div>
    <div id="footer"></div>
  </Wrapper>
);

export default HomePresenter;
