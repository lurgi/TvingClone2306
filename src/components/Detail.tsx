import { useMatch, useParams } from "react-router-dom";
import { fetchDetail } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import { imageUrlMake } from "../util";

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
  color: ${(props) => props.theme.gray200};
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
  width: 70%;
  padding: 2% 5% 2% 1%;
  display: flex;
  flex-direction: column;
`;
const InfoTitle = styled.span`
  color: ${(props) => props.theme.gray200};
`;
const InfoBtns = styled.div``;
const InfoOverview = styled.span``;
const DetailMainImg = styled.div<{ img_path: string }>`
  width: 30%;
  margin-right: 5%;
  background-color: gray;
  background-image: url(${(props) => props.img_path});
  background-size: cover;
  border-radius: 5px;
  &::after {
    content: "";
    display: block;
    padding-bottom: 141.5%;
  }
`;

export default function Detail() {
  const { id } = useParams();
  const isTv = useMatch(`/tv/${id}`);
  const isMovie = useMatch(`/movie/${id}`);
  const category = isTv ? "tv" : isMovie ? "movie" : undefined;
  const { isLoading, data } = useQuery<IDetailData | undefined>(
    `${category}${id}Detail`,
    () => fetchDetail({ category, id })
  );
  const title = data?.name || data?.title;
  console.log(data);
  return (
    <Contianer>
      {isLoading ? (
        "Loading"
      ) : (
        <DetailMain
          img_path={imageUrlMake(data?.backdrop_path || "", "original")}
        >
          <DetailMainInfo>
            <InfoTitle>{title}</InfoTitle>
            <InfoBtns></InfoBtns>
            <InfoOverview>{data?.overview}</InfoOverview>
          </DetailMainInfo>
          <DetailMainImg
            img_path={imageUrlMake(data?.poster_path || "", "w500")}
          />
        </DetailMain>
      )}
    </Contianer>
  );
}
