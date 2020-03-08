import styled, { css } from 'styled-components';
import img from '../../image/background.jpg';

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
  /* flex-direction: column; */
  /* flex-wrap: no-wrap; */
  /* justify-content: center; */
  /* align-items: center; */
  /* overflow-y: visible; */
  width: 100%;
  height: 340px;

  background-image: url(${img});
  text-align: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* margin-top: 0px; */
  /* margin: 5vh 0 0 0; */
  /* height: 1000px; */
  /* border-bottom: 5px solid black; */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  /* position: absolute;
  top: 0px;
  left: 0px; */
`;

export const Title = styled.div`
  width: 286px;
  height: 50px;
  /* border: 2px solid blue; */
  font-size: 62px;
  font-weight: 700;
  text-align: center;
  vertical-align: center;
  /* position: absolute; */
  /* margin: auto; */
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start; */
  /* margin-top: 127px; */
  color: ${props => props.theme.color.black};
  /* margin-bottom: 102px; */
`;

const smallButton = styled.div`
  width: 110px;
  height: 40px;
  cursor: pointer;
  /* margin-left: 20px; */
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  vertical-align: middle;

  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center;
  align-items: center; */
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
export const SearchBar = styled.input`
  width: 640px;
  height: 50px;
  border: ${props => `2px solid ${props.theme.color.darkgray}`};
  /* margin-top: 102px; */
`;
