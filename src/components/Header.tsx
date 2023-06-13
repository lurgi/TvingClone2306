import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

const heightTransfrom = (x: number) => {
  return `${(65 / 1920) * x + 30}px`;
};
const fontSizeTransfrom = (x: number) => {
  return `${(1 / 192) * x + 9}px`;
};
const Container = styled.header<{ width: number }>`
  height: ${(props) => heightTransfrom(props.width)};
  background-color: gray;
  color: white;
  font-size: ${(props) => fontSizeTransfrom(props.width)};
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.nav`
  padding: 0 5%;
  height: 100%;
  width: 60%;
`;
const Ul = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  li {
    margin-right: 6%;
    font-weight: 600;
  }
`;
const HomeIcon = styled.li`
  height: 100%;
  width: 17%;
  max-width: 95px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  background-image: url(https://www.tving.com/img/tving-new-logo-pc.svg);
`;
const LiveBtn = styled.li``;
const TvBtn = styled.li``;
const MovieBtn = styled.li``;
const SearchProfile = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 5%;
  button {
    margin-right: 6%;
  }
`;
const SearchIcon = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 130%;
`;
const Profile = styled.div`
  width: 8%;
  background-color: black;
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  border-radius: 20%;
`;

function Header() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleSet = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSet);
    return () => window.removeEventListener("resize", handleSet);
  }, [width]);

  return (
    <Container width={width}>
      <Nav>
        <Ul>
          <HomeIcon></HomeIcon>
          <LiveBtn>실시간</LiveBtn>
          <TvBtn>TV프로그램</TvBtn>
          <MovieBtn>영화</MovieBtn>
        </Ul>
      </Nav>
      <SearchProfile>
        <SearchIcon>
          <FontAwesomeIcon
            icon={icon({ name: "magnifying-glass", style: "solid" })}
          />
        </SearchIcon>
        <Profile></Profile>
      </SearchProfile>
    </Container>
  );
}
export default Header;
