const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};
const URL = "https://api.themoviedb.org/3";
export interface IData {
  overview: string;
  popularity: number;
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  vote_average: number;
  adult?: boolean;
}
export interface IDatas {
  results: IData[];
}
export function fetchTrending(page: number) {
  const returnData = fetch(
    `${URL}/trending/all/day?language=ko-KR&page=${page}`,
    options
  ).then((response) => response.json());
  return returnData;
}
export function fetchTopMovies() {
  const returnData = fetch(
    `${URL}/movie/top_rated?language=ko-KR&page=1`,
    options
  ).then((response) => response.json());
  return returnData;
}
export function fetchTVPopular() {
  const returnData = fetch(
    `${URL}/tv/top_rated?language=ko-KR&page=1`,
    options
  ).then((response) => response.json());
  return returnData;
}
