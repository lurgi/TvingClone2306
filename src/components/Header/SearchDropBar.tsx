import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ContainerFadeInOutVar } from "../../util";

const Contianer = styled(motion.div)`
  position: absolute;
  padding-top: 11%;
  height: 300%;
  width: 100%;
  z-index: -1;
  background-color: #191819;
  display: flex;
  justify-content: center;
`;
const SearchForm = styled.form`
  width: 70%;
  min-width: 470px;
  max-width: 700px;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2.5px solid whitesmoke;
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SearchInput = styled.input`
  width: 93%;
  height: 90%;
  background: none;
  border: none;
  font-size: 150%;
  outline: none;
  color: whitesmoke;
  font-weight: 500;
`;
const SearchBtn = styled.button`
  width: 7%;
  font-size: 140%;
  color: whitesmoke;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const SearchDropBar = () => {
  const { register, handleSubmit } = useForm();
  const onValid = (form: any) => {
    console.log(form);
  };
  const onInValid = (errors: any) => {
    console.log(errors.SearchText.message);
  };
  return (
    <Contianer
      variants={ContainerFadeInOutVar}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SearchForm onSubmit={handleSubmit(onValid, onInValid)}>
        <SearchInput
          {...register("SearchText", {
            minLength: { message: "2글자 이상 입력해 주세요", value: 2 },
            required: "검색어를 입력해 주세요",
          })}
          placeholder="제목을 입력해 보세요 "
        />
        <SearchBtn type="submit">
          <FontAwesomeIcon
            icon={icon({ name: "magnifying-glass", style: "solid" })}
            style={{ fontSize: "130%" }}
          />
        </SearchBtn>
      </SearchForm>
    </Contianer>
  );
};

export default SearchDropBar;