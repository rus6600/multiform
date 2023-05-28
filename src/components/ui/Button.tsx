import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ComponentProps<'button'> {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled('button')`
  ${({ theme }) => css`
    max-width: fit-content;
    border-radius: 0.5rem;
    border: none;
    font-weight: 600;
    color: ${theme.colors.white};
    background-color: ${theme.colors.marineBlue};
    padding: 1rem 2rem;

    &:hover {
      cursor: pointer;
    }
  `}
`;
