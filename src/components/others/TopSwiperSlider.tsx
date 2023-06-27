import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IData } from "../../api";
import Ellipsis from "./Ellipsis";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRecoilValue } from "recoil";
import TypeSwiper, { A11y, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import { windowWidth } from "../../atoms";
import TopCard from "./TopCard";

const Container = styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  color: ${(props) => props.theme.gray100};
  padding: 0% 5%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 2%;
  }
  & .hover_div {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  &:hover {
    .hover_div {
      opacity: 1;
    }
  }
`;
const Title = styled.h2`
  font-weight: 600;
  padding: 1% 0%;
  color: ${(props) => props.theme.gray100};
  display: flex;
`;

const Slider = styled(motion.div)`
  top: 11%;
  width: 100%;
`;
const ArrBtn = styled.div`
  position: absolute;
  width: 4.5%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.gray200};
  transition: color 0.2s ease-in-out;
  background-color: rgba(5, 5, 5, 0.4);
  &:hover {
    color: ${(props) => props.theme.gray100};
    cursor: pointer;
  }
`;

const EllipsisDiv = styled.div`
  position: absolute;
  width: 20%;
  font-size: 80%;
  top: 4%;
  right: 5%;
  display: flex;
  justify-content: end;
`;

export default function TopSwiperSlider({
  isLoading,
  data,
  title,
}: {
  isLoading: boolean;
  data: IData[];
  title: string;
}) {
  const contents = data?.slice(0, 20);
  const windowSize = useRecoilValue(windowWidth);
  const swiperRef = useRef<TypeSwiper | null>();
  const [carousellIndex, setCarousellIndex] = useState(0);
  const [cards, setCards] = useState<number>(
    windowSize <= 850
      ? 3.5
      : windowSize > 850 && windowSize <= 1050
      ? 4
      : windowSize > 1050 && windowSize <= 1250
      ? 4.5
      : windowSize > 1250 && windowSize <= 1450
      ? 5
      : 5.5
  );
  useEffect(() => {
    if (windowSize < 850) {
      setCards(3.5);
    } else if (windowSize > 850 && windowSize <= 1050) {
      setCards(4);
    } else if (windowSize > 1050 && windowSize <= 1250) {
      setCards(4.5);
    } else if (windowSize > 1250 && windowSize <= 1450) {
      setCards(5);
    } else if (windowSize > 1450) {
      setCards(5.5);
    }
  }, [windowSize]);
  const floorCardsNum = Math.floor(cards);
  const indexMax = Math.ceil(20 / floorCardsNum) - 1;
  const handleAfterClick = () => {
    setCarousellIndex((prev) => (prev === indexMax ? indexMax : prev + 1));
  };
  const handleBeforeClick = () => {
    setCarousellIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };
  useEffect(() => {
    if (carousellIndex * floorCardsNum < 20 - floorCardsNum) {
      swiperRef.current?.slideTo(carousellIndex * floorCardsNum);
    } else {
      swiperRef.current?.slideTo(20 - floorCardsNum);
    }
  }, [carousellIndex, floorCardsNum]);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Title>{title}</Title>
          <Slider>
            <Swiper
              style={{ overflow: "visible", zIndex: 0 }}
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={"1%"}
              slidesPerView={cards}
              onSlideChange={(swiper) => {
                const index = Math.floor(swiper.activeIndex / floorCardsNum);
                const rest = swiper.activeIndex % floorCardsNum;
                if (swiper.activeIndex < 20 - floorCardsNum) {
                  if (rest < Math.ceil(floorCardsNum / 2)) {
                    setCarousellIndex(index);
                    swiperRef.current?.slideTo(index * floorCardsNum);
                  } else {
                    setCarousellIndex((index + 1) * floorCardsNum);
                    swiperRef.current?.slideTo((index + 1) * floorCardsNum);
                  }
                } else {
                  setCarousellIndex(indexMax);
                  swiperRef.current?.slideTo(swiper.activeIndex);
                }
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="mySwiper"
            >
              {contents.map((content, i) => (
                <SwiperSlide key={i} style={{ overflow: "visible" }}>
                  <TopCard rank={i + 1} data={content} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Slider>
          <div className="hover_div">
            <EllipsisDiv>
              <Ellipsis
                state={carousellIndex}
                setState={setCarousellIndex}
                max={indexMax + 1}
              ></Ellipsis>
              <span style={{ marginLeft: "3%" }}>전체보기</span>
            </EllipsisDiv>
            <AnimatePresence>
              {carousellIndex !== 0 ? (
                <ArrBtn
                  key={"arrbtn1"}
                  onClick={handleBeforeClick}
                  style={{ left: 0 }}
                >
                  <FontAwesomeIcon
                    icon={icon({ name: "chevron-left", style: "solid" })}
                    style={{ fontSize: "100%" }}
                  />
                </ArrBtn>
              ) : null}
              {carousellIndex !== indexMax ? (
                <ArrBtn
                  key={"arrbtn2"}
                  onClick={handleAfterClick}
                  style={{ right: 0 }}
                >
                  <FontAwesomeIcon
                    icon={icon({ name: "chevron-right", style: "solid" })}
                    style={{ fontSize: "100%" }}
                  />
                </ArrBtn>
              ) : null}
            </AnimatePresence>
          </div>
        </Container>
      )}
    </>
  );
}
