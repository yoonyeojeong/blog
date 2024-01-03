import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import PostList from "../components/list/PostList";

const Wrapper = styled.div`
  padding: 16px;
  width: clac(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
function MainPage(props: any) {
  const {} = props;

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

export default MainPage;
