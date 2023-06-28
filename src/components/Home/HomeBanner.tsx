import { styled } from "styled-components";
import { IData } from "../../api";
import { FadeInOutVar, fadeIn, imageUrlMake } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Elipsis from "../others/Ellipsis";
import SquareBtn from "./SquareBtn";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: -18%;
  background-color: black;
`;

const Banner = styled(motion.div)<{ image_url: string }>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.image_url});
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
const BannerTitle = styled.h1`
  position: absolute;
  left: 5%;
  max-width: 80%;
  bottom: 48%;
  font-weight: 500;
  font-size: 270%;
  color: ${(props) => props.theme.gray100};
`;
const BannerItems = styled.div`
  position: absolute;
  width: 100%;
  padding: 5%;
  bottom: 28%;
  color: ${(props) => props.theme.gray100};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BannerPlay = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2%;
  width: 30%;
`;
const PlayBtn = styled.button`
  background: none;
  border: none;
  margin-right: 11%;
  font-size: 100%;
  color: ${(props) => props.theme.gray100};
  & div {
    animation: ${fadeIn} 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
`;
const IconDiv1 = styled.div`
  display: flex;
  align-items: center;
`;
const IconDiv2 = styled(IconDiv1)``;

function HomeBanner({
  isLoading,
  backScreenData,
}: {
  isLoading: boolean;
  backScreenData: IData[];
}) {
  const [order, setOrder] = useState(0);
  const [isPlay, setIsPlay] = useState(true);

  const handleAfterClick = () => {
    setOrder((prev) => (prev === 3 ? 0 : prev + 1));
  };
  const handleBeforeClick = () => {
    setOrder((prev) => (prev === 0 ? 3 : prev - 1));
  };
  const handlePlay = () => {
    setIsPlay((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    let timer: NodeJS.Timer | undefined;
    if (isPlay) {
      timer = setInterval(handleAfterClick, 5000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [order, isPlay]);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          {backScreenData?.map((data, index) =>
            order === index ? (
              <AnimatePresence key={index}>
                <Banner
                  variants={FadeInOutVar}
                  initial={"initial"}
                  animate={"animate"}
                  exit="exit"
                  image_url={imageUrlMake(data.backdrop_path, "original")}
                >
                  <BannerTitle>{data.title || data.name}</BannerTitle>
                </Banner>
              </AnimatePresence>
            ) : null
          )}
          <BannerItems>
            <BannerPlay>
              <PlayBtn onClick={handlePlay}>
                {isPlay ? (
                  <IconDiv1>
                    <FontAwesomeIcon
                      icon={icon({ name: "pause", style: "solid" })}
                      style={{ fontSize: "100%" }}
                    />
                  </IconDiv1>
                ) : (
                  <IconDiv2>
                    <FontAwesomeIcon
                      icon={icon({ name: "play", style: "solid" })}
                      style={{ fontSize: "90%" }}
                    />
                  </IconDiv2>
                )}
              </PlayBtn>
              <Elipsis state={order} setState={setOrder} max={4}></Elipsis>
            </BannerPlay>
            <SquareBtn to={backScreenData[order].id}>자세히보기</SquareBtn>
          </BannerItems>
          <ArrBtn onClick={handleBeforeClick}>
            <FontAwesomeIcon
              icon={icon({ name: "chevron-left", style: "solid" })}
              style={{ fontSize: "180%" }}
            />
          </ArrBtn>
          <ArrBtn onClick={handleAfterClick} style={{ right: 0 }}>
            <FontAwesomeIcon
              icon={icon({ name: "chevron-right", style: "solid" })}
              style={{ fontSize: "180%" }}
            />
          </ArrBtn>
        </Container>
      )}
    </>
  );
}

export default HomeBanner;
