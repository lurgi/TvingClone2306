import { styled } from "styled-components";
import { windowWidth } from "../../atoms";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import { FadeInOutVar } from "../../util";

const fontSizeTransfrom = (x: number) => {
  return `${(1 / 100) * x + 5}px`;
};

const Container = styled(motion.div)<{ width: number }>`
  position: absolute;
  background-color: ${(props) => props.theme.gray900};
  top: 140%;
  right: 0;
  width: 750%;
  height: 900%;
  border-radius: 4px;
  border: 0.5px solid ${(props) => props.theme.gray600};
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
  border-bottom: 0.5px solid ${(props) => props.theme.gray600};
  height: 27%;
  display: flex;
`;
const TitleAvatar = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AvatarImg = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 5px;
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
  color: ${(props) => props.theme.gray400};
  display: flex;
  align-items: center;
  font-weight: 600;
  &:hover {
    background-color: ${(props) => props.theme.gray600};
    color: ${(props) => props.theme.gray100};
    cursor: pointer;
  }
`;

const ProfileDropMenu = () => {
  const width = useRecoilValue(windowWidth);
  return (
    <Container
      width={width}
      variants={FadeInOutVar}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <MenuTitle>
        <TitleAvatar>
          <AvatarImg
            alt="avatar"
            src="https://image.tving.com/upload/profile/default.png/dims/resize/F_webp,100"
          ></AvatarImg>
        </TitleAvatar>
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
