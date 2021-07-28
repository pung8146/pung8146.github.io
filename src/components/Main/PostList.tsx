import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/Main/PostItem';

const POST_ITEM_DATA =  {
    title: 'Post item Title',
        date: '2021, 07, 29.',
        categories: ['Web', 'Frontend', 'Testing'],
    summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
    thumbnail:
    '<https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg>',
  link: '<https://www.google.co.kr/>',
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`;

const PostList: FunctionComponent = function () {
  return (
  <PostListWrapper>
    <PostItem {...POST_ITEM_DATA} />  
    <PostItem {...POST_ITEM_DATA} />  
    <PostItem {...POST_ITEM_DATA} />  
    <PostItem {...POST_ITEM_DATA} />  
  </PostListWrapper>
  );
};

export default PostList;