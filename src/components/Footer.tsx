import { styled } from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: rgba(5, 5, 5, 1);
  color: white;
  position: absolute;
  padding: 5%;
`;
const Alert = styled.div`
  border-bottom: 0.5px solid ${(props) => props.theme.gray600};
  padding-bottom: 2%;
`;
const GrayLetter = styled.span`
  color: ${(props) => props.theme.gray400};
`;
const AccentLetter = styled.span`
  color: ${(props) => props.theme.gray200};
  font-weight: 600;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Alert>
        <GrayLetter style={{ marginRight: "1%" }}>공지사항</GrayLetter>
        <AccentLetter>Tving Clone</AccentLetter>
      </Alert>
    </Wrapper>
  );
}
