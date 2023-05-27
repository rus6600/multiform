import React from 'react';
import styled from 'styled-components';

import { BasePageProps } from '../interfaces';

export const Container: React.FC<BasePageProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled('div')`
  display: flex;
  min-height: 100vh;
  width: 1440px;
  margin-inline: auto;
  place-items: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
