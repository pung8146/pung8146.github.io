import React, {FunctionComponent} from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  color:#fff;
  background:black;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Footer: FunctionComponent = function () {

    return (
      <>
          
        <FooterWrapper>
        <ul>
            <Link to="https://github.com/pung8146"><img src="./../img/icon/git-hub.png" /></Link>
            <Link to="https://sanghoon94.tistory.com/"><img src="./../img/icon/git-hub.png" /></Link>
            <Link to="www.naver.com"><img src="./../img/icon/git-hub.png" /></Link>
            <Link to="www.naver.com"><img src="./../img/icon/git-hub.png" /></Link>
          </ul>
            <h3>Thank You for Visiting My Blog, Have a Good Day
            <br />Powerd By Gatsby / Mady Year 2021</h3>
        </FooterWrapper>
        </>
    )
}

export default Footer;