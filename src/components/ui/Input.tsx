import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends React.ComponentProps<'input'> {
  error: boolean;
}

export const Input: React.FC<InputProps> = ({ name, onChange, type, value, placeholder, error }) => {
  return (
    <Label>
      <p>
        {name}
        {error && <span>This field is required</span>}
      </p>
      <StyledInput type={type ?? 'text'} onChange={onChange} value={value} placeholder={placeholder} error={error} />
    </Label>
  );
};

const StyledInput = styled('input')<{ error: boolean }>`
  ${({ theme, error }) => css`
    padding: 1rem;
    position: relative;
    border-radius: 5px;
    border: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.marineBlue};
    font-weight: 600;

    ${error &&
    css`
      border: 1px solid ${theme.colors.strawberryRed};

      &:after {
        position: absolute;
        right: 10px;
        left: 10px;
        top: -10px;
        font-size: 3rem;
        content: 'dsad';
        color: ${theme.colors.strawberryRed};
      }
    `}

    &:focus {
      outline: 1px solid ${theme.colors.pastelBlue};
    }

    ::placeholder {
      color: ${theme.colors.lightGray};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${theme.colors.lightGray};
    }

    ::-ms-input-placeholder {
      color: ${theme.colors.lightGray};
    }
  `}
`;

const Label = styled('label')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: ${theme.colors.marineBlue};

    & p {
      display: flex;
      justify-content: space-between;
      color: ${theme.colors.marineBlue};
      font-weight: 600;
      text-transform: capitalize;
    }

    & span {
      color: ${theme.colors.strawberryRed};
    }
  `}
`;
