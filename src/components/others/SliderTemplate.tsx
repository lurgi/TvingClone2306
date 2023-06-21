import { styled } from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ITrending } from "../../api";

const Container = styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  color: ${(props) => props.theme.gray100};
  margin-bottom: 5%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 3%;
  }
`;
const SliderDetail = styled.div`
  padding: 0% 5%;
`;
const Title = styled.h2`
  font-weight: 600;
  padding: 1% 0%;
  color: ${(props) => props.theme.gray100};
`;

const Slider = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(5, 1fr);
  gap: 1%;
`;
const SliderHover = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
const ArrBtn = styled.div`
  position: absolute;
  width: 5%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.gray400};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.gray100};
    cursor: pointer;
    background-color: rgba(5, 5, 5, 0.1);
  }
`;
const LeftSideFakeCard = styled.div`
  position: absolute;
  left: -20%;
  width: 18%;
`;

const RightSideFakeCard = styled.div`
  position: absolute;
  right: -20%;
  width: 18%;
`;

function SliderTemplate({ data, title }: { data: ITrending[]; title: string }) {
  const contents = data.slice(0, 20);
  const [order, setOrder] = useState(0);
  const handleAfterClick = () => {
    setOrder((prev) => (prev === 3 ? 3 : prev + 1));
  };
  const handleBeforeClick = () => {
    setOrder((prev) => (prev === 0 ? 0 : prev - 1));
  };
  return (
    <Container>
      <SliderDetail>
        <Title>{title}</Title>
        <Slider>
          {order !== 0 ? (
            <LeftSideFakeCard>
              <Card data={contents[order * 5 - 1]}></Card>
            </LeftSideFakeCard>
          ) : null}
          {contents.slice(order * 5, order * 5 + 5).map((content, i) => (
            <Card key={i} data={content} />
          ))}
          {order !== 3 ? (
            <RightSideFakeCard>
              <Card data={contents[order * 5 + 5]}></Card>
            </RightSideFakeCard>
          ) : null}
        </Slider>
      </SliderDetail>
      <SliderHover>
        {order !== 0 ? (
          <ArrBtn onClick={handleBeforeClick}>
            <FontAwesomeIcon
              icon={icon({ name: "chevron-left", style: "solid" })}
              style={{ fontSize: "100%" }}
            />
          </ArrBtn>
        ) : null}
        {order !== 3 ? (
          <ArrBtn onClick={handleAfterClick} style={{ right: 0 }}>
            <FontAwesomeIcon
              icon={icon({ name: "chevron-right", style: "solid" })}
              style={{ fontSize: "100%" }}
            />
          </ArrBtn>
        ) : null}
      </SliderHover>
    </Container>
  );
}

export default SliderTemplate;
