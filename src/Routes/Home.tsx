import { useQuery } from "react-query";
import { styled } from "styled-components";
import { ITrendings, fecthTrending } from "../api";
import { useEffect } from "react";
import HomeBanner from "../components/Home/HomeBanner";
import SliderTemplate from "../components/others/SliderTemplate";

const Container = styled.div``;

function Home() {
  const { isLoading, data } = useQuery<ITrendings>("trending", fecthTrending);
  const backScreenData = data?.results.slice(0, 4);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <HomeBanner backScreenData={backScreenData!} />
          <SliderTemplate></SliderTemplate>
        </>
      )}
    </Container>
  );
}
export default Home;
