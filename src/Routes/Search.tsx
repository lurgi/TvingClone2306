import { styled } from "styled-components";
import SearchDropBar from "../components/Header/SearchDropBar";
import { useRecoilValue } from "recoil";
import { windowWidth } from "../atoms";
import { heightTransfrom } from "../util";

const Wrapper = styled.div`
  position: relative;
  z-index: -1;
  width: 100vw;
`;

const Barcontainer = styled.div<{ width: number }>`
  height: ${(props) => heightTransfrom(props.width * 3)};
`;

function Search() {
  const width = useRecoilValue(windowWidth);
  return (
    <Wrapper>
      <Barcontainer width={width}>
        <SearchDropBar />
      </Barcontainer>
    </Wrapper>
  );
}
export default Search;
