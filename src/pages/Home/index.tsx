import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";

import { MenuDesktop } from "../../components/Menu";
import { Title } from "../../components/Title";
import useMovies from "../../hooks/useMovies";
import * as S from "./styles";

export function Home() {
  const limitMovies = 10;
  const [actualPage, setActualPage] = useState(1);
  const { getMovies, movies, totalMovies } = useMovies(limitMovies);
  const totalPages = Math.ceil(totalMovies / limitMovies);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setActualPage(value);
    getMovies(value);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  return (
    <S.Container>
      <S.BoxLeft>
        <Title />
        <MenuDesktop handleChangePage={handleChangePage} />
      </S.BoxLeft>
      <S.BoxRight>
        <S.BoxPagination>
          <Pagination
            count={totalPages}
            page={actualPage}
            onChange={handleChangePage}
            color="primary"
          />
        </S.BoxPagination>
        <S.ContainerMovies>
          {movies.map((movie) => (
            <S.CardMovies key={movie.id}>
              <S.MovieContent>
                <S.MoviesImage src={movie.image} />
                <S.MovieDetails description={movie.description}>
                  <div>{movie.title}</div>
                  <div>Diretor: {movie.director}</div>
                  <div>Produtor: {movie.producer}</div>
                </S.MovieDetails>
              </S.MovieContent>
            </S.CardMovies>
          ))}
        </S.ContainerMovies>
      </S.BoxRight>
    </S.Container>
  );
}
