import { useQuery } from "react-query";
import { styled } from "styled-components";
import { IDatas, fetchTVPopular, fetchTopMovies, fetchTrending } from "../api";
import HomeBanner from "../components/Home/HomeBanner";
import SliderTemplate from "../components/others/SliderTemplate";
import SwiperSlider from "../components/others/SwiperSlider";
import TopSwiperSlider from "../components/others/TopSwiperSlider";

const Container = styled.div`
  background-color: rgba(5, 5, 5, 1);
`;
const HomeContents = styled.div`
  transform: translateY(-17%);
  margin-bottom: -10%;
`;

function Home() {
  const { isLoading: isTredingLoading, data: trendingData } = useQuery<IDatas>(
    "trending",
    fetchTrending
  );
  const { isLoading: isTopMovieLoading, data: topMovieData } = useQuery(
    "movies",
    fetchTopMovies
  );
  const { isLoading: isTVpopularLoading, data: tvPopluarData } = useQuery(
    "TVpopular",
    fetchTVPopular
  );
  const backScreenData = trendingData?.results.slice(0, 4);

  return (
    <Container>
      <HomeBanner
        isLoading={isTredingLoading}
        backScreenData={backScreenData!}
      />
      <HomeContents>
        <SliderTemplate
          isLoading={isTredingLoading}
          data={trendingData?.results.slice(0, 20)!}
          title="FrmaerMotion 캐러셀"
        />
        <SwiperSlider
          isLoading={isTopMovieLoading}
          data={topMovieData?.results.slice(0, 20)!}
          title="Swiper 캐러셀, Drag, Pagination, 반응형 디자인"
        />
        <TopSwiperSlider
          isLoading={isTVpopularLoading}
          data={tvPopluarData?.results.slice(0, 20)!}
          title="TV Top20 프로그램"
        />
      </HomeContents>
    </Container>
  );
}
export default Home;
