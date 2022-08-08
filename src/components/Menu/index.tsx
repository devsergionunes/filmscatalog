/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";

import useMovies from "../../hooks/useMovies";
import { api } from "../../services/api";
import { MenusMock } from "./Mock";
import * as S from "./styles";

export function MenuDesktop({ handleChangePage }: any) {
  const { getMovies } = useMovies(10);
  async function updateFilms() {
    try {
      const { data: response } = await api.post("/films");
      handleChangePage(null, 1);
      getMovies(0);
      if (response.message) toast.success(response.message);
    } catch (err: any) {
      const error = err.response.data;
      toast.error(error || "Erro ao atualizar filmes");
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
