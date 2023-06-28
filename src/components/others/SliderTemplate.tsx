import { styled } from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IData } from "../../api";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  background-color: black;
  position: relative;
  color: ${(props) => props.theme.gray100};
  padding: 0% 5%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 32%;
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
  display: grid;
  position: absolute;
  top: 11%;
  width: 90%;
  grid-template-columns: repeat(5, 1fr);
  gap: 1%;
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
const LeftSideFakeCard = styled.div`
  position: absolute;
  left: -20.1%;
  width: 19.204%;
`;

const RightSideFakeCard = styled.div`
  position: absolute;
  right: -20.1%;
  width: 19.204%;
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

const SliderVar = {
  initial: (isBack: boolean) => {
    return { x: isBack ? "-101%" : "101%" };
  },
  animate: {
    x: "0",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: (isBack: boolean) => {
    return {
      x: isBack ? "101%" : "-101%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    };
  },
};

function SliderTemplate({
  isLoading,
  data,
  title,
}: {
  isLoading: boolean;
  data: IData[];
  title: string;
}) {
  const contents = data?.slice(0, 20);
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
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Title>{title}</Title>
          <AnimatePresence
            initial={false}
            onExitComplete={() => setIsSliding(false)}
            custom={isBack}
          >
            <Slider
              custom={isBack}
              variants={SliderVar}
              initial="initial"
              animate="animate"
              exit="exit"
              key={order}
            >
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
          </AnimatePresence>
          <div className="hover_div">
            <EllipsisDiv>
              {/* <Ellipsis state={order} setState={setOrder} max={4}></Ellipsis> */}
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
      )}
    </>
  );
}

export default SliderTemplate;
