/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";

export interface IMovies {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

export default function useMovies(pageLimit: number) {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [totalMovies, seTotalMovies] = useState(0);

  async function getMovies(page: number) {
    const viltualPage =
      (page - 1) * pageLimit <= 0 ? 1 : (page - 1) * pageLimit;
    try {
      const { data: response } = await api.get(
        `/films?offset=${viltualPage}&limit=${pageLimit}`
      );
      setMovies(response.films);
      seTotalMovies(response.count);
    } catch (err: any) {
      const error = err.response.data;
      toast.error(error || "Erro ao buscar filmes");
    }
  }
  return { movies, getMovies, totalMovies };
}
