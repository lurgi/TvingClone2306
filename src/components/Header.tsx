import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchDropBar from "./Header/SearchDropBar";
import ProfileDropMenu from "./Header/ProfileDropMenu";
import { useRecoilState } from "recoil";
import { windowWidth } from "../atoms";
import { Link, useMatch } from "react-router-dom";
import { fadeIn } from "../util";
import { AnimatePresence } from "framer-motion";

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
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.gray100};
    }
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
const LiveBtn = styled.li<{ homematch: boolean }>`
  color: ${(props) =>
    props.homematch ? props.theme.gray100 : props.theme.gray400};
`;
const TvBtn = styled.li<{ tvmatch: boolean }>`
  color: ${(props) =>
    props.tvmatch ? props.theme.gray100 : props.theme.gray400};
`;
const MovieBtn = styled.li<{ moviematch: boolean }>`
  color: ${(props) =>
    props.moviematch ? props.theme.gray100 : props.theme.gray400};
`;
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
  color: ${(props) => props.theme.gray50};
  font-size: 100%;
  &:hover {
    cursor: pointer;
  }
`;
const IconDiv1 = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
`;
const IconDiv2 = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
`;
const Profile = styled.div`
  width: 8%;
  min-width: 20px;
  background: none;
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  border-radius: 20%;
`;
const AvatarImg = styled.img`
  position: absolute;
  border-radius: 20%;
  width: 100%;
  height: 100%;
`;

function Header() {
  const [width, setWidth] = useRecoilState(windowWidth);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const handleSearch = () => {
    setIsSearchBar((prev) => !prev);
  };
  const tvMatch = useMatch("/tv");
  const movieMatch = useMatch("/movie");
  const homeMatch = useMatch("/");
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
          <LiveBtn homematch={Boolean(homeMatch)}>
            <Link to={"/"}>홈</Link>
          </LiveBtn>
          <TvBtn tvmatch={Boolean(tvMatch)}>
            <Link to={"tv"}>TV프로그램</Link>
          </TvBtn>
          <MovieBtn moviematch={Boolean(movieMatch)}>
            <Link to={"movie"}>영화</Link>
          </MovieBtn>
        </Ul>
      </Nav>
      <SearchProfile>
        <SearchIcon onClick={handleSearch}>
          {isSearchBar ? (
            <IconDiv1>
              <FontAwesomeIcon
                icon={icon({ name: "xmark", style: "solid" })}
                style={{ fontSize: "160%" }}
              />
            </IconDiv1>
          ) : (
            <IconDiv2>
              <FontAwesomeIcon
                icon={icon({ name: "magnifying-glass", style: "solid" })}
                style={{ fontSize: "130%" }}
              />
            </IconDiv2>
          )}
        </SearchIcon>
        <Profile ref={profile}>
          <AvatarImg
            alt="avatar"
            src="https://image.tving.com/upload/profile/default.png/dims/resize/F_webp,100"
          ></AvatarImg>

          <AnimatePresence>
            {isProfileMenu ? <ProfileDropMenu /> : null}
          </AnimatePresence>
        </Profile>
      </SearchProfile>
      <AnimatePresence>
        {isSearchBar ? <SearchDropBar /> : null}
      </AnimatePresence>
    </Container>
  );
}
export default Header;
