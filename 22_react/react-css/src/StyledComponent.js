import React from 'react';
import styled from 'styled-components';

// CSS in JS: js 안에 css를 작성함
// styled-components,
// emotion,
// styled-jsx 등등 이 있음

const StyledContainer = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgcolor || 'blue'};

  &:hover {
    transform: translateY(-20px);
  }
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox bgcolor="red"></StyledBox>
      <StyledBox bgcolor="orange"></StyledBox>
      <StyledBox bgcolor="yellow"></StyledBox>
      <StyledBox></StyledBox>
    </StyledContainer>
  );
}
