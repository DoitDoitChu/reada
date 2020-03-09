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
  BodyWrapper,
  PopularSubjectsWrapper,
  PopularSubjectsTitle,
  PopularSubjectContentWrapper,
  PopularSubjectContent,
} from '../components/Style';

const HomePresenter = () => (
  <Wrapper>
    <HeaderWrapper>
      <HeaderContent>
        <Title></Title>
        <SearchBar />
        <ButtonWrapper>
          <Join>회원가입</Join>
          <Login>로그인</Login>
        </ButtonWrapper>
      </HeaderContent>
    </HeaderWrapper>
    <BodyWrapper>
      <PopularSubjectsWrapper>
        <PopularSubjectsTitle>인기 카테고리</PopularSubjectsTitle>
        <PopularSubjectContentWrapper>
          <PopularSubjectContent>소설</PopularSubjectContent>
          <PopularSubjectContent>경영/경제</PopularSubjectContent>
          <PopularSubjectContent>인문/사회/역사</PopularSubjectContent>
          <PopularSubjectContent>자기계발</PopularSubjectContent>
          <PopularSubjectContent>에세이/시</PopularSubjectContent>
          <PopularSubjectContent>과학</PopularSubjectContent>
        </PopularSubjectContentWrapper>
      </PopularSubjectsWrapper>
    </BodyWrapper>
    <div id="footer"></div>
  </Wrapper>
);

export default HomePresenter;
