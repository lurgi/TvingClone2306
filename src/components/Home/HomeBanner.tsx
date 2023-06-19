import { styled } from "styled-components";
import { ITrending } from "../../api";
import { FadeInOutVar, imageUrlMake } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Elipsis from "../others/Elipsis";
const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: black;
`;

const Banner = styled(motion.div)<{ imageUrl: string }>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.imageUrl});
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-bottom: 56%;
  }
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
const BannerDetail = styled.div`
  position: absolute;
  width: 30%;
  height: 30%;
  left: 5%;
  bottom: 34%;
  font-weight: 800;
  font-size: 300%;
  color: ${(props) => props.theme.gray100};
`;
const BannerTitle = styled.h1``;
const BannerItems = styled.div`
  position: absolute;
  width: 100%;
  padding: 5%;
  bottom: 10%;
  color: ${(props) => props.theme.gray100};
  display: flex;
  justify-content: space-between;
`;

function HomeBanner({ backScreenData }: { backScreenData: ITrending[] }) {
  const [order, setOrder] = useState(1);
  const handleAfterClick = () => {
    setOrder((prev) => Math.min(prev + 1, 3));
  };
  const handleBeforeClick = () => {
    setOrder((prev) => Math.max(prev - 1, 0));
  };
  return (
    <Container>
      {backScreenData.map((data, index) =>
        order === index ? (
          <AnimatePresence>
            <Banner
              variants={FadeInOutVar}
              initial={"initial"}
              animate={"animate"}
              exit="exit"
              imageUrl={imageUrlMake(data.backdrop_path)}
            >
              <BannerDetail>
                <BannerTitle>{data.title || data.name}</BannerTitle>
              </BannerDetail>
            </Banner>
          </AnimatePresence>
        ) : null
      )}
      <BannerItems>
        <div>
          <Elipsis></Elipsis>
        </div>
        <div>자세히보기</div>
      </BannerItems>
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

export default HomeBanner;
