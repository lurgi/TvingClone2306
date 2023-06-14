import { styled } from "styled-components";
import { windowWidth } from "../../atoms";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

const fontSizeTransfrom = (x: number) => {
  return `${(1 / 100) * x + 5}px`;
};

const Container = styled.div<{ width: number }>`
  position: absolute;
  background-color: #202020;
  top: 140%;
  right: 0;
  width: 750%;
  height: 900%;
  border-radius: 4px;
  border: 0.5px solid #303030;
  font-size: ${(props) => fontSizeTransfrom(props.width)};
  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 6%;
    width: 100%;
    top: -6%;
    background: none;
  }
`;
const MenuTitle = styled.div`
  border-bottom: 0.5px solid ${(props) => props.theme.gray500};
  height: 27%;
  display: flex;
`;
const TitleAvatar = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DetailName = styled.div`
  margin-bottom: 4%;
  font-weight: 600;
`;
const DetailChange = styled.div`
  color: ${(props) => props.theme.gray400};
  &:hover {
    cursor: pointer;
  }
`;
const MenuContents = styled.ul`
  padding: 10% 0;
  height: 80%;
`;
const MenuContent = styled.li`
  height: 18%;
  padding-left: 10%;
  color: ${(props) => props.theme.gray300};
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.gray600};
    color: ${(props) => props.theme.gray200};
    font-weight: 600;
  }
`;

const ProfileDropMenu = () => {
  const width = useRecoilValue(windowWidth);
  return (
    <Container width={width}>
      <MenuTitle>
        <TitleAvatar>그림</TitleAvatar>
        <TitleDetail>
          <DetailName>이름</DetailName>
          <DetailChange>프로필 전환 &rarr;</DetailChange>
        </TitleDetail>
      </MenuTitle>
      <MenuContents>
        <MenuContent>Dropdown Menu</MenuContent>
        <MenuContent>My</MenuContent>
        <MenuContent>이용권</MenuContent>
        <MenuContent>고객센터</MenuContent>
        <MenuContent>로그아웃</MenuContent>
      </MenuContents>
    </Container>
  );
};
export default ProfileDropMenu;
