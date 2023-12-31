import { styled } from "styled-components";
import SearchDropBar from "../../components/Header/SearchDropBar";
import { useRecoilValue } from "recoil";
import { windowWidth } from "../../atoms";
import { heightTransfrom } from "../../util";
import { useQuery } from "react-query";
import { IDatas, fetchSeacrh } from "../../api";
import { useParams } from "react-router-dom";
import Card from "../../components/others/Card";
import { useEffect } from "react";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background-color: rgb(5, 5, 5);
  min-height: 90vh;
`;
const FakeHeader = styled.div<{ width: number }>`
  height: ${(props) => heightTransfrom(props.width)};
  width: 100vw;
  position: relative;
  z-index: 1;
  margin-bottom: 10%;
`;
const Contents = styled.div`
  padding: 10% 5%;
  background-color: rgb(5, 5, 5);
`;
const Title = styled.span`
  color: ${(props) => props.theme.gray100};
  font-size: 130%;
  font-weight: 600;
`;
const Cards = styled.div`
  margin-top: 2%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2%;
  & > div {
    margin-bottom: 2%;
  }
`;
function Search() {
  const width = useRecoilValue(windowWidth);
  const { id } = useParams();
  let { isLoading, data, refetch } = useQuery<IDatas>("searchData", () =>
    fetchSeacrh({ keyword: id || "", page: 1 })
  );
  useEffect(() => {
    refetch();
  }, [id, refetch]);
  return (
    <Wrapper>
      <FakeHeader width={width}>
        <SearchDropBar isBlack={true} keyword={id} />
      </FakeHeader>
      <Contents>
        {isLoading ? (
          "Loading..."
        ) : data?.results.length === 0 ? (
          <Title>{id}의 검색결과가 없습니다</Title>
        ) : (
          <>
            <Title>{id}의 검색결과</Title>
            <Cards>
              {data?.results?.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </Cards>
          </>
        )}
      </Contents>
    </Wrapper>
  );
}
export default Search;
