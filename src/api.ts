const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

export interface ITrending {
  overvies: string;
  popularity: number;
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}
export interface ITrendings {
  results: ITrending[];
}

export function fecthTrending() {
  const returnData = fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=ko-KR",
    options
  ).then((response) => response.json());
  return returnData;
}

export function fecthGetImage(collection_id: string) {
  const returnData = fetch(
    `https://api.themoviedb.org/3/collection/${collection_id}/images`,
    options
  ).then((response) => response.json());
  return returnData;
}
