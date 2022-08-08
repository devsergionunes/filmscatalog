import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const H1 = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: ${theme.text.primary};
    display: inline;

    ::before {
      content: "M";
      display: inline-block;
      color: ${theme.palette.primary.main};
    }
  `}
`;
