/* eslint-disable @typescript-eslint/no-explicit-any */
import useMovies from "../../hooks/useMovies";
import { api } from "../../services/api";
import { MenusMock } from "./Mock";
import * as S from "./styles";

export function MenuDesktop({ handleChangePage }: any) {
  const { getMovies } = useMovies(10);
  async function updateFilms() {
    try {
      await api.post("/films");
      handleChangePage(null, 1);
      getMovies(0);
    } catch (err: any) {
      const error = err.response.data;
      console.log("Erro ==>", error);
    }
  }

  return (
    <S.MenuContainer>
      {MenusMock.map((menu) => (
        <S.ButtonMenu key={menu.id} onClick={updateFilms}>
          {menu.icon}
          {menu.name}
        </S.ButtonMenu>
      ))}
    </S.MenuContainer>
  );
}
