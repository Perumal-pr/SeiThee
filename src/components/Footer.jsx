import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>copyright@2024</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 8rem;
  background-color: #fc0303;
`;

export default Footer;
