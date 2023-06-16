import { useQuery } from "react-query";
import { styled } from "styled-components";
import { ITrendings, fecthTrending } from "../api";
import { useEffect } from "react";
import HomeBackScreen from "../components/Home/HomeBackScreen";

const Container = styled.div`
  background-color: gray;
  height: 500px;
`;

function Home() {
  const { isLoading, data } = useQuery<ITrendings>("trending", fecthTrending);
  const backScreenData = data?.results.slice(0, 4);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Container>
      <HomeBackScreen backScreenData={backScreenData!} />
    </Container>
  );
}
export default Home;
