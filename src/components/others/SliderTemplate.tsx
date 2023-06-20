import { styled } from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Container = styled.div`
  width: 100%;
  background-color: red;
  position: relative;
`;
const Title = styled.h2``;

const Slider = styled.div`
  display: flex;
`;
const ArrBtn = styled.div`
  position: absolute;
  width: 5%;
  height: 80%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.gray400};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.gray100};
    cursor: pointer;
  }
`;

function SliderTemplate() {
  const contents = Array(20).fill(0);
  const [order, setOrder] = useState(0);
  const handleAfterClick = () => {
    setOrder((prev) => (prev + 1 === 4 ? 3 : prev + 1));
  };
  const handleBeforeClick = () => {
    setOrder((prev) => (prev - 1 === -1 ? 0 : prev - 1));
  };
  return (
    <Container>
      <Title>타이틀</Title>
      <Slider>
        {contents.slice(order * 5, 6).map((content, i) => (
          <div key={i}>{i}</div>
        ))}
      </Slider>
      <ArrBtn onClick={handleBeforeClick}>
        <FontAwesomeIcon
          icon={icon({ name: "chevron-left", style: "solid" })}
          style={{ fontSize: "190%" }}
        />
      </ArrBtn>
      <ArrBtn onClick={handleAfterClick} style={{ right: 0 }}>
        <FontAwesomeIcon
          icon={icon({ name: "chevron-right", style: "solid" })}
          style={{ fontSize: "190%" }}
        />
      </ArrBtn>
    </Container>
  );
}

export default SliderTemplate;
