import { useQuery } from "react-query";
import { styled } from "styled-components";
import { IDatas, fetchTopMovies, fetchTrending } from "../api";
import HomeBanner from "../components/Home/HomeBanner";
import SliderTemplate from "../components/others/SliderTemplate";
import SwiperSlider from "../components/others/SwiperSlider";

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
  const backScreenData = trendingData?.results.slice(0, 4);

  return (
    <Container>
      {isTredingLoading && isTopMovieLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <HomeBanner backScreenData={backScreenData!} />
          <HomeContents>
            <SliderTemplate
              data={trendingData?.results.slice(0, 20)!}
              title="FrmaerMotion으로 만든 캐러셀"
            />
            <SwiperSlider
              data={topMovieData?.results.slice(0, 20)!}
              title="Swiper로 만든 캐러셀. Drag, Pagination 기능 구현"
            />
          </HomeContents>
        </>
      )}
    </Container>
  );
}
export default Home;
