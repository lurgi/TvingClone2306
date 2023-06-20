import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 100%;
  & div {
    margin-right: 25%;
    display: flex;
    align-items: center;
  }
`;
const IconDiv = styled.div<{ isAccent: boolean }>`
  color: ${(props) =>
    props.isAccent ? props.theme.gray100 : props.theme.gray400};
  &:hover {
    cursor: pointer;
  }
`;

const Elipsis = ({
  setState,
  max,
  state,
}: {
  setState: React.Dispatch<React.SetStateAction<number>>;
  state: number;
  max: number;
}) => {
  const handleClick = (current: number) => {
    setState(current);
  };
  return (
    <Container>
      {Array(max)
        .fill(0)
        .map((_, i) => (
          <IconDiv
            key={i}
            isAccent={i === state}
            onClick={() => handleClick(i)}
          >
            <FontAwesomeIcon
              icon={icon({ name: "circle", style: "solid" })}
              style={{ fontSize: "53%" }}
            />
          </IconDiv>
        ))}
    </Container>
  );
};
export default Elipsis;
