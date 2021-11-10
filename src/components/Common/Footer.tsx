import React, {FunctionComponent} from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 40px 0;
  font-size: 15px;
  text-align: center;
  line-height: 2;
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
            <Link to="https://github.com/pung8146"><img alt="git-hub" src="../img/git-hub.png" width="50vh" /></Link>
            <Link to="https://sanghoon94.tistory.com/"><img alt="tistory" src="../img/tistory.png" width="50vh"/></Link>
            <Link to="https://www.instagram.com/parksh_heart/"><img alt="instargram" src="../img/instagram.png" width="50vh"/></Link>
            <Link to="https://www.facebook.com/profile.php?id=100003171219923"><img alt="facebook" src="../img/facebook.png" width="50vh"/></Link>
          </ul>
            <h3>Thank You for Visiting My Blog, Have a Good Day
            <br />Powerd By Gatsby / Mady Year 2021</h3>
        </FooterWrapper>
        </>
    )
}

export default Footer;