import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchDropBar from "./Header/SearchDropBar";
import ProfileDropMenu from "./Header/ProfileDropMenu";
import { useRecoilState } from "recoil";
import { windowWidth } from "../atoms";
import { Link } from "react-router-dom";

const heightTransfrom = (x: number) => {
  return `${(65 / 1920) * x + 30}px`;
};
const fontSizeTransfrom = (x: number) => {
  return `${(1 / 192) * x + 9}px`;
};
const Container = styled.header<{ width: number }>`
  height: ${(props) => heightTransfrom(props.width)};
  width: 100vw;
  position: absolute;
  background: linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0));
  color: ${(props) => props.theme.gray100};
  font-size: ${(props) => fontSizeTransfrom(props.width)};
  display: flex;
  justify-content: space-between;
  z-index: 1;
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

const HomeIcon = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  background-image: url(https://www.tving.com/img/tving-new-logo-pc.svg);
`;
const HomeLi = styled.li`
  height: 100%;
  width: 19%;
  max-width: 95px;
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
  &:hover {
    cursor: pointer;
  }
`;
const Profile = styled.div`
  width: 8%;
  min-width: 20px;
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
  const [width, setWidth] = useRecoilState(windowWidth);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const handleSearch = () => {
    setIsSearchBar((prev) => !prev);
  };
  useEffect(() => {
    const handleSet = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSet);
    return () => window.removeEventListener("resize", handleSet);
  }, [setWidth]);
  const profile = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOverProfile = () => {
      setIsProfileMenu(true);
    };
    const handleLeaveProfile = () => {
      setIsProfileMenu(false);
    };
    profile.current?.addEventListener("mouseover", handleOverProfile);
    profile.current?.addEventListener("mouseleave", handleLeaveProfile);
  }, []);
  return (
    <Container width={width}>
      <Nav>
        <Ul>
          <HomeLi>
            <Link to={"/"}>
              <HomeIcon></HomeIcon>
            </Link>
          </HomeLi>
          <LiveBtn>
            <Link to={"/"}>실시간</Link>
          </LiveBtn>
          <TvBtn>
            <Link to={"tv"}>TV프로그램</Link>
          </TvBtn>
          <MovieBtn>
            <Link to={"movie"}>영화</Link>
          </MovieBtn>
        </Ul>
      </Nav>
      <SearchProfile>
        <SearchIcon onClick={handleSearch}>
          {isSearchBar ? (
            <FontAwesomeIcon
              icon={icon({ name: "xmark", style: "solid" })}
              style={{ fontSize: "150%" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={icon({ name: "magnifying-glass", style: "solid" })}
              style={{ fontSize: "130%" }}
            />
          )}
        </SearchIcon>
        <Profile ref={profile}>
          {isProfileMenu ? <ProfileDropMenu /> : null}
        </Profile>
      </SearchProfile>
      {isSearchBar ? <SearchDropBar /> : null}
    </Container>
  );
}
export default Header;
