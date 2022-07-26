import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #111111;
  display: flex;
  justify-content: flex-end;
  padding-right: 3vw;
  align-items: center;
  box-sizing: border-box;
`;

export const StyledNavButton = styled.button`
  height: 5vh;
  color: #d2d2d2;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 1vh 1vw;
  background-color: #111111;
  margin-left: 2vw;
  cursor: pointer;

  ${(props) =>
    props.red &&
    css`
      background-color: red;
    `}

  ${(props) =>
    props.blue &&
    css`
      background-color: blue;
    `}
`;
