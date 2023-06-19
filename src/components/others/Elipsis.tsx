import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 100%;
`;

const Elipsis = ({
  setState,
  max,
}: {
  setState: React.Dispatch<React.SetStateAction<number>>;
  max: number;
}) => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={icon({ name: "circle", style: "solid" })}
        style={{ fontSize: "55%" }}
      />
    </Container>
  );
};
export default Elipsis;
