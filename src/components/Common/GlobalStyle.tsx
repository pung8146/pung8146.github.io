import React,{FunctionComponent} from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    box-sizing:border-box;
    padding:10px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

`;

const GlobalStyle: FunctionComponent = function () {
    return<Global styles={defaultStyle} />;
};

export default GlobalStyle;