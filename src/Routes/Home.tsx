import { useQuery } from "react-query";
import { styled } from "styled-components";
import { IDatas, fetchTVTop, fetchTopMovies, fetchTrending } from "../api";
import HomeBanner from "../components/Home/HomeBanner";
import SliderTemplate from "../components/others/SliderTemplate";
import SwiperSlider from "../components/others/SwiperSlider";
import TopSwiperSlider from "../components/others/TopSwiperSlider";

const Container = styled.div`
  background-color: rgba(5, 5, 5, 1);
`;

function Home() {
  const { isLoading: isTredingLoading, data: trendingData } = useQuery<IDatas>(
    "trending",
    () => fetchTrending(1)
  );
  const { isLoading: isTredingLoading2, data: trendingData2 } =
    useQuery<IDatas>("trending2", () => fetchTrending(2));
  const { isLoading: isTopMovieLoading, data: topMovieData } = useQuery(
    "movies",
    () => fetchTopMovies(1)
  );
  const { isLoading: isTVpopularLoading, data: tvPopluarData } = useQuery(
    "TVpopular",
    () => fetchTVTop(1)
  );
  const backScreenData = trendingData?.results.slice(0, 4);
  return (
    <Container>
      <HomeBanner
        isLoading={isTredingLoading}
        backScreenData={backScreenData!}
      />
      <SliderTemplate
        isLoading={isTredingLoading}
        data={trendingData?.results.slice(0, 20)!}
        title="FrmaerMotion 캐러셀, 반응형X"
      />
      <SwiperSlider
        isLoading={isTopMovieLoading}
        data={topMovieData?.results.slice(0, 20)!}
        title="Swiper 캐러셀, Drag, Pagination, 반응형 디자인"
        category="movie"
      />
      <TopSwiperSlider
        isLoading={isTVpopularLoading}
        data={tvPopluarData?.results.slice(0, 20)!}
        title="TV Top20 프로그램"
        category="tv"
      />
      <SwiperSlider
        isLoading={isTredingLoading2}
        data={trendingData2?.results.slice(0, 20)!}
        title="인기있는 TV시리즈, 영화"
      />
    </Container>
  );
}
export default Home;
