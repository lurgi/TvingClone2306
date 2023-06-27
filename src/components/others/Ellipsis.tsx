import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 100%;
  justify-content: end;
  & div {
    margin-right: 20%;
    display: flex;
    align-items: center;
  }
`;
const IconDiv = styled.div<{ is_accent: boolean }>`
  color: ${(props) =>
    props.is_accent ? props.theme.gray100 : props.theme.gray400};
  &:hover {
    cursor: pointer;
  }
`;

const Ellipsis = ({
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
            is_accent={i === state}
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
export default Ellipsis;
