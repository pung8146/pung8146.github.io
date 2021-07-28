import React,{FunctionComponent} from "react";
import styled from '@emotion/styled';

// 프로필 이미지링크 차후수정
const PROFILE_IMAGE_LINK =
  'https://img.hani.co.kr/imgdb/resize/2019/0121/00501111_20190121.JPG';

const ProfileImageWrapper = styled.img`
    width:120px;
    height:120px;
    margin-bottom:30px;
    border-radius:50%;

    @media(max-width: 768px) {
      width:80px;
      height:80px;
    }
`;

const ProfileImage : FunctionComponent = function() {
    return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;

