import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Movie from "./Routes/movies/Movie";
import Search from "./Routes/Search";
import Tv from "./Routes/tv/Tv";
import { createGlobalStyle, styled } from "styled-components";
import { useRecoilState } from "recoil";
import { windowWidth } from "./atoms";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TvDetail from "./Routes/tv/[id]";
import MovieDetail from "./Routes/movies/[id]";

const fontSizeTransfrom = (x: number) => {
  return `${(1 / 192) * x + 9}px`;
};
const GlobalStyle = createGlobalStyle<{ width: number }>`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;

}
body {
  line-height: 1;
  font-size: ${(props) => fontSizeTransfrom(props.width)};
  overflow-x: hidden;
  -webkit-user-select:none ;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const GlobalWrapper = styled.div`
  position: relative;
`;

function App() {
  const [width, setWidth] = useRecoilState(windowWidth);
  useEffect(() => {
    const handleSet = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSet);
    return () => window.removeEventListener("resize", handleSet);
  }, [setWidth]);
  return (
    <BrowserRouter>
      <GlobalStyle width={width} />
      <GlobalWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </GlobalWrapper>
    </BrowserRouter>
  );
}

export default App;
