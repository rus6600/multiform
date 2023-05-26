import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled('div')`
  width: 1440px;
  margin-inline: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
