import React from 'react';
import styled, { css } from 'styled-components';
import { inputEnum } from '../../interfaces';

interface InputProps extends React.ComponentProps<'input'> {
  error: boolean;
}

export const Input: React.FC<InputProps> = ({ name, onChange, type, value, error }) => {
  const getPlaceholder = () => {
    return (
      (name === inputEnum.name && 'e.g Stephen King') ||
      (inputEnum.email && 'e.g stephenking@lorem.com') ||
      (inputEnum.number && 'e.g + 1 234 567 890')
    );
  };

  const test = () => {
    if (name === inputEnum.name) {
      return {
        pattern: 'd*',
        inputMode: 'decimal',
      };
    }
  };

  return (
    <Label>
      <p>
        {name}
        {error && <span>This field is required</span>}
      </p>
      <StyledInput
        type={type}
        onChange={onChange}
        value={value}
        placeholder={getPlaceholder()}
        error={error}
        {...test}
      />
    </Label>
  );
};

const StyledInput = styled('input')<{ error: boolean }>`
  ${({ theme, error }) => css`
    padding: 1rem;
    position: relative;
    border-radius: 10px;
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
      font-weight: 600;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${theme.colors.lightGray};
    }

    ::-ms-input-placeholder {
      color: ${theme.colors.lightGray};
    }

    @media (max-width: 600px) {
      padding: 0.5rem;
    }
  `}
`;

const Label = styled('label')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 0.5rem;
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
