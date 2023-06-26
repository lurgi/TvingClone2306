import { useQuery } from "react-query";
import { styled } from "styled-components";
import { IDatas, fetchTVPopular, fetchTopMovies, fetchTrending } from "../api";
import HomeBanner from "../components/Home/HomeBanner";
import SliderTemplate from "../components/others/SliderTemplate";
import SwiperSlider from "../components/others/SwiperSlider";
import TopSwiperSlider from "../components/others/TopSwiperSlider";

const Container = styled.div`
  position: relative;
`;
const HomeContents = styled.div`
  position: absolute;
  width: 100%;
  top: 73%;
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
          title="FrmaerMotion으로 만든 캐러셀"
        />
        <SwiperSlider
          isLoading={isTopMovieLoading}
          data={topMovieData?.results.slice(0, 20)!}
          title="Swiper로 만든 캐러셀. Drag, Pagination 기능, 반응형 디자인 구현"
        />
        <TopSwiperSlider
          isLoading={isTVpopularLoading}
          data={tvPopluarData?.results.slice(0, 20)!}
          title="TV Top 20 프로그램"
        />
      </HomeContents>
    </Container>
  );
}
export default Home;
