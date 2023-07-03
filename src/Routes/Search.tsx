import { styled } from "styled-components";
import SearchDropBar from "../components/Header/SearchDropBar";
import { useRecoilValue } from "recoil";
import { windowWidth } from "../atoms";
import { heightTransfrom } from "../util";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchSeacrh } from "../api";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;
const FakeHeader = styled.div<{ width: number }>`
  height: ${(props) => heightTransfrom(props.width)};
  width: 100vw;
  position: relative;
  margin-bottom: 10%;
`;

function Search() {
  const width = useRecoilValue(windowWidth);
  const [page, setPage] = useState(1);
  const { keyword } = useParams();
  let { isLoading, data } = useQuery("searchData", () =>
    fetchSeacrh({ keyword: keyword || "", page })
  );
  console.log(data);
  return (
    <Wrapper>
      <FakeHeader width={width}>
        <SearchDropBar isBlack={true} />
      </FakeHeader>
    </Wrapper>
  );
}
export default Search;
