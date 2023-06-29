import styled from "styled-components";
import { fetchPopularMovies, fetchTopMovies } from "../../api";
import { useQuery } from "react-query";
import SwiperSlider from "../../components/others/SwiperSlider";
import TopSwiperSlider from "../../components/others/TopSwiperSlider";

const Contianer = styled.div`
  width: 100%;
  padding-top: 10%;
  background-color: rgba(5, 5, 5, 1);
`;

function Movie() {
  const { isLoading: isTopMoviesLoading, data: topMoviesData } = useQuery(
    "TopMovies",
    () => fetchTopMovies(1)
  );
  const { isLoading: isTopMoviesLoading2, data: topMoviesData2 } = useQuery(
    "TopMovies2",
    () => fetchTopMovies(2)
  );
  const { isLoading: isTopMoviesLoading3, data: topMoviesData3 } = useQuery(
    "TopMovies3",
    () => fetchTopMovies(3)
  );
  const { isLoading: isPopMoviesLoading, data: PopMoviesData } = useQuery(
    "PopMovies",
    () => fetchPopularMovies(1)
  );
  const { isLoading: isPopMoviesLoading2, data: PopMoviesData2 } = useQuery(
    "PopMovies2",
    () => fetchPopularMovies(2)
  );
  return (
    <Contianer>
      <SwiperSlider
        isLoading={isPopMoviesLoading}
        data={PopMoviesData?.results.slice(0, 20)!}
        title="최신 유행하는 영화"
        category="movie"
      />
      <SwiperSlider
        isLoading={isPopMoviesLoading2}
        data={PopMoviesData2?.results.slice(0, 20)!}
        title="좋아할만한 영화"
        category="movie"
      />
      <TopSwiperSlider
        isLoading={isTopMoviesLoading}
        data={topMoviesData?.results.slice(0, 20)!}
        title="Top20 영화"
        category="movie"
      />
      <SwiperSlider
        isLoading={isTopMoviesLoading2}
        data={topMoviesData2?.results.slice(0, 20)!}
        title="죽기전에 꼭 봐야할 영화"
        category="movie"
      />
      <SwiperSlider
        isLoading={isTopMoviesLoading3}
        data={topMoviesData3?.results.slice(0, 20)!}
        title="죽기전에 꼭 봐야할 영화2"
        category="movie"
      />
    </Contianer>
  );
}
export default Movie;
