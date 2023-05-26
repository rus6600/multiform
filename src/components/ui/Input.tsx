import React from 'react';
import styled, { css } from 'styled-components';

export const Input: React.FC = () => {
  return (
    <>
      <p>Loredsadsadsad</p>
      <StyledInput />
    </>
  );
};

const StyledInput = styled('input')`
  ${({ theme }) => css`
    background-color: ${theme.colors.marineBlue};
  `}
`;
