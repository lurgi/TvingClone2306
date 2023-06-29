import { styled } from "styled-components";
import { IData } from "../../api";
import { imageUrlMake } from "../../util";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  font-size: 100%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-3%);
  }
`;
const CardPoster = styled.div<{ image_url: string }>`
  border-radius: 4px;
  width: 100%;
  background-image: url(${(props) => props.image_url});
  background-size: cover;
  &::after {
    content: "";
    display: block;
    padding-bottom: 141.5%;
  }
`;
const CardTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
  padding: 2% 0%;
  color: ${(props) => props.theme.gray200};
`;

function Card({ data, category }: { data: IData; category?: "movie" | "tv" }) {
  const title = data.name || data.title;
  const linkTo = category || data.media_type;
  return (
    <Container>
      <Link to={`/${linkTo}/${data.id}`}>
        <CardPoster
          image_url={imageUrlMake(data.poster_path, "w500")}
        ></CardPoster>
        <CardTitle>{title}</CardTitle>
      </Link>
    </Container>
  );
}

export default Card;
