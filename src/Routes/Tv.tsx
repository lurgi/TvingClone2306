import { useQuery } from "react-query";
import { fetchTVTop } from "../api";
import { styled } from "styled-components";
import SwiperSlider from "../components/others/SwiperSlider";
import TopSwiperSlider from "../components/others/TopSwiperSlider";

const Contianer = styled.div`
  width: 100%;
  padding-top: 10%;
  background-color: rgba(5, 5, 5, 1);
`;

function Tv() {
  const { isLoading: isTVpopularLoading, data: tvPopluarData } = useQuery(
    "TVpopular",
    () => fetchTVTop(1)
  );
  const { isLoading: isTVpopularLoading2, data: tvPopluarData2 } = useQuery(
    "TVpopular2",
    () => fetchTVTop(2)
  );
  const { isLoading: isTVpopularLoading3, data: tvPopluarData3 } = useQuery(
    "TVpopular3",
    () => fetchTVTop(3)
  );
  const { isLoading: isTVpopularLoading4, data: tvPopluarData4 } = useQuery(
    "TVpopular4",
    () => fetchTVTop(4)
  );
  const { isLoading: isTVpopularLoading5, data: tvPopluarData5 } = useQuery(
    "TVpopular5",
    () => fetchTVTop(5)
  );
  return (
    <Contianer>
      <SwiperSlider
        isLoading={isTVpopularLoading2}
        data={tvPopluarData2?.results.slice(0, 20)!}
        title="좋아할만한 프로그램"
      />
      <TopSwiperSlider
        isLoading={isTVpopularLoading}
        data={tvPopluarData?.results.slice(0, 20)!}
        title="TV Top20 프로그램"
      />
      <SwiperSlider
        isLoading={isTVpopularLoading3}
        data={tvPopluarData3?.results.slice(0, 20)!}
        title="좋아할만한 프로그램2"
      />
      <SwiperSlider
        isLoading={isTVpopularLoading4}
        data={tvPopluarData4?.results.slice(0, 20)!}
        title="좋아할만한 프로그램3"
      />
      <SwiperSlider
        isLoading={isTVpopularLoading5}
        data={tvPopluarData5?.results.slice(0, 20)!}
        title="좋아할만한 프로그램"
      />
    </Contianer>
  );
}
export default Tv;
