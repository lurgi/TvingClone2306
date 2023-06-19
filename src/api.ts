const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

export interface ITrending {
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
}
export interface ITrendings {
  results: ITrending[];
}
const URL = "https://api.themoviedb.org/3";
export function fecthTrending() {
  const returnData = fetch(
    `${URL}/trending/all/day?language=ko-KR`,
    options
  ).then((response) => response.json());
  return returnData;
}
