import styled from 'styled-components';
import img from '../../image/background.png';
import logo from '../../image/logo.png';
import bookImg from '../../image/damron.jpeg';

export const Wrapper = styled.div`
  /* max-width: 340px;
  flex: 1;
  height: fit-content;
  display: inline-block;
  padding: 40px 16px 48px 16px;
  margin: 20vh 0 20vh 0; */
  background-color: ${props => props.theme.color.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-wrap: wrap; */
  /* justify-content: flex-start; */
  width: 100%;
  /* height: 100%; */
  /* align-items: center; */
  /* margin: 5vh 0 0 0; */

  /* height: 1000px; */
  /* border-bottom: 5px solid black; */
`;

export const HeaderWrapper = styled.div`
  /* max-width: 340px;
  flex: 1;
  height: fit-content;
  display: inline-block;
  padding: 40px 16px 48px 16px;
  margin: 20vh 0 20vh 0; */
  /* box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1); */
  /* border: 2px solid rgba(0, 0, 0, 0.15); */
  /* background-color: ${props => props.theme.color.white}; */
  /* position: relative; */

  display: flex;
  flex-direction: column;
  /* flex-wrap: no-wrap; */
  /* justify-content: center; */
  align-items: center;
  /* overflow-y: visible; */
  width: 100%;
  height: 500px;

  background-color: ${props => props.theme.color.black};
  background-image: url(${img});
  text-align: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  /* margin-top: 0px; */
  /* margin: 5vh 0 0 0; */
  /* height: 1000px; */
  /* border-bottom: 5px solid black; */
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  width: 100px;
  height: 40px;
  /* font-size: 62px;
  font-weight: 700;
  text-align: center;
  vertical-align: center; */
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin-left: 10px;
`;

export const SearchWrapper = styled.div``;

export const SearchInput = styled.input`
  display: flex;
  /* justify-content: center; */
  /* align-content: center; */
  /* align-items: center; */
  width: 640px;
  height: 40px;
  /* margin-left: 70px; */
  border: ${props => `2px solid ${props.theme.color.darkgray}`};
  border-radius: 5px;
  margin-top: 80px;
  background-color: transparent;
  color: white;
`;

export const SearchReuslt = styled.div``;

const smallButton = styled.div`
  width: 110px;
  height: 40px;
  cursor: pointer;
  /* border-radius: 10px; */
  /* margin: 10px; */
  text-align: center;
  vertical-align: middle;
`;

export const Login = styled(smallButton)`
  /* background-color: ${props => props.theme.color.white}; */
  /* border: ${props => `1px solid ${props.theme.color.white}`}; */
  color: ${props => props.theme.color.white};
`;
export const Join = styled(smallButton)`
  /* background-color: ${props => props.theme.color.white}; */
  /* border: ${props => `1px solid ${props.theme.color.vividBlue}`}; */
  color: ${props => props.theme.color.white};
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 1000px;
  display:flex;
  flex-direction: column;
  align-items: center;
  /* background-color: ${props => props.theme.color.softOrange}; */
`;
export const PopularSubjectsWrapper = styled.div`
  background-color: ${props => props.theme.color.white};
  width: 1200px;
  height: 250px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 45px auto; */
  /* margin-top: 50px; */
`;

export const PopularSubjectsTitle = styled.div`
  display: flex;
  /* width: 200px;
  height: 30px; */
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
`;

export const PopularSubjectContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PopularSubjectContent = styled.div`
  color: #4c4c4c;
  background-color: ${props => props.theme.color.white};
  border: 1px solid #eceff1;
  width: calc(20% - 100px);
  height: 40px;
  margin: 10px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const BestCommentWrapper = styled.div`
  width: 100%;
  height: 440px;
  background-color: #f0f1f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestComment = styled.div`
  color: #333;
  margin: 15px 0 60px 0;
  text-align: center;
`;

export const NewAddBookWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const NewAddBookTitle = styled.div`
  /* display: flex; */
  margin-left: auto;
  margin-right: auto;
  /* width: 200px;
  height: 30px; */
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
`;

export const NewAddBookContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const NewAddBookContent = styled.div`
  color: #4c4c4c;
  background-color: #fff;
  border: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
`;

export const NewAddBookLeft = styled.a`
  background-image: url(${bookImg});
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const NewAddBookRight = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BookTitle = styled.div``;

export const BookWriter = styled.div``;

export const BookGpa = styled.div``;

export const BookReviewCount = styled.div``;

// register

export const HeaderWrapperBasic = styled.div`
  /* border: 2px solid rgba(0, 0, 0, 0.15); */
  /* background-color: ${props => props.theme.color.white}; */
  /* position: relative; */

  display: flex;
  flex-direction: column;
  /* flex-wrap: no-wrap; */
  /* justify-content: center; */
  align-items: center;
  /* overflow-y: visible; */
  width: 100%;
  height: 80px;

  background-color: ${props => props.theme.color.black};
  /* background-image: url(${img}); */
  text-align: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  /* box-shadow: 0 0 0 3px; */
`;

export const SearchBarBasic = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-content: center; */
  /* align-items: center; */
  width: 640px;
  height: 40px;
  /* margin-left: 70px; */
  border: ${props => `2px solid ${props.theme.color.darkgray}`};
  border-radius: 5px;
  margin-top: -80px;
  background-color: transparent;
`;

export const JoinWrapper = styled.div`
  width: 340px;
  flex: 1;
  height: fit-content;
  display: inline-block;
  padding: 40px 16px 48px 16px;
  margin: 20vh 0 20vh 0;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(0, 0, 0, 0.15);
  background-color: ${props => props.theme.color.white};
`;

export const JoinTitle = styled.div`
  display: flex;
  /* width: 200px;
  height: 30px; */
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
`;

export const InputTitle = styled.div`
  width: 100%;
  height: 20px;
  margin: 16px 0 6px 0;
  font-size: 14px;
  color: ${props => props.theme.color.darkGrayishBlue};
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  padding-left: 8px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.color.darkGrayishBlue};
  outline: none;
`;

export const JoinButton = styled.button`
  width: 100%;
  height: 56px;
  padding: 0;
  margin: 32px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  letter-spacing: -0.3px;
  border: none;
  border-radius: 4px;
  background-color: red;
  color: white;
`;
