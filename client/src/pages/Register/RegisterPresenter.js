import React from 'react';
import {
  Wrapper,
  HeaderWrapperBasic,
  HeaderContent,
  Title,
  ButtonWrapper,
  Join,
  Login,
  SearchBarBasic,
  BodyWrapper,
  JoinWrapper,
  JoinTitle,
  InputTitle,
  Input,
  JoinButton,
} from '../components/Style';
const RegisterPresenter = () => (
  <Wrapper>
    <HeaderWrapperBasic>
      <HeaderContent>
        <Title></Title>
        <ButtonWrapper>
          <Join>회원가입</Join>
          <Login>로그인</Login>
        </ButtonWrapper>
      </HeaderContent>
      <SearchBarBasic />
    </HeaderWrapperBasic>
    <BodyWrapper>
      <JoinWrapper>
        <JoinTitle>회원가입</JoinTitle>
        <Input placeholder="이름"></Input>
        <Input placeholder="이메일"></Input>
        <Input placeholder="비밀번호"></Input>
        <Input placeholder="비밀번호확인"></Input>
        <JoinButton>가입하기</JoinButton>
      </JoinWrapper>
    </BodyWrapper>
  </Wrapper>
);

export default RegisterPresenter;
