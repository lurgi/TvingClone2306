import { useMatch, useParams } from "react-router-dom";
import { fetchDetail } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";

const Contianer = styled.div`
  width: 100%;
  background-color: rgba(5, 5, 5, 1);
  padding: 10% 5% 0%;
`;
const DetailMain = styled.div``;
const DetailMainInfo = styled.div``;
const InfoTitle = styled.span`
  color: ${(props) => props.theme.gray200};
`;
const DetailMainImg = styled.div``;

interface IDetailData {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  homepage: string;
  id: number;
  in_production: boolean;
  last_air_date: string;
  name: string;
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
}

export default function Detail() {
  const { id } = useParams();
  const isTv = useMatch(`/tv/${id}`);
  const isMovie = useMatch(`/movie/${id}`);
  const category = isTv ? "tv" : isMovie ? "movie" : undefined;
  const { isLoading, data } = useQuery<IDetailData | undefined>(
    `${category}${id}Detail`,
    () => fetchDetail({ category, id })
  );
  return (
    <Contianer>
      <DetailMain>
        <DetailMainInfo>
          <InfoTitle>{data?.name}</InfoTitle>
        </DetailMainInfo>
        <DetailMainImg></DetailMainImg>
      </DetailMain>
    </Contianer>
  );
}
