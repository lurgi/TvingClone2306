import { Link } from "react-router-dom";
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
const Nav = styled.nav`
  margin: 2% 0%;
  font-size: 90%;
`;
const Ul = styled.ul`
  display: flex;
  & li {
    margin-right: 2%;
  }
`;
const CopyrightBox = styled.div`
  & p {
    font-size: 80%;
    color: ${(props) => props.theme.gray400};
    & span:not(:last-child) {
      border-right: 0.5px solid ${(props) => props.theme.gray500};
      padding-right: 1%;
      margin-right: 1%;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Alert>
        <GrayLetter style={{ marginRight: "1%" }}>공지사항</GrayLetter>
        <AccentLetter>
          <Link to="/">Tving Clone 2306</Link>
        </AccentLetter>
      </Alert>
      <Nav>
        <Ul>
          <li style={{ marginRight: "2%" }}>
            <AccentLetter>고객센터</AccentLetter>
          </li>
          <li>
            <AccentLetter>이용약관</AccentLetter>
          </li>
          <li>
            <AccentLetter>개인정보처리방침</AccentLetter>
          </li>
          <li>
            <AccentLetter>청소년 보호정책</AccentLetter>
          </li>
          <li>
            <AccentLetter>법적고지</AccentLetter>
          </li>
          <li>
            <AccentLetter>인재채용</AccentLetter>
          </li>
        </Ul>
      </Nav>
      <CopyrightBox>
        <p>
          <span>만든사람 : 박정우</span>
          <span style={{ textDecoration: "underline" }}>
            <Link to="https://github.com/lurgi?tab=overview&from=2023-06-01&to=2023-06-28">
              깃허브&rarr;
            </Link>
          </span>
          <span style={{ textDecoration: "underline" }}>
            <Link to="https://lurgi.tistory.com/">티스토리&rarr;</Link>
          </span>
        </p>
      </CopyrightBox>
    </Wrapper>
  );
}
