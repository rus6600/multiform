import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonVariants } from '../../interfaces';

interface ButtonProps extends React.ComponentProps<'button'> {
  text?: string;
  onClick?: () => void;
  variant?: ButtonVariants;
}

export const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled('button')<{ variant?: ButtonVariants }>`
  ${({ theme, variant }) => css`
    max-width: fit-content;
    min-width: 180px;
    border-radius: 0.5rem;
    border: none;
    font-weight: 600;
    color: ${theme.colors.white};
    background-color: ${theme.colors.marineBlue};
    padding: 1rem 2rem;

    ${variant === 'tertiary' &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.coolGray};
      &:hover {
        color: ${theme.colors.marineBlue};
        outline: 1px solid ${theme.colors.coolGray};
      }
    `}

    ${variant === 'secondary' &&
    css`
      background-color: ${theme.colors.purplishBlue};
      color: ${theme.colors.white};
    `}

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      border-radius: 5px;
      padding: 0.5rem 1rem;
      min-width: 5rem;
    }
  `}
`;
