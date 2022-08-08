import styled, { css } from "styled-components";

type MovieProps = {
  description?: string;
};

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: ${theme.background.default};

    @media screen {
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  `}
`;

export const BoxLeft = styled.div`
  ${({ theme }) => css`
    width: 23.75rem;
    min-height: 100vh;
    padding: 2rem;
    background-color: ${theme.background.paper};
    display: flex;
    flex-direction: column;

    @media screen {
      @media (max-width: 768px) {
        min-height: auto;
        width: 100%;
      }
    }
  `}
`;

export const BoxRight = styled.div`
  flex: 1;
  min-height: 100vh;
  padding-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const BoxPagination = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-right: 30%;
    padding: 2rem 0 1rem 0;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: ${theme.background.default};
  `}
`;

export const ContainerMovies = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 2.5rem;
`;

export const CardMovies = styled.div`
  border-radius: 0.5rem;
  height: 380px;
  max-width: 100%;
  transition: 150ms ease-in-out;
`;

export const MovieContent = styled.div`
  width: max-content;
  border-radius: 0.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const MoviesImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;

export const MovieDetails = styled.div<MovieProps>`
  ${({ theme, description }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    color: ${theme.text.primary};
    font-weight: 600;
    padding: 1rem;
    transition: visibility 3s ease-in-out;

    &:hover {
      & > div {
        opacity: 0;
        visibility: hidden;
      }

      &:after {
        content: ${description ? `"${description}"` : "none"};
        position: absolute;
        font-weight: 500;
        font-size: 0.775rem;
        padding: 1rem;
        top: 0;
        left: 0;
        height: 100%;
      }
    }
  `}
`;
