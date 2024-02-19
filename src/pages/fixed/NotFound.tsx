import React from "react";
import Header from "../../Layout/Header";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

function NotFound() {
  const navigate = useNavigate();
  const DivStyle = styled.div`
    text-align: center;
    padding: 1%;
  `;
  return (
    <DivStyle>
      <Header />
      <div>존재하지 않는 페이지 입니다</div> <br />
      <Button variant="secondary" onClick={() => navigate(-1)}>
        뒤로가기
      </Button>
    </DivStyle>
  );
}

export default NotFound;
