import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled(Link)`
  @media (max-width: 1000px) {
    padding: 2% 4.5%;
  }
  @media (min-width: 1000px) {
    padding: 18px 40.5px;
    font-size: 14px;
  }
  font-weight: 600;
  backdrop-filter: blur(5px);
  border: 1.5px solid ${(props) => props.theme.gray400};
  border-radius: 5px;
  color: ${(props) => props.theme.gray200};
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${(props) => props.theme.gray200};
    cursor: pointer;
    background-color: rgba(5, 5, 5, 0.1);
  }
`;

interface IProps {
  children: React.ReactElement | string;
  category: string | undefined;
  id: number;
}

const SquareBtn = ({ children, category, id }: IProps) => {
  return <Container to={`/${category}/${id}`}>{children}</Container>;
};
export default SquareBtn;
