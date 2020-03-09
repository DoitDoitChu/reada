import styled from 'styled-components';
import img from '../../image/background.png';
import logo from '../../image/logo.png';

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
  /* flex-direction: row; */
  /* flex-wrap: no-wrap; */
  /* justify-content: center; */
  /* align-items: center; */
  /* overflow-y: visible; */
  width: 100%;
  height: 300px;

  background-color: #000000;
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
  width: 150px;
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

export const SearchBar = styled.input`
  display: flex;
  width: 640px;
  height: 40px;
  /* margin-left: 70px; */
  border: ${props => `2px solid ${props.theme.color.darkgray}`};
  border-radius: 5px;
`;

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
  width: 1200px;
  height: 1000px;
  /* background-color: ${props => props.theme.color.softOrange}; */
`;
export const PopularSubjectsWrapper = styled.div`
  background-color: ${props => props.theme.color.white};
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 45px auto; */
  margin-top: 45px;
`;

export const PopularSubjectsTitle = styled.div`
  display: flex;
  /* width: 200px;
  height: 30px; */
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin-top: 0;
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
  background-color: #fff;
  border: 1px solid #e8e7e7;
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
