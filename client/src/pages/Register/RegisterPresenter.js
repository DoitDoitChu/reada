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
const RegisterPresenter = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const userObj = {
    username,
    email,
    password,
    password2,
  };

  const onClickJoin = obj => {
    axios({
      method: 'post',
      url: `http://localhost:4000/join`,
      data: obj,
    })
      .then(res => {
        console.log(('res:', res));
      })
      .catch(error => console.log('error:', error));
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
          <JoinTitle>회원가입</JoinTitle>
          <Input
            type="text"
            onChange={handleInput(setName)}
            value={username}
            placeholder={'이름'}
          ></Input>
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
          <Input
            type="password2"
            onChange={handleInput(setPassword2)}
            value={password2}
            placeholder={'비밀번호확인'}
          ></Input>
          <JoinButton onClick={() => onClickJoin(userObj)}>가입하기</JoinButton>
        </JoinWrapper>
      </BodyWrapper>
    </Wrapper>
  );
};

export default RegisterPresenter;
