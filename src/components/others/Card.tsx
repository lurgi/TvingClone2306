import { styled } from "styled-components";
import { IData } from "../../api";
import { imageUrlMake } from "../../util";

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

function Card({ data }: { data: IData }) {
  const title = data.name || data.title;
  return (
    <Container>
      <CardPoster
        image_url={imageUrlMake(data.poster_path, "w500")}
      ></CardPoster>
      <CardTitle>{title}</CardTitle>
    </Container>
  );
}

export default Card;
