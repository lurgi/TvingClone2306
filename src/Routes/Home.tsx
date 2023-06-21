import { useQuery } from "react-query";
import { styled } from "styled-components";
import { ITrendings, fecthTrending } from "../api";
import HomeBanner from "../components/Home/HomeBanner";
import SliderTemplate from "../components/others/SliderTemplate";

const Container = styled.div``;
const HomeContents = styled.div`
  transform: translateY(-40%);
`;

function Home() {
  const { isLoading, data } = useQuery<ITrendings>("trending", fecthTrending);
  const backScreenData = data?.results.slice(0, 4);
  return (
    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <HomeBanner backScreenData={backScreenData!} />
          <HomeContents>
            <SliderTemplate
              data={data?.results.slice(0, 20)!}
              title="티빙에서 꼭 봐야하는 콘텐츠"
            ></SliderTemplate>
          </HomeContents>
        </>
      )}
    </Container>
  );
}
export default Home;
