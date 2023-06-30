import { useMatch, useParams } from "react-router-dom";
import { fetchDetail, fetchSimilar } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import { imageUrlMake } from "../util";
import SwiperSlider from "./others/SwiperSlider";

interface IDetailData {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  homepage: string;
  id: number;
  in_production: boolean;
  last_air_date: string;
  name?: string;
  number_of_episodes: number;
  number_of_seasons: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  title?: string;
}

const Contianer = styled.div`
  background-color: rgba(5, 5, 5, 1);
  color: ${(props) => props.theme.gray100};
  font-size: 100%;
  min-height: 90vh;
`;
const DetailMain = styled.div<{ img_path: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10% 5%;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 1)
      ),
      url(${(props) => props.img_path});
    filter: blur(30px);
    background-color: gray;
    background-size: 100%;
    background-position: center;
    z-index: -1;
  }
`;
const DetailMainInfo = styled.div`
  width: 65%;
  padding: 2% 5% 2% 1%;
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 5%;
  }
`;
const InfoTitle = styled.span`
  color: ${(props) => props.theme.gray50};
  font-weight: 600;
  font-size: 300%;
`;
const InfoLank = styled.span`
  font-size: 33%;
  margin-left: 2%;
  color: ${(props) => props.theme.gray200};
`;
const InfoBtns = styled.button`
  width: 13em;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  font-weight: 600;
  font-size: 1.2em;
  scale: 1;
  background-color: ${(props) => props.theme.gray100};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.gray50};
    cursor: pointer;
    scale: 1.05;
    font-size: 1.05;
  }
  &:after {
    content: "";
    display: block;
    padding-bottom: 3em;
  }
`;
const InfoOverview = styled.span`
  height: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.gray200};
`;
const DetailMainImg = styled.div<{ img_path: string }>`
  width: 30%;
  min-width: 200px;
  margin-right: 5%;
  background-color: gray;
  background-image: url(${(props) => props.img_path});
  background-size: cover;
  border-radius: 5px;
  &::after {
    content: "";
    display: block;
    padding-bottom: 145%;
  }
`;

export default function Detail() {
  const { id } = useParams();
  const isTv = useMatch(`/tv/${id}`);
  const isMovie = useMatch(`/movie/${id}`);
  const category = isTv ? "tv" : isMovie ? "movie" : undefined;
  const { isLoading: isDetailLoading, data: detailData } = useQuery<
    IDetailData | undefined
  >(`${category}${id}Detail`, () => fetchDetail({ category, id }));
  const { isLoading: isSimilarLoading, data: similarData } = useQuery(
    `${category}${id}similar`,
    () => fetchSimilar({ category, id })
  );
  const title = detailData?.name || detailData?.title;
  return (
    <Contianer>
      {isDetailLoading ? (
        "Loading"
      ) : (
        <DetailMain
          img_path={imageUrlMake(detailData?.backdrop_path || "", "original")}
        >
          <DetailMainInfo>
            <InfoTitle>
              {title}
              <InfoLank>평점 : {detailData?.vote_average}</InfoLank>
            </InfoTitle>
            <InfoBtns>
              <span>자세히 보기 &rarr;</span>
            </InfoBtns>
            <InfoOverview>{detailData?.overview}</InfoOverview>
          </DetailMainInfo>
          <DetailMainImg
            img_path={imageUrlMake(detailData?.poster_path || "", "w500")}
          />
        </DetailMain>
      )}
      <SwiperSlider
        isLoading={isSimilarLoading}
        data={similarData?.results.slice(0, 20)!}
        title="이 컨텐츠와 비슷한 프로그램"
        category={category}
      />
    </Contianer>
  );
}
