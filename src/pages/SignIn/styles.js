import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #000 100%),
    url(${props => props.img}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    margin: 30px;

    input {
      font-size: 15px;
      color: #999;
      text-align: left;
      padding: 15px;
      margin: 7px;
      width: 280px;
      height: 40px;
      border: 0;
      border-radius: 5px;
    }

    button {
      margin: 10px 5px;
      width: 280px;
      height: 40px;
      border: 0;
      border-radius: 7px;
      background-color: #e9283a;
      font-size: 15px;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: bold;
    }
  }
`;
