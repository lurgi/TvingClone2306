import { styled } from "styled-components";
import { IData } from "../../api";
import { imageUrlMake } from "../../util";
import { useRecoilValue } from "recoil";
import { windowWidth } from "../../atoms";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-3%);
  }
`;
const RankNumber = styled.div<{ width: number }>`
  bottom: 0;
  left: -20px;
  top: 0px;
  transform-origin: top left;
  scale: ${(props) => `${Math.min(Math.floor(props.width / 10), 130)}%`};
  height: 100%;
  width: 18%;
`;
const Container = styled.div`
  width: 100%;
  font-size: 100%;
  overflow: hidden;
`;
const CardPoster = styled.div<{ image_url: string }>`
  border-radius: 4px;
  width: 100%;
  background-image: url(${(props) => props.image_url});
  background-size: cover;
  &::after {
    content: "";
    display: block;
    padding-bottom: 141.5%;
  }
`;

interface IProps {
  rank: number;
  data: IData;
  category?: "movie" | "tv";
}

export default function TopCard({ rank, data, category }: IProps) {
  const width = useRecoilValue(windowWidth);
  const linkTo = category || data.media_type;
  return (
    <Link to={`/${linkTo}/${data.id}`}>
      <Wrapper>
        <RankNumber width={width}>
          {rank === 1 ? (
            <svg
              width="30"
              height="87"
              viewBox="0 0 30 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1wj3zy1"
            >
              <path
                d="M20.107.766C17.711 7 14.286 12.782 2.157 13.866l-1.3 8.673h10.595L1.86 86.505h15.072L29.79.765h-9.683z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 2 ? (
            <svg
              width="54"
              height="84"
              viewBox="0 0 54 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1u2bdbp"
            >
              <path
                d="M45.89 72.627H19.07c1.988-13.26 29.988-28.18 32.998-48.245l1.073-7.154C54.646 7.195 47.828.303 36.094.303c-14.205 0-22.895 7.939-24.57 19.106L9.758 31.187h14.027l1.702-11.342c.746-4.973 3.948-7.503 7.742-7.503 3.352 0 5.711 1.92 4.913 7.242l-1.1 7.328c-2.21 14.744-31.611 25.475-35.76 53.13L.746 83.62H44.24l1.649-10.993z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 3 ? (
            <svg
              width="49"
              height="85"
              viewBox="0 0 49 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1pkr4dc"
            >
              <path
                d="M35.115 40.675l.105-.697c7.397-2.269 10.561-6.893 11.673-14.309l1.191-7.94C49.68 7.086 42.683.805 31.303.805c-13.85 0-22.03 6.892-23.849 19.02l-1.661 11.08h13.762l1.635-10.906c.694-4.624 3.72-7.154 7.248-7.154 3.53 0 5.43 2.617 4.802 6.805l-1.243 8.288c-.693 4.625-1.883 7.853-7.882 7.853h-9.969l.292 10.993h8.557c4.5 0 6.669 2.006 5.779 7.94l-1.518 10.12c-.837 5.584-3.7 8.201-7.405 8.201-3.529 0-6.087-2.356-5.367-7.154l2.12-14.134H2.577L.431 66.064c-1.819 12.128 4.836 18.933 17.804 18.933 12.968 0 21.676-6.893 23.521-19.195l1.479-9.858c1.387-9.248-1.03-14.309-8.12-15.269z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 4 ? (
            <svg
              width="54"
              height="83"
              viewBox="0 0 54 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-17vwk9j"
            >
              <path
                d="M48.65.545H34.268C30.343 26.721 13.75 41.466 2.029 53.158L.496 63.366H29.17l-2.945 19.632h14.557l2.945-19.632h8.469l1.636-10.906h-8.47l3.887-25.914H45.19c-2.36 7.504-7.257 15.444-13.456 19.72l-.93 6.194H20.308l-.209-.96C33.673 39.81 45.328 24.452 48.65.545z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 5 ? (
            <svg
              width="50"
              height="84"
              viewBox="0 0 50 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-14z87yo"
            >
              <path
                d="M19.98 38.102h-.794l5.818-26.435H46.71L49.682.675H13.507L4.153 44.209l13.407 2.966c1.262-2.53 3.288-4.275 6.641-4.275 3.53 0 5.523 2.007 4.907 6.107L26.57 65.932c-.616 4.1-3.564 6.107-7.005 6.107-3.705 0-6.113-2.18-5.367-7.154l2.015-13.435H2.184L.43 63.14c-2.107 14.047 4.46 20.852 17.254 20.852 13.147 0 21.857-6.893 23.872-20.328l2.408-16.053c1.65-10.992-3.15-16.052-10.562-16.052-5.646 0-10.376 2.704-13.422 6.543z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 6 ? (
            <svg
              width="49"
              height="85"
              viewBox="0 0 49 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1bhk0kg"
            >
              <path
                d="M19.26 42.333h-.705l3.52-23.47c.51-3.402 3.02-6.02 6.902-6.02 3.528 0 5.684 2.095 4.926 7.155l-1.531 10.208H46.31l1.544-10.295C49.686 7.696 43.574.804 30.43.804 18.344.804 9.217 8.132 7.175 21.743L.816 64.145c-2.093 13.96 4.46 20.852 17.428 20.852s21.843-7.416 23.78-20.329l1.936-12.912c1.636-10.906-3.954-16.577-11.188-16.577-6.175 0-10.02 2.705-13.511 7.154zm7.691 24.604c-.523 3.49-3.474 6.107-6.827 6.107-3.793 0-5.848-2.181-5.102-7.154l1.897-12.651c.616-4.1 3.491-6.805 6.932-6.805 3.617 0 5.77 2.704 5.154 6.805l-2.054 13.698z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 7 ? (
            <svg
              width="48"
              height="83"
              viewBox="0 0 48 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1k5sgop"
            >
              <path
                d="M7.2.44L5.553 11.432h25.06C12.171 33.769 4.493 59.073.92 82.892h14.56c4.092-24.343 13.322-49.995 30.556-73.117l1.4-9.336H7.201z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 8 ? (
            <svg
              width="51"
              height="85"
              viewBox="0 0 51 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1095gm9"
            >
              <path
                d="M15.32 40.414l-.104.698C8.615 42.769 4.01 48.179 2.806 56.205L1.247 66.588c-1.82 12.127 5.62 18.409 18.503 18.409 12.882 0 22.118-6.282 23.937-18.41l1.557-10.382c1.31-8.724-1.765-13.523-8.059-15.093l.092-.611c6.68-2.181 10.514-7.154 11.613-14.483l1.244-8.288C51.6 7.958 45.438.804 32.38.804 19.32.804 11.013 7.958 9.547 17.73l-1.243 8.288c-1.086 7.242 1.168 12.215 7.017 14.396zm18.81-11.866c-.642 4.275-2.851 7.242-6.998 7.242-3.97 0-5.555-2.967-4.914-7.242l1.296-8.637c.628-4.188 3.014-7.155 7.073-7.155 4.147 0 5.467 2.967 4.838 7.155l-1.295 8.637zM29.21 65.454c-.667 4.45-3.167 7.59-7.667 7.59-4.236 0-6.059-3.14-5.391-7.59l1.806-12.04c.68-4.537 3.433-7.591 7.668-7.591 4.5 0 6.071 3.054 5.39 7.59l-1.806 12.04z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 9 ? (
            <svg
              width="49"
              height="85"
              viewBox="0 0 49 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-15xyjr8"
            >
              <path
                d="M29.732 43.467h.706l-3.52 23.47c-.51 3.402-3.02 6.02-6.901 6.02-3.53 0-5.685-2.094-4.926-7.154l1.53-10.208H2.684L1.14 65.89C-.693 78.104 5.42 84.997 18.564 84.997c12.085 0 21.212-7.329 23.254-20.94l6.36-42.401C50.27 7.696 43.717.804 30.75.804S8.906 8.22 6.97 21.132L5.033 34.045C3.397 44.95 8.987 50.622 16.221 50.622c6.175 0 10.021-2.705 13.511-7.155zm-7.69-24.603c.524-3.49 3.475-6.107 6.827-6.107 3.793 0 5.848 2.18 5.102 7.154l-1.897 12.65c-.615 4.101-3.491 6.806-6.931 6.806-3.617 0-5.77-2.705-5.155-6.805l2.054-13.698z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 10 ? (
            <svg
              width="76"
              height="85"
              viewBox="0 0 76 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1w5ppwh"
            >
              <path
                d="M19.425 2.29C17.111 8.31 13.803 13.892 2.09 14.94L.832 23.316h10.234L1.802 85.087h14.556L28.777 2.289h-9.352zM57.493.719c-12.969 0-21.655 7.329-23.697 20.94l-6.36 42.401c-2.04 13.611 4.346 21.027 17.403 21.027 13.057 0 21.845-7.416 23.886-21.027l6.36-42.402C77.126 8.048 70.55.718 57.493.718zM53.91 65.195c-.824 5.496-3.824 7.852-7.265 7.852-3.353 0-5.545-2.443-4.733-7.852l6.7-44.671c.811-5.41 3.9-7.765 7.163-7.765 3.441 0 5.646 2.356 4.835 7.765l-6.7 44.67z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 11 ? (
            <svg
              width="60"
              height="85"
              viewBox="0 0 60 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-dknvi8"
            >
              <path
                d="M19.59.719C17.232 6.847 13.865 12.53 1.941 13.597L.663 22.124h10.418L1.65 85.005h14.817L29.108.72H19.59zM49.715.719C47.36 6.847 43.992 12.53 32.068 13.597l-1.278 8.527h10.417l-9.431 62.881h14.817L59.234.72h-9.519z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 12 ? (
            <svg
              width="76"
              height="84"
              viewBox="0 0 76 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-9zqyhh"
            >
              <path
                d="M19.423 1.205C17.108 7.225 13.8 12.81 2.085 13.856L.83 22.232h10.235L1.798 84.003h14.558l12.42-82.798h-9.353zM68.034 73.003H41.212c1.99-13.262 29.99-28.181 33-48.248l1.074-7.154C76.79 7.567 69.972.675 58.237.675c-14.204 0-22.895 7.94-24.57 19.107L31.9 31.56H45.93l1.701-11.342c.746-4.973 3.949-7.503 7.743-7.503 3.352 0 5.712 1.92 4.913 7.241l-1.1 7.33C56.977 42.03 27.574 52.76 23.426 80.418l-.537 3.577h43.497l1.65-10.993z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 13 ? (
            <svg
              width="74"
              height="85"
              viewBox="0 0 74 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-wwi1na"
            >
              <path
                d="M18.611 2.199c-2.314 6.02-5.622 11.604-17.337 12.65L.018 23.226h10.234L.987 84.996h14.557l12.42-82.797H18.61zM60.318 40.675l.105-.697c7.398-2.269 10.562-6.893 11.674-14.309l1.191-7.94C74.885 7.086 67.887.805 56.505.805c-13.851 0-22.032 6.892-23.85 19.02l-1.663 11.08h13.764l1.636-10.906c.693-4.624 3.72-7.154 7.249-7.154 3.529 0 5.43 2.617 4.802 6.805L57.2 27.937c-.694 4.625-1.884 7.853-7.883 7.853h-9.97l.292 10.993h8.558c4.5 0 6.67 2.006 5.78 7.94l-1.519 10.12c-.837 5.584-3.7 8.201-7.406 8.201-3.529 0-6.087-2.356-5.367-7.154l2.12-14.134H27.776L25.63 66.064c-1.819 12.128 4.836 18.933 17.806 18.933s21.679-6.893 23.524-19.195l1.479-9.858c1.387-9.248-1.03-14.309-8.12-15.269z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 14 ? (
            <svg
              width="78"
              height="83"
              viewBox="0 0 78 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1rds8g1"
            >
              <path
                d="M19.248.206c-2.314 6.02-5.622 11.604-17.336 12.651L.655 21.234H10.89L1.624 83.007h14.558L28.6.206h-9.352zM72.177.548h-14.38C53.87 26.724 37.278 41.469 25.555 53.16l-1.53 10.209h28.672l-2.944 19.632H64.31l2.945-19.632h8.47l1.635-10.907h-8.47l3.887-25.914h-4.058c-2.36 7.504-7.257 15.444-13.457 19.72l-.929 6.194H43.834l-.209-.96C57.201 39.813 68.856 24.456 72.177.549z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 15 ? (
            <svg
              width="76"
              height="84"
              viewBox="0 0 76 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1yioeve"
            >
              <path
                d="M18.936 1.204c-2.314 6.02-5.622 11.604-17.338 12.65L.342 22.23h10.235L1.31 83.998h14.558L28.29 1.204h-9.353zM45.302 38.112h-.794l5.818-26.434h21.705L75.004.685H38.829L29.475 44.22l13.407 2.967c1.262-2.53 3.288-4.275 6.641-4.275 3.53 0 5.523 2.006 4.907 6.107l-2.538 16.925c-.616 4.1-3.564 6.107-7.005 6.107-3.705 0-6.113-2.181-5.367-7.154l2.015-13.435H27.506l-1.753 11.69c-2.108 14.046 4.46 20.851 17.253 20.851 13.147 0 21.857-6.892 23.872-20.327l2.408-16.053c1.65-10.993-3.15-16.053-10.562-16.053-5.646 0-10.375 2.705-13.422 6.543z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 16 ? (
            <svg
              width="75"
              height="85"
              viewBox="0 0 75 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-yhws13"
            >
              <path
                d="M18.931 2.199c-2.315 6.02-5.622 11.604-17.337 12.65L.338 23.226h10.234L1.307 84.996h14.557L28.283 2.2H18.93zM45.524 42.333h-.706l3.52-23.47c.51-3.402 3.02-6.02 6.902-6.02 3.53 0 5.686 2.095 4.927 7.155l-1.531 10.208h13.939l1.544-10.295C75.951 7.696 69.84.804 56.694.804c-12.087 0-21.215 7.328-23.256 20.939l-6.36 42.402c-2.094 13.96 4.46 20.852 17.429 20.852 12.969 0 21.845-7.416 23.781-20.329l1.937-12.912c1.636-10.906-3.954-16.577-11.188-16.577-6.176 0-10.022 2.705-13.513 7.154zm7.69 24.604c-.523 3.49-3.474 6.107-6.826 6.107-3.794 0-5.849-2.181-5.103-7.154l1.898-12.651c.615-4.1 3.49-6.805 6.931-6.805 3.617 0 5.77 2.704 5.155 6.805l-2.054 13.698z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 17 ? (
            <svg
              width="75"
              height="83"
              viewBox="0 0 75 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-oni"
            >
              <path
                d="M18.606.089c-2.314 6.02-5.621 11.604-17.335 12.651L.015 21.117h10.233L.984 82.892H15.54L27.957.089h-9.35zM34.438.438L32.79 11.432h25.053c-18.435 22.336-26.11 47.64-29.683 71.46h14.556c4.092-24.344 13.32-49.996 30.55-73.118l1.4-9.336H34.437z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 18 ? (
            <svg
              width="75"
              height="85"
              viewBox="0 0 75 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1kzhkew"
            >
              <path
                d="M19.252 2.199c-2.315 6.02-5.623 11.604-17.337 12.65L.658 23.226h10.235L1.628 84.996h14.557L28.604 2.2h-9.352zM39.78 40.414l-.105.698c-6.6 1.657-11.205 7.067-12.41 15.093l-1.557 10.383c-1.819 12.127 5.62 18.409 18.502 18.409 12.88 0 22.116-6.282 23.935-18.41l1.557-10.382c1.309-8.724-1.765-13.523-8.058-15.093l.091-.611c6.68-2.181 10.514-7.154 11.613-14.483l1.243-8.288C76.057 7.958 69.895.804 56.838.804c-13.058 0-21.365 7.154-22.83 16.926l-1.244 8.288c-1.086 7.242 1.167 12.215 7.016 14.396zm18.807-11.866c-.64 4.275-2.85 7.242-6.997 7.242-3.97 0-5.554-2.967-4.913-7.242l1.295-8.637c.629-4.188 3.015-7.155 7.073-7.155 4.147 0 5.466 2.967 4.838 7.155l-1.296 8.637zM53.67 65.454c-.667 4.45-3.167 7.59-7.667 7.59-4.235 0-6.057-3.14-5.39-7.59l1.806-12.04c.68-4.537 3.432-7.591 7.667-7.591 4.5 0 6.07 3.054 5.39 7.59l-1.806 12.04z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 19 ? (
            <svg
              width="76"
              height="85"
              viewBox="0 0 76 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1kcoe9a"
            >
              <path
                d="M19.25 2.199c-2.314 6.02-5.621 11.604-17.335 12.65L.659 23.226h10.233L1.628 84.996h14.556L28.602 2.199h-9.351zM56.276 43.467h.706l-3.52 23.47c-.51 3.402-3.02 6.02-6.902 6.02-3.528 0-5.684-2.094-4.926-7.154l1.531-10.208H29.227L27.683 65.89c-1.832 12.214 4.28 19.107 17.425 19.107 12.086 0 21.213-7.329 23.254-20.94l6.36-42.401C76.815 7.696 70.262.804 57.294.804S35.45 8.22 33.514 21.132l-1.938 12.913C29.941 44.95 35.53 50.622 42.764 50.622c6.176 0 10.022-2.705 13.512-7.155zm-7.69-24.603c.524-3.49 3.475-6.107 6.827-6.107 3.793 0 5.848 2.18 5.102 7.154l-1.897 12.65c-.615 4.101-3.49 6.806-6.931 6.806-3.617 0-5.77-2.705-5.155-6.805l2.054-13.698z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
          {rank === 20 ? (
            <svg
              width="99"
              height="85"
              viewBox="0 0 99 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="css-1yb5lze"
            >
              <path
                d="M45.205 74.009h-26.82c1.989-13.262 29.988-28.18 32.998-48.248l1.073-7.154C53.96 8.573 47.143 1.68 35.409 1.68c-14.204 0-22.894 7.94-24.57 19.107L9.074 32.566h14.028l1.701-11.342c.746-4.973 3.949-7.503 7.742-7.503 3.353 0 5.712 1.92 4.913 7.242l-1.099 7.328C34.147 43.036 4.746 53.768.598 81.425l-.536 3.577h43.494l1.649-10.993zM80.453.517c-12.97 0-21.656 7.329-23.697 20.94l-6.36 42.401C48.355 77.47 54.741 84.886 67.8 84.886c13.057 0 21.844-7.416 23.886-21.027l6.36-42.402C100.086 7.846 93.51.517 80.453.517zM76.87 64.993c-.825 5.496-3.825 7.852-7.266 7.852-3.352 0-5.544-2.443-4.733-7.852l6.7-44.67c.811-5.41 3.9-7.766 7.164-7.766 3.44 0 5.646 2.356 4.835 7.765l-6.7 44.67z"
                fill="#fff"
              ></path>
            </svg>
          ) : null}
        </RankNumber>
        <Container>
          <CardPoster
            image_url={imageUrlMake(data.poster_path, "w500")}
          ></CardPoster>
        </Container>
      </Wrapper>
    </Link>
  );
}
