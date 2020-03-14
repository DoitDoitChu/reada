import React, { useEffect, useState } from 'react';
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
  InputTitle,
  Input,
  JoinButton,
} from '../components/Style';
const RegisterPresenter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userObj = {
    name,
    email,
    password,
  };

  const onClickJoin = obj => {
    axios({
      method: 'post',
      url: `http://localhost:4000`,
      data: obj,
    })
      .then(res => {
        console.log(('res:', res));
      })
      .catch(error => console.log(error));
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
            value={name}
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
          <Input placeholder="비밀번호확인"></Input>
          <JoinButton onClick={() => onClickJoin(userObj)}>가입하기</JoinButton>
        </JoinWrapper>
      </BodyWrapper>
    </Wrapper>
  );
};

export default RegisterPresenter;
