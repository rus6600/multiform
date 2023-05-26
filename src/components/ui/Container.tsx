import React from 'react';
import styled, { css } from 'styled-components';

type ContainerProps = {
  children?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <>{children}</>;
};

const StyledContainer = styled('div')`
  ${({ theme }) => css``}
`;
