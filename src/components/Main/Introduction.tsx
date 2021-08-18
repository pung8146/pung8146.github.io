import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage, { ProfileImageProps } from 'components/Main/ProfileImage';
import { Link } from 'gatsby';

type IntroductionProps = ProfileImageProps;

const Background = styled.div`
background-color:rgba(0,0,0,0.4);
font-family: 'Noto Sans KR', sans-serif;
width:100%;
color:#fff;
background-image:url('laptop1920.jpg');
`;

const Wrapper = styled.div`
font-family: 'Black Han Sans', sans-serif;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
width:80%;
height:400px;
margin:0 auto;

@media(max-width:768px) {
    width:100%;
    height:300px;
    padding: 0 20px;
}
`;

const SubTitle = styled.div`
font-size: 20px;
font-weight: 400;

@media(max-width:768px) {
    font-size:15px;
}
`;

const Nav = styled.div`
font-size:25px;
font-weight:700;
text-align: right;
postion: right;
@media(max-width:768px) {
    font-size:25px;
`;


const Introduction: FunctionComponent<IntroductionProps> = function({
    profileImage,
}) {
    return (
        <Background>
            <Wrapper>
                

                <div>
                    <SubTitle>Nice to Meet You,</SubTitle>
                    
                    {/* <Title>I'm Junior Frontend Developer Hoon</Title> */}
                </div>
                <ProfileImage profileImage={profileImage}/> 
                <Nav className="menu">
                    <ul>
                        <Link to="/Blog/blog/">Hello</Link>
                        <Link to="/Blog/blog/">Work</Link>
                        <Link to="/Blog/blog/">Posting</Link>
                    </ul>
                </Nav>
            </Wrapper>
        </Background>
    )
}

export default Introduction;