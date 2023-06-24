import { styled } from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IData } from "../../api";
import Ellipsis from "./Ellipsis";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { A11y, Navigation, Pagination } from "swiper";

const Container = styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  color: ${(props) => props.theme.gray100};
  padding: 0% 5%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 0%;
  }
  & .hover_div {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    z-index: 99;
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
  width: 141%;
`;
const ArrBtn = styled.div`
  position: absolute;
  width: 5%;
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

function SwiperSlider({ data, title }: { data: IData[]; title: string }) {
  const contents = data.slice(0, 20);
  const [order, setOrder] = useState(0);
  const [isBack, setIsBack] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const handleAfterClick = () => {
    if (isSliding) return;
    setIsBack(false);
    setOrder((prev) => (prev === 3 ? 3 : prev + 1));
    setIsSliding(true);
  };
  const handleBeforeClick = () => {
    if (isSliding) return;
    setIsBack(true);
    setOrder((prev) => (prev === 0 ? 0 : prev - 1));
    setIsSliding(true);
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Slider>
        <Swiper
          style={{ overflow: "visible" }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={"1%"}
          slidesPerView={7}
          onSlideChange={(swiper) => console.log(swiper)}
        >
          {contents.map((content, i) => (
            <SwiperSlide style={{ overflow: "visible" }}>
              <Card key={i} data={content} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Slider>
      <div className="hover_div">
        <EllipsisDiv>
          {/* <Ellipsis state={order} setState={setOrder} max={4}></Ellipsis> */}
          <span style={{ marginLeft: "15%" }}>전체보기</span>
        </EllipsisDiv>
        <AnimatePresence>
          {order !== 0 ? (
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
          {order !== 3 ? (
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
  );
}

export default SwiperSlider;