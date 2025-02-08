import styled from "styled-components";

const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 100%;
    max-width: 200px;
  }
`;

const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 48px;

  & > input {
    width: 100%;
    height: 50px;
    background-color: #FFF;
    border: none;
    outline: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export { Container, InputSearchContainer };
