import styled, { css } from "styled-components";

export const MenuContainer = styled.nav`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;

  @media screen {
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;

export const ButtonMenu = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: 300px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 0.5rem;
    color: ${theme.text.primary};
    background-color: ${theme.palette.primary.main};
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.background.hover};
    }
  `}
`;
