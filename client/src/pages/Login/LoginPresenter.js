import React, { useState } from 'react';
import axios from 'axios';

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
  Input,
  JoinButton,
} from '../components/Style';

const LoginPresenter = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userObj = {
    email,
    password,
  };

  const onClickLogin = obj => {
    axios({
      method: 'post',
      url: `http://localhost:4000/login`,
      data: obj,
    })
      .then(res => {
        console.log(('res:', res));
      })
      .catch(error => console.log('error:', error.response, error));
  };

  console.log('userObj', userObj);
  const handleInput = setState => e => {
    setState(e.target.value);
  };

  return (
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
          <JoinTitle>로그인</JoinTitle>
          <Input
            type="email"
            onChange={handleInput(setEmail)}
            value={email}
            placeholder={'이메일'}
          ></Input>
          <Input
            type="password"
            onChange={handleInput(setPassword)}
            value={password}
            placeholder={'비밀번호'}
          ></Input>

          <JoinButton onClick={() => onClickLogin(userObj)}>로그인</JoinButton>
        </JoinWrapper>
      </BodyWrapper>
    </Wrapper>
  );
};

export default LoginPresenter;
