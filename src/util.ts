import { keyframes } from "styled-components";

export const fadeIn = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`;

export const ContainerFadeInOutVar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
