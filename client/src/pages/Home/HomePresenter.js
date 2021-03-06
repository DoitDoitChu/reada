import React from 'react';
import {
  Wrapper,
  Title,
  HeaderWrapper,
  ButtonWrapper,
  Join,
  Login,
  HeaderContent,
  BodyWrapper,
  PopularSubjectsWrapper,
  PopularSubjectsTitle,
  PopularSubjectContentWrapper,
  PopularSubjectContent,
  BestCommentWrapper,
  BestComment,
  NewAddBookWrapper,
  NewAddBookTitle,
  NewAddBookContentWrapper,
  NewAddBookContent,
  NewAddBookLeft,
  NewAddBookRight,
  BookTitle,
  BookWriter,
  BookGpa,
  BookReviewCount,
} from '../components/Style';

import SearchBar from './components/SearchBar';

const HomePresenter = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderContent>
          <Title></Title>
          <ButtonWrapper>
            <Join>회원가입</Join>
            <Login>로그인</Login>
          </ButtonWrapper>
        </HeaderContent>
        <SearchBar />
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
        <BestCommentWrapper>
          <PopularSubjectsTitle>베스트 한줄평</PopularSubjectsTitle>
          <BestComment>블라블라블라</BestComment>
        </BestCommentWrapper>
        <NewAddBookWrapper>
          <NewAddBookTitle>새로 추가된 책</NewAddBookTitle>
          <NewAddBookContentWrapper>
            <NewAddBookContent>
              <NewAddBookLeft></NewAddBookLeft>
              <NewAddBookRight>
                <BookTitle></BookTitle>
                <BookWriter></BookWriter>
                <BookGpa></BookGpa>
                <BookReviewCount></BookReviewCount>
              </NewAddBookRight>
            </NewAddBookContent>
            <NewAddBookContent></NewAddBookContent>
            <NewAddBookContent></NewAddBookContent>
            <NewAddBookContent></NewAddBookContent>
          </NewAddBookContentWrapper>
        </NewAddBookWrapper>
      </BodyWrapper>
      <div id="footer"></div>
    </Wrapper>
  );
};
export default HomePresenter;
