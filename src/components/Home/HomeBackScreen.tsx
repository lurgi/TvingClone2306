import { styled } from "styled-components";
import { ITrending, fecthGetImage } from "../../api";

const Container = styled.div`
  width: 100%;
  background-color: pink;
  height: auto;
`;

function HomeBackScreen(props: { backScreenData: ITrending[] }) {
  const images = [];
  for (let data of props.backScreenData!) {
  }
  return <Container>HomeBackScreen</Container>;
}

export default HomeBackScreen;
