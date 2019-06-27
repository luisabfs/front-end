import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 72px;
  padding: 20px;
  background-color: #0b2031;

  img {
    margin: 10px;
    width: 50px;
  }

  h1 {
    font-size: 18px;
    color: #fff;
    text-align: left;
  }

  h2 {
    font-size: 16px;
    color: #fff;
    text-align: left;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: unset;
  margin: 0 200px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: unset;
  margin: 0 200px;
  text-align: right;

  span {
    font-size: 14px;
    color: #fff;
    text-align: right;
    opacity: 0.6;
  }
`;
